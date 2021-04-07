import { getCurrentInstance } from 'vue'
import { ModalCloser } from './ModalCloser'

const useModalCloser = () => {
  const vm = getCurrentInstance()

  return new ModalCloser(vm)
}

export { useModalCloser }
