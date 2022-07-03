import { AWSError } from 'aws-sdk'
import { DocumentClient } from 'aws-sdk/clients/dynamodb'

export interface ListSuccessResponse <T> {
  result: boolean;
  length: number;
  lastEvaluatedKey: null | DocumentClient.QueryOutput['LastEvaluatedKey'];
  data: T[];
}

export interface ListErrorResponse {
  result: boolean;
  error: Pick<AWSError, 'message' | 'code'>;
}

export type ListResponse <T> = ListSuccessResponse<T> | ListErrorResponse