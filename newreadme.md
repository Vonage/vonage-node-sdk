Nexmo Client Library for Node.js[![build status](https://secure.travis-ci.org/Nexmo/nexmo-node.png)](http://travis-ci.org/Nexmo/nexmo-node)
===================================


You can use this Node.js client library to add [Nexmo's API](#api-coverage) to your application. To use this, you'll 
need a Nexmo account. Sign up [for free at nexmo.com][signup]. 

 * [Installation](#installation)
 * [Configuration](#configuration)
 * [Usage](#usage)
 * [Examples](#examples)
 * [Coverage](#api-coverage)
 * [Contributing](#contributing) 


Installation
------------

To use the client library you'll need to have [created a Nexmo account][signup]. 

To install the this Node.js library using npm:

	npm install easynexmo

Alternatively you can clone this project and include lib/nexmo.js to your application


Configuration
-------------
_Use this *or* 'Usage', depending on the language norms._

To configure Nexmo Node.js in your application:

Some step 

    EXAMPLE OF THAT STEP
    
Another step

    EXAMPLE OF THAT STEP

Usage
-----
_Use this *or* 'Configuration', depending on the language norms._

To use Nexmo [LANGUAGE] in your application, create a instance of the client library using your Nexmo API credentials. 

	```js
	var nexmo = require('easynexmo');

	nexmo.initialize(KEY, SECRET, DEBUG);
	```

	KEY - API Key from Nexmo

	SECRET - API SECRET from Nexmo

	DEBUG - set this to true to debug library calls

Examples
--------
The following examples show how to:
 * [Send a message](#sending-a-message)
 * [Receive a message](#receiving-a-message)
 * [Initiate a call](#initiating-a-call)

### Sending A Message

Use [Nexmo's SMS API][doc_sms] to send an SMS message. 

    //example code showing the client sending an SMS message, and using the response


### Receiving a Message

### Initiating a Call

### [Additional Examples]


API Coverage
------------

* Account
    * [X] Balance
    * [X] Pricing
    * [ ] Settings
    * [ ] Top Up
    * [X] Numbers
        * [X] Search
        * [X] Buy
        * [X] Cancel
        * [X] Update
* Number Insight
    * [X] Basic
    * [X] Standard
    * [X] Advanced
    * [X] Webhook Notification
* Verify
    * [X] Verify
    * [X] Check
    * [X] Search
    * [X] Control
* Search
    * [X] Message
    * [X] Messages
    * [X] Rejections
* Messaging 
    * [X] Send
    * [X] Delivery Receipt
    * [ ] Inbound Messages
    * [ ] Search
        * [ ] Message
        * [ ] Messages
        * [ ] Rejections
    * US Short Codes
        * [X] Two-Factor Authentication
        * [X] Event Based Alerts
            * [X] Sending Alerts
            * [X] Campaign Subscription Management
* Voice
    * [X] Outbound Calls
    * [X] Inbound Call
    * [X] Text-To-Speech Call
    * [X] Text-To-Speech Prompt

Contributing
------------

    "nexmo",
    "pvela",
    "leggetter",
    "akuzi",
    "bpilot",
    "justinfreitag",
    "ecwyne",
    "https://github.com/backhand"

License
-------

This library is released under the [MIT License][license]

[create_account]: https://docs.nexmo.com/tools/dashboard#setting-up-your-nexmo-account
[signup]: https://dashboard.nexmo.com/sign-up?utm_source=DEV_REL&utm_medium=github&utm_campaign=[LANGUAGE]-client-library
[doc_sms]: https://docs.nexmo.com/api-ref/sms-api?utm_source=DEV_REL&utm_medium=github&utm_campaign=[LANGUAGE]-client-library
[license]: LICENSE.txt