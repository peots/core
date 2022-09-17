import axios, { AxiosError } from "axios";
import {
  HttpClientApp,
  HttpClientBuild,
  HttpClientMethods,
} from "../../contracts/http-client.contract";

import * as httpStatusCode from "../../global/http/http-status-code.global";

export class AxiosAdapter implements HttpClientApp {
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

  body(data: Record<string, any> | string) {
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
