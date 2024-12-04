import type { Logic1 } from "@/lib/logic/logic1/logic1";
import type { Service1 } from "./service1";

class DefaultService1 implements Service1 {
  constructor(private logic1: Logic1) {
    console.log("new DefaultService1");
  }

  public doService(): void {
    console.log("doDefaultService1:begin");
    this.logic1.doLogic();
    console.log("doDefaultService1:end");
  }
}

export { DefaultService1 };
