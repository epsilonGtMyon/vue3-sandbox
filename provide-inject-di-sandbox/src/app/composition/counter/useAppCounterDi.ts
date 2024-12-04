import type { App } from "vue";
import { keyCounter } from "@/lib/composition/counter/counterDi";
import { useAppCounter } from "./useAppCounter";

function provideAppCounter(app: App) {
  app.provide(keyCounter, useAppCounter);
}

export { provideAppCounter };
