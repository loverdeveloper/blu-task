import { Request } from "../Request";

export class PaymentHistoryRequest extends Request {
  requestUrl = "gHruOU/data";

  async fetch(): Promise<object> {
    const request = await this.REST_SERVICE.get({
      url: this.getFetchUrl(),
      params: this.requestBody,
      headers: this.requestHeaders,
    });
    console.log(request);
    return this.transformer();
  }

  transformer(): object {
    return {};
  }
}
