import { PaymentPlan } from '../lib/PaymentPlan';
import {
  CreatePaymentPlanBody,
  Intervals,
  PaymentPlanQuery,
  UpdatePaymentPlanBody,
} from '../types/payment-plan.type';
import { CoinForBarterRequest } from '../services/Request';
import { CoinForBarterStatus } from '../types/response.types';

describe('paymentPlan', () => {
  const publicKey = process.env.PUBLIC_KEY;
  const privateKey = process.env.PRIVATE_KEY;

  const request = new CoinForBarterRequest(publicKey, privateKey);

  const paymentPlan = new PaymentPlan(request);

  it('should be defined', () => {
    expect(paymentPlan).toBeDefined();
  });

  describe('misc', () => {
    it('should be defined', () => {
      expect(paymentPlan.misc).toBeDefined();
    });

    it('should get all misc data for payment plan', async () => {
      const resp = await paymentPlan.misc();
      if (resp.status === CoinForBarterStatus.Success) {
        return expect(resp.statusCode).toBe(200);
      } else {
        return expect(resp.statusCode).not.toEqual(200);
      }
    });
  });

  describe('create', () => {
    it('should be defined', () => {
      expect(paymentPlan.create).toBeDefined();
    });

    it('should create a new paymentPlan', async () => {
      const payload: CreatePaymentPlanBody = {
        currencies: ['DOGE', 'BTC'],
        currency: 'NGN',
        amount: 20000,
        numberOfTimesToCharge: 4,
        frequency: Intervals.Weekly,
        planName: 'Plan Name',
      };
      const resp = await paymentPlan.create(payload);
      if (resp.status === CoinForBarterStatus.Success) {
        return expect(resp.data.planName).toBe('Plan Name');
      }
      return expect(resp.statusCode).not.toEqual(201);
    });
  });

  describe('findAll', () => {
    it('should be defined', () => {
      expect(paymentPlan.findAll).toBeDefined();
    });

    it('should find all payment plans from param', async () => {
      const param: PaymentPlanQuery = {};
      // param is optional
      const respWithParam = await paymentPlan.findAll(param);
      const resp = await paymentPlan.findAll();

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
      expect(paymentPlan.findOne).toBeDefined();
    });

    it('should find one paymentPlan from id', async () => {
      const id = process.env.PAYMENT_PLAN_ID;
      const resp = await paymentPlan.findOne(id);

      if (resp.status === CoinForBarterStatus.Success) {
        return expect(resp.data.id).toBe(id);
      } else {
        expect(resp.statusCode).not.toEqual(200);
      }
    });
  });

  describe('update', () => {
    it('should be defined', () => {
      expect(paymentPlan.update).toBeDefined();
    });

    it('should make an account primary', async () => {
      const id = process.env.CUSTOMER_ID;
      const payload: UpdatePaymentPlanBody = {};
      const resp = await paymentPlan.update(id, payload);
      if (resp.status === CoinForBarterStatus.Success) {
        return expect(resp.data.id).toBe(id);
      } else {
        return expect(resp.statusCode).not.toEqual(200);
      }
    });
  });
});
