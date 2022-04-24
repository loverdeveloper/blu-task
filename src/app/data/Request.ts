import { RequestInterface } from "./requestInterface";
import { GET } from "./rest/requests";
import { API } from "../constants/API";

export abstract class Request implements RequestInterface {
  public requestUrl: string = "";
  public requestBody: object;
  public requestHeaders: object;
  protected REST_SERVICE = {
    get: GET,
  };

  constructor({
    url,
    body,
    headers,
  }: {
    url?: string | undefined;
    body?: object | undefined;
    headers?: object | undefined;
  }) {
    this.requestBody = body ?? {};
    this.requestHeaders = headers ?? {};
  }

  async fetch(): Promise<object> {
    return {};
  }

  transformer(): object {
    return {};
  }

  getFetchUrl(): string {
    return API.url + this.requestUrl;
  }
}
