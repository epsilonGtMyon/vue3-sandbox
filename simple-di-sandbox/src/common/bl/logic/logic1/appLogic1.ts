import type { Logic1 } from "./logic1";

class AppLogic1 implements Logic1 {
  doLogic(): void {
    console.log("[AppLogic1] doLogic: begin");
    console.log("[AppLogic1] doLogic: end");
  }
}

// --------------

export { AppLogic1 };
