import { CoinForBarterRequest } from 'src/services';
import {
  CoinForBarterResponse,
  CreateCustomerBody,
  CreateCustomerResponse,
  UpdateCustomerBody,
} from 'src/types';
import { CustomerQuery } from 'src/types/customer.type';

export class Customer {
  path = '/customers';
  constructor(private readonly request: CoinForBarterRequest) {}

  async create(
    body: CreateCustomerBody,
  ): Promise<CoinForBarterResponse<CreateCustomerResponse>> {
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
    query: CustomerQuery = {},
  ): Promise<CoinForBarterResponse<CreateCustomerResponse[]>> {
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
  ): Promise<CoinForBarterResponse<CreateCustomerResponse>> {
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

  async update(
    id: string,
    body: UpdateCustomerBody,
  ): Promise<CoinForBarterResponse<CreateCustomerResponse>> {
    const { status, message, statusCode, data } = await this.request.call(
      `${this.path}/${id}`,
      'patch',
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
