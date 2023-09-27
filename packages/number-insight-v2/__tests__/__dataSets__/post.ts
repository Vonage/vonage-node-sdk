import {
  Status,
  FraudCheckResponse,
  FraudCheckParameters,
  Insight,
  FraudCheck,
  Label,
  RiskRecommendation,
  FraudScoreResponse,
} from '../../lib';

const params = {
  type: 'phone',
  phone: '16127779311',
  insights: [Insight.SIM_SWAP, Insight.FRAUD_SCORE],
} as FraudCheckParameters;

const fraudCheck = {
  requestId: '00000000-0000-0000-0000-000000000000',
  type: 'phone',
  phone: {
    phone: '16127779311',
    carrier: 'Google (Grand Central) - SVR',
    type: 'VOIP',
  },
  fraudScore: {
    riskScore: '20',
    riskRecommendation: RiskRecommendation.ALLOW,
    label: Label.LOW,
    status: Status.COMPLETED,
  },
  simSwap: {
    status: Status.COMPLETED,
    swapped: false,
  },
} as FraudCheck;

const response = {
  request_id: '00000000-0000-0000-0000-000000000000',
  type: 'phone',
  phone: {
    phone: '16127779311',
    carrier: 'Google (Grand Central) - SVR',
    type: 'VOIP',
  },
  fraud_score: {
    risk_score: '20',
    risk_recommendation: 'allow',
    label: 'low',
    status: 'completed',
  } as FraudScoreResponse,
  sim_swap: {
    status: 'completed',
    swapped: false,
  },
} as FraudCheckResponse;

export default [
  {
    label: 'check for fraud',
    requests: [[`/v2/ni`, 'POST', params]],
    responses: [[200, response]],
    clientMethod: 'checkForFraud',
    parameters: [params],
    generator: false,
    error: false,
    expected: fraudCheck,
  },
];
