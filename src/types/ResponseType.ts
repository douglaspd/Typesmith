type ServiceResponseError = 'UNAUTHORIZDE' | 'INVALID_DATA' | 'NOT_FOUND';

type ResponseError = {
  status: ServiceResponseError;
  data: { message: string };
};

type ResponseSuccess<T> = {
  status: string,
  data: T,
};

export type ServiceResponse<T> = ResponseError | ResponseSuccess<T>;