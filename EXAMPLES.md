# Examples

## Vonage Accounts Package

### Accounts Class

Client class to interact with the Account API which enables users to manage
their Vonage API Account programmatically.

Create a standalone Account client


```ts
import { Accounts } from '@vonage/account';

const accountClient = new Accounts({
 apiKey: VONAGE_API_KEY,
 apiSecret: VONAGE_API_SECRET
});
```




Create an Account client from the Vonage client


```ts
import { Vonage } from '@vonage/server-client';

const vonage = new Vonage({
  apiKey: VONAGE_API_KEY,
  apiSecret: VONAGE_API_SECRET
});

const accountClient = vonage.account;
```


#### getBalance

Retrieves the current balance of the Vonage API account.

```ts
const balance = await accontClient.getBalance();

console.log(`The current account balance is ${balance.value} ${balance.currency}`);
console.log(`Auto-reload is ${balance.autoReload ? 'enabled' : 'disabled'}`);
```

#### topUpBalance

Tops up the account balance when auto-reload is enabled.
The top-up amount corresponds to the amount added when auto-reload was enabled.

```ts
const response = await accountClient.topUpBalance('00X123456Y7890123Z');

if (response['error-code'] === '200') {
  console.log(`The account balance has been topped up`);
} else {
  console.log(`The account balance could not be topped up`);
}
```

#### updateAccountCallbacks

Updates the default webhook URLs associated with the account for:
- Inbound SMS messages
- Delivery receipts

```ts
const callbacks = {
  moCallBackUrl: 'https://example.com/webhooks/inbound-sms',
  drCallBackUrl: 'https://example.com/webhooks/delivery-receipts',
};

const response = await accountClient.updateAccountCallbacks(callbacks);

for (const [key, value] of Object.entries(response)) {
  console.log(`New ${key}: ${value}`);
}
```

## Vonage Accounts Package

### Secrets Class

Client class to interact with the Account API to create secrets in
their Vonage API Account programmatically.

This client is only available as a standalone client. It cannot be
instantiated from the server-sdk package.

Create a standalone Secret client


```ts
import { Secrets } from '@vonage/account';

const secretClient = new Secrets({
 apiKey: VONAGE_API_KEY,
 apiSecret: VONAGE_API_SECRET
});
```


#### createSecret

Create a new API secret for a given API key.

```ts
const { id } = await secretClient.createSecret(
 'new-api-key',
 'SuperSecret123!'
);

console.log(`Created secret with ID ${id}`);
```

#### deleteSecret

Revoke (delete) an existing API secret for a given API key.

```ts
await secretClient.deleteSecret('my-api-key', 'my-secret-id');
```

#### getSecret

Retrieve the details of a specific API secret for a given API key.

```ts
const { id } = await secretClient.getSecret('my-api-key', 'my-secret-id');
console.log(`Secret with ID ${id} has been retrieved`);
```

#### listSecrets

List all the secrets associated with a particular API key.

```ts
const response = await secretClient.listSecrets('my-api-key');

for (const secret of response._embedded.secrets) {
  console.log(`Secret with ID ${secret.id} has been retrieved`);
}
```

## Vonage JWT Package

### Applications Class



#### createApplication

Creates a new application with the provided details.

Create a new application


```ts
const application = await applicationClient.createApplication({
  name: 'My Application',
  capabilities: {
    voice: {
      webhooks: {
        answerUrl: {
          address: 'https://example.com/answer',
          httpMethod: 'GET'
        },
        eventUrl: {
          address: 'https://example.com/event',
          httpMethod: 'POST'
        }
      }
    }
  }
});

console.log(application.id);
```

#### deleteApplication

Deletes an application by its unique identifier.

Delete an application


```ts
await applicationClient.deleteApplication(APPLICATION_ID);
```

#### getApplication

Retrieves an application by its unique identifier.

Retrieve an application  


```ts
const application = await applicationClient.getApplication(APPLICATION_ID);
console.log(application.name);
```

#### getApplicationPage

Retrieves a page of applications based on filter parameters.

Get a single page of applications


```ts
const applications = await applicationClient.getApplicationPage({
  page: 1,
  size: 10
});

applications.applications.forEach(application => {
  console.log(application.name);
});
```

#### listAllApplications

Retrieves all applications, iterating over paginated results.

List applications with pagination using an iterator


```ts
for await (const application of applicationClient.listAllApplications()) {
  console.log(application.name);
}
```

#### listApplications

Retrieves a list of applications with optional pagination parameters.

List a single page of applications 


```ts
const applications = await applicationClient.listApplications({});

applications.applications.forEach(application => {
  console.log(application.name);
});
```

#### updateApplication

Updates an existing application with the provided details.

Update an application  


```ts
const application = await applicationClient.updateApplication({
  id: APPLICATION_ID,
  name: 'My Application',
});
console.log(application.name);
```

## Vonage JWT Package

### MissingPrivateKeyError Class

`MissingPrivateKeyError`
 class for throwing an error when the private key
is missing. The private key must either be the string of the key or a buffer
from the key file. When you created the application, the private key would
have been downloaded then. If you lost the key, you will need to regenrate
the key.


#### tokenGenerate

Generates a JWT token.

Generate a JWT token with default claims.


```js
const privateKey = fs.readFileSync(__dirname + '/private.key');
const token = tokenGenerate(applicationId, privateKey);
```




Generate a JWT token with custom claims.


```js
const privateKey = fs.readFileSync(__dirname + '/private.key');
const token = tokenGenerate(applicationId, privateKey, {
  subject: 'my-subject',
  acl: {
   paths: {
     '/*/users/**': {},
     '/*/conversations/**': {},
     '/*/sessions/**': {},
   },
  },
});
```

#### verifySignature

Verifies a JWT token

Validate a JWT token


```js
const privateKey = fs.readFileSync('./private.key');
if (verifySignature(token, privateKey)) {
  console.log('JWT signature verified.');
} else {
  console.log('JWT signature verification failed.');
}
```

## Vonage JWT Package

### NumberInsights Class

Client for the Vonage Number Insights API.

Create a standalone Number Insight client


```ts
import { NumberInsights } from '@vonage/numberInsight';

const numberInsightClient = new NumberInsights({
 apiKey: VONAGE_API_KEY,
 apiSecret: VONAGE_API_SECRET
});
```




Create an Number Insight client from the Vonage client


```ts
import { Vonage } from '@vonage/server-client';

const vonage = new Vonage({
  apiKey: VONAGE_API_KEY,
  apiSecret: VONAGE_API_SECRET
});

const numberInsightClient = vonage.numberInsight;
```


#### advancedLookup

Perform an advanced number lookup operation.

```ts
const lookup = await numberInsightsClient.advancedLookup('15555551212');
console.log(`Ths number is ${lookup.valid_number}`);
```

#### asyncAdvancedLookup

Perform an asynchronous advanced number lookup operation.

```ts
const lookup = await numberInsightsClient.asyncAdvancedLookup(
  '15555551212',
  'https://example.com/number-insights',
);
console.log(`The request ID is ${lookup.request_id}`);
```




Lookup with the CNAME option:

```ts
const lookup = await numberInsightsClient.asyncAdvancedLookup(
  '15555551212',
  'https://example.com/number-insights',
  { cname: true },
);
console.log(`The request ID is ${lookup.request_id}`);
```

#### basicLookup

Perform a basic number lookup operation.

```ts
const lookup = await numberInsightsClient.basicLookup(
  '15555551212',
);
console.log(`The request ID is ${lookup.request_id}`);
```




Lookup with the country option:

```ts
const lookup = await numberInsightsClient.basicLookup(
  '15555551212',
  { country: 'US' },
);
console.log(`The request ID is ${lookup.request_id}`);
```

#### standardLookup

Perform a standard number lookup operation.

```ts
const lookup = await numberInsightsClient.standardLookup(
  '15555551212',
);
console.log(`The request ID is ${lookup.request_id}`);
```




Lookup with the cname option:

```ts
const lookup = await numberInsightsClient.standardLookup(
  '15555551212',
  { cname: true },
);
console.log(`The request ID is ${lookup.request_id}`);
```

## Vonage Audit Package

### Audit Class

Represents an SDK client for interacting with audit-related functionality.

This client is only available as a standalone client. It cannot be
instantiated from a Vonage client.

Create a standalone Audit client


