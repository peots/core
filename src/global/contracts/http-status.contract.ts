export interface HttpStatusResponse<T> {
  requestData: Record<string, any> | string;
  responseData: T;
  requestHeaders: Record<string, string>;
  responseHeaders: Record<string, string>;
}
