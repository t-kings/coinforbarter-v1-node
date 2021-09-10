import { CoinForBarterRequest } from 'src/services';
import {
  CoinForBarterResponse,
  CreateTransferResponse,
  CreateTransferBody,
  CreateTransferQuery,
  TransferFeeResponse,
} from 'src/types';

export class Transfer {
  path = '/transfers';
  feePath = '/transfers/fee';
  otpPath = '/transfers/otp';
  constructor(private readonly request: CoinForBarterRequest) {}

  async create(
    body: CreateTransferBody,
  ): Promise<CoinForBarterResponse<CreateTransferResponse>> {
    const { status, message, statusCode, data } = await this.request.call(
      this.path,
      'post',
      body,
      true,
    );
    return { status, message, statusCode, data };
  }

  async findAll(
    query: CreateTransferQuery = {},
  ): Promise<CoinForBarterResponse<CreateTransferResponse[]>> {
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
  ): Promise<CoinForBarterResponse<CreateTransferResponse>> {
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
    body: CreateTransferBody,
  ): Promise<CoinForBarterResponse<TransferFeeResponse>> {
    const { status, message, statusCode, data } = await this.request.call(
      this.feePath,
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
}
