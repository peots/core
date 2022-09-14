import axios, { AxiosError } from "axios";
import {
  HttpClient,
  HttpClientBuild,
  HttpClientMethods,
} from "../../interfaces/http-client.interface";

import * as httpStatusCode from "./http-status-code";

export class AxiosAdapter implements HttpClient {
  private generalOptions = {} as HttpClientBuild;

  get() {
    this.generalOptions.method = this.get.name as HttpClientMethods;
    return this;
  }

  post() {
    this.generalOptions.method = this.post.name as HttpClientMethods;
    return this;
  }

  put() {
    this.generalOptions.method = this.put.name as HttpClientMethods;
    return this;
  }
  patch() {
    this.generalOptions.method = this.patch.name as HttpClientMethods;
    return this;
  }

  delete() {
    this.generalOptions.method = this.delete.name as HttpClientMethods;
    return this;
  }

  url(url: string) {
    this.generalOptions.url = url;
    return this;
  }

  headers(headers: Record<string, string>) {
    this.generalOptions.options = { headers };
    return this;
  }

  body(data: Record<string, any>) {
    this.generalOptions.body = data;
    return this;
  }

  private getHttpResponseClass(statusCode: number) {
    return Object.values(httpStatusCode).find(
      (hsc) => hsc.statusCode === statusCode
    );
  }

  private async callHttpMethod() {
    const { method, url, options, body } = this.generalOptions;

    let headers: Record<string, string> = {};
    if (options) Object.assign(headers, options.headers);

    try {
      const { data, request, status } = await axios({
        method,
        url,
        headers,
        data: body,
      });

      const HttpResponseClass = this.getHttpResponseClass(status);

      return new HttpResponseClass(body, data, headers, request.res.headers);
    } catch (error) {
      if (error instanceof AxiosError) {
        const HttpResponseClass = this.getHttpResponseClass(
          error.response.status
        );
        throw new HttpResponseClass(
          body,
          error.response.data,
          headers,
          error.response.headers
        );
      }
      throw error;
    }
  }

  async build() {
    return this.callHttpMethod();
  }
}

(async () => {
  const { responseData } = await new AxiosAdapter()
    .post()
    .body({ ok: true })
    .url("https://my-json-server.typicode.com/typicode/demo/posts")
    .build();
})();
