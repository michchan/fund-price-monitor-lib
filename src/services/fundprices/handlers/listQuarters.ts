import { ListResponse } from '../Responses.type'

/**
 * List of ['2020.1', '2020.2', '2020.3']
 */
export type ListQuartersResponse = ListResponse<string>

export interface ListQuartersQueryParams {
  /** Format: YYYY.(1|2|3|4) */
  exclusiveStartQuarter?: string;
}