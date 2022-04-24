import { addCommas, digitsEnToFa } from "@persian-tools/persian-tools";

export const getCurrencyView = (price, hasCurrency = true) => {
  return digitsEnToFa(addCommas(price) + (hasCurrency ? " ریال " : ""));
};
