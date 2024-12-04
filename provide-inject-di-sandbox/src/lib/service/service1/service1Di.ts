import { define } from "@/lib/di/definer";
import { useLogic1 } from "@/lib/logic/logic1/logic1Di";
import type { Service1 } from "./service1";
import { DefaultService1 } from "./defaultService1";

const [keyService1, useService1, provideService1] = define<Service1>(
  "service1",
  () => {
    const logic1 = useLogic1();
    return new DefaultService1(logic1);
  }
);

export { keyService1, useService1, provideService1 };