```ts
import { Audit } from '@vonage/audit';

const auditClient = new Audit({
 apiKey: VONAGE_API_KEY,
 apiSecret: VONAGE_API_SECRET
});
```


#### getEvent

Retrieves a specific audit event by its ID.

Retrieve a specific audit event


```ts
const auditEvent = await auditClient.getEvent('event-id');
console.log(auditEvent.id);
```

#### getEvents

Retrieves a list of audit events based on specified parameters.

Retrieve a list of audit events


```ts
const auditEvents = auditClient.getEvents({
  page: 1,
  size: 10,
  dateFrom: '2021-01-01T00:00:00Z',
  dateTo: '2021-01-31T23:59:59Z',
  eventType: 'message',
  search: 'search term'
});

for await (const event of auditEvents) {
  console.log(event.id);
  console.log(event.type);
  console.log(event.created);
  console.log(event.accountId);
  console.log(event.requestId);
  console.log(event.request);
  console.log(event.response);
  console.log(event.ipAddress);
  console.log(event.country);
  console.log(event.msisdn);
}
```

## Vonage Auth Package

### Auth Class

Authentication class used for generating Authentication headers and query parameters.

This client is only available as a standalone client. It cannot be
instantiated from the server-sdk package.

Create a standard authentication object.


```ts
import { Auth } from '@vonage/auth';

const auth = new Auth({
  apiKey: VONAGE_API_KEY,
  apiSecret: VONAGE_API_SECRET,
  applicationId: VONAGE_APPLICATION_ID,
  privateKey: VONAGE_APPLICATION_PRIVATE_KEY_PATH,
});
```


#### createBasicHeader

Generates a basic authentication header.

Generate a basic authentication headers


```ts
const basicAuthHeader = await auth.createBasicHeader();
```

#### createBearerHeader

Generates a bearer authentication header.

Generate a bearer authentication headers


```ts
const bearerAuthHeader = await auth.createBearerHeader();
```

#### createSignatureHash

Generates a signature hash for authentication, merging it with
provided parameters.

Generate a signature hash


```ts
const signatureHash = await auth.createSignatureHash({
  to: '15555555555',
  from: '15555555556',
  text: 'Hello from Vonage SMS API',
  timestamp: '1516878400',
  sig: 'a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6',
});
```

#### getQueryParams

Generates query parameters for authentication, optionally merging with
provided parameters.

Generate query parameters


```ts
const queryParams = await auth.getQueryParams();
```




Generate query parameters and merge with additional Parameters


```ts
const queryParams = await auth.getQueryParams({
  to: '15555555555',
  from: '15555555556',
  text: 'Hello from Vonage SMS API'
});
```

## Vonage Conversations Package

### Conversations Class

A client for talking to the Vonage Conversation API.

Create a standalone Conversation client


```ts
import { Conversations } from '@vonage/conversation';

const conversationClient = new Conversations({
  applicationId: VONAGE_APPLICATION_ID,
  privateKey: VONAGE_APPLICATION_PRIVATE_KEY_PATH,
});
```




Create an Conversation client from the Vonage client


```ts
import { Vonage } from '@vonage/server-client';

const vonage = new Vonage({
  applicationId: VONAGE_APPLICATION_ID,
  privateKey: VONAGE_APPLICATION_PRIVATE_KEY_PATH,
});

const conversationClient = vonage.conversations
```


#### createConversation

Creates a new conversation with the provided details.

Create a new conversation


```ts
const conversation = await conversationClient.createConversation({
  name: 'My Conversation',
});

console.log(conversation.id);
```

#### createEvent

Creates a new event with the provided details.

Create a new event


```ts
const event = await eventClient.createEvent({
  name: 'My Event',
});

console.log(event.id);
```

#### createMember

Creates a new member with the provided details.

Create a new member


```ts
const member = await memberClient.createMember(
  CONVERSATION_ID,
  {
    name: 'My Member',
  },
);

console.log(member.id);
```

#### deleteConversation

Deletes an conversation by its unique identifier.

Delete an conversation


```ts
await conversationClient.deleteConversation(conversation_ID);
```

#### deleteEvent

Deletes an event by its unique identifier.

Delete an event


```ts
await eventClient.deleteEvent(conversation_ID);
```

#### getConversation

Retrieves an conversation by its unique identifier.

Retrieve an conversation


```ts
const conversation = await conversationClient.getConversation(conversation_ID);
console.log(conversation.name);
```

#### getConversationPage

Retrieves a page of conversations based on filter parameters.

Get a single page of conversations


```ts
const conversations = await conversationClient.getConversationPage({
  page: 1,
  size: 10
});

conversations.conversations.forEach(conversation => {
  console.log(conversation.name);
});
```

#### getEvent

Retrieves an event by its unique identifier.

Retrieve an event


```ts
const event = await eventClient.getEvent(CONVERSATION_ID, event_ID);
console.log(event.name);
```

#### getEventPage

Retrieves a page of events based on filter parameters.

Get a single page of events


```ts
const events = await eventClient.getEventPage({
  page: 1,
  size: 10
});

events.events.forEach(event => {
  console.log(event.name);
});
```

#### getMe

This retrieves the member associated with the sub claim on the JWT

Retrieve an member


```ts
const member = await memberClient.getMe(CONVERSATION_ID);
console.log(member.name);
```

#### getMember

Retrieves an member by its unique identifier.

Retrieve an member


```ts
const member = await memberClient.getMember(CONVERSATION_ID, MEMBER_ID);
console.log(member.name);
```

#### getMemberPage

Retrieves a page of members in a conversation based on filter parameters.

Get a single page of members


```ts
const members = await memberClient.getMemberPage(
  CONVERSATION_ID,
  {
    page: 1,
    size: 10
  }
);

members.members.forEach(member => {
  console.log(member.name);
});
```

#### getUserSessionsPage

Retrieves a page of sessions based on filter parameters.

Get a single page of sessions


```ts
const sessions = await conversationClient.getUserSessionPage(
  USER_ID,
  {
    page: 1,
    size: 10
  }
);

sessions.sessions.forEach(session => {
  console.log(session.id);
});
```

#### listAllConversations

Retrieves all conversations, iterating over paginated results.

List conversations with pagination using an iterator


```ts
for await (const conversation of conversationClient.listAllConversations()) {
  console.log(conversation.name);
}
```

#### listAllEvents

Retrieves all events, iterating over paginated results.

List events with pagination using an iterator


```ts
for await (const event of eventClient.listAllEvents()) {
  console.log(event.name);
}
```

#### listAllMembers

Retrieves all members, iterating over paginated results.

List members with pagination using an iterator


```ts
for await (const member of memberClient.listAllMembers(CONVERSATION_ID)) {
  console.log(member.name);
}
```

#### listAllUserConversations

Retrieves all conversations, for a user

List conversations with pagination using an iterator


```ts
for await (const conversation of conversationClient.listAllUserConversations(USER_ID)) {
  console.log(conversation.name);
}
```

#### listAllUserSessions

Retrieves all session, for a user

List sessions with pagination using an iterator


```ts
for await (const session of conversationClient.listAllUserSessions(USER_ID)) {
  console.log(session.id);
}
```

#### updateConversation

Updates an existing conversation with the provided details.

Update an conversation


```ts
const conversation = await conversationClient.updateConversation({
  id: conversation_ID,
  name: 'My Conversation',
});
console.log(conversation.name);
```

#### updateMember

Updates an existing member with the provided details.

Setting the state to left will result in the member leaving the conversation.

```ts
import { MemberState } from '@vonage/conversation';

const member = await memberClient.updateMember(
  CONVERSATION_ID,
  MEMBER_ID,
  {
    state: MemberState.LEFT,
    from: USER_ID,
  },
);

console.log(member.name);
```

## Vonage Media Package

### Media Class

Client class to interact with the Media API which enables users to manage
their media items programmatically.

This client is only available as a standalone client. It cannot be
instantiated from the server-sdk package.

Create a standalone Secret client


```ts
import { Media } from '@vonage/media';

const mediaClient = new Media({
 apiKey: VONAGE_API_KEY,
 apiSecret: VONAGE_API_SECRET
});
```


#### deleteMediaItem

Deletes a specific media item by its unique identifier.

Delete a media item


```ts
await mediaClient.deleteMediaItem('my-media-id');
```

#### getMediaItem

Retrieves information about a specific media item by its unique identifier.

Retrieve a media item by its ID


