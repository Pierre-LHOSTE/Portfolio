import en from "../en";
import type { Translation } from "../i18n-types";

function replaceValuesWithSquares<T extends Record<string, unknown>>(obj: T): T {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }

  const newObj = (Array.isArray(obj) ? [] : {}) as T;

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const value = obj[key];
      if (typeof value === "object" && value !== null) {
        newObj[key] = replaceValuesWithSquares(value as Record<string, unknown>) as T[typeof key];
      } else if (typeof value === "string") {
        newObj[key] = value.replace(/[^ ]/g, "▩") as T[typeof key];
      } else {
        newObj[key] = value?.toString().replace(/[^ ]/g, "▩") as T[typeof key];
      }
    }
  }

  return newObj;
}

const debugJson = replaceValuesWithSquares(en) as Translation;

export default debugJson;
