import { CoinForBarterRequest } from 'src/services';
import {
  CoinForBarterResponse,
  CreateWalletAddressResponse,
  CreateWalletAddressBody,
  CreateWalletAddressQuery,
} from 'src/types';

export class WalletAddress {
  path = '/wallet-addresses';
  constructor(private readonly request: CoinForBarterRequest) {}

  async create(
    body: CreateWalletAddressBody,
  ): Promise<CoinForBarterResponse<CreateWalletAddressResponse>> {
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
    query: CreateWalletAddressQuery = {},
  ): Promise<CoinForBarterResponse<CreateWalletAddressResponse[]>> {
    const queryString = this.request.makeQueryString(query);
    const { status, message, statusCode, data } = await this.request.call(
      `${this.path}?${queryString}`,
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
  ): Promise<CoinForBarterResponse<CreateWalletAddressResponse>> {
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

  async makePrimary(
    bankAccountId: string,
  ): Promise<CoinForBarterResponse<CreateWalletAddressResponse>> {
    const { status, message, statusCode, data } = await this.request.call(
      `${this.path}/primary/${bankAccountId}`,
      'get',
      {},
      true,
    );
    return { status, message, statusCode, data };
  }
}
