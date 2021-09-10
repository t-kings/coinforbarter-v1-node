import { CoinForBarterRequest } from 'src/services';
import {
  CoinForBarterResponse,
  CreateWalletBody,
  CreateWalletResponse,
  WalletQuery,
} from 'src/types';

export class Wallet {
  path = '/wallets';
  constructor(private readonly request: CoinForBarterRequest) {}

  async create(
    body: CreateWalletBody,
  ): Promise<CoinForBarterResponse<CreateWalletResponse>> {
    const { status, message, statusCode, data } = await this.request.call(
      this.path,
      'post',
      body,
      true,
    );
    return {
      status,
      message,
      statusCode,
      data,
    };
  }

  async findAll(
    query: WalletQuery = {},
  ): Promise<CoinForBarterResponse<CreateWalletResponse[]>> {
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
  ): Promise<CoinForBarterResponse<CreateWalletResponse>> {
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

  async remove(id: string): Promise<CoinForBarterResponse<null>> {
    const { status, message, statusCode, data } = await this.request.call(
      `${this.path}/${id}`,
      'patch',
      undefined,
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
