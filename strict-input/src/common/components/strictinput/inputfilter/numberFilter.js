import { createInputFilter } from "./createInputFilter";

function isNumber(value) {
  return "0" <= value && value <= "9";
}

const numberFilter = createInputFilter(isNumber);

export { numberFilter };
