import { DocumentClient } from 'aws-sdk/clients/dynamodb'
import { FundPriceChangeRate, AggregatedRecordType } from '../../../models/fundPriceRecord/FundPriceChangeRate.type'
import { CompanyType, FundType } from '../../../models/fundPriceRecord/FundPriceRecord.type'
import { ListResponse } from '../Responses.type'

export type ListCompanySinglePeriodRatesResponse <
  FT extends FundType = FundType,
  RT extends AggregatedRecordType = AggregatedRecordType
> = ListResponse<FundPriceChangeRate<FT, RT>>

export type ListCompanySinglePeriodRatesPathParams = {
  company: CompanyType;
} & {
  /** Either `week`, `month` or `quarter` */
  [key in AggregatedRecordType]: string
}
export interface ListCompanySinglePeriodRatesQueryParams {
  exclusiveStartKey?: DocumentClient.QueryInput['ExclusiveStartKey'];
}