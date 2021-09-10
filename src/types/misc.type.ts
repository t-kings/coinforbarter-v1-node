export type CountryResponse = {
  name: string;
  code: string;
  flag: string;
};

export type BalanceResponse = {
  currency: string;
  availableBalance: number;
  totalBalance: number;
  isSuspended: boolean;
};

export type CurrencyResponse = {
  currency: string;
  symbol: string;
  abbreviation: string;
  isAvailable: boolean;
  type: CurrencyType;
};

export enum CurrencyType {
  Fiat = 'fiat',
  Crypto = 'crypto',
}

export type CurrencyQuery = {
  isAvailable?: boolean;
};
