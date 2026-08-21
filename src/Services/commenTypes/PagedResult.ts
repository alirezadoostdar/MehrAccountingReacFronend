import type { PaginationMeta } from './paginationMeta'

export interface PagedResult<T> {
  Data: T[]
  Meta: PaginationMeta
}
