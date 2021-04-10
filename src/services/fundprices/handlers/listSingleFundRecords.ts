import { DocumentClient } from 'aws-sdk/clients/dynamodb'
import { CompanyType, FundType, RecordType, FundPriceRecordWithDetails } from '../../../models/fundPriceRecord/FundPriceRecord.type'
import { ListResponse } from '../Responses.type'

export type ListSingleFundRecordsResponse <
  FT extends FundType = FundType,
  RT extends RecordType = RecordType
> = ListResponse<FundPriceRecordWithDetails<FT, RT>>

export interface ListSingleFundRecordsPathParams {
  company: CompanyType;
  code: FundPriceRecordWithDetails['code'];
}

export interface ListSingleFundRecordsQueryParams {
  latest?: boolean;
  exclusiveStartKey?: DocumentClient.QueryInput['ExclusiveStartKey'];
  /** ISO timestamp */
  startTime?: string;
  /** ISO timestamp */
  endTime?: string;
}