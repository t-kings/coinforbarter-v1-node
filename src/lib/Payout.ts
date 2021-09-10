import { CoinForBarterRequest } from 'src/services';
import { CoinForBarterResponse, PayoutResponse, PayoutQuery } from 'src/types';

export class Payout {
  path = '/payouts';
  constructor(private readonly request: CoinForBarterRequest) {}

  async findAll(
    query: PayoutQuery = {},
  ): Promise<CoinForBarterResponse<PayoutResponse[]>> {
    const queryString = this.request.makeQueryString(query);
    const { status, message, statusCode, data } = await this.request.call(
      `${this.path}${queryString}`,
      'get',
      {},
      true,
    );

    return { status, message, statusCode, data };
  }

  async findOne(id: string): Promise<CoinForBarterResponse<PayoutResponse>> {
    const { status, message, statusCode, data } = await this.request.call(
      `${this.path}/${id}`,
      'get',
      {},
      true,
    );
    return {
      status,
      message,
      statusCode,
      data,
    };
  }
}
