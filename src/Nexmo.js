import fs from 'fs';

import Credentials from './Credentials';
import Message from './Message';
import Voice from './Voice';
import Number from './Number';
import Verify from './Verify';
import NumberInsight from './NumberInsight';
import App from './App';
import Account from './Account';
import CallsResource from './CallsResource';
import HttpClient from './HttpClient';
import NullLogger from './NullLogger';
import ConsoleLogger from './ConsoleLogger';

class Nexmo {
  /**
   * @param {Credentials} credentials - Nexmo API credentials
   * @param {string} credentials.apiKey - the Nexmo API key
   * @param {string} credentials.apiSecret - the Nexmo API secret
   * @param {Object} options Additional options
   * @param {boolean} options.debug `true` to turn on debug logging
   * @param {string} options.appendToUserAgent A value to append to the user agent.
   *                    The value will be prefixed with a `/`
   */
  constructor(credentials, options = {debug:false}) {
    this.credentials = Credentials.parse(credentials);
    this.options = options;
    
    // If no logger has been supplied but debug has been set
    // default to using the ConsoleLogger
    if(!this.options.logger && this.options.debug) {
      this.options.logger = new ConsoleLogger();
    }
    else { // Otherwise, swallow the logging
      this.options.logger = new NullLogger();
    }
    
    let userAgent = 'nexmo-node/UNKNOWN/UNKNOWN';
    try {
      var packageDetails = require(__dirname + '/../package.json');
      userAgent = `nexmo-node/${packageDetails.version}/${process.version}`;
    }
    catch(e) {
      console.warn('Could not load package details');
    }
    this.options.userAgent = userAgent;
    if(this.options.appendToUserAgent) {
      this.options.userAgent += `/${this.options.appendToUserAgent}`;
    }
    this.options.httpClient = new HttpClient(this.options)
    
    this.message = new Message(this.credentials, this.options);
    this.voice = new Voice(this.credentials, this.options);
    this.number = new Number(this.credentials, this.options);
    this.verify = new Verify(this.credentials, this.options);
    this.numberInsight = new NumberInsight(this.credentials, this.options);
    this.app = new App(this.credentials, this.options);
    this.account = new Account(this.credentials, this.options);
    this.calls = new CallsResource(this.credentials, this.options);
  }
}

export default Nexmo;
