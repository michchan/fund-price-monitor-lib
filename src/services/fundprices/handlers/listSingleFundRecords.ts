import { DocumentClient } from 'aws-sdk/clients/dynamodb'
import { FundPriceRecord, CompanyType, FundType, RecordType } from '../../../models/fundPriceRecord/FundPriceRecord.type'
import { ListResponse } from '../Responses.type'

export type ListSingleFundRecordsResponse <
  FT extends FundType = FundType,
  RT extends RecordType = RecordType
> = ListResponse<FundPriceRecord<FT, RT>>

export interface ListSingleFundRecordsPathParams {
  company: CompanyType;
  code: FundPriceRecord['code'];
}

export interface ListSingleFundRecordsQueryParams {
  latest?: boolean;
  exclusiveStartKey?: DocumentClient.QueryInput['ExclusiveStartKey'];
  /** ISO timestamp */
  startTime?: string;
  /** ISO timestamp */
  endTime?: string;
}