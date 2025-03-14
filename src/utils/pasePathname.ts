import { pathname } from "../config/pathname";

export function parsePathname(pathName: string, lang: "th" | "en"): string {
    return pathname[pathName] ? pathname[pathName][lang] : pathName;
}