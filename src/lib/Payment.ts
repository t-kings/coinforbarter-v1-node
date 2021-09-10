import { CoinForBarterRequest } from 'src/services';
import {
  CoinForBarterResponse,
  CreatePaymentBody,
  PaymentDto,
} from 'src/types';
import WebSocketClient from 'websocket';
export class Payment {
  path = '/payments';
  constructor(
    private readonly request: CoinForBarterRequest,
    private readonly publicKey: string,
  ) {}

  async create(
    body: CreatePaymentBody,
  ): Promise<CoinForBarterResponse<PaymentDto>> {
    const { data, statusCode, message, status } = await this.request.call(
      `${this.path}/api`,
      'post',
      body,
      true,
    );
    return { data, statusCode, message, status };
  }

  async findOne(id: string): Promise<CoinForBarterResponse<PaymentDto>> {
    const { data, statusCode, message, status } = await this.request.call(
      `${this.path}/${id}`,
      'get',
      {},
      true,
    );
    return { statusCode, status, message, data };
  }

  async setCurrency(
    id: string,
    currency: string,
    network: string,
  ): Promise<CoinForBarterResponse<PaymentDto>> {
    const { data, statusCode, message, status } = await this.request.call(
      `${this.path}/${id}/currency/set/${currency}/${network}`,
      'patch',
      {},
      true,
    );
    return { statusCode, status, message, data };
  }

  async cancel(id: string): Promise<CoinForBarterResponse<PaymentDto>> {
    const { data, statusCode, message, status } = await this.request.call(
      `${this.path}/${id}/cancel`,
      'patch',
      {},
      true,
    );
    return { statusCode, status, message, data };
  }

  async lockCurrency(id: string): Promise<CoinForBarterResponse<PaymentDto>> {
    const { data, statusCode, message, status } = await this.request.call(
      `${this.path}/${id}/currency/lock`,
      'patch',
      {},
      true,
    );
    return { statusCode, status, message, data };
  }

  async getPaymentUpdates(
    paymentId: string,
    callBackFunction: (data: Record<string, any>) => any,
  ) {
    const Wsc = WebSocketClient.client;
    const ws = new Wsc('ws://localhost:8080/v1');
    ws.on('open', () => {
      ws.send(
        JSON.stringify({
          publicKey: this.publicKey,
          paymentId,
        }),
      );
    });

    ws.on('message', (event: Record<string, any>) => {
      try {
        const data = JSON.parse(event.data);
        callBackFunction(data);
      } catch (error) {}
    });

    ws.on('open', (event: Record<string, any>) => {
      try {
        const data = JSON.parse(event.data);
        callBackFunction(data);
      } catch (error) {}
    });

    ws.on('error', (event: Record<string, any>) => {
      try {
        const data = JSON.parse(event.data);
        callBackFunction(data);
      } catch (error) {}
    });

    ws.on('close', (event: Record<string, any>) => {
      try {
        const data = JSON.parse(event.data);
        callBackFunction(data);
      } catch (error) {}
    });
  }
}
