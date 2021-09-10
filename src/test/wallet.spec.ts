import { Wallet } from '../lib/Wallet';
import { CoinForBarterStatus, CreateWalletBody, WalletQuery } from '../types';
import { CoinForBarterRequest } from '../services';

describe('wallet', () => {
  const publicKey = process.env.PUBLIC_KEY;
  const privateKey = process.env.PRIVATE_KEY;

  const currency = 'DOGE';
  let walletId = '';
  const label = 'trust-wallet';
  const request = new CoinForBarterRequest(publicKey, privateKey);

  const wallet = new Wallet(request);

  it('should be defined', () => {
    expect(wallet).toBeDefined();
  });

  describe('create', () => {
    it('should be defined', () => {
      expect(wallet.create).toBeDefined();
    });

    it('should create a new wallet', async () => {
      const payload: CreateWalletBody = {
        label,
        currency,
      };
      const resp = await wallet.create(payload);
      if (resp.status === CoinForBarterStatus.Success) {
        return expect(resp.data.label).toBe(label);
      }
      return expect(resp.statusCode).not.toEqual(201);
    });
  });

  describe('findAll', () => {
    it('should be defined', () => {
      expect(wallet.findAll).toBeDefined();
    });

    it('should find all wallets from param', async () => {
      const param: WalletQuery = {};
      // param is optional
      const respWithParam = await wallet.findAll(param);
      const resp = await wallet.findAll();

      if (resp.status === CoinForBarterStatus.Success) {
        expect(resp.data.length).toBeGreaterThan(0);
      } else {
        expect(resp.statusCode).toEqual(404);
      }
      if (respWithParam.status === CoinForBarterStatus.Success) {
        walletId = respWithParam.data[0].id;
        return expect(respWithParam.data.length).toBeGreaterThan(0);
      } else {
        return expect(respWithParam.statusCode).toEqual(404);
      }
    });
  });

  describe('findOne', () => {
    it('should be defined', () => {
      expect(wallet.findOne).toBeDefined();
    });

    it('should find one wallet from id', async () => {
      const resp = await wallet.findOne(walletId);

      if (resp.status === CoinForBarterStatus.Success) {
        return expect(resp.data.id).toBe(walletId);
      } else {
        expect(resp.statusCode).not.toEqual(200);
      }
    });
  });

  describe('remove', () => {
    it('should be defined', () => {
      expect(wallet.remove).toBeDefined();
    });

    it('should make an account primary', async () => {
      const resp = await wallet.remove(walletId);
      if (resp.status === CoinForBarterStatus.Success) {
        return expect(resp.statusCode).toEqual(204);
      } else {
        return expect(resp.statusCode).not.toEqual(200);
      }
    });
  });
});
