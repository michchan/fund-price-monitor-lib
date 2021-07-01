import { CompanyType } from '../../../models'
import { ListResponse } from '../Responses.type'

export type ListCompaniesResponse = ListResponse<CompanyType>

export interface ListCompaniesQueryParams {
  /**
   * Format: YYYY.(1|2|3|4)
   * Default to current quarter.
   */
  quarter?: string;
}