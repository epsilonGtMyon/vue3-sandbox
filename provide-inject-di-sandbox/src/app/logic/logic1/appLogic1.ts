import type { Logic1 } from "@/lib/logic/logic1/logic1";

class AppLogic implements Logic1 {
  constructor() {
    console.log("new AppLogic");
  }
  
  doLogic(): void {
    console.log("doAppLogic");
  }
}

export { AppLogic };
