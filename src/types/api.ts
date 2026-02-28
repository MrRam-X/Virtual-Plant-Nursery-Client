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
