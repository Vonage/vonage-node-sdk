import {
  Status,
  FraudCheckResponse,
  FraudCheckParameters,
  Insight,
  FraudCheck,
  Label,
  RiskRecommendation,
  FraudScoreResponse,
} from '../../lib/index.js';

const params = {
  type: 'phone',
  phone: '16127779311',
  insights: [Insight.SIM_SWAP, Insight.FRAUD_SCORE],
};

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
    riskRecommendation: Label.LOW,
    status},
  simSwap: {
    status: false,
  },
};

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
  }: {
    status: 'completed',
    swapped},
};

export default [
  {
    label: 'check for fraud',
    requests: [['/v2/ni', 'POST', params]],
    responses: [[200, response]],
    clientMethod: 'checkForFraud',
    parameters: [params],
    generator: false,
    expected},
];
