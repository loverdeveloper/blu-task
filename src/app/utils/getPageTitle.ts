import { CONFIG } from "@/constants/config";

export function getPageTitle(...pageTitle) {
  pageTitle.push(CONFIG.PAGE_TITLE.FA);
  return pageTitle?.[0] ? pageTitle.join(" | ") : pageTitle;
}
