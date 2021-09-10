import { CoinForBarterRequest } from 'src/services';
import {
  CoinForBarterResponse,
  TransactionResponse,
  TransactionQuery,
  TransactionFeeResponse,
  TransactionVerifyResponse,
} from 'src/types';

export class Transaction {
  path = '/transactions';
  constructor(private readonly request: CoinForBarterRequest) {}

  async findAll(
    query: TransactionQuery = {},
  ): Promise<CoinForBarterResponse<TransactionResponse[]>> {
    const queryString = this.request.makeQueryString(query);
    const { status, message, statusCode, data } = await this.request.call(
      `${this.path}${queryString}`,
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

  async findOne(
    id: string,
  ): Promise<CoinForBarterResponse<TransactionResponse>> {
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

  async verify(
    id: string,
  ): Promise<CoinForBarterResponse<TransactionVerifyResponse>> {
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

  async events(
    id: string,
  ): Promise<CoinForBarterResponse<Record<string, any>[]>> {
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

  async getFee(
    id: string,
  ): Promise<CoinForBarterResponse<TransactionFeeResponse>> {
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

  async webhook(
    id: string,
  ): Promise<CoinForBarterResponse<{ message: string }>> {
    const { status, message, statusCode, data } = await this.request.call(
      `${this.path}/${id}/webhook`,
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
