import { Ref } from "vue";
import { ModalResult } from "./ModalResult";

class ModalLauncher {
  
  /**
   * モーダル起動
   * @param modalVm 
   * @param param 
   * @returns 
   */
  public static show<R, P = unknown>(modalVm: Ref<any>, param?: P) {
    return new Promise<ModalResult<R>>((resolve) => {
      //refのコンポーネントの直下にあるModalを取り出している
      const childComponent = modalVm.value.$;
      const modalComponent = childComponent.subTree.component;
      modalComponent.ctx.show(resolve, param);
    });
  }
}

export { ModalLauncher };
