export interface RequestInterface {
  requestUrl: string;
  requestBody?: object;
  requestHeaders?: object;

  fetch(): Promise<object>;
  getFetchUrl(): string;
  transformer(): object;
}
