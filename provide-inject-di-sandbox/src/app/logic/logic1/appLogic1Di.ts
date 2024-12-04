import type { App } from "vue";
import { keyLogic1 } from "@/lib/logic/logic1/logic1Di";
import { AppLogic } from "./appLogic1";

function provideAppLogic1(app: App) {
  app.provide(keyLogic1, () => new AppLogic());
}

export {
  provideAppLogic1
}
