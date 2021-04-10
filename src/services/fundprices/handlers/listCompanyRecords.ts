import { DocumentClient } from 'aws-sdk/clients/dynamodb'
import { FundPriceRecord, CompanyType, RiskLevel } from '../../../models/fundPriceRecord/FundPriceRecord.type'
import { ListResponse } from '../Responses.type'

export type ListCompanyRecordsResponse = ListResponse<FundPriceRecord>

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