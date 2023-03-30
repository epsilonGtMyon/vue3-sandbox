import { createInputFilter } from "./createInputFilter";

function isHalfAlphaNum(value) {
  if ("0" <= value && value <= "9") {
    return true;
  }
  if ("a" <= value && value <= "z") {
    return true;
  }
  if ("A" <= value && value <= "Z") {
    return true;
  }
  return false;
}

const halfAlphaNumFilter = createInputFilter(isHalfAlphaNum);

export { halfAlphaNumFilter };
