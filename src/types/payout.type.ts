export type PayoutResponse = {
  id: string;
  status: string;
  description: string;
  address: string;
  bankAccount: string;
  amount: string;
  currency: string;
  createdAt: string;
};

export type PayoutQuery = {
  from?: string;
  to?: string;
  page?: number;
  currency?: string;
  status?: string;
  sort?: string;
  minAmount?: number;
  maxAmount?: number;
  bankAccount?: string;
  address?: string;
  isAscending?: boolean;
  skip?: number;
};
