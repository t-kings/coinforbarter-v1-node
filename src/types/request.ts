import { CoinForBarterStatus } from './response.types';

export type RequestResponseSchema = {
  statusCode: number;
  data: any;
  message: string;
  status: CoinForBarterStatus;
};
