import chai, { expect } from "chai";
import sinon from "sinon";
import sinonChai from "sinon-chai";
import ConsoleLogger from "../lib/ConsoleLogger";

chai.use(sinonChai);

describe("ConsoleLogger", () => {
  describe(".log", () => {
    it("should log `info` using `console.log`", () => {
      const fakeConsole = {
        log: () => {}
      };
      const stub = sinon.stub(fakeConsole);

      const logger = new ConsoleLogger(stub);
      logger.info("something");

      expect(stub.log).to.have.been.calledWith("info:", "something");
    });

    it("should log `error` using `console.error`", () => {
      const fakeConsole = {
        error: () => {}
      };
      const stub = sinon.stub(fakeConsole);

      const logger = new ConsoleLogger(stub);
      logger.error("an error");

      expect(stub.error).to.have.been.calledWith("error:", "an error");
    });

    it("should log `warn` using `console.log`", () => {
      const fakeConsole = {
        log: () => {}
      };
      const stub = sinon.stub(fakeConsole);

      const logger = new ConsoleLogger(stub);
      logger.warn("a warning");

      expect(stub.log).to.have.been.calledWith("warn:", "a warning");
    });

    it("should log levels using `console.log`", () => {
      const fakeConsole = {
        log: () => {}
      };
      const stub = sinon.stub(fakeConsole);

      const logger = new ConsoleLogger(stub);
      logger.log("silly", "something silly");

      expect(stub.log).to.have.been.calledWith("silly:", "something silly");
    });
  });
});
