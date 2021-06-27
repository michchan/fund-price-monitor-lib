import { DocumentClient } from 'aws-sdk/clients/dynamodb'
import { AggregatedRecordType, FundPriceChangeRateWithDetails } from '../../../models/fundPriceRecord/FundPriceChangeRate.type'
import { CompanyType, FundType } from '../../../models/fundPriceRecord/FundPriceRecord.type'
import { ListResponse } from '../Responses.type'

export type ListCompanySinglePeriodRatesResponse <
  FT extends FundType = FundType,
  RT extends AggregatedRecordType = AggregatedRecordType
> = ListResponse<FundPriceChangeRateWithDetails<FT, RT>>

export type ListCompanySinglePeriodRatesPathParams = {
  company: CompanyType;
} & {
  /** Either `week`, `month` or `quarter` */
  [key in AggregatedRecordType]: string
}
export interface ListCompanySinglePeriodRatesQueryParams {
  all?: boolean;
  exclusiveStartKey?: DocumentClient.QueryInput['ExclusiveStartKey'];
}