import type { Logic1 } from "./logic1";

class DefaultLogic1 implements Logic1 {
  constructor() {
    console.log("new DefaultLogic1");
  }

  doLogic(): void {
    console.log("doDefaultLogic1");
  }
}

export { DefaultLogic1 };
