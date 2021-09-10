import { PaymentPlanSubscriber } from '../lib/PaymentPlanSubscriber';
import { CoinForBarterStatus } from '../types/response.types';
import {
  CreatePaymentPlanSubscriberBody,
  PaymentPlanSubscriberQuery,
} from '../types/payment-plan-subscriber.type';
import { CoinForBarterRequest } from '../services/Request';

describe('paymentPlanSubscriber', () => {
  const publicKey = process.env.PUBLIC_KEY;
  const secretKey = process.env.SECRET_KEY;

  const email = process.env.EMAIL;
  const phoneNumber = process.env.PHONE_NUMBER;
  const fullName = process.env.EMAIL;
  const paymentPlanId = process.env.PAYMENT_PLAN_ID;
  const request = new CoinForBarterRequest(publicKey, secretKey);

  const paymentPlanSubscriber = new PaymentPlanSubscriber(request);

  it('should be defined', () => {
    expect(paymentPlanSubscriber).toBeDefined();
  });

  describe('create', () => {
    it('should be defined', () => {
      expect(paymentPlanSubscriber.create).toBeDefined();
    });

    it('should create a new paymentPlanSubscriber', async () => {
      const payload: CreatePaymentPlanSubscriberBody = {
        email,
        phoneNumber,
        fullName,
      };
      const resp = await paymentPlanSubscriber.create(payload, paymentPlanId);
      if (resp.status === CoinForBarterStatus.Success) {
        return expect(resp.statusCode).toBe(201);
      }
      return expect(resp.statusCode).not.toEqual(201);
    });
  });

  describe('findAll', () => {
    it('should be defined', () => {
      expect(paymentPlanSubscriber.findAll).toBeDefined();
    });

    it('should find all paymentPlanSubscribers from param', async () => {
      const param: PaymentPlanSubscriberQuery = {};
      // param is optional
      const respWithParam = await paymentPlanSubscriber.findAll(param);
      const resp = await paymentPlanSubscriber.findAll();

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
      expect(paymentPlanSubscriber.findOne).toBeDefined();
    });

    it('should find one payment plan subscriber from id', async () => {
      const id = process.env.PAYMENT_PLAN_SUBSCRIBER_ID;
      const resp = await paymentPlanSubscriber.findOne(id);

      if (resp.status === CoinForBarterStatus.Success) {
        return expect(resp.data.id).toBe(id);
      } else {
        expect(resp.statusCode).not.toEqual(200);
      }
    });
  });

  describe('remove', () => {
    it('should be defined', () => {
      expect(paymentPlanSubscriber.remove).toBeDefined();
    });

    it('should find one payment plan subscriber from id', async () => {
      const id = process.env.PAYMENT_PLAN_SUBSCRIBER_ID;
      const resp = await paymentPlanSubscriber.remove(id);

      if (resp.status === CoinForBarterStatus.Success) {
        return expect(resp.statusCode).toEqual(204);
      } else {
        expect(resp.statusCode).not.toEqual(200);
      }
    });
  });
});
