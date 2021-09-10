export type CreateWalletAddressResponse = {
  id: string;
  isPrimary: boolean;
  network: string;
  currency: string;
  address: string;
  createdAt: string;
};

export type CreateWalletAddressBody = {
  network: string;
  currency: string;
  address: string;
};

export type CreateWalletAddressQuery = {
  from?: string;
  to?: string;
  isPrimary?: boolean;
  page?: number;
  network?: string;
  currency?: string;
  address?: string;
};