```ts
const media = await mediaClient.getMediaItem('my-media-id');
console.log(`Media item ${media.id} is ${media.public ? 'public' : 'private'}`);
console.log(`  - Title: ${media.title}`);
console.log(`  - Description: ${media.description}`);
```

#### getMediaPage

Retrieves a page of media items based on the specified parameters.

List the first page of media items


```ts
const resp = await mediaClient.getMediaPage();

console.log(`There are ${resp.count} media items in total`);
console.log(`Showing ${resp._embedded.media.length} media items on this page`);
```

#### listAllMediaItems

Retrieves a paginated list of media items, yielding each item sequentially.

List all media items

```ts
for await (const media of mediaClient.listAllMediaItems()) {
  console.log(`Media item ${media.id} is ${media.public ? 'public' : 'private'}`);
  console.log(`  - Title: ${media.title}`);
  console.log(`  - Description: ${media.description}`);
};
```




List all public media items

```ts
for await (const media of mediaClient.listAllMediaItems({ public: true })) {
  console.log(`Media item ${media.id} is public`);
  console.log(`  - Title: ${media.title}`);
  console.log(`  - Description: ${media.description}`);
};
```

#### updateMediaItem

Updates the information of a specific media item based on the provided data.

Update a media item


```ts
const media = await mediaClient.getMediaItem('my-media-id');
media.title = 'My new title';
media.description = 'My new description';
await mediaClient.updateMediaItem(media);
```

## Vonage Meetings Package

### Meetings Class

Client class to interact with the Meetings API to create and manage meeting rooms.

This client is only available as a standalone client. It cannot be
instantiated from the server-sdk package.

Create a standalone Meetings Client


```ts
import { Meetings } from '@vonage/meetings';

const meetingsClient = new Meetings({
  apiKey: VONAGE_API_KEY,
  apiSecret: VONAGE_API_SECRET,
  applicationId: VONAGE_APPLICATION_ID,
  privateKey: VONAGE_APPLICATION_PRIVATE_KEY_PATH
});
```


#### createRoom

Creates a new meeting room.

Create a new meeting room


```ts
const room = await meetingsClient.createRoom({
  displayName: 'My Room',
  metadata: {
    my_data: 'my_value'
  }
});
console.log(`Created room with ID ${room.id}`);
```

#### createTheme

Creates a new theme with the provided theme details.

Create a new themes


```ts
const theme = await meetingsClient.createTheme({
  themeName: 'My Theme',
  mainColor: '#C0FFEE',
  brandText: 'My Brand',
  shortCompanyUrl: 'my-brand'
});
console.log(`Created theme with ID ${theme.id}`);
```

#### deleteRecording

Deletes a recording by its ID.

Delete a recording by ID


```ts
await meetingsClient.deleteRecording('my-recording-id');
console.log(`Recording with ID ${recordingId} has been deleted`);
```

#### deleteTheme

Deletes a theme by its theme ID.

Delete a theme by ID


```ts
await meetingsClient.deleteTheme('my-theme-id');
console.log(`Theme with ID ${themeId} has been deleted`);
```

#### getDialInNumbers

Retrieves a list of dial-in numbers.

Get a list of dial-in numbers


```ts
for await (const number of meetingsClient.getDialInNumbers()) {
  console.log(`Dial-in number ${number.number} is in ${number.country}`);
}
```

#### getRecording

Retrieves a recording by its ID.

Get a recording by ID


```ts
const recording = await meetingsClient.getRecording('my-recording-id');
console.log(`Recording ${recording.id} started at ${recording.startedAt}`);
console.log(`Recording ${recording.id} ended at ${recording.endedAt}`);
```

#### getRoom

Retrieves a meeting room by its ID.

Get a meeting room by ID


```ts
const room = await meetingsClient.getRoom('my-room-id');
console.log(`Room ${room.id} has ${room.participants} participants`);
console.log(`Room ${room.id} has ${room.members} members`);
console.log(`Room ${room.id} has ${room.sessions} sessions`);
console.log(`Room ${room.id} has ${room.recordings} recordings`);
```

#### getRoomPage

Retrieves a page of meeting rooms based on the provided parameters.

Get a page of meeting rooms


```ts
const resp = await meetingsClient.getRoomPage();
console.log(`There are ${resp.totalItems} meeting rooms`);
console.log(`There are ${resp.pageSize} meeting rooms per page`);
```




Get a specific page of meeting rooms


```ts
const resp = await meetingsClient.getRoomPage({pageSize: 10, pageNumber: 2});
console.log(`There are ${resp.totalItems} meeting rooms`);
console.log(`There are ${resp.pageSize} meeting rooms per page`);
```

#### getRooms

Retrieves a list of meeting rooms until there are no more pages

Generate a list of meeting rooms


```ts

for await (const room of meetingsClient.getRooms()) {
 console.log(`Room ${room.id} has ${room.participants} participants`);
 console.log(`Room ${room.id} has ${room.sessions} sessions`);
 console.log(`Room ${room.id} has ${room.recordings} recordings`);
 console.log(`Room ${room.id} has ${room.members} members`);
 }
 ```

#### getRoomsForTheme

Retrieves a list of meeting rooms associated with a specific theme. This will
keep calling the API until there are no more pages

Get meeting rooms for a theme


```ts
for await (const room of meetingsClient.getRoomsForTheme('my-theme-id')) {
  console.log(`Room ${room.id} has ${room.participants} participants`);
  console.log(`Room ${room.id} has ${room.sessions} sessions`);
  console.log(`Room ${room.id} has ${room.recordings} recordings`);
  console.log(`Room ${room.id} has ${room.members} members`);
}
```

#### getRoomsForThemePage

Retrieves a page of meeting rooms associated with a specific theme.

Get a page of meeting rooms for a theme


```ts
const resp = await meetingsClient.getRoomsForThemePage('my-theme-id');
console.log(`There are ${resp.totalItems} meeting rooms`);
console.log(`There are ${resp.pageSize} meeting rooms per page`);
```




Get a specific page of meeting rooms for a theme


```ts
const resp = await meetingsClient.getRoomsForThemePage('my-theme-id', {pageSize: 10, pageNumber: 2});
console.log(`There are ${resp.totalItems} meeting rooms`);
console.log(`There are ${resp.pageSize} meeting rooms per page`);
```

#### getSessionRecordings

Retrieves recordings associated with a session by its ID until there are no
more recordings

Get recordings for a session


```ts
for await (const recording of meetingsClient.getSessionRecordings('my-session-id')) {
 console.log(`Recording ${recording.id} started at ${recording.startedAt}`);
 console.log(`Recording ${recording.id} ended at ${recording.endedAt}`);
}
```

#### getTheme

Retrieves a theme by its theme ID.

Get a theme by ID


```ts
const theme = await meetingsClient.getTheme('my-theme-id');
console.log(`Theme ${theme.themeName} has ID ${theme.id}`);
```

#### getThemes

Retrieves a list of themes.

Get a list of getThemes

```ts
for await (const theme of meetingsClient.getThemes()) {
  console.log(`Theme ${theme.themeName} has ID ${theme.id}`);
}
```

#### setDefaultTheme

Sets the default theme for the application.

Set the default theme


```ts
await meetingsClient.setDefaultTheme('my-theme-id');
console.log(`Default theme has been set`);
```

#### updateRoom

Updates an existing meeting room.

Update a meeting room


```ts
const room = await meetingsClient.updateRoom('my-room-id', {
  displayName: 'My Room',
  metadata: {
    my_data: 'my_value'
  }
});
console.log(`Updated room with ID ${room.id}`);
```

#### updateTheme

Updates an existing theme with the provided theme details.

Update a theme


```ts
const theme = await meetingsClient.updateTheme('my-theme-id', {
  themeName: 'My Theme',
  mainColor: '#C0FFEE',
  brandText: 'My Brand',
  shortCompanyUrl: 'my-brand'
});
console.log(`Updated theme with ID ${theme.id}`);
```

#### uploadIcon

Uploads an icon (logo) to a theme.

Upload an icon to a theme


```ts
await meetingsClient.uploadIcon('my-theme-id', LogoType.WHITE, '/path/to/white-logo.png');
console.log(`Icon has been uploaded`);
```

## Vonage Messages Package

### MMSAudio Class

Represents an audio message for the MMS channel.


#### MMSAudio

Send an MMS audio message.

