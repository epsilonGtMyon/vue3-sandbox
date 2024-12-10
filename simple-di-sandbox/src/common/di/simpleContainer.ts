// from vue
interface ContainerInjectionConstraint<T> {}
type ContainerInjectionKey<T> = symbol & ContainerInjectionConstraint<T>;

type Factory<T> = (container: SimpleContainer) => T;

/**
 * コンテナ
 */
class SimpleContainer {
  private _container: any = {};

  constructor() {}

  /**
   * コンテナへの登録
   * @param key
   * @param factory
   */
  register<T>(key: ContainerInjectionKey<T>, factory: Factory<T>): void {
    this._container[key] = factory;
  }

  /**
   * コンテナから取得
   * @param key
   * @returns
   */
  get<T>(key: ContainerInjectionKey<T>): T {
    const factory: Factory<T> = this._container[key];
    return factory(this);
  }
}

// -------------------------

/**
 * コンテナインスタンスのホルダー
 */
const myContainerHolder = {
  /** コンテナインスタンス */
  instance: null as SimpleContainer | null,
};

/**
 * コンテナインスタンスを取得します。
 * @returns
 */
function useContainer(): SimpleContainer {
  if (myContainerHolder.instance == null) {
    throw new Error("myContainerHolder.instance is null.");
  }
  return myContainerHolder.instance;
}

/**
 * コンテナインスタンスを設定します。
 * @param instance
 */
function setContainer(instance: SimpleContainer) {
  if (myContainerHolder.instance != null) {
    throw new Error("myContainerHolder.instance has instance.");
  }
  myContainerHolder.instance = instance;
}

// -------------------------

/**
 * コンテナへの定義に使用する関数などを作成
 * @param keyName
 * @param factory
 * @returns
 */
function useContainerRegister<T>(keyName: string, factory: Factory<T>) {
  const key: ContainerInjectionKey<T> = Symbol(keyName);

  const use: () => T = () => {
    const container = useContainer();
    return container.get(key);
  };

  const register = (container: SimpleContainer) => {
    container.register(key, factory);
  };

  return { key, use, register };
}

export { type ContainerInjectionKey, SimpleContainer, useContainer, setContainer, useContainerRegister };
