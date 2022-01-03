import { effectScope, onScopeDispose } from "vue";



/**
 * 
 * @param {*} fn 
 * 
 * 参考：https://github.com/vuejs/rfcs/blob/master/active-rfcs/0041-reactivity-effect-scope.md
 */
function wrapScope(fn) {
  let count = 0;
  let state = null;
  let scope = null;

  const dispose = () => {
    count--;
    if (count <= 0) {
      // count が0 
      // つまり、使用中のものがなくなった時に実体を廃棄する。

      state = null;
      scope.stop();
      scope = null;
    }
  };
  
  return (...args) => {
    count++;
    if (state == null) {
      //trueにするとスコープの親子関係が切り離される
      scope = effectScope(true);
      state = fn(...args);
    }

    //おもな呼び出しタイミングはコンポーネント廃棄の時
    onScopeDispose(dispose);

    return state;
  };
}

export {
  wrapScope
}