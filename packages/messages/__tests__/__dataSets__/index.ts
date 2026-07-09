import smsTests from './sms.js';
import mmsTests from './mms.js';
import messengerTests from './messenger.js';
import viberTests from './viber.js';
import whatsAppTests from './whatsApp.js';
import RCSTests from './rcs.js';
import emailTests from './email.js';

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
  {
    label: 'Email',
    tests: emailTests,
  },
];
