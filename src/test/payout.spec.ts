import { Payout } from '../lib/Payout';
import { PayoutQuery } from '../types/payout.type';
import { CoinForBarterRequest } from '../services/Request';
import { CoinForBarterStatus } from '../types/response.types';

describe('payout', () => {
  const publicKey = process.env.PUBLIC_KEY;
  const privateKey = process.env.PRIVATE_KEY;

  const request = new CoinForBarterRequest(publicKey, privateKey);

  const payout = new Payout(request);

  it('should be defined', () => {
    expect(payout).toBeDefined();
  });

  describe('findAll', () => {
    it('should be defined', () => {
      expect(payout.findAll).toBeDefined();
    });

    it('should find all payouts from param', async () => {
      const param: PayoutQuery = {};
      // param is optional
      const respWithParam = await payout.findAll(param);
      const resp = await payout.findAll();

      if (resp.status === CoinForBarterStatus.Success) {
        expect(resp.data.length).toBeGreaterThan(0);
      } else {
        expect(resp.statusCode).toEqual(404);
      }
      if (respWithParam.status === CoinForBarterStatus.Success) {
        return expect(respWithParam.data.length).toBeGreaterThan(0);
      } else {
        return expect(respWithParam.statusCode).toEqual(404);
      }
    });
  });

  describe('findOne', () => {
    it('should be defined', () => {
      expect(payout.findOne).toBeDefined();
    });

    it('should find one payout from id', async () => {
      const id = process.env.PAYOUT_ID;
      const resp = await payout.findOne(id);

      if (resp.status === CoinForBarterStatus.Success) {
        return expect(resp.data.id).toBe(id);
      } else {
        expect(resp.statusCode).not.toEqual(200);
      }
    });
  });
});
