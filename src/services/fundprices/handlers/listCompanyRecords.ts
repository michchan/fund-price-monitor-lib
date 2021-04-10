import { DocumentClient } from 'aws-sdk/clients/dynamodb'
import { FundPriceRecord, CompanyType, RiskLevel, FundType, RecordType } from '../../../models/fundPriceRecord/FundPriceRecord.type'
import { ListResponse } from '../Responses.type'

export type ListCompanyRecordsResponse <
  FT extends FundType = FundType,
  RT extends RecordType = RecordType
> = ListResponse<FundPriceRecord<FT, RT>>

export interface ListCompanyRecordsPathParams {
  company: CompanyType;
}
export interface ListCompanyRecordsQueryParams {
  riskLevel?: RiskLevel;
  latest?: boolean;
  exclusiveStartKey?: DocumentClient.QueryInput['ExclusiveStartKey'];
  /** Format: YYYY.(1|2|3|4) */
  quarter?: string;
}