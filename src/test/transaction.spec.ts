import { Transaction } from '../lib/Transaction';
import { CoinForBarterRequest } from '../services/Request';
import { TransactionQuery } from '../types/transaction.type';
import { CoinForBarterStatus } from '../types/response.types';
describe('Transaction', () => {
  const publicKey = process.env.PUBLIC_KEY;
  const privateKey = process.env.PRIVATE_KEY;

  const request = new CoinForBarterRequest(publicKey, privateKey);

  const transaction = new Transaction(request);

  it('should be defined', () => {
    expect(transaction).toBeDefined();
  });

  describe('findAll', () => {
    it('should be defined', () => {
      expect(transaction.findAll).toBeDefined();
    });

    it('should find all transactions from param', async () => {
      const param: TransactionQuery = {};
      // param is optional
      const respWithParam = await transaction.findAll(param);
      const resp = await transaction.findAll();
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
      expect(transaction.findOne).toBeDefined();
    });

    it('should find one transaction from id', async () => {
      const id = process.env.TRANSACTION_ID;
      const resp = await transaction.findOne(id);
      if (resp.status === CoinForBarterStatus.Success) {
        return expect(resp.data.id).toBe(id);
      } else {
        expect(resp.statusCode).not.toEqual(200);
      }
    });
  });

  describe('getFee', () => {
    it('should be defined', () => {
      expect(transaction.getFee).toBeDefined();
    });

    it('should get a transaction fee', async () => {
      const id = process.env.TRANSACTION_ID;

      const resp = await transaction.getFee(id);
      if (resp.status === CoinForBarterStatus.Success) {
        return expect(resp.data.fee).toBeDefined();
      } else {
        return expect(resp.statusCode).not.toEqual(200);
      }
    });
  });

  describe('verify', () => {
    it('should be defined', () => {
      expect(transaction.getFee).toBeDefined();
    });

    it('should get verification details of a transaction', async () => {
      const id = process.env.TRANSACTION_ID;
      const resp = await transaction.verify(id);
      if (resp.status === CoinForBarterStatus.Success) {
        return expect(resp.data.id).toBe(id);
      } else {
        return expect(resp.statusCode).not.toEqual(200);
      }
    });
  });

  describe('events', () => {
    it('should be defined', () => {
      expect(transaction.getFee).toBeDefined();
    });

    it('should get events of a transaction', async () => {
      const id = process.env.TRANSACTION_ID;

      const resp = await transaction.events(id);
      if (resp.status === CoinForBarterStatus.Success) {
        return expect(resp.data.length).toBeDefined();
      } else {
        return expect(resp.statusCode).not.toEqual(200);
      }
    });
  });

  describe('webhook', () => {
    it('should be defined', () => {
      expect(transaction.getFee).toBeDefined();
    });
    const id = process.env.TRANSACTION_ID;
    it('should call a webhook successfully', async () => {
      const resp = await transaction.webhook(id);
      if (resp.status === CoinForBarterStatus.Success) {
        return expect(resp.statusCode).toEqual(200);
      } else {
        return expect(resp.statusCode).not.toEqual(200);
      }
    });
  });
});