```ts
import { MMSAudio } from '@vonage/messages';

const { messageUUID } = await messagesClient.send(new MMSAudio({
 to: TO_NUMBER,
 from: FROM_NUMBER,
 audio: {
   url: 'https://example.com/audio.mp3',
 },
 clientRef: 'my-personal-reference',
}));

console.log(`Message sent successfully with UUID ${messageUUID}`);
```

## Vonage Messages Package

### MMSImage Class

Represents an image message for the MMS channel.


#### MMSImage

Send an MMS image message.

```ts
import { MMSImage } from '@vonage/messages';

const { messageUUID } = await messagesClient.send(new MMSImage({
 to: TO_NUMBER,
 from: FROM_NUMBER,
 image: {
   url: 'https://example.com/image.jpg',
   caption: 'This is an example image',
 },
 clientRef: 'my-personal-reference',
}));

console.log(`Message sent successfully with UUID ${messageUUID}`);
```

## Vonage Messages Package

### MMSVcard Class

Represents a vCard message for the MMS channel.


#### MMSVcard

Send an MMS vCard message.

```ts
import { MMSVcard } from '@vonage/messages';

const { messageUUID } = await messagesClient.send(new MMSVcard({
 to: TO_NUMBER,
 from: FROM_NUMBER,
 vcard: {
   url: 'https://example.com/vcard.vcf',
   caption: 'Download my contact information',
 },
 clientRef: 'my-personal-reference',
}));

console.log(`Message sent successfully with UUID ${messageUUID}`);
```

## Vonage Messages Package

### MMSVideo Class

Represents a video message for the MMS channel.


#### MMSVideo

Send an MMS video message.

```ts
import { MMSVideo } from '@vonage/messages';

const { messageUUID } = await messagesClient.send(new MMSVideo({
 to: TO_NUMBER,
 from: FROM_NUMBER,
 video: {
   url: 'https://example.com/video.mp4',
 },
 clientRef: 'my-personal-reference',
}));

console.log(`Message sent successfully with UUID ${messageUUID}`);
```

## Vonage Messages Package

### MessengerAudio Class

Represents an audio message for the Messenger channel.


#### MessengerAudio

Sends an audio message to the Facebook Messenger channel.

```ts
import { MessengerAudio } from '@vonage/messages';

const { messageUUID } = await messagesClient.send(new MessengerAudio({
 to: TO_NUMBER,
 from: FROM_NUMBER,
 audio: {
   url: 'https://example.com/audio.mp3',
 },
 clientRef: 'my-personal-reference',
}));

console.log(`Message sent successfully with UUID ${messageUUID}`);
```

## Vonage Messages Package

### MessengerFile Class

Represents a file message for the Messenger channel.


#### MessengerFile

Sends a file message to the Facebook Messenger channel.

```ts
import { MessengerFile } from '@vonage/messages';

const { messageUUID } = await messagesClient.send(new MessengerFile({
 to: TO_NUMBER,
 from: FROM_NUMBER,
 file: {
   url: 'https://example.com/image.jpg',
   caption: 'This is an image',
 },
 clientRef: 'my-personal-reference',
}));

console.log(`Message sent successfully with UUID ${messageUUID}`);
```

## Vonage Messages Package

### MessengerImage Class

Represents an image message for the Messenger channel.

This class extends the 
`AbstractImageMessage`
 class and implements the 
`MessengerImageParams`
 interface.
It is used for sending image messages on the Messenger channel.


#### MessengerImage

Send an image message using the Facebook Messenger channel.

```ts
import { MessengerImage } from '@vonage/messages';

const { messageUUID } = await messagesClient.send(new MessengerImage({
 to: TO_NUMBER,
 from: FROM_NUMBER,
 image: {
   url: 'https://example.com/image.jpg',
   caption: 'This is an image',
 },
 clientRef: 'my-personal-reference',
}));

console.log(`Message sent successfully with UUID ${messageUUID}`);
```

## Vonage Messages Package

### MessengerText Class

Represents a text message for the Messenger channel.


#### MessengerText

Sends a text message to the Facebook Messenger channel.

```ts
import { MessengerText } from '@vonage/messages';

const { messageUUID } = await messagesClient.send(new MessengerText({
 to: TO_NUMBER,
 from: FROM_NUMBER,
 text: 'Hello world',
 clientRef: 'my-personal-reference',
}));

console.log(`Message sent successfully with UUID ${messageUUID}`);
```

## Vonage Messages Package

### MessengerVideo Class

Represents a video message for the Messenger channel.


#### MessengerVideo

Send a video message using the Facebook Messenger channel.

```ts
import { MessagengerVideo } from '@vonage/messages';

const { messageUUID } = await messagesClient.send(new MessagengerVideo({
 to: TO_NUMBER,
 from: FROM_NUMBER,
 video: {
   url: 'https://example.com/video.mp4',
   caption: 'This is a video',
 },
 clientRef: 'my-personal-reference',
}));

console.log(`Message sent successfully with UUID ${messageUUID}`);
```

## Vonage Messages Package

### RCSCustom Class

Represents a custom message for RCS.


#### RCSCustom

Sends a custom message through RCS

```ts
import { RCSCustom } from '@vonage/messages';

const { messageUUID } = await messagesClient.send(new RCSCustom({
 to: TO_NUMBER,
 from: FROM_NUMBER,
 custom: {
   foo: 'bar',
 }
 clientRef: 'my-personal-reference',
}));

console.log(`Message sent successfully with UUID ${messageUUID}`);
```

## Vonage Messages Package

### RCSFile Class

Represents a file message for the RCS channel.


#### RCSFile

Sends a file message to the RCS channel.

```ts
import { RCSFile } from '@vonage/messages';

const { messageUUID } = await messagesClient.send(new RCSFile({
 to: TO_NUMBER,
 from: FROM_NUMBER,
 file: {
   url: 'https://example.com/image.pdf',
 },
 clientRef: 'my-personal-reference',
}));

console.log(`Message sent successfully with UUID ${messageUUID}`);
```

## Vonage Messages Package

### RCSImage Class

Represents an image message for the RCS channel.


#### RCSImage

Send an RCS image message.

```ts
import { RCSImage } from '@vonage/messages';

const { messageUUID } = await messagesClient.send(new RCSImage({
 to: TO_NUMBER,
 from: FROM_NUMBER,
 image: {
   url: 'https://example.com/image.jpg',
 },
 clientRef: 'my-personal-reference',
}));

console.log(`Message sent successfully with UUID ${messageUUID}`);
```

## Vonage Messages Package

### RCSText Class

Represents a text message for the RCS channel.


#### RCSText

Sends a text message through the RCS channel.

```ts
import { RCSText } from '@vonage/messages';

const { messageUUID } = await messagesClient.send(new RCSText({
 to: TO_NUMBER,
 from: FROM_NUMBER,
 text: 'Hello world',
 clientRef: 'my-personal-reference',
}));

console.log(`Message sent successfully with UUID ${messageUUID}`);
```

## Vonage Messages Package

### RCSVideo Class

Represents an video message for the RCS channel.


#### RCSVideo

Send an RCS video message.

```ts
import { RCSVideo } from '@vonage/messages';

const { messageUUID } = await messagesClient.send(new RCSVideo({
 to: TO_NUMBER,
 from: FROM_NUMBER,
 audio: {
   url: 'https://example.com/video.mp4',
 },
 clientRef: 'my-personal-reference',
}));

console.log(`Message sent successfully with UUID ${messageUUID}`);
```

## Vonage Messages Package

### SMS Class

Send a text message using the SMS channel.


#### SMS

Send an SMS message

```ts
import { SMS } from '@vonage/messages';

const { messageUUID } = await messagesClient.send(new SMS({
 to: TO_NUMBER,
 from: FROM_NUMBER,
 text: 'Hello world',
 clientRef: 'my-personal-reference',
}));

console.log(`Message sent successfully with UUID ${messageUUID}`);
```




Send SMS with entity ID and content ID

```ts
import { SMS } from '@vonage/messages';

const { messageUUID } = await messagesClient.send(new SMS({
 to: TO_NUMBER,
 from: FROM_NUMBER,
 text: 'Hello world',
 clientRef: 'my-personal-reference',
 sms: {
   entityId: 'MyEntityID',
   contentId: 'MyContentID'
 }
}));

console.log(`Message sent successfully with UUID ${messageUUID}`);
```

## Vonage Messages Package

