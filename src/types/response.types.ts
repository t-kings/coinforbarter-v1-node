export type CoinForBarterResponse<T> = {
  status: CoinForBarterStatus;
  message: string;
  data: T;
  statusCode: number;
};

export enum CoinForBarterStatus {
  Success = 'success',
  Error = 'error',
}
