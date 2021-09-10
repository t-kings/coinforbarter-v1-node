import { CoinForBarterRequest } from 'src/services';
import {
  CoinForBarterResponse,
  PaymentPlanSubscriberQuery,
  PaymentPlanSubscriberResponse,
} from 'src/types';
import { CreatePaymentPlanSubscriberBody } from 'src/types/payment-plan-subscriber.type';

export class PaymentPlanSubscriber {
  path = '/payment-plan-subscribers';
  constructor(private readonly request: CoinForBarterRequest) {}

  async create(
    body: CreatePaymentPlanSubscriberBody,
    paymentPlanId: string,
  ): Promise<CoinForBarterResponse<PaymentPlanSubscriberResponse>> {
    const { status, message, statusCode, data } = await this.request.call(
      `${this.path}/${paymentPlanId}`,
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
    query: PaymentPlanSubscriberQuery = {},
  ): Promise<CoinForBarterResponse<PaymentPlanSubscriberResponse[]>> {
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
  ): Promise<CoinForBarterResponse<PaymentPlanSubscriberResponse>> {
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

  async remove(
    id: string,
  ): Promise<CoinForBarterResponse<PaymentPlanSubscriberResponse>> {
    const { status, message, statusCode, data } = await this.request.call(
      `${this.path}/${id}`,
      'delete',
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
