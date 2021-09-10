import { BankAccount } from '../lib/BankAccount';
import { CoinForBarterRequest } from '../services';
import {
  BankAccountQuery,
  CoinForBarterStatus,
  CreateBankAccountBody,
  GetBankAccountNameBody,
} from '../types';

describe('BankAccount', () => {
  const publicKey = process.env.PUBLIC_KEY;
  const secretKey = process.env.SECRET_KEY;

  const request = new CoinForBarterRequest(publicKey, secretKey);

  const bankAccount = new BankAccount(request);

  it('should be defined', () => {
    expect(bankAccount).toBeDefined();
  });

  describe('getBankAccountName', () => {
    it('should be defined', () => {
      expect(bankAccount.getBankAccountName).toBeDefined();
    });
    const accountNumber = process.env.ACCOUNT_NUMBER;
    const accountBank = process.env.BANK_CODE;
    const accountName = process.env.ACCOUNT_NAME;

    it('should return account name from a account number and bank name', async () => {
      const payload: GetBankAccountNameBody = {
        accountNumber,
        accountBank,
      };
      const resp = await bankAccount.getBankAccountName(payload);
      if (resp.status === CoinForBarterStatus.Success) {
        return expect(resp.data.accountName).toBe(accountName);
      }
      return expect(resp.statusCode).not.toEqual(200);
    });
  });

  describe('create', () => {
    it('should be defined', () => {
      expect(bankAccount.create).toBeDefined();
    });
    const accountNumber = process.env.ACCOUNT_NUMBER;
    const accountBank = process.env.ACCOUNT_BANK;
    const accountName = process.env.ACCOUNT_NAME;
    const bankCode = process.env.BANK_CODE;

    it('should create a new bank account', async () => {
      const payload: CreateBankAccountBody = {
        accountNumber,
        accountBank,
        currency: 'NGN',
        country: 'NG',
        accountName,
        bankCode,
      };
      const resp = await bankAccount.create(payload);
      if (resp.status === CoinForBarterStatus.Success) {
        return expect(resp.data.accountName).toBe(accountName);
      }
      return expect(resp.statusCode).not.toEqual(201);
    });
  });

  describe('findAll', () => {
    it('should be defined', () => {
      expect(bankAccount.findAll).toBeDefined();
    });

    it('should find all new bank accounts from param', async () => {
      const param: BankAccountQuery = {
        from: null,
        to: null,
        isPrimary: false,
        page: null,
        country: null,
        currency: null,
        accountBank: null,
      };
      // param is optional
      const respWithParam = await bankAccount.findAll(param);
      const resp = await bankAccount.findAll();
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
      expect(bankAccount.findOne).toBeDefined();
    });

    it('should find one bank account from id', async () => {
      const id = process.env.BANK_ACCOUNT_ID;
      const resp = await bankAccount.findOne(id);
      if (resp.status === CoinForBarterStatus.Success) {
        return expect(resp.data.id).toBe(id);
      } else {
        expect(resp.statusCode).not.toEqual(200);
      }
    });
  });

  describe('makePrimary', () => {
    it('should be defined', () => {
      expect(bankAccount.makePrimary).toBeDefined();
    });

    it('should make an account primary', async () => {
      const id = process.env.BANK_ACCOUNT_ID;
      const resp = await bankAccount.makePrimary(id);
      if (resp.status === CoinForBarterStatus.Success) {
        return expect(resp.data.isPrimary).toBeTruthy();
      } else {
        return expect(resp.statusCode).not.toEqual(200);
      }
    });
  });

  describe('getBanks', () => {
    it('should be defined', () => {
      expect(bankAccount.getBanks).toBeDefined();
    });

    it('should get list of banks', async () => {
      const countryCode = process.env.COUNTRY_CODE;
      const resp = await bankAccount.getBanks(countryCode);

      if (resp.status === CoinForBarterStatus.Success) {
        return expect(resp.data.length).toBeGreaterThan(0);
      } else {
        return expect(resp.statusCode).toEqual(404);
      }
    });
  });
});