### ViberFile Class

Represents a file message for the Viber Service channel.


#### ViberFile

Send a file message using the Viber Service channel.

```ts
import { ViberFile } from '@vonage/messages';

const { messageUUID } = await messagesClient.send(new ViberFile({
 to: TO_NUMBER,
 from: FROM_NUMBER,
 file: {
   url: 'https://my-host.com/my-file.pdf',
 },
 viberService: {
   action: {
     url: 'https://my-host.com/my-path',
     text: 'My button text',
   },
 },
 clientRef: 'my-personal-reference',
}));

console.log(`Message sent successfully with UUID ${messageUUID}`);
```

## Vonage Messages Package

### ViberImage Class

Represents an image message for the Viber Service channel.


#### ViberImage

Send an image message using the Viber Service channel.

```ts
import { ViberImage } from '@vonage/messages';

const { messageUUID } = await messagesClient.send(new ViberImage({
 to: TO_NUMBER,
 from: FROM_NUMBER,
 image: {
 url: 'https://my-host.com/my-image.jpg',
 },
 viberService: {
   action: {
     url: 'https://my-host.com/my-path',
     text: 'My button text',
   },
 },
 clientRef: 'my-personal-reference',
}));

console.log(`Message sent successfully with UUID ${messageUUID}`);
```

## Vonage Messages Package

### ViberText Class

Represents a text message for the Viber Service channel.


#### ViberText

Send a text message using the Viber Service channel.

```ts
import { ViberText } from '@vonage/messages';

const { messageUUID } = await messagesClient.send(new ViberText({
 to: TO_NUMBER,
 from: FROM_NUMBER,
 text: 'Hello world',
 viberService: {
   action: {
     url: 'https://my-host.com/my-path',
     text: 'My button text',
   },  
 },
 clientRef: 'my-personal-reference',
}));

console.log(`Message sent successfully with UUID ${messageUUID}`);
```

## Vonage Messages Package

### ViberVideo Class

Represents a video message for the Viber Service channel.


#### ViberVideo

Send a video message using the Viber Service channel.

```ts
import { ViberVideo } from '@vonage/messages';

const { messageUUID } = await messagesClient.send(new ViberVideo({
 to: TO_NUMBER,
 from: FROM_NUMBER,
 text: 'Hello world',
 video: {
   url: 'https://my-host.com/my-video.mp4',
 },
 viberService: {
   action: {
     url: 'https://my-host.com/my-path',
     text: 'My button text',
   },
 },
 clientRef: 'my-personal-reference',
}));

console.log(`Message sent successfully with UUID ${messageUUID}`);
```

## Vonage Messages Package

### WhatsAppAudio Class

Represents an audio message for WhatsApp.


#### WhatsAppAudio

Sends an audio message to a WhatsApp user.

```ts
import { WhatsAppAudio } from '@vonage/messages';

const { messageUUID } = await messagesClient.send(new WhatsAppAudio({
 to: TO_NUMBER,
 from: FROM_NUMBER,
 audio: {
   url: 'https://example.com/audio.mp3',
   caption: 'This is an audio message',
 },
 clientRef: 'my-personal-reference',
}));

console.log(`Message sent successfully with UUID ${messageUUID}`);
```

## Vonage Messages Package

### WhatsAppCustom Class

Represents a custom message for WhatsApp.


#### WhatsAppCustom

Sends a custom message to a WhatsApp user.

```ts
import { WhatsAppCustom } from '@vonage/messages';

const { messageUUID } = await messagesClient.send(new WhatsAppCustom({
 to: TO_NUMBER,
 from: FROM_NUMBER,
 custom: {
   type: 'template',
   template: {
     namespace: 'your-namespace',
     name: 'your-template-name',
   },
 }
 clientRef: 'my-personal-reference',
}));

console.log(`Message sent successfully with UUID ${messageUUID}`);
```

## Vonage Messages Package

### WhatsAppFile Class

Represents a file message for WhatsApp.


#### WhatsAppFile

Send a WhatsApp file message.

```ts
import { WhatsAppFile } from '@vonage/messages';

const { messageUUID } = await messagesClient.send(new WhatsAppFile({
 to: TO_NUMBER,
 from: FROM_NUMBER,
 file: {
   url: 'https://example.com/image.jpg',
 },
 clientRef: 'my-personal-reference',
}));

console.log(`Message sent successfully with UUID ${messageUUID}`);
```

## Vonage Messages Package

### WhatsAppImage Class

Represents an image message for WhatsApp.


#### WhatsAppImage

Sends an image message to a WhatsApp user.

```ts
import { WhatsAppImage } from '@vonage/messages';

const { messageUUID } = await messagesClient.send(new WhatsAppImage({
 to: TO_NUMBER,
 from: FROM_NUMBER,
 image: {
   url: 'https://example.com/image.jpg',
   caption: 'This is an image message',
 },
 clientRef: 'my-personal-reference',
}));

console.log(`Message sent successfully with UUID ${messageUUID}`);
```

## Vonage Messages Package

### WhatsAppSticker Class

Represents a sticker message for WhatsApp.


#### WhatsAppSticker

Send a sticker message to a WhatsApp user.

Send a sticker message with a sticker ID:

```ts
import { WhatsAppSticker } from '@vonage/messages';

const { messageUUID } = await messagesClient.send(new WhatsAppSticker({
 to: TO_NUMBER,
 from: FROM_NUMBER,
 sticker: {
   id: '0-0',
 },
 clientRef: 'my-personal-reference',
}));

console.log(`Message sent successfully with UUID ${messageUUID}`);
```




Send a sticker message with a sticker URL:

```ts
import { WhatsAppSticker } from '@vonage/messages';

const { messageUUID } = await messagesClient.send(new WhatsAppSticker({
 to: TO_NUMBER,
 from: FROM_NUMBER,
 sticker: {
   url: 'https://example.com/sticker.png',
 },
 clientRef: 'my-personal-reference',
}));

console.log(`Message sent successfully with UUID ${messageUUID}`);
```

## Vonage Messages Package

### WhatsAppTemplate Class

Represents a template message for WhatsApp.


#### WhatsAppTemplate

Send a template message to a WhatsApp user.

```ts
import { WhatsAppTemplate, WhatsAppLanguageCode } from '@vonage/messages';

const { messageUUID } = await messagesClient.send(new WhatsAppTemplate({
 to: TO_NUMBER,
 from: FROM_NUMBER,
 whatsapp: {
   policy: 'deterministic',
   locale: WhatsAppLanguageCode.EN,
 },
 template: {
   name: 'your-template-name',
   parameters: [
     'foo',
     'bar',
   ],
 },
 clientRef: 'my-personal-reference',
}));

console.log(`Message sent successfully with UUID ${messageUUID}`);
```

## Vonage Messages Package

### WhatsAppText Class

Represents a text message for WhatsApp.


#### WhatsAppText

Send a WhatsApp text message.

```ts
import { WhatsAppText } from '@vonage/messages';

const { messageUUID } = await messagesClient.send(new WhatsAppText({
 to: TO_NUMBER,
 from: FROM_NUMBER,
 text: 'Hello world',
 clientRef: 'my-personal-reference',
}));

console.log(`Message sent successfully with UUID ${messageUUID}`);
```

## Vonage Messages Package

### WhatsAppVideo Class

Represents a video message for WhatsApp.


#### WhatsAppVideo

Sends a video message to a WhatsApp user.

```ts
import { WhatsAppVideo } from '@vonage/messages';

const { messageUUID } = await messagesClient.send(new WhatsAppVideo({
 to: TO_NUMBER,
 from: FROM_NUMBER,
 video: {
   url: 'https://example.com/video.mp4',
   caption: 'This is a video message',
 },
 clientRef: 'my-personal-reference',
}));

console.log(`Message sent successfully with UUID ${messageUUID}`);
```

## Vonage Number Insights V2 Package

### NumberInsightV2 Class

Number Insight v2 is designed to give fraud scores for Application Integrations.
This class represents the client for making fraud check requests.


#### checkForFraud

Make a fraud check request with the provided parameters.

Check for fraud on a phone number.

```ts
import { Insight } from '@vonage/number-insight-v2';
const score = await client.numberInsightV2.checkForFraud({
  type: 'phone',
  number: '447700900000',
  insights: [
    Insight.FRAUD_SCORE,
  ],
});
console.log(`Fraud score: ${score.riskScore}`);
```




