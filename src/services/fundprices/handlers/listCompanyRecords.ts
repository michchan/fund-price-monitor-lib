import { DocumentClient } from 'aws-sdk/clients/dynamodb'
import { CompanyType, RiskLevel, FundType, RecordType, FundPriceRecordWithDetails } from '../../../models/fundPriceRecord/FundPriceRecord.type'
import { ListResponse } from '../Responses.type'

export type ListCompanyRecordsResponse <
  FT extends FundType = FundType,
  RT extends RecordType = RecordType
> = ListResponse<FundPriceRecordWithDetails<FT, RT>>

export interface ListCompanyRecordsPathParams {
  company: CompanyType;
}
export interface ListCompanyRecordsQueryParams {
  riskLevel?: RiskLevel;
  latest?: boolean;
  all?: boolean;
  exclusiveStartKey?: DocumentClient.QueryInput['ExclusiveStartKey'];
  /** Format: YYYY.(1|2|3|4) */
  quarter?: string;
}