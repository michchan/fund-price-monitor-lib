import { DocumentClient } from 'aws-sdk/clients/dynamodb'
import { FundPriceRecord, CompanyType } from '../../../models/fundPriceRecord/FundPriceRecord.type'
import { ListResponse } from '../Responses.type'

export type ListSingleFundRecordsResponse = ListResponse<FundPriceRecord>

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