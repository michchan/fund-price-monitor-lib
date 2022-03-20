import { CompanyType, FundType, RiskLevel } from './FundPriceRecord.type'

export enum Languages {
  en = 'en',
  zh_HK ='zh_HK'
}

export interface FundDetails <FT extends FundType = FundType> {
  company: CompanyType;
  code: string;
  name: { [key in Languages]: string };
  initialPrice: number;
  /** YYYY-MM-DD */
  launchedDate: string;
  /** ----- The followings act as fallback for "records" ----- */
  riskLevel: RiskLevel;
  fundType: FT;
}