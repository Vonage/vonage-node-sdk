import smsTests from './sms';
import mmsTests from './mms';
import messengerTests from './messenger';
import viberTests from './viber';
import whatsAppTests from './whatsApp';
import RCSTests from './rcs';

export default [
  {
    label: 'SMS',
    tests: smsTests,
  },
  {
    label: 'MMS',
    tests: mmsTests,
  },
  {
    label: 'Messenger',
    tests: messengerTests,
  },
  {
    label: 'Viber',
    tests: viberTests,
  },
  {
    label: 'WhatsApp',
    tests: whatsAppTests,
  },
  {
    label: 'RCS',
    tests: RCSTests,
  },
];
