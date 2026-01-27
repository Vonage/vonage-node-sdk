import {
  Status,
  IdentityInsightsResponse,
  IdentityInsightsParameters,
  IdentityInsightsType,
  NetworkType,
  Connectivity,
} from '../../lib';

const params = {
  phone_number: '14040000000',
  purpose: 'FraudPreventionAndDetection',
  insights: {
    format: {},
    original_carrier: {},
    current_carrier: {},
    sim_swap: {
      period: 240,
    },
    roaming: {},
    reachability: {},
  },
} as IdentityInsightsParameters;

const identityInsights = {
  requestId: '00000000-0000-0000-0000-000000000000',
  insights: {
    format: {
      countryCode: 'US',
      countryName: 'United States',
      countryPrefix: '1',
      offlineLocation: 'Georgia',
      timeZones: ['America/New_York'],
      numberInternational: '+14040000000',
      numberNational: '(404) 000-0000',
      isFormatValid: true,
      status: {
        code: Status.OK,
        message: 'Success',
      },
    },
    originalCarrier: {
      name: 'Orange Espana, S.A. Unipersonal',
      networkType: NetworkType.MOBILE,
      countryCode: 'ES',
      networkCode: '21403',
      status: {
        code: Status.OK,
        message: 'Success',
      },
    },
    currentCarrier: {
      name: 'Orange Espana, S.A. Unipersonal',
      networkType: NetworkType.MOBILE,
      countryCode: 'ES',
      networkCode: '21403',
      status: {
        code: Status.OK,
        message: 'Success',
      },
    },
    simSwap: {
      latestSimSwapAt: '2024-07-08T09:30:27.504Z',
      isSwapped: true,
      status: {
        code: Status.OK,
        message: 'Success',
      },
    },
    roaming: {
      latestStatusAt: '2025-10-11T08:23:23.456',
      isRoaming: true,
      countryCodes: ['ES'],
      status: {
        code: Status.OK,
        message: 'Success',
      },
    },
    reachability: {
      latestStatusAt: '2025-10-11T08:23:23.456',
      isReachable: true,
      connectivity: [Connectivity.DATA],
      status: {
        code: Status.OK,
        message: 'Success',
      },
    },
  },
} as IdentityInsightsType;

const response = {
  request_id: '00000000-0000-0000-0000-000000000000',
  insights: {
    format: {
      country_code: 'US',
      country_name: 'United States',
      country_prefix: '1',
      offline_location: 'Georgia',
      time_zones: ['America/New_York'],
      number_international: '+14040000000',
      number_national: '(404) 000-0000',
      is_format_valid: true,
      status: {
        code: Status.OK,
        message: 'Success',
      },
    },
    sim_swap: {
      latest_sim_swap_at: '2024-07-08T09:30:27.504Z',
      is_swapped: true,
      status: {
        code: Status.OK,
        message: 'Success',
      },
    },
    originalCarrier: {
      name: 'Orange Espana, S.A. Unipersonal',
      networkType: NetworkType.MOBILE,
      countryCode: 'ES',
      networkCode: '21403',
      status: {
        code: Status.OK,
        message: 'Success',
      },
    },
    currentCarrier: {
      name: 'Orange Espana, S.A. Unipersonal',
      networkType: NetworkType.MOBILE,
      countryCode: 'ES',
      networkCode: '21403',
      status: {
        code: Status.OK,
        message: 'Success',
      },
    },
    roaming: {
      latestStatusAt: '2025-10-11T08:23:23.456',
      isRoaming: true,
      countryCodes: ['ES'],
      status: {
        code: Status.OK,
        message: 'Success',
      },
    },
    reachability: {
      latestStatusAt: '2025-10-11T08:23:23.456',
      isReachable: true,
      connectivity: [Connectivity.DATA],
      status: {
        code: Status.OK,
        message: 'Success',
      },
    },
  },
} as IdentityInsightsResponse;

export default [
  {
    label: 'retrieve identity insights',
    requests: [['/identity-insights/v1/requests', 'POST', params]],
    responses: [[200, response]],
    clientMethod: 'getIdentityInsights',
    parameters: [params],
    generator: false,
    error: false,
    expected: identityInsights,
  },
];
