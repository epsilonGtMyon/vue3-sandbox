import { define } from "@/lib/di/definer";
import type { Logic1 } from "./logic1";
import { DefaultLogic1 } from "./defaultLogic1";

const [keyLogic1, useLogic1, provideLogic1] = define<Logic1>(
  "logic1",
  () => new DefaultLogic1()
);

export { keyLogic1, useLogic1, provideLogic1 };
