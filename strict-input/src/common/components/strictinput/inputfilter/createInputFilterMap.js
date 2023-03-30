import { halfAlphaFilter } from "./halfAlphaFilter";
import { halfAlphaNumFilter } from "./halfAlphaNumFilter";
import { numberFilter } from "./numberFilter";

function createInputFilterMap() {
  const filters = new Map();
  filters.set("half-alpha", halfAlphaFilter);
  filters.set("half-alpha-num", halfAlphaNumFilter);
  filters.set("number", numberFilter);

  return filters;
}

export { createInputFilterMap };
