export type GetBankAccountNameBody = {
  accountNumber: string;
  accountBank: string;
};

export type GetBankAccountNameResponse = {
  accountNumber: string;
  accountBank: string;
  accountName: string;
};

export type CreateBankAccountBody = {
  accountNumber: string;
  accountBank: string;
  currency: string;
  country: string;
  accountName: string;
  bankCode: string;
};

export type CreateBankAccountResponse = {
  id: string;
  country: string;
  currency: string;
  accountNumber: string;
  accountName: string;
  accountBank: string;
  bankCode: string;
  isPrimary: string;
  createdAt: string;
};

export type BankAccountQuery = {
  from?: string;
  to?: string;
  isPrimary?: boolean;
  page?: number;
  country?: string;
  currency?: string;
  accountBank?: string;
};

export type AllBanks = {
  id?: string;
  code?: string;
  name?: boolean;
};
