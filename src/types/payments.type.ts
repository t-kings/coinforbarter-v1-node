export type PaymentDto = {
  id: string;
  status: string;
  description: string;
  txRef: string;
  redirectUrl: string;
  paymentPlan: string;
  meta: string;
  fee: number;
  currency: string;
  currencyNetwork: string;
  amount: number;
  nairaValue: number;
  dollarValue: number;
  amountReceived: number;
  baseAmount: number;
  baseCurrency: string;
  currencies: string[];
  paymentRef: string;
  transactionFees: number;
  totalDue: number;
  customer: string;
  customerDetails: { email: string; phoneNumber: string; fullName: string };
  addressInformation: Record<string, any>;
  addressSentFrom: string;
  transactionTimeLog: Record<string, any>[];
  isCurrencyLocked: boolean;
  createdAt: string;
};

export type CreatePaymentBody = {
  txRef: string;
  amount: number;
  currency: string;
  redirectUrl?: string;
  currencies: string[];
  meta: Record<string, any>;
  customer: string;
  customerPhoneNumber: string;
  customerFullName: string;
  customizations: {
    title: string;
    description: string;
    logo: string;
  };
};