Check for SIM swap on a phone number.

```ts
import { Insight } from '@vonage/number-insight-v2';
const score = await client.numberInsightV2.checkForFraud({
  type: 'phone',
  number: '447700900000',
  insights: [
    Insight.SIM_SWAP,
  ],
});
console.log(`SIM swap detected: ${score.simSwap ? 'Yes' : 'No'}`);
```




Check both fraud score and SIM swap on a phone number.

```ts
import { Insight } from '@vonage/number-insight-v2';
const score = await client.numberInsightV2.checkForFraud({
  type: 'phone',
  number: '447700900000',
  insights: [
    Insight.SIM_SWAP,
    Insight.FRAUD_SCORE,
  ],
});
console.log(`SIM swap detected: ${score.simSwap ? 'Yes' : 'No'}`);
console.log(`Fraud score: ${score.riskScore}`);
```

## Vonage Numbers Package

### Numbers Class

Client for buying, canceling, and searching for phone numbers.

Create a standalone Numbers client


```ts
import { Numbers } from '@vonage/numbers';

const numbersClient = new Numbers({
 apiKey: VONAGE_API_KEY,
 apiSecret: VONAGE_API_SECRET
});
```




Create an Numbers client from the Vonage client


```ts
import { Vonage } from '@vonage/server-client';

const vonage = new Vonage({
  apiKey: VONAGE_API_KEY,
  apiSecret: VONAGE_API_SECRET
});

const numbersClient = vonage.numbers;
```


#### buyNumber

Buy a phone number.

Buy a phone number

```ts
import { Country } from '@vonage/numbers';
const resp = await numbersClient.buyNumber({
  country: Country.US,
  msisdn: '15555555555'
});

if (resp.errorCode) {
  console.log(`Error: ${resp.errorCodeLabel}`);
} else {
  console.log('Number bought successfully');
}
```

#### cancelNumber

Cancel a phone number.

Cancel a phone number


```ts

const resp = await numbersClient.cancelNumber({
 msisdn: '15555555555'
});

if (resp.errorCode) {
  console.log(`Error: ${resp.errorCodeLabel}`);
} else {
  console.log('Number cancled successfully');
}
```

#### getAvailableNumbers

Retrieves a list of available phone numbers based on the provided filter criteria.

Search for available numbers that can send SMS and make voice calls

```ts
import { Country, Feature } from '@vonage/numbers';

const resp = await numbersClient.getAvailableNumbers({
  country: Country.US,
  features: [Feature.SMS, Feature.VOICE],
});

console.log(`There are ${resp.count} numbers available`);

for (const number of resp.numbers) {
  console.log(number.msisdn);
  console.log(number.cost);
  console.log(number.type);
}
```

#### getOwnedNumbers

Retrieves a list of owned phone numbers based on the provided filter criteria.

Search for owned numbers

```ts
const resp = await numbersClient.getOwnedNumbers();
console.log(`There are ${resp.count} numbers owned`);
for (const number of resp.numbers) {
  console.log(number.msisdn);
  console.log(number.type);
}
```

#### updateNumber

Updates the settings of a phone number.

```ts
const resp = await numbersClient.updateNumber({
  msisdn: '15555555555',
  voiceCallbackType: 'app',
  voiceCallbackValue: 'APPLICATION_ID',
  voiceStatusCallback: 'https://example.com/webhooks/voice',
});

if (resp.errorCode) {
  console.log(`Error: ${resp.errorCodeLabel}`);
} else {
  console.log('Number bought successfully');
}
```

## Vonage Pricing Package

### Pricing Class

The Pricing API allows you to retrieve pricing information for all countries
and a specific service type, for a specific country and service type, or for
a specific prefix and service type.

Create a standalone Pricing client


```ts
import { Pricing } from '@vonage/pricing';

const pricingClient = new Pricing({
 apiKey: VONAGE_API_KEY,
 apiSecret: VONAGE_API_SECRET
});
```




Create an Pricing client from the Vonage client


```ts
import { Vonage } from '@vonage/server-client';

const vonage = new Vonage({
  apiKey: VONAGE_API_KEY,
  apiSecret: VONAGE_API_SECRET
});

const pricingClient = vonage.pricing;
```


#### listAllCountriesPricing

Retrieves pricing information for all countries and a specific service type.

```ts
import { ServiceType } from '@vonage/pricing';

const pricing = await pricingClient.listAllCountriesPricing(ServiceType.SMS);
for (const country in pricing.countries) {
 console.log(`The current price for ${country.countryName} is ${country.defaultPrice}`);
}
```

#### listCountryPricing

Retrieves pricing information for a specific country and service type.

```ts
import { ServiceType } from '@vonage/pricing';

const pricing = await pricingClient.listCountryPricing(ServiceType.SMS, 'GB');
console.log(`The current price for Great Britian is ${pricing.defaultPrice}`);
```

#### listPrefixPricing

Retrieves pricing information for a specific prefix and service type.

```ts
import { ServiceType } from '@vonage/pricing';

const pricing = await pricingClient.listPrefixPricing(ServiceType.SMS, '44');
console.log(`The current price for Great Britian is ${pricing.defaultPrice}`);
```

## Vonage SMS Package

### SMS Class

Client for sending legacy SMS messages using the Vonage API.

Create a standalone SMS client


```ts
import { AlgorithmTypes } from '@vonage/auth';
import { SMS } from '@vonage/sms';

const smsClient = new SMS({
 apiKey: VONAGE_API_KEY,
 apiSecret: VONAGE_API_SECRET
 secret: {
   secret: VONAGE_SIGNATURE_SECRET
   algorithm: AlgorithmTypes.sha512hmac
 },
});
```




Create an SMS client from the Vonage client


```ts
import { AlgorithmTypes } from '@vonage/auth';
import { Vonage } from '@vonage/server-client';

const vonage = new Vonage({
  apiKey: VONAGE_API_KEY,
  apiSecret: VONAGE_API_SECRET
  secret: {
    secret: VONAGE_SIGNATURE_SECRET
    algorithm: AlgorithmTypes.sha512hmac
  },
});

const smsClient = vonage.sms;
```


#### send

Sends an SMS message using the legacy Vonage SMS API.

```ts
const response = await smsClient.send({
  to: TO_NUMBER,
  from: FROM_NUMBER,
  text: 'Hello from Vonage SMS API',
});
console.log(`Number of messages sent: ${response.messageCount}`);); 
```

#### verifySignature

Verifies the signature of a request using the specified algorithm and signature secret.

```ts
const params = Object.assign(request.query, request.body);
const { sig } = params;

sms.verifySignature(
  sig,
  {}, // request parameters
  VONAGE_API_SIGNATURE_SECRET, 
  AlgorithmTypes.md5hash,
) === params.sig) {
  console.log("Valid signature");
} else {
  console.log("Invalid signature");
}
```

## Vonage Verify Package

### Verify Class

The Verify class provides methods for managing and performing verification processes using the Vonage Verify API.

It allows you to initiate new verification requests, check verification codes, search for verification request
details, and perform control actions like canceling or triggering the next event for a verification process.

Create a standalone Verify client


```ts
import { Verify } from '@vonage/verify';

const verifyClient = new Verify({
 apiKey: VONAGE_API_KEY,
 apiSecret: VONAGE_API_SECRET
});
```




Create an Verify client from the Vonage client


```ts
import { Vonage } from '@vonage/server-client';

const vonage = new Vonage({
  apiKey: VONAGE_API_KEY,
  apiSecret: VONAGE_API_SECRET
});

const verifyClient = vonage.verify;
```


#### cancel

Cancels a specific verification request.

```ts
import { CheckStatus } from '@vonage/verify';

const result = await verifyClient.cancel('REQUEST_ID')

if (result.status === CheckStatus.SUCCESS) {
  console.log('Verification request canceled.');
  console.log(result.status);
} else {
  console.log('Error canceling verification request.');
  console.log(result.errorText);
}
```

#### check

Checks the verification code for a specific verification request.

```ts
import { CheckStatus } from '@vonage/verify';

const result = await verifyClient.check('REQUEST_ID', 'CODE')
if (result.status === CheckStatus.SUCCESS) {
  console.log('Verification code is valid.');
} else {
  console.log('Verification code is invalid.');
}
```

#### search

Searches for the status of a verification request by its request ID.

