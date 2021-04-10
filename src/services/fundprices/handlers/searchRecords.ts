import { DocumentClient } from 'aws-sdk/clients/dynamodb'
import { FundPriceRecordWithDetails, FundType, RecordType } from '../../../models/fundPriceRecord/FundPriceRecord.type'
import { ListResponse } from '../Responses.type'

export type SearchRecordsResponse <
  FT extends FundType = FundType,
  RT extends RecordType = RecordType
> = ListResponse<FundPriceRecordWithDetails<FT, RT>>

export interface SearchRecordsQueryParams {
  latest?: boolean;
  exclusiveStartKey?: DocumentClient.QueryInput['ExclusiveStartKey'];
  q?: string;
  /** Format: YYYY.(1|2|3|4) */
  quarter?: string;
}