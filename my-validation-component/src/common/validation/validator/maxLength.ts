import type { MyValidationCore } from '../type'

const maxLength: MyValidationCore = {
  validate(value, context) {
    if (value == null || value === '') {
      return true
    }

    if (typeof value !== 'string') {
      return false
    }

    // ---------------------
    const maxLength = Number(context.args[0])

    return [...value].length <= maxLength
  },
  getMessage(_value, context) {
    const maxLength = context.args[0]
    return `${maxLength}文字以内で入力してください。`
  },
}

export { maxLength }
