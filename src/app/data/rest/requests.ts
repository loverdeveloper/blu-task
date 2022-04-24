import axios from "axios";

export const GET = async ({
  url,
  params,
  headers,
}: {
  url: string;
  params: object;
  headers: any;
}) => {
  return await axios.get(url, {
    params: params,
    headers: headers,
  });
};
