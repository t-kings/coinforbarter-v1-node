import { CoinForBarterRequest } from 'src/services';
import {
  BalanceResponse,
  CoinForBarterResponse,
  CountryResponse,
} from 'src/types';
import { CurrencyQuery, CurrencyResponse } from 'src/types/misc.type';

export class Misc {
  path = '/customers';
  constructor(private readonly request: CoinForBarterRequest) {}

  async getCountries(): Promise<CoinForBarterResponse<CountryResponse[]>> {
    const { status, message, statusCode, data } = await this.request.call(
      '/countries',
      'get',
    );
    return { status, message, statusCode, data };
  }

  async getBalance(): Promise<CoinForBarterResponse<BalanceResponse[]>> {
    const { status, message, statusCode, data } = await this.request.call(
      '/balances',
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

  async getCurrencies(
    query: CurrencyQuery = {},
  ): Promise<CoinForBarterResponse<CurrencyResponse[]>> {
    const queryString = this.request.makeQueryString(query);
    const { status, message, statusCode, data } = await this.request.call(
      `/currencies?${queryString}`,
      'get',
    );
    return {
      status,
      message,
      statusCode,
      data,
    };
  }
}
