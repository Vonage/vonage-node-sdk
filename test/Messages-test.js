import Messages from "../lib/Messages";
import MessengerAudio from "../lib/Messages/MessengerAudio";
import MessengerFile from "../lib/Messages/MessengerFile";
import MessengerImage from "../lib/Messages/MessengerImage";
import MessengerText from "../lib/Messages/MessengerText";
import MessengerVideo from "../lib/Messages/MessengerVideo";
import MMSAudio from "../lib/Messages/MMSAudio";
import MMSImage from "../lib/Messages/MMSImage";
import MMSVcard from "../lib/Messages/MMSVcard";
import MMSVideo from "../lib/Messages/MMSVideo";
import SMS from "../lib/Messages/SMS";
import ViberImage from "../lib/Messages/ViberImage";
import ViberText from "../lib/Messages/ViberText";
import WhatsAppAudio from "../lib/Messages/WhatsAppAudio";
import WhatsAppCustom from "../lib/Messages/WhatsAppCustom";
import WhatsAppFile from "../lib/Messages/WhatsAppFile";
import WhatsAppImage from "../lib/Messages/WhatsAppImage";
import WhatsAppTemplate from "../lib/Messages/WhatsAppTemplate";
import WhatsAppText from "../lib/Messages/WhatsAppText";
import WhatsAppVideo from "../lib/Messages/WhatsAppVideo";
import { expect, sinon, TestUtils } from "./VonageTestUtils";

//
describe("Messages", function () {
  beforeEach(function () {
    this.sandbox = sinon.sandbox.create();
    this.httpClientStub = TestUtils.getHttpClient();
    this.sandbox.stub(this.httpClientStub, "request");
    this.messages = new Messages(TestUtils.getCredentials(), {
      api: this.httpClientStub,
    });
  });

  afterEach(function () {
    this.sandbox.restore();
  });

  const to = "1234567890";
  const from = "9876543210";
  const text = "This is a sample message";
  const audio_url = "https://www.example.com/audio.mp3";
  const file_url = "https://www.example.com/document.pdf";
  const image_url = "https://www.example.com/image.jpg";
  const video_url = "https://www.example.com/video.mp4";

  const wa_custom = {
    type: "template",
    template: {
      namespace: "whatsapp:hsm:technology:nexmo",
      name: "parcel_location",
      language: {
        policy: "deterministic",
        code: "en",
      },
      components: [
        {
          type: "location",
          location: {
            longitude: -122.425332,
            latitude: 37.758056,
            name: "Facebook HQ",
            address: "1 Hacker Way, Menlo Park, CA 94025",
          },
        },
        {
          type: "body",
          parameters: [
            {
              type: "text",
              text: "Value 1",
            },
            {
              type: "text",
              text: "Value 2",
            },
          ],
        },
      ],
    },
  };

  const runs = [
    new MessengerAudio(audio_url, to, from),
    new MessengerFile(file_url, to, from),
    new MessengerImage(image_url, to, from),
    new MessengerText(text, to, from),
    new MessengerVideo(video_url, to, from),
    new MMSAudio(audio_url, to, from),
    new MMSImage(image_url, to, from),
    new MMSVcard("https://www.example.com/vcard.vcf", to, from),
    new MMSVideo(video_url, to, from),
    new SMS(text, to, from),
    new ViberImage(image_url, to, from),
    new ViberText(text, to, from),
    new WhatsAppAudio(audio_url, to, from),
    new WhatsAppCustom(wa_custom, to, from),
    new WhatsAppFile(file_url, to, from),
    new WhatsAppImage(image_url, to, from),
    new WhatsAppTemplate(
      { name: "my_business:my_template", parameters: { customer: "jane" } },
      to,
      from
    ),
    new WhatsAppText(text, to, from),
    new WhatsAppVideo(video_url, to, from),
  ];

  runs.forEach((message) => {
    it("should call the correct endpoint", function () {
      return expect(this.messages)
        .method("send")
        .withParams(message)
        .to.post.to.url(Messages.PATH);
    });

    it("formats the outgoing request correctly", function (done) {
      const postMock = this.sandbox.mock(this.httpClientStub);
      postMock
        .expects("post")
        .once()
        .withArgs(Messages.PATH, message)
        .yields(null, []);

      this.messages.send(message, () => {
        console.log(arguments);
        postMock.verify();
        done();
      });
    });
  });

  it("should use JWT when possible", function (done) {
    const postMock = this.sandbox.mock(this.httpClientStub);
    let message = new SMS(text, to, from);

    postMock
      .expects("post")
      .once()
      .withExactArgs(Messages.PATH, message, sinon.match.func, true, {
        "Content-Type": "application/json",
      })
      .yields(null, []);

    let handler = new Messages(TestUtils.getApplicationCredentials(), {
      api: this.httpClientStub,
    });

    handler.send(message, () => {
      console.log(arguments);
      postMock.verify();
      done();
    });
  });
});
