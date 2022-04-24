import { Request } from "../Request";
import { AxiosResponse } from "axios";

export class PaymentHistoryRequest extends Request {
  requestUrl = "gHruOU/data";

  async fetch(): Promise<object> {
    const request = await this.REST_SERVICE.get({
      url: this.getFetchUrl(),
      params: this.requestBody,
      headers: this.requestHeaders,
    });

    return this.transformer(request);
  }

  transformer({ data }: AxiosResponse<any, any>): object {
    return data;
  }
}
