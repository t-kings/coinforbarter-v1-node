import { CreateCustomerBody } from 'src/types';

export type PaymentPlanSubscriberQuery = {
  from?: string;
  to?: string;
  isActive?: boolean;
  page?: number;
  customerId?: string;
  paymentPlanId?: string;
  maxNoOfTimesPayed?: number;
  minNoOfTimesPayed?: number;
  minNextTimeToCharge?: string;
  maxNextTimeToCharge?: string;
};

export type PaymentPlanSubscriberResponse = {
  id: string;
  isActive: boolean;
  noOfTimesPayed: number;
  createdAt: string;
  paymentPlanId: string;
  customer: string;
};

export type CreatePaymentPlanSubscriberBody = CreateCustomerBody;
