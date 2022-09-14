export type HttpClientMethods = "get" | "post" | "put" | "delete" | "patch";

export abstract class HttpClientHeaders {}

export abstract class HttpClientOptions {
  headers: Record<string, string>;
}

export abstract class HttpClientBuild {
  url: string;
  options: HttpClientOptions;
  method: HttpClientMethods;
  body: Record<string, any>;
  [key: string]: any;
}

export type HttpClientResponse<T = any> = T;

export abstract class HttpClient {
  get: () => this;
  post: () => this;
  put: () => this;
  patch: () => this;
  delete?: () => this;
  url: (value: string) => this;
  body: (data: Record<string, any>) => this;
  headers: (data: Record<string, string>) => this;
  build: () => Promise<HttpClientResponse>;
}
