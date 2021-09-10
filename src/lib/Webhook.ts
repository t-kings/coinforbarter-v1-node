import { CoinForBarterStatus, WebhookValidateResponse } from '../types';

export class Webhook {
  constructor(private readonly secretHash: string) {}

  validate(hook: Record<string, any>): WebhookValidateResponse {
    const response: WebhookValidateResponse = {
      status: null,
      data: null,
      type: null,
    };
    if (hook.secretHash !== this.secretHash) {
      return {
        status: CoinForBarterStatus.Error,
        data: null,
        type: hook.type,
      };
    }
    if (hook.status === CoinForBarterStatus.Success) {
      response.status = CoinForBarterStatus.Success;
    } else {
      response.status = CoinForBarterStatus.Error;
    }
    response.type = hook.type;
    response.data = hook.data;
    return response;
  }
}
