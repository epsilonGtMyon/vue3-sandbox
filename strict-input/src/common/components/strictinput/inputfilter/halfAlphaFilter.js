import { createInputFilter } from "./createInputFilter";

function isHalfAlpha(value) {
  if ("a" <= value && value <= "z") {
    return true;
  }
  if ("A" <= value && value <= "Z") {
    return true;
  }
  return false;
}

const halfAlphaFilter = createInputFilter(isHalfAlpha);

export { halfAlphaFilter };
