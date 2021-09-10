import { WalletAddress } from '../lib/WalletAddress';
import { CoinForBarterRequest } from '../services/Request';
import {
  CreateWalletAddressBody,
  CreateWalletAddressQuery,
} from '../types/wallet-address.type';
import { CoinForBarterStatus } from '../types/response.types';

describe('WalletAddress', () => {
  const publicKey = process.env.PUBLIC_KEY;
  const secretKey = process.env.SECRET_KEY;

  const request = new CoinForBarterRequest(publicKey, secretKey);

  const walletAddress = new WalletAddress(request);

  it('should be defined', () => {
    expect(walletAddress).toBeDefined();
  });
  describe('create', () => {
    it('should be defined', () => {
      expect(walletAddress.create).toBeDefined();
    });
    const address = process.env.WALLET_ADDRESS;
    const network = process.env.WALLET_NETWORK;

    it('should create a new bank account', async () => {
      const payload: CreateWalletAddressBody = {
        address,
        network,
        currency: 'DOGE',
      };
      const resp = await walletAddress.create(payload);
      if (resp.status === CoinForBarterStatus.Success) {
        return expect(resp.data.address).toBe(address);
      }
      return expect(resp.statusCode).not.toEqual(201);
    });
  });

  describe('findAll', () => {
    it('should be defined', () => {
      expect(walletAddress.findAll).toBeDefined();
    });

    it('should find all new wallet address from param', async () => {
      const param: CreateWalletAddressQuery = {};
      // param is optional
      const respWithParam = await walletAddress.findAll(param);
      const resp = await walletAddress.findAll();
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
      expect(walletAddress.findOne).toBeDefined();
    });

    it('should find one wallet address from id', async () => {
      const id = process.env.BANK_ACCOUNT_ID;
      const resp = await walletAddress.findOne(id);
      if (resp.status === CoinForBarterStatus.Success) {
        return expect(resp.data.id).toBe(id);
      } else {
        expect(resp.statusCode).not.toEqual(200);
      }
    });
  });

  describe('makePrimary', () => {
    it('should be defined', () => {
      expect(walletAddress.makePrimary).toBeDefined();
    });

    it('should make an address primary', async () => {
      const id = process.env.BANK_ACCOUNT_ID;
      const resp = await walletAddress.makePrimary(id);
      if (resp.status === CoinForBarterStatus.Success) {
        return expect(resp.data.isPrimary).toBeTruthy();
      } else {
        return expect(resp.statusCode).not.toEqual(200);
      }
    });
  });
});
