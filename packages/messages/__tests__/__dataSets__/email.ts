import {
  MessageSuccess,
  EmailText,
  EmailHTML,
  EmailContent,
  EmailTextRequest,
  EmailHTMLRequest,
  EmailContentRequest,
  EmailImportance,
  EmailPriority,
  EmailSensitivity,
  EmailContentTypes,
} from '../../lib/index.js';

export default [
  {
    label: 'send text email',
    request: [
      '/v1/messages',
      'POST',
      {
        from: 'sender@example.com',
        to: 'recipient@example.com',
        channel: 'email',
        message_type: 'text',
        text: 'Hello, world!',
        email: {
          subject: 'Hello',
        },
      } as EmailTextRequest,
    ],
    response: [
      202,
      {
        message_uuid: '1d4723b0-9134-4440-8cf0-e9f39ccb1c6a',
      },
    ],
    method: 'POST',
    clientMethod: 'send',
    parameters: [
      new EmailText({
        from: 'sender@example.com',
        to: 'recipient@example.com',
        text: 'Hello, world!',
        email: {
          subject: 'Hello',
        },
      }),
    ],
    expected: {
      messageUUID: '1d4723b0-9134-4440-8cf0-e9f39ccb1c6a',
    } as MessageSuccess,
  },
  {
    label: 'send text email with all email settings',
    request: [
      '/v1/messages',
      'POST',
      {
        from: 'sender@example.com',
        to: 'recipient@example.com',
        channel: 'email',
        message_type: 'text',
        text: 'Hello, world!',
        email: {
          subject: 'Hello',
          importance: EmailImportance.HIGH,
          priority: EmailPriority.URGENT,
          sensitivity: EmailSensitivity.PERSONAL,
        },
      } as EmailTextRequest,
    ],
    response: [
      202,
      {
        message_uuid: '1d4723b0-9134-4440-8cf0-e9f39ccb1c6a',
      },
    ],
    method: 'POST',
    clientMethod: 'send',
    parameters: [
      new EmailText({
        from: 'sender@example.com',
        to: 'recipient@example.com',
        text: 'Hello, world!',
        email: {
          subject: 'Hello',
          importance: EmailImportance.HIGH,
          priority: EmailPriority.URGENT,
          sensitivity: EmailSensitivity.PERSONAL,
        },
      }),
    ],
    expected: {
      messageUUID: '1d4723b0-9134-4440-8cf0-e9f39ccb1c6a',
    } as MessageSuccess,
  },
  {
    label: 'send text email with all common params',
    request: [
      '/v1/messages',
      'POST',
      {
        from: 'sender@example.com',
        to: 'recipient@example.com',
        channel: 'email',
        message_type: 'text',
        text: 'Hello, world!',
        email: {
          subject: 'Hello',
        },
        client_ref: 'my-ref',
        webhook_url: 'https://example.com/webhook',
        webhook_version: 'v1',
      } as EmailTextRequest,
    ],
    response: [
      202,
      {
        message_uuid: '1d4723b0-9134-4440-8cf0-e9f39ccb1c6a',
      },
    ],
    method: 'POST',
    clientMethod: 'send',
    parameters: [
      new EmailText({
        from: 'sender@example.com',
        to: 'recipient@example.com',
        text: 'Hello, world!',
        email: {
          subject: 'Hello',
        },
        clientRef: 'my-ref',
        webhookUrl: 'https://example.com/webhook',
        webhookVersion: 'v1',
      }),
    ],
    expected: {
      messageUUID: '1d4723b0-9134-4440-8cf0-e9f39ccb1c6a',
    } as MessageSuccess,
  },
  {
    label: 'send HTML email',
    request: [
      '/v1/messages',
      'POST',
      {
        from: 'sender@example.com',
        to: 'recipient@example.com',
        channel: 'email',
        message_type: 'html',
        html: {
          body: '<p>Hello, world!</p>',
        },
        email: {
          subject: 'Hello HTML',
        },
      } as EmailHTMLRequest,
    ],
    response: [
      202,
      {
        message_uuid: '1d4723b0-9134-4440-8cf0-e9f39ccb1c6a',
      },
    ],
    method: 'POST',
    clientMethod: 'send',
    parameters: [
      new EmailHTML({
        from: 'sender@example.com',
        to: 'recipient@example.com',
        html: {
          body: '<p>Hello, world!</p>',
        },
        email: {
          subject: 'Hello HTML',
        },
      }),
    ],
    expected: {
      messageUUID: '1d4723b0-9134-4440-8cf0-e9f39ccb1c6a',
    } as MessageSuccess,
  },
  {
    label: 'send HTML email with all email settings',
    request: [
      '/v1/messages',
      'POST',
      {
        from: 'sender@example.com',
        to: 'recipient@example.com',
        channel: 'email',
        message_type: 'html',
        html: {
          body: '<h1>Important Update</h1>',
        },
        email: {
          subject: 'Important Update',
          importance: EmailImportance.NORMAL,
          priority: EmailPriority.NORMAL,
          sensitivity: EmailSensitivity.PRIVATE,
        },
      } as EmailHTMLRequest,
    ],
    response: [
      202,
      {
        message_uuid: '1d4723b0-9134-4440-8cf0-e9f39ccb1c6a',
      },
    ],
    method: 'POST',
    clientMethod: 'send',
    parameters: [
      new EmailHTML({
        from: 'sender@example.com',
        to: 'recipient@example.com',
        html: {
          body: '<h1>Important Update</h1>',
        },
        email: {
          subject: 'Important Update',
          importance: EmailImportance.NORMAL,
          priority: EmailPriority.NORMAL,
          sensitivity: EmailSensitivity.PRIVATE,
        },
      }),
    ],
    expected: {
      messageUUID: '1d4723b0-9134-4440-8cf0-e9f39ccb1c6a',
    } as MessageSuccess,
  },
  {
    label: 'send content email with text content',
    request: [
      '/v1/messages',
      'POST',
      {
        from: 'sender@example.com',
        to: 'recipient@example.com',
        channel: 'email',
        message_type: 'content',
        content: [
          { type: EmailContentTypes.TEXT, text: 'Hello, world!' },
        ],
        email: {
          subject: 'Content Email',
        },
      } as EmailContentRequest,
    ],
    response: [
      202,
      {
        message_uuid: '1d4723b0-9134-4440-8cf0-e9f39ccb1c6a',
      },
    ],
    method: 'POST',
    clientMethod: 'send',
    parameters: [
      new EmailContent({
        from: 'sender@example.com',
        to: 'recipient@example.com',
        content: [
          { type: EmailContentTypes.TEXT, text: 'Hello, world!' },
        ],
        email: {
          subject: 'Content Email',
        },
      }),
    ],
    expected: {
      messageUUID: '1d4723b0-9134-4440-8cf0-e9f39ccb1c6a',
    } as MessageSuccess,
  },
  {
    label: 'send content email with HTML content',
    request: [
      '/v1/messages',
      'POST',
      {
        from: 'sender@example.com',
        to: 'recipient@example.com',
        channel: 'email',
        message_type: 'content',
        content: [
          { type: EmailContentTypes.HTML, body: '<p>Hello, world!</p>' },
        ],
        email: {
          subject: 'HTML Content Email',
        },
      } as EmailContentRequest,
    ],
    response: [
      202,
      {
        message_uuid: '1d4723b0-9134-4440-8cf0-e9f39ccb1c6a',
      },
    ],
    method: 'POST',
    clientMethod: 'send',
    parameters: [
      new EmailContent({
        from: 'sender@example.com',
        to: 'recipient@example.com',
        content: [
          { type: EmailContentTypes.HTML, body: '<p>Hello, world!</p>' },
        ],
        email: {
          subject: 'HTML Content Email',
        },
      }),
    ],
    expected: {
      messageUUID: '1d4723b0-9134-4440-8cf0-e9f39ccb1c6a',
    } as MessageSuccess,
  },
  {
    label: 'send content email with mixed text and HTML content',
    request: [
      '/v1/messages',
      'POST',
      {
        from: 'sender@example.com',
        to: 'recipient@example.com',
        channel: 'email',
        message_type: 'content',
        content: [
          { type: EmailContentTypes.TEXT, text: 'Plain text fallback' },
          { type: EmailContentTypes.HTML, body: '<p>Rich HTML content</p>' },
        ],
        email: {
          subject: 'Mixed Content Email',
          importance: EmailImportance.LOW,
          sensitivity: EmailSensitivity.COMPANY_CONFIDENTIAL,
        },
      } as EmailContentRequest,
    ],
    response: [
      202,
      {
        message_uuid: '1d4723b0-9134-4440-8cf0-e9f39ccb1c6a',
      },
    ],
    method: 'POST',
    clientMethod: 'send',
    parameters: [
      new EmailContent({
        from: 'sender@example.com',
        to: 'recipient@example.com',
        content: [
          { type: EmailContentTypes.TEXT, text: 'Plain text fallback' },
          { type: EmailContentTypes.HTML, body: '<p>Rich HTML content</p>' },
        ],
        email: {
          subject: 'Mixed Content Email',
          importance: EmailImportance.LOW,
          sensitivity: EmailSensitivity.COMPANY_CONFIDENTIAL,
        },
      }),
    ],
    expected: {
      messageUUID: '1d4723b0-9134-4440-8cf0-e9f39ccb1c6a',
    } as MessageSuccess,
  },
  {
    label: 'send text email with display name sender',
    request: [
      '/v1/messages',
      'POST',
      {
        from: 'Vonage <no-reply@vonage.com>',
        to: 'recipient@example.com',
        channel: 'email',
        message_type: 'text',
        text: 'Hello from Vonage!',
        email: {
          subject: 'Greetings',
        },
      } as EmailTextRequest,
    ],
    response: [
      202,
      {
        message_uuid: '1d4723b0-9134-4440-8cf0-e9f39ccb1c6a',
      },
    ],
    method: 'POST',
    clientMethod: 'send',
    parameters: [
      new EmailText({
        from: 'Vonage <no-reply@vonage.com>',
        to: 'recipient@example.com',
        text: 'Hello from Vonage!',
        email: {
          subject: 'Greetings',
        },
      }),
    ],
    expected: {
      messageUUID: '1d4723b0-9134-4440-8cf0-e9f39ccb1c6a',
    } as MessageSuccess,
  },
];
