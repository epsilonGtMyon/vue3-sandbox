import type { MyValidationCore } from '../type'

const minLength: MyValidationCore = {
  validate(value, context) {
    if (value == null || value === '') {
      return true
    }

    if (typeof value !== 'string') {
      return false
    }

    // ---------------------
    const minLength = Number(context.args[0])

    return [...value].length >= minLength
  },
  getMessage(_value, context) {
    const minLength = context.args[0]
    return `${minLength}文字以上で入力してください。`
  },
}

export { minLength }
