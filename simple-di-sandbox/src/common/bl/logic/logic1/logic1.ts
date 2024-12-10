import { useContainerRegister } from "@/common/di/simpleContainer";

interface Logic1 {
  doLogic(): void;
}

class DefaultLogic1 implements Logic1 {
  doLogic(): void {
    console.log("[DefaultLogic1] doLogic: begin");
    console.log("[DefaultLogic1] doLogic: end");
  }
}

// --------------

const {
  key: keyLogic1,
  use: useLogic1,
  register: registerLogic1,
} = useContainerRegister<Logic1>("logic1", () => new DefaultLogic1());

export { type Logic1, DefaultLogic1, keyLogic1, useLogic1, registerLogic1 };
