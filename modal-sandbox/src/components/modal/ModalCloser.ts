import { ComponentInternalInstance } from '@vue/runtime-core'

class ModalCloser {
  constructor(private vm: ComponentInternalInstance | null) {}

  public close(result?: unknown) {
    this.extractModal().close(result)
  }
  public cancel() {
    this.extractModal().cancel()
  }

  private extractModal() {
    //<template>
    //  <Modal> hogehoge</Modal>
    //</template>
    //のModalをとってきている
    return (this.vm as any).subTree.component.ctx
  }
}

export { ModalCloser }
