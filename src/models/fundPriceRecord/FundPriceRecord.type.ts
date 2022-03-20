import { FundDetails } from './FundDetails.type'

export enum FundType {
  mpf = 'mpf'
}

export enum CompanyType {
  manulife = 'manulife',
  aia = 'aia'
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
  riskLevel: RiskLevel;
  /** Record time in ISO timestamp */
  time: string;
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