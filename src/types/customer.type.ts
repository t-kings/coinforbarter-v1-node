export type CreateCustomerBody = {
  email: string;
  fullName?: string;
  phoneNumber?: string;
};

export type CreateCustomerResponse = {
  id: string;
  email: string;
  fullName: string;
  phoneNumber: string;
  isBlacklisted: boolean;
  createdAt: string;
};

export type UpdateCustomerBody = {
  fullName?: string;
  phoneNumber?: string;
  isBlacklisted?: boolean;
};

export type CustomerQuery = {
  from?: string;
  to?: string;
  isBlacklisted?: boolean;
  page?: number;
  email?: string;
  phoneNumber?: string;
};
