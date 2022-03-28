import { FundDetails } from './FundDetails.type'

export enum FundType {
  mpf = 'mpf'
}

export enum CompanyType {
  manulife = 'manulife',
  aia = 'aia',
  hsbc = 'hsbc'
}

export enum RiskLevel {
  veryLow = 'veryLow',
  low = 'low',
  neutral = 'neutral',
  high = 'high',
  veryHigh = 'veryHigh',
  unknown = 'unknown'
}

export enum RecordType {
  latest = 'latest',
  record = 'record'
}

/**
 * A scrape record of the fundprice
 */
export interface FundPriceRecord <
  FT extends FundType = FundType,
  RT extends RecordType = RecordType
> {
  company: CompanyType;
  /** Fund code/ID */
  code: string;
  /** YYYY-MM-DD */
  updatedDate: string;
  /** Unit price in HKD */
  price: number;
  /**
   * Risk level needs to be here other than in FundDetails,
   * because an index on Dynamodb depends on RiskLevel
   */
  riskLevel: RiskLevel;
  /** Record time in ISO timestamp */
  time: string;
  // @TODO: Investigate if fundType is needed here
  fundType: FT;
  recordType: RT;
  /** --------- 'latest' fields --------- */
  priceChangeRate?: number;
  dayPriceChangeRate?: number;
  previousPrice?: number;
  previousDayPrice?: number;
  previousTime?: string | null;
}

export interface FundPriceRecordWithDetails <
  FT extends FundType = FundType,
  RT extends RecordType = RecordType
> extends
  FundPriceRecord<FT, RT>,
  Omit<FundDetails<FT>, 'company' | 'code'> {}