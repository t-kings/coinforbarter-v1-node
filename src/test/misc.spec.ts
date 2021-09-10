import { Misc } from '../lib/Misc';
import { CoinForBarterStatus } from '../types/response.types';
import { CoinForBarterRequest } from '../services/Request';

describe('misc', () => {
  const publicKey = process.env.PUBLIC_KEY;
  const secretKey = process.env.SECRET_KEY;

  const request = new CoinForBarterRequest(publicKey, secretKey);

  const misc = new Misc(request);

  it('should be defined', () => {
    expect(misc).toBeDefined();
  });

  describe('getCountries', () => {
    it('should be defined', () => {
      expect(misc.getCountries).toBeDefined();
    });

    it('should find all countries', async () => {
      const resp = await misc.getCountries();

      if (resp.status === CoinForBarterStatus.Success) {
        expect(resp.data.length).toBeGreaterThan(0);
      } else {
        expect(resp.statusCode).toEqual(404);
      }
    });
  });

  describe('getBalance', () => {
    it('should be defined', () => {
      expect(misc.getBalance).toBeDefined();
    });

    it('should find all countries', async () => {
      const resp = await misc.getBalance();

      if (resp.status === CoinForBarterStatus.Success) {
        expect(resp.data.length).toBeGreaterThan(0);
      } else {
        expect(resp.statusCode).toEqual(404);
      }
    });
  });

  describe('getCurrencies', () => {
    it('should be defined', () => {
      expect(misc.getCurrencies).toBeDefined();
    });

    it('should find all countries', async () => {
      const resp = await misc.getCurrencies();
      if (resp.status === CoinForBarterStatus.Success) {
        expect(resp.data.length).toBeGreaterThan(0);
      } else {
        expect(resp.statusCode).toEqual(404);
      }
    });
  });
});