```ts
const result = await verifyClient.search('REQUEST_ID')
if (result.errorText) {
  console.log(`Request found with error ${result.errorText}`);
} else {
  console.log(`Request found and submitted on ${result.dateSubmitted}`);
}
```

#### sendControl

Sends a control command for a specific verification request.

Cancel a verification request

```ts
import { Command, CheckStatus } from '@vonage/verify';

const result = await verifyClient.sendControl(Command.CANCEL, 'REQUEST_ID')
if (result.status === CheckStatus.SUCCESS) {
  console.log('Verification request canceled.');
  console.log(result.status);
} else {
  console.log('Error canceling verification request.');
  console.log(result.errorText);
}
```




Trigger the next event for a verification request

```ts
import { Command, CheckStatus } from '@vonage/verify';

const result = await verifyClient.sendControl(Command.TRIGGER_NEXT_EVENT, 'REQUEST_ID')
if (result.status === CheckStatus.SUCCESS) {
  console.log('Next event triggered');
  console.log(result.status);
} else {
  console.log('Error triggering next event');
  console.log(result.errorText);
}
```

#### start

Starts a verification request.

```ts
const result = await verifyClient.start({
  number: TO_NUMBER,
  brand: BRAND_NAME
});

if (result.requestId) {
  console.log(`Request started with id ${result.requestId}`);
} else {
  console.log(`Request failed with error: ${result.errorText}`);
}
```




Start a request with PSD2 parameters

```ts
const result = await verifyClient.start({
  number: TO_NUMBER,
  payee: PAYEE,
  amount: AMOUNT,
})
if (result.requestId) {
  console.log(`Request started with id ${result.requestId}`);
} else {
  console.log(`Request failed with error: ${result.errorText}`);
}
```

#### trigger

Triggers the next verification event for a specific verification request.

```ts
import { CheckStatus } from '@vonage/verify';

const result = await verifyClient.trigger('REQUEST_ID')

if (result.status === CheckStatus.SUCCESS) {
  console.log('Verification request canceled.');
  console.log(result.status);
} else {
  console.log('Error canceling verification request.');
  console.log(result.errorText);
}
```

## Vonage Video Package

### Video Class

Video Client for managing and interacting with video-related operations in your application.
This client allows you to control sessions, streams, archives, broadcasts, and various video-related features.

Usage:
- Create and manage video sessions with customizable settings.
- Control video streams, including muting, adding, and removing streams.
- Initiate SIP calls and establish WebSockets for real-time communication.
- Enable and disable captions for improved accessibility.
- Start, stop, and manage video archives and broadcasts.
- Render experiences and access detailed information about streams and archives.
- Generate client tokens for secure session connections.
- Perform various video-related operations with ease.

The Video Client is designed to simplify video management tasks within your application.
It provides a comprehensive set of methods and options to configure and control video interactions seamlessly.

Create a standalone Video client


```ts
import { Video } from '@vonage/video';

const videoClient = new Video({
 apiKey: VONAGE_API_KEY,
 apiSecret: VONAGE_API_SECRET
});
```




Create an Video client from the Vonage client


```ts
import { Vonage } from '@vonage/server-client';

const vonage = new Vonage({
  apiKey: VONAGE_API_KEY,
  apiSecret: VONAGE_API_SECRET
});

const videoClient = vonage.video;
```


#### addArchiveStream

Adds a stream to an existing archive, allowing you to include additional streams in the archive recording.

```ts
await videoClient.addArchiveStream(ARCHIVE_ID, STREAM_ID);
```

#### addStreamToBroadcast

Adds a stream to an existing broadcast, allowing you to include additional streams in the live broadcast.

```ts
await videoClient.addStreamToBroadcast(BROADCAST_ID, STREAM_ID);
```

#### connectToWebsocket

Connects to a WebSocket for a specified session using the provided client token and WebSocket configuration.

```ts
const result = await videoClient.connectToWebsocket(
  SESSION_ID,
  CLIENT_TOKEN,
  {
    uri: 'wss://example.com',
  },
)

console.log(result.id);
```

#### createSession

Creates a new session with the specified options.

Create a session with default options

```ts
const session = await videoClient.createSession({});
console.log(session.sessionId);
```




Create a session with archive mode set to manual

```ts
import { ArchiveMode } from '@vonage/video';

const session = await videoClient.createSession({
  archiveMode: ArchiveMode.MANUAL,
});
console.log(session.sessionId);
```




Create a session with location set to a specific region

```ts
const session = await videoClient.createSession({
  location: 'eu',
});
console.log(session.sessionId);
```




Create a session with media mode set to routed

```ts
import { MediaMode } from '@vonage/video';

const session = await videoClient.createSession({
  mediaMode: MediaMode.ROUTED,
});
console.log(session.sessionId);
```

#### deleteArchive

Deletes an archive with the specified archive ID.

```ts
await videoClient.deleteArchive(ARCHIVE_ID);
```

#### disableCaptions

Disables captions for a specific caption ID.

```ts
await videoClient.disableCaptions(CAPTION_ID);
```

#### disableForceMute

Disables force mute for a session, allowing audio for all streams.

```ts
const forceMute = await videoClient.disableForceMute(SESSION_ID);
console.log(forceMute.status);
```

#### disconnectClient

Disconnects a client from a session.

```ts
await videoClient.disconnectClient(SESSION_ID, CONNECTION_ID);
```

#### disconnectWebsocket

Disconnects a WebSocket connection associated with a call or session.

```ts
await videoClient.disconnectWebsocket(CALL_ID);
```

#### enableCaptions

Enables captions for a session using the specified client token and caption options.

```ts
const result = await videoClient.enableCaptions(SESSION_ID, CLIENT_TOKEN);
console.log(result.captionId);
```

#### forceMuteAll

Forces muting of all streams in a session, except those specified in the 

```ts
const forceMute = await videoClient.forceMuteAll(SESSION_ID);
console.log(forceMute.status);
```

#### generateClientToken

Generates a client token for connecting to a session with the specified options.

```ts
const token = videoClient.generateClientToken(SESSION_ID);
console.log(`The token is ${token}`);
```

#### getArchive

Retrieves information about a specific archive by its ID.

```ts
const archive = await videoClient.getArchive(ARCHIVE_ID);
console.log(archive.createdAt);
```

#### getCaptionStatus

Retrieves the status of a caption by its ID.

```ts
const captionStatus = await videoClient.getCaptionStatus(CAPTION_ID);
console.log(captionStatus.status);
```

#### getExperienceComposerRender

Retrieves the details of an Experience Composer render by its ID.

```ts
const render = await videoClient.getExperienceComposerRender(RENDER_ID);
console.log(render.createdAt);
```

#### getStreamInfo

Retrieves information about one or more streams in a session.

```ts
const streamInfo = await videoClient.getStreamInfo(SESSION_ID);

if (streamInfo.items) {
  streamInfo.items.forEach((item) => {
    console.log(item.id);
  });
} else {
 console.log(streamInfo.id);
}
```

#### intiateSIPCall

Initiates a SIP call within a session.

Start a SIP call with default options

```ts
const sipCall = await videoClient.intiateSIPCall(SESSION_ID);
console.log(sipCall.id);
```




Start a SIP call with custom options

```ts
const sipCall = await videoClient.intiateSIPCall(
  SESSION_ID,
  {
    uri: 'sip://example.com',
  }
);
console.log(sipCall.id);
```

#### listExperienceComposerRenders

Lists Experience Composer renders based on the specified filter criteria.

```ts
const renders = await videoClient.listExperienceComposerRenders();
for (const render of renders.items) {
  console.log(render.id);
}
```

#### muteAllStreams

Mutes or unmutes all streams in a session, optionally excluding specific stream IDs from muting.

```ts
const forceMute = await videoClient.muteAll(SESSION_ID);
console.log(forceMute.status);
```

#### muteStream

Mutes or unmutes a specific stream in a session.

```ts
const forceMute = await videoClient.muteStream(SESSION_ID, STREAM_ID);
console.log(forceMute.status);
```

#### playDTMF

Sends DTMF (Dual-Tone Multi-Frequency) tones to a specific session or connection.

```ts
await videoClient.playDTMF(SESSION_ID, '1234');
```

#### removeArchiveStream

Removes a stream from an archive.

```ts
await videoClient.removeArchiveStream(ARCHIVE_ID, STREAM_ID);
```

#### removeStreamFromBroadcast

