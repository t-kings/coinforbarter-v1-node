export type CreateTransferResponse = {
  id: string;
  status: string;
  bankAccountId: string;
  addressId: string;
  amount: number;
  fee: number;
  currency: string;
  createdAt: string;
};

export type CreateTransferBody = {
  amount: number;
  currency: string;
  walletAddress?: string;
  walletNetwork?: string;
  bankCode?: string;
  accountNumber?: string;
};

export type CreateTransferQuery = {
  from?: string;
  to?: string;
  page?: number;
  currency?: string;
  status?: string;
  minAmount?: number;
  maxAmount?: number;
  bankAccountId?: string;
  addressId?: string;
  isAscending?: boolean;
  skip?: number;
  sort?: string;
};

export type TransferFeeResponse = {
  fee: number;
  currency: string;
  amount: number;
};

export type TransferFeeBody = {
  fee: number;
  currency: string;
  amount: number;
};
