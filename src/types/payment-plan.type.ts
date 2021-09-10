export type PaymentPlanResponse = {
  id: string;
  isActive: boolean;
  currencies: string[];
  currency: string;
  amount: number;
  numberOfTimesToCharge: number;
  frequency: Intervals;
  planName: string;
};

export enum Intervals {
  Hourly = 'hourly',
  Weekly = 'weekly',
  Daily = 'daily',
  Monthly = 'monthly',
  Quarterly = 'quarterly',
  EverySixMonths = 'every six months',
  Yearly = 'yearly',
}

export type CreatePaymentPlanBody = {
  currencies: string[];
  currency: string;
  amount: number;
  numberOfTimesToCharge: number;
  frequency: Intervals;
  planName: string;
};

export type PaymentPlanQuery = {
  from?: string;
  to?: string;
  isActive?: boolean;
  page?: number;
  frequency?: Intervals;
  currency?: string;
  maxAmount?: number;
  minAmount?: number;
  minNumberOfTimesToCharge?: number;
  maxNumberOfTimesToCharge?: number;
};

export type UpdatePaymentPlanBody = {
  currencies?: string[];
  currency?: string;
  amount?: number;
  numberOfTimesToCharge?: number;
  frequency?: Intervals;
  planName?: string;
};
