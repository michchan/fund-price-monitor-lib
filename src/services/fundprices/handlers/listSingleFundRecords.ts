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

export type ListSingleFundRecordsTenor = 'latest' | '1m' | '6m' | '1y' | '3y' | '5y' | 'all'

export interface ListSingleFundRecordsQueryParams {
  tenor: ListSingleFundRecordsTenor;
  exclusiveStartKey?: DocumentClient.QueryInput['ExclusiveStartKey'];
}