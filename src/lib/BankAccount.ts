import { AllBanks } from 'src/types/bankAccount.type';
import { CoinForBarterRequest } from '../services';
import {
  CoinForBarterResponse,
  GetBankAccountNameBody,
  GetBankAccountNameResponse,
  BankAccountQuery,
  CreateBankAccountBody,
  CreateBankAccountResponse,
} from '../types';
export class BankAccount {
  path = '/bank-accounts';
  constructor(private readonly request: CoinForBarterRequest) {}

  async getBankAccountName(
    body: GetBankAccountNameBody,
  ): Promise<CoinForBarterResponse<GetBankAccountNameResponse>> {
    const { status, data, message, statusCode } = await this.request.call(
      `${this.path}/account/name`,
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

  async create(
    body: CreateBankAccountBody,
  ): Promise<CoinForBarterResponse<CreateBankAccountResponse>> {
    const { status, data, message, statusCode } = await this.request.call(
      this.path,
      'post',
      body,
      true,
    );
    return {
      status,
      data,
      message,
      statusCode,
    };
  }

  async findAll(
    query: BankAccountQuery = {},
  ): Promise<CoinForBarterResponse<CreateBankAccountResponse[]>> {
    const queryString = this.request.makeQueryString(query);
    const { data, status, message, statusCode } = await this.request.call(
      `${this.path}?${queryString}`,
      'get',
      {},
      true,
    );
    return {
      status,
      data,
      message,
      statusCode,
    };
  }

  async findOne(
    id: string,
  ): Promise<CoinForBarterResponse<CreateBankAccountResponse>> {
    const { data, status, message, statusCode } = await this.request.call(
      `${this.path}/${id}`,
      'get',
      {},
      true,
    );
    return { status, data, message, statusCode };
  }

  async getBanks(
    countryCode: string,
  ): Promise<CoinForBarterResponse<AllBanks[]>> {
    const { data, status, message, statusCode } = await this.request.call(
      `${this.path}/banks/${countryCode}`,
      'get',
      {},
      true,
    );
    return {
      status,
      data,
      message,
      statusCode,
    };
  }

  async makePrimary(bankAccountId: string) {
    const { data, status, message, statusCode } = await this.request.call(
      `${this.path}/primary/${bankAccountId}`,
      'get',
      {},
      true,
    );
    return {
      data,
      status,
      message,
      statusCode,
    };
  }
}
