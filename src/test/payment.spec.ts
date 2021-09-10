import { CreatePaymentBody } from 'src/types';
import { Payment } from '../lib/Payment';
import { CoinForBarterRequest } from '../services/Request';
import { CoinForBarterStatus } from '../types/response.types';

describe('Payment', () => {
  const publicKey = process.env.PUBLIC_KEY;
  const privateKey = process.env.PRIVATE_KEY;

  const request = new CoinForBarterRequest(publicKey, privateKey);
  const id = process.env.PAYMENT_ID;

  const currency = 'DOGE';
  const network = 'BEP2';
  const payment = new Payment(request, publicKey);

  it('should be defined', () => {
    expect(payment).toBeDefined();
  });
  describe('create', () => {
    it('should be defined', () => {
      expect(payment.create).toBeDefined();
    });

    it('should create a payment', async () => {
      const payload: CreatePaymentBody = {
        txRef: 'RX1',
        amount: 10,
        currency: 'BTC',
        currencies: ['DOGE', 'BTC'],
        redirectUrl: 'http://example.com',
        meta: {
          consumer_id: 23,
          consumer_mac: '92a3-912ba-1192a',
        },
        customer: 'cornelius@gmail.com',
        customerPhoneNumber: '08102909304',
        customerFullName: 'Coin Developers',
        customizations: {
          title: 'My store',
          description: 'Payment for items in cart',
          logo: 'https://assets.piedpiper.com/logo.png',
        },
      };
      const resp = await payment.create(payload);
      if (resp.status === CoinForBarterStatus.Success) {
        return expect(resp.data.amount).toBe(10);
      }
      return expect(resp.statusCode).not.toEqual(201);
    });
  });

  describe('findOne', () => {
    it('should be defined', () => {
      expect(payment.findOne).toBeDefined();
    });

    it('should find one wallet address from id', async () => {
      const resp = await payment.findOne(id);
      if (resp.status === CoinForBarterStatus.Success) {
        return expect(resp.data.id).toBe(id);
      } else {
        expect(resp.statusCode).not.toEqual(200);
      }
    });
  });

  describe('setCurrency', () => {
    it('should be defined', () => {
      expect(payment.setCurrency).toBeDefined();
    });

    it('should set currency for payment', async () => {
      const resp = await payment.setCurrency(id, currency, network);
      if (resp.status === CoinForBarterStatus.Success) {
        return expect(resp.data.currency).toBe(currency);
      } else {
        return expect(resp.statusCode).not.toEqual(200);
      }
    });
  });

  describe('lockCurrency', () => {
    it('should be defined', () => {
      expect(payment.lockCurrency).toBeDefined();
    });

    it('should lock currency', async () => {
      const resp = await payment.lockCurrency(id);
      if (resp.status === CoinForBarterStatus.Success) {
        return expect(resp.data.isCurrencyLocked).toBeTruthy();
      } else {
        return expect(resp.statusCode).not.toEqual(200);
      }
    });
  });

  describe('cancel', () => {
    it('should be defined', () => {
      expect(payment.cancel).toBeDefined();
    });

    it('should lock currency', async () => {
      const resp = await payment.cancel(id);
      if (resp.status === CoinForBarterStatus.Success) {
        return expect(resp.data.status).toBe('cancelled');
      } else {
        return expect(resp.statusCode).not.toEqual(200);
      }
    });
  });

  describe('getPaymentUpdates', () => {
    it('should be defined', () => {
      expect(payment.getPaymentUpdates).toBeDefined();
    });

    it('should lock currency', async () => {
      await payment.getPaymentUpdates(id, (data: Record<string, any>) => {
        expect(data).toBeDefined();
      });
    });
  });
});
