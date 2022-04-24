import { Request } from "../Request";
import { AxiosResponse } from "axios";

export type PaymentHistoryRequestType = {
  amount: number;
  date: string;
  id: number;
  isWithdrawal: boolean;
  referenceNumber: string;
  trackingCode: number;
};
export class PaymentHistoryRequest extends Request {
  requestUrl = "gHruOU/data";

  async fetch(): Promise<PaymentHistoryRequestType[]> {
    const request = await this.REST_SERVICE.get({
      url: this.getFetchUrl(),
      params: this.requestBody,
      headers: this.requestHeaders,
    });

    return this.transformer(request);
  }

  transformer({ data }: AxiosResponse<any, any>): PaymentHistoryRequestType[] {
    return data.map(function (transaction) {
      return {
        amount: transaction.amount,
        date: transaction.date,
        id: transaction.id,
        isWithdrawal: transaction.isWithdrawal,
        referenceNumber: transaction.reference_number,
        trackingCode: transaction.tracking_code,
      };
    });
  }
}
//amount: 85684189
// date: "Aug 10, 2021 8:08 AM"
// id: 9
// isWithdrawal: true
// reference_number: "SKU_545"
// tracking_code: 72929
