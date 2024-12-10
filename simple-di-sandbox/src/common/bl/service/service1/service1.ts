import { useContainerRegister } from "@/common/di/simpleContainer";
import { useLogic1, type Logic1 } from "../../logic/logic1/logic1";

interface Service1 {
  doService(): void;
}

class DefaultService1 implements Service1 {
  constructor(private logic1: Logic1) {}

  doService(): void {
    console.log("[DefaultService1] doService: begin");
    this.logic1.doLogic();
    console.log("[DefaultService1] doService: end");
  }
}

// --------------
const {
  key: keyService1,
  use: useService1,
  register: registerService1,
} = useContainerRegister<Service1>("service1", () => {
  const logic1 = useLogic1();
  return new DefaultService1(logic1);
});

export {
  type Service1,
  DefaultService1,
  keyService1,
  useService1,
  registerService1,
};
