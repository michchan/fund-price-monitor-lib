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

export enum ListSingleFundRecordsTenor {
  latest = 'latest',
  oneMonth = '1m',
  sixMonths = '6m',
  oneYear = '1y',
  threeYears = '3y',
  fiveYears = '5y',
  all = 'all'
}

export interface ListSingleFundRecordsQueryParams {
  tenor?: ListSingleFundRecordsTenor;
  exclusiveStartKey?: DocumentClient.QueryInput['ExclusiveStartKey'];
}