import smsTests from './sms';
import mmsTests from './mms';
import messengerTests from './messenger';
import viberTests from './viber';
import whatsAppTests from './whatsApp';

export default [
  {
    label: 'SMS Messages',
    tests: smsTests,
  },
  {
    label: 'MMS Messages',
    tests: mmsTests,
  },
  {
    label: 'Messenger Messages',
    tests: messengerTests,
  },
  {
    label: 'Viber Messages',
    tests: viberTests,
  },
  {
    label: 'WhatsApp Messages',
    tests: whatsAppTests,
  },
];
