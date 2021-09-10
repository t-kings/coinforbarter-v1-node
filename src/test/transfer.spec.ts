import { Transfer } from '../lib/Transfer';
import { CoinForBarterRequest } from '../services/Request';
import {
  CreateTransferBody,
  CreateTransferQuery,
} from '../types/transfer.type';
import { CoinForBarterStatus } from '../types/response.types';

describe('Transfer', () => {
  const publicKey = process.env.PUBLIC_KEY;
  const privateKey = process.env.PRIVATE_KEY;
  const accountNumber = process.env.ACCOUNT_NUMBER;
  const walletAddress = process.env.WALLET_ADDRESS;
  const walletNetwork = process.env.WALLET_NETWORK;

  const request = new CoinForBarterRequest(publicKey, privateKey);

  const transfer = new Transfer(request);

  it('should be defined', () => {
    expect(transfer).toBeDefined();
  });
  describe('create', () => {
    it('should be defined', () => {
      expect(transfer.create).toBeDefined();
    });

    it('should create a new bank account', async () => {
      let payload: CreateTransferBody = {
        // for transferring to crypto address
        amount: 400,
        currency: 'DOGE',
        walletAddress,
        walletNetwork,
      };

      payload = {
        // for transferring to bank account
        amount: 400,
        currency: 'DOGE',
        bankCode: '045',
        accountNumber,
      };
      const resp = await transfer.create(payload);
      if (resp.status === CoinForBarterStatus.Success) {
        return expect(resp.statusCode).toEqual(200);
      }
      return expect(resp.statusCode).not.toEqual(201);
    });
  });

  describe('findAll', () => {
    it('should be defined', () => {
      expect(transfer.findAll).toBeDefined();
    });

    it('should find all transfers from param', async () => {
      const param: CreateTransferQuery = {};
      // param is optional
      const respWithParam = await transfer.findAll(param);
      const resp = await transfer.findAll();
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
      expect(transfer.findOne).toBeDefined();
    });

    it('should find one transfer from id', async () => {
      const id = process.env.BANK_ACCOUNT_ID;
      const resp = await transfer.findOne(id);
      if (resp.status === CoinForBarterStatus.Success) {
        return expect(resp.data.id).toBe(id);
      } else {
        expect(resp.statusCode).not.toEqual(200);
      }
    });
  });

  describe('getFee', () => {
    it('should be defined', () => {
      expect(transfer.getFee).toBeDefined();
    });

    it('should make an address primary', async () => {
      let payload: CreateTransferBody = {
        // for transferring to crypto address
        amount: 400,
        currency: 'DOGE',
        walletAddress,
        walletNetwork,
      };

      payload = {
        // for transferring to bank account
        amount: 400,
        currency: 'DOGE',
        bankCode: '045',
        accountNumber,
      };
      const resp = await transfer.getFee(payload);
      if (resp.status === CoinForBarterStatus.Success) {
        return expect(resp.data.fee).toBeDefined();
      } else {
        return expect(resp.statusCode).not.toEqual(200);
      }
    });
  });
});
