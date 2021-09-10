import { Webhook } from '../lib/Webhook';
import { CoinForBarterStatus } from '../types/response.types';

describe('Webhook', () => {
  const secretHash = process.env.SECRET_HASH;

  const webhook = new Webhook(secretHash);

  it('should be defined', () => {
    expect(webhook).toBeDefined();
  });
  describe('validate', () => {
    it('should be defined', () => {
      expect(webhook.validate).toBeDefined();
    });

    it('should validate hook and be false on wrong inputs', async () => {
      const payload = {
        type: '{{new:transaction}}',
        data: {},
        secretHash: 'wrong hash',
        status: 'success',
      };
      const resp = webhook.validate(payload);
      return expect(resp.status).toEqual(CoinForBarterStatus.Error);
    });

    it('should validate hook and be success on correct inputs', async () => {
      const payload = {
        type: '{{new:transaction}}',
        data: {},
        secretHash,
        status: 'success',
      };
      const resp = webhook.validate(payload);
      return expect(resp.status).toEqual(CoinForBarterStatus.Success);
    });
  });
});
