import { AlgorithmTypes } from '../../lib/enums/index';
import {
  MissingApiSecretError,
  InvalidApiSecretError,
  InvalidSignatureAlgorithmError,
  MissingSignatureError,
} from '../../lib/errors/index';
import { AuthParams, SignedHashParams } from '../../lib/types/index';
import {
  apiKey,
  apiSecret,
} from '../common';

export default [
  {
    label: `sign request using ${AlgorithmTypes.md5hash}`,
    method: 'createSignatureHash',
    authParameters: {
      apiKey: apiKey,
      signature: {
        secret: apiSecret,
        algorithm: AlgorithmTypes.md5hash,
      } as SignedHashParams,
    } as AuthParams,
    parameters: [],
    expected: {
      api_key: apiKey,
      timestamp: '10907902800',
      sig: 'd7f81394898d98c876e782b3c98391b8',
    },
  },
  {
    label: `sign request using ${AlgorithmTypes.md5hmac}`,
    method: 'createSignatureHash',
    authParameters: {
      apiKey: apiKey,
      signature: {
        secret: apiSecret,
        algorithm: AlgorithmTypes.md5hmac,
      } as SignedHashParams,
    } as AuthParams,
    parameters: [],
    expected: {
      api_key: apiKey,
      timestamp: '10907902800',
      sig: 'c3216bfa0866f77ff0b8cb2db6024a6e',
    },
  },
  {
    label: `sign request using ${AlgorithmTypes.sha1hmac}`,
    method: 'createSignatureHash',
    authParameters: {
      apiKey: apiKey,
      signature: {
        secret: apiSecret,
        algorithm: AlgorithmTypes.sha1hmac,
      } as SignedHashParams,
    } as AuthParams,
    parameters: [],
    expected: {
      api_key: apiKey,
      timestamp: '10907902800',
      sig: '9c3aafe2377f54394366a483eae34ce32fdadfef',
    },
  },
  {
    label: `sign request using ${AlgorithmTypes.sha256hmac}`,
    method: 'createSignatureHash',
    authParameters: {
      apiKey: apiKey,
      signature: {
        secret: apiSecret,
        algorithm: AlgorithmTypes.sha256hmac,
      } as SignedHashParams,
    } as AuthParams,
    parameters: [],
    expected: {
      api_key: apiKey,
      timestamp: '10907902800',
      sig: '19ce55eb9d54bf1a9d758f4b6b7dc6d9f86e15924edf4ddd104e2c1edcd57443',
    },
  },
  {
    label: `sign request using ${AlgorithmTypes.sha512hmac}`,
    method: 'createSignatureHash',
    authParameters: {
      apiKey: apiKey,
      signature: {
        secret: apiSecret,
        algorithm: AlgorithmTypes.sha512hmac,
      } as SignedHashParams,
    } as AuthParams,
    parameters: [],
    expected: {
      api_key: apiKey,
      timestamp: '10907902800',
      sig: `a3d390830787461570689a4b892b6f619e25da77f89dc7ec87c024f774fa7b4f5252b33189483af56c6f395ba181f90d5fb27edac31911df17abb711f86dd1b5`,
    },
  },
  {
    label: `sign without overwriting timestamp`,
    method: 'createSignatureHash',
    authParameters: {
      apiKey: apiKey,
      signature: {
        secret: apiSecret,
        algorithm: AlgorithmTypes.sha512hmac,
      } as SignedHashParams,
    } as AuthParams,
    parameters: [{
      fizz: 'buzz',
      api_key: 'not my api key',
      timestamp: '1444924800000',
    }],
    expected: {
      fizz: 'buzz',
      api_key: apiKey,
      timestamp: '1444924800000',
      sig: `c192d25e4f106187dc20b6a5b3a2ec66aa011e1d8332122cb932040c944cf495d7f72e2fdb052438d309f1401d91e445c679a6f69b9537d6bf5fdac7016f8639`,
    },
  },
  {
    label: `sign without overwriting timestamp`,
    method: 'createSignatureHash',
    authParameters: {
      apiKey: apiKey,
      signature: {
        secret: apiSecret,
        algorithm: AlgorithmTypes.sha512hmac,
      } as SignedHashParams,
    } as AuthParams,
    parameters: [{
      fizz: 'buzz',
      timestamp: '1444924800000',
    }],
    expected: {
      fizz: 'buzz',
      api_key: apiKey,
      timestamp: '1444924800000',
      sig: `c192d25e4f106187dc20b6a5b3a2ec66aa011e1d8332122cb932040c944cf495d7f72e2fdb052438d309f1401d91e445c679a6f69b9537d6bf5fdac7016f8639`,
    },
  },
  {
    label: `error with missing signature`,
    method: 'createSignatureHash',
    authParameters: {
      apiKey: apiKey,
      signature: {
        secret: apiSecret,
      },
    },
    parameters: [],
    error: new MissingSignatureError(),
  },
  {
    label: `error with secret`,
    method: 'createSignatureHash',
    authParameters: {
      apiKey: apiKey,
      signature: {
        algorithm: 'foo',
      },
    },
    parameters: [],
    error: new MissingApiSecretError(),
  },
  {
    label: `error with invalid secret`,
    method: 'createSignatureHash',
    authParameters: {
      apiKey: apiKey,
      signature: {
        secret: 1234,
        algorithm: 'foo',
      },
    },
    parameters: [],
    error: new InvalidApiSecretError(),
  },
  {
    label: `error with invalid algorithm`,
    method: 'createSignatureHash',
    authParameters: {
      apiKey: apiKey,
      signature: {
        secret: apiSecret,
        algorithm: 'foo',
      },
    },
    parameters: [],
    error: new InvalidSignatureAlgorithmError(),
  },
];

