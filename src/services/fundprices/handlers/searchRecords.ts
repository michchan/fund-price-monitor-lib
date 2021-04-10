import { DocumentClient } from 'aws-sdk/clients/dynamodb'
import { FundPriceRecord } from '../../../models/fundPriceRecord/FundPriceRecord.type'
import { ListResponse } from '../Responses.type'

export type SearchRecordsResponse = ListResponse<FundPriceRecord>

export interface SearchRecordsQueryParams {
  latest?: boolean;
  exclusiveStartKey?: DocumentClient.QueryInput['ExclusiveStartKey'];
  q?: string;
  /** Format: YYYY.(1|2|3|4) */
  quarter?: string;
}