import { DocumentClient } from 'aws-sdk/clients/dynamodb'
import { FundPriceChangeRate, AggregatedRecordType } from '../../../models/fundPriceRecord/FundPriceChangeRate.type'
import { CompanyType } from '../../../models/fundPriceRecord/FundPriceRecord.type'
import { ListResponse } from '../Responses.type'

export type ListCompanySinglePeriodRatesResponse = ListResponse<FundPriceChangeRate>

export type ListCompanySinglePeriodRatesPathParams = {
  company: CompanyType;
} & {
  /** Either `week`, `month` or `quarter` */
  [key in AggregatedRecordType]: string
}
export interface ListCompanySinglePeriodRatesQueryParams {
  exclusiveStartKey?: DocumentClient.QueryInput['ExclusiveStartKey'];
}