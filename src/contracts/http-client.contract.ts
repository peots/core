export type HttpClientMethods = "get" | "post" | "put" | "delete" | "patch";

export abstract class HttpClientHeaders {}

export abstract class HttpClientOptions {
  headers: Record<string, string>;
}

export abstract class HttpClientBuild {
  url: string;
  options: HttpClientOptions;
  method: HttpClientMethods;
  body: Record<string, any> | string;
  [key: string]: any;
}

export interface HttpClientResponse<T> {
  requestData: Record<string, any> | string;
  responseData: T;
  requestHeaders: Record<string, string>;
  responseHeaders: Record<string, string>;
}

export abstract class HttpClientApp {
  get: () => this;
  post: () => this;
  put: () => this;
  patch: () => this;
  delete?: () => this;
  url: (value: string) => this;
  body: (data: Record<string, any> | string) => this;
  headers: (data: Record<string, string>) => this;
  build: <T = Record<string, any>>() => Promise<HttpClientResponse<T>>;
}
