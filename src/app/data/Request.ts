import { RequestInterface } from "./requestInterface";
import { GET } from "./rest/requests";
import { API } from "../constants/API";
import { AxiosResponse } from "axios";

export abstract class Request implements RequestInterface {
  public requestUrl: string = "";
  public requestBody: object;
  public requestHeaders: object;
  protected REST_SERVICE = {
    get: GET,
  };

  constructor({ body, headers }: { body?: object | undefined; headers?: object | undefined }) {
    this.requestBody = body ?? {};
    this.requestHeaders = headers ?? {};
  }

  async fetch(): Promise<object> {
    return {};
  }

  transformer(response: AxiosResponse<any, any>): object {
    return response;
  }

  getFetchUrl(): string {
    return API.url + this.requestUrl;
  }
}
