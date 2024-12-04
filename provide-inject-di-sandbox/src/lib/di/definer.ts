import { inject, type App, type InjectionKey } from "vue";

/**
 * 定義の結果
 */
type DefineResult<T> = [
  InjectionKey<() => T>, // key
  () => T, // composition
  (app: App) => void // provide
];

/**
 * 定義
 *
 * @param symbolKey キーの名前
 * @param compositionFunc コンポジション関数
 * @returns 定義結果
 */
const define = <T>(
  symbolKey: string,
  compositionFunc: () => T
): DefineResult<T> => {
  const key = Symbol(symbolKey) as InjectionKey<() => T>;

  const use = () => {
    const compositionFuncDelegate = inject(key)!;
    return compositionFuncDelegate();
  };

  const provide = (app: App) => {
    app.provide(key, compositionFunc);
  };

  return [key, use, provide];
};

export { type DefineResult, define };
