import { wrapScope } from "./wrapScope";
import { useWindowSize } from "./useWindowSize";

// wrapScope でラップすることで、
// 関数呼び出し毎にグローバルリスナーが登録されるのではなく
// グローバルリスナーは一つのみ
// 参照がなくなればグローバルのリスナーも削除される
// ということができるようになる。
const useWindowSize2 = wrapScope(useWindowSize);

export { useWindowSize2 };
