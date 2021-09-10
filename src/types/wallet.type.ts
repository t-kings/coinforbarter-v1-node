export type CreateWalletBody = {
  label: string;
  currency: string;
};

export type CreateWalletResponse = {
  id: string;
  currency: string;
  label: string;
  addresses: string;
  createdAt: string;
};

export type WalletQuery = {
  from?: string;
  to?: string;
  page?: number;
  network?: string;
  currency?: string;
  address?: string;
  label?: string;
  skip?: number;
  sort?: string;
  isAscending?: boolean;
};
