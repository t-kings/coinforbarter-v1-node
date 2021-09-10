import { Customer } from '../lib/Customer';
import { CoinForBarterStatus, CreateCustomerBody } from '../types';
import { CustomerQuery, UpdateCustomerBody } from '../types/customer.type';
import { CoinForBarterRequest } from '../services';

describe('customer', () => {
  const publicKey = process.env.PUBLIC_KEY;
  const secretKey = process.env.SECRET_KEY;

  const email = process.env.EMAIL;
  const phoneNumber = process.env.PHONE_NUMBER;
  const fullName = process.env.EMAIL;
  const request = new CoinForBarterRequest(publicKey, secretKey);

  const customer = new Customer(request);

  it('should be defined', () => {
    expect(customer).toBeDefined();
  });

  describe('create', () => {
    it('should be defined', () => {
      expect(customer.create).toBeDefined();
    });

    it('should create a new customer', async () => {
      const payload: CreateCustomerBody = {
        email,
        phoneNumber,
        fullName,
      };
      const resp = await customer.create(payload);
      if (resp.status === CoinForBarterStatus.Success) {
        return expect(resp.data.email).toBe(email);
      }
      return expect(resp.statusCode).not.toEqual(201);
    });
  });

  describe('findAll', () => {
    it('should be defined', () => {
      expect(customer.findAll).toBeDefined();
    });

    it('should find all customers from param', async () => {
      const param: CustomerQuery = {
        from: null,
        to: null,
        isBlacklisted: false,
        page: null,
        email: null,
        phoneNumber: null,
      };
      // param is optional
      const respWithParam = await customer.findAll(param);
      const resp = await customer.findAll();

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
      expect(customer.findOne).toBeDefined();
    });

    it('should find one customer from id', async () => {
      const id = process.env.CUSTOMER_ID;
      const resp = await customer.findOne(id);

      if (resp.status === CoinForBarterStatus.Success) {
        return expect(resp.data.id).toBe(id);
      } else {
        expect(resp.statusCode).not.toEqual(200);
      }
    });
  });

  describe('update', () => {
    it('should be defined', () => {
      expect(customer.update).toBeDefined();
    });

    it('should make an account primary', async () => {
      const id = process.env.CUSTOMER_ID;
      const payload: UpdateCustomerBody = {
        phoneNumber,
        fullName,
        isBlacklisted: true, // true if you want to blacklist the customer
      };
      const resp = await customer.update(id, payload);
      if (resp.status === CoinForBarterStatus.Success) {
        return expect(resp.data.email).toBe(email);
      } else {
        return expect(resp.statusCode).not.toEqual(200);
      }
    });
  });
});
