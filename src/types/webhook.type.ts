import { CoinForBarterStatus } from './response.types';

export type WebhookValidateResponse = {
  status: CoinForBarterStatus;
  data: any;
  type: string;
};