Removes a stream from a broadcast.

```ts
await videoClient.removeStreamFromBroadcast(BROADCAST_ID, STREAM_ID);
```

#### searchArchives

Searches for archives based on the specified filter criteria.

```ts
const archives = await videoClient.searchArchives();
for (const archive of archives.items) {
  console.log(archive.id);
}
```




Search for archives for a session

```ts
const archives = await videoClient.searchArchives({
  sessionId: SESSION_ID,
});

for (const archive of archives.items) {
  console.log(archive.id);
}
```

#### searchBroadcasts

Searches for broadcasts based on the specified filter criteria.

```ts
const broadcasts = await videoClient.searchBroadcasts();
for (const broadcast of broadcasts.items) {
   console.log(broadcast.id);
}
```




Get braodcasts for a session

```ts
const broadcasts = await videoClient.searchBroadcasts({
  sessionId: SESSION_ID,
})
for (const broadcast of broadcasts.items) {
  console.log(broadcast.id);
 }
 ```

#### sendSignal

Sends a signal to a session or a specific connection within a session.

```ts
await videoClient.sendSignal(
  {
    type: 'text',
    data: 'Hello world!',
  },
  SESSION_ID,
);
```
```

#### setStreamClassLists

Sets the stream class lists for one or more streams within a session.

```ts
await videoClient.setStreamClassLists(
  SESSION_ID,
  [
    {
      id: STREAM_ID,
      layoutClassList: ['full'],
    }
  ]
)
```

#### startArchive

Starts an archive for a given session with optional configuration.

```ts
const archive = await videoClient.startArchive(SESSION_ID);
console.log(archive.id);
```

#### startBroadcast

Starts a broadcast for a given session with the specified configuration.

```ts
const broadcast = await videoClient.startBroadcast(
  SESSION_ID,
  {
    outputs: {
      hls: {
        lowLatency: true,
      }
      rtmp: [{
        serverUrl: 'rtmp://example.com',
      }],
    }
  }
);
```

#### startExperienceComposerRender

Starts rendering an experience composer with the provided configuration.

```ts

const render = await videoClient.startExperienceComposerRender(
  SESSION_ID,
  token,
)

console.log(render.id);
```

#### stopArchive

Stops an archive with the given archive ID.

```ts
const archive = await videoClient.stopArchive(ARCHIVE_ID);

console.log(archive.status);
```

#### stopBroadcast

Stops a broadcast with the given broadcast ID.

```ts
const broadcast = await videoClient.stopBroadcast(BROADCAST_ID);
console.log(broadcast.status);
```

#### stopExperienceComposerRender

Stops an Experience Composer render with the given render ID.

```ts
await videoClient.stopExperienceComposerRender(RENDER_ID);
```

#### updateArchiveLayout

Updates the layout of an archive with the given archive ID.

```ts
await videoClient.updateArchiveLayout(
```

#### updateBroadcast

Updates the configuration of a broadcast with the given broadcast ID.

```ts

await videoClient.updateBroadcast({
  broadcastId: BROADCAST_ID,
  hasAudio: true,
})
```

## Vonage Voice Package

### Voice Class

A Clint to make calls to the Vonage Voice API.

Vonage API's will return information using 
`snake_case`
. This represents the
pure response before the client will transform the keys into 
`camelCase`
.

Create a standalone Voice client


```ts
import { Voice } from '@vonage/voice';

const voiceClient = new Voice({
 apiKey: VONAGE_API_KEY,
 apiSecret: VONAGE_API_SECRET
});
```




Create an Voice client from the Vonage client


```ts
import { Vonage } from '@vonage/server-client';

const vonage = new Vonage({
  apiKey: VONAGE_API_KEY,
  apiSecret: VONAGE_API_SECRET
});

const voiceClient = vonage.voice;
```


#### callAction

Send a call action to a specific call identified by its UUID.

```ts
await voiceClient.callAction(CALL_UUID, 'mute');
```

#### createOutboundCall

Initiates an outbound call with the specified configuration.

Create a call with answer NCCO

```ts
const call = await voiceClient.createOutboundCall({
  to: [{
    type: 'phone',
    number: TO_NUMBER
  }],
  asnwer_url: ['https://example.com/answer'],
});

console.log(call.uuid);

```




Create a call with answer URL

```ts
const call = await voiceClient.createOutboundCall({
  to: [{
    type: 'phone',
    number: TO_NUMBER
  }],
  ncco: [{
    action: 'talk',
    text: 'This is a text to speech call from Vonage'
  }]
});

console.log(call.uuid);
```

#### downloadRecording

Download the recording of a call to the specified file path.

```ts
await voiceClient.downloadRecording(RECORDING_UUID, './recording.mp3');
```

#### downloadTranscription

Download the transcription of a call to the specified file path.

```ts
await voiceClient.downloadTranscription(TRANSCRIPTION_UUID, './transcription.txt');
```

#### earmuffCall

Places a call on earmuff, muting the audio for all participants except the user.

```ts
await voiceClient.earmuffCall(CALL_UUID);
```

#### getAllCalls

Retrieves details of all calls using pagination.

```ts
for await (const call of voiceClient.getAllCalls()) {
  console.log(call.startTime);
}
```

#### getCall

Retrieves detailed information about a specific call using its UUID.

```ts
const call = await voiceClient.getCall('CALL_UUID');
console.log(call.startTime);
```

#### getCallsPage

Retrieves a page of call details based on the specified parameters.

```ts
const page = await voiceClient.getCallsPage();
for (const call of page._embedded.calls) {
  console.log(call.startTime);
}
```




Get the next page of call details

```ts
const page = await voiceClient.getCallsPage({
  pageSize: 4,
  recordIndex: 10,
});
for (const call of page._embedded.calls) {
  console.log(call.startTime);
}
```




Get all started calls

```ts
import { CallStatus } from '@vonage/voice';

const page = await voiceClient.getCallsPage({
  pageSize: 4,
  recordIndex: 10,
  status: CallStatus.STARTED,
});
for (const call of page._embedded.calls) {
  console.log(call.startTime);
}
```

#### hangupCall

Hang up an active call.

```ts
await voiceClient.hangupCall(CALL_UUID);
```

#### muteCall

Mute an active call.

```ts
await voiceClient.muteCall(CALL_UUID);
```

#### playDTMF

Plays DTMF (Dual-Tone Multi-Frequency) tones on an active call.

```ts
const result = await voiceClient.playDTMF('CALL_UUID', '1234');
console.log(result.status);
```

#### playTTS

Plays text-to-speech (TTS) audio on an active call.

```ts
const result = await voiceClient.playTTS(
  CALL_UUID,
  {
    text: 'This is a text to speech call from Vonage',
  },
);

console.log(result.status);
```

#### search

Searches for call details based on the provided filter.

```ts
const page = await voiceClient.search({
  pageSize: 4,
});

for (const call of page._embedded.calls) {
  console.log(call.startTime);
  console.log(call.status);
  console.log(call.direction);
  console.log(call.duration);
};
```

#### stopStreamAudio

Stop streaming audio to an active call.

```ts
const result = await voiceClient.stopStreamAudio(CALL_UUID);
console.log(result.message);
```

#### stopTTS

Stops any ongoing text-to-speech (TTS) audio playback on an active call.

```ts
const result = await voiceClient.stopTTS(CALL_UUID);
console.log(result.status);
```

#### streamAudio

Stream audio to an active call, allowing you to play audio files or live audio streams.

```ts
const result = await voiceClient.streamAudio(CALL_UUID, 'https://example.com/audio.mp3');
console.log(result.message);
```

#### transferCallWithNCCO

Transfer an active call to a new destination using a Nexmo Call Control Object (NCCO).

```ts
await voiceClient.transferCallWithNCCO(
  CALL_UUID,
  [{
    action: 'talk',
    text: 'You will now be transferred to a new destination''
  }],
)
```

#### transferCallWithURL

Transfer an active call to a new destination using a URL.

```ts
await voiceClient.transferCallWithURL(
  CALL_UUID,
  'https://example.com/transfer',
);
```

#### unearmuffCall

Remove an earmuff from a call, allowing all participants to hear each other again.

```ts
await voiceClient.unearmuffCall(CALL_UUID);
```

#### unmuteCall

Unmute a muted call, allowing audio to be transmitted again.

```ts
await voiceClient.unmuteCall(CALL_UUID);
```

