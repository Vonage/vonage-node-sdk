import { createHash, createHmac } from 'crypto';
import { AuthConstructor, AuthInterface, AuthOpts, AuthQueryParams, SignedHashParams, AuthSignedParams, AlgorithmTypes } from './types'

export const Auth: AuthConstructor = class Auth implements AuthInterface {

  apiKey: string
  apiSecret: string
  signature: SignedHashParams
  constructor(opts?: AuthOpts) {
    // add additional methods to find auth
    // also needs to handle private key, etc

    this.apiKey = opts?.apiKey || ''
    this.apiSecret = opts?.apiSecret || ''
    this.signature = opts?.signature || null
  }

  getQueryParams = <T>(params: T): AuthQueryParams & T => {
    return { api_key: this.apiKey, api_secret: this.apiSecret, ...params }
  }

  createSignatureHash = <T>(params: T): AuthSignedParams & T => {
    let returnParams = Object.assign({ api_key: this.apiKey }, params);

    // Add the current timestamp to the parameters list with the key 'timestamp'. 
    // This should be an integer containing the number of seconds since the epoch (UNIX time))
    returnParams['timestamp'] = Math.floor(Date.now() / 1000).toString();


    // Loop through each of the parameters, sorted by key.
    // For every value in the parameter list, replace all instances of & and = with an underscore _.
    let keys = Object.keys(returnParams);
    let stringifiedParamsforSigning = keys.sort().map((keyName) => {
      // Generate a string consisting of &akey=value  
      return `&${keyName}=${returnParams[keyName].toString().replace(/(&|=)/ig, '_')}`
    }, []).join('');

    // For hash
    // Add signature secret to the end of the string, directly after the last value. 
    // It should now look something like this: '&akey=value&bkey=value${your_signature_secret}' 
    // Now run the string through an md5 hash function 
    // convert the resulting bytes to a string of hexadecimal digits. 
    // This is your MD5 hash signature, 
    // Should be added to the HTTP parameters of your request as the 'sig' parameter.
    if (this.signature.algorithm === AlgorithmTypes.md5hash) {
      returnParams['sig'] = createHash('md5').update(stringifiedParamsforSigning + this.signature.secret).digest('hex')
    }

    // For HMAC
    // Create an HMAC generator with your desired algorithm and your signature secret as the key.
    // Now run the string through an hmac generator 
    // convert the resulting bytes to a string of hexadecimal digits. 
    // This is your HMAC signature, 
    // Should be added to the HTTP parameters of your request as the sig parameter
    if (this.signature.algorithm === AlgorithmTypes.md5hmac) {
      returnParams['sig'] = createHmac('md5', this.signature.secret).update(stringifiedParamsforSigning).digest('hex');
    }
    if (this.signature.algorithm === AlgorithmTypes.sha1hmac) {
      returnParams['sig'] = createHmac('sha1', this.signature.secret).update(stringifiedParamsforSigning).digest('hex');
    }
    if (this.signature.algorithm === AlgorithmTypes.sha256hmac) {
      returnParams['sig'] = createHmac('sha256', this.signature.secret).update(stringifiedParamsforSigning).digest('hex');
    }
    if (this.signature.algorithm === AlgorithmTypes.sha512hmac) {
      returnParams['sig'] = createHmac('sha512', this.signature.secret).update(stringifiedParamsforSigning).digest('hex');
    }



    return returnParams;
  }
}



// loop through ordered data keys here,

// keys.on('readable', () => {
//   // Only one element is going to be produced by the
//   // hash stream.
//   const data = input.read();
//   if (data)
//     hash.update(data);
//   else {
//     console.log(`${hash.digest('hex')} ${filename}`);
//   }
// });