import type { UserAddress } from "../context/AuthContext";

export interface PaginatedResponse<T> {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  hasPrev: boolean;
  hasNext: boolean;
  data: T[];
}

export type QueryParams = Record<
  string,
  | string
  | number
  | boolean
  | Array<string | number | boolean>
  | undefined
  | null
>;

export type UserLoginPayload = {
  email: string;
  password: string;
}

export type UserAddressResponse = {
  message: string;
  addresses: UserAddress[]
}