import { CoinForBarterRequest } from 'src/services';
import {
  CoinForBarterResponse,
  PaymentPlanQuery,
  CreatePaymentPlanBody,
  PaymentPlanResponse,
  UpdatePaymentPlanBody,
} from 'src/types';

export class PaymentPlan {
  path = '/payment-plans';
  constructor(private readonly request: CoinForBarterRequest) {}

  async misc(): Promise<CoinForBarterResponse<Record<string, any>>> {
    const { status, message, statusCode, data } = await this.request.call(
      `${this.path}/misc`,
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

  async create(
    body: CreatePaymentPlanBody,
  ): Promise<CoinForBarterResponse<PaymentPlanResponse>> {
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
    query: PaymentPlanQuery = {},
  ): Promise<CoinForBarterResponse<PaymentPlanResponse[]>> {
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
  ): Promise<CoinForBarterResponse<PaymentPlanResponse>> {
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
    body: UpdatePaymentPlanBody,
  ): Promise<CoinForBarterResponse<PaymentPlanResponse>> {
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
