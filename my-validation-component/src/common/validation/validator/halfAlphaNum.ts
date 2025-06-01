import type { MyValidationCore } from '../type'

const halfAlphaNum: MyValidationCore = {
  validate(value, _context) {
    if (value == null) {
      return true
    }

    if (typeof value !== 'string') {
      return false
    }

    return /^[a-zA-Z0-9]+$/.test(value)
  },
  getMessage(_value, _context) {
    return '半角英数で入力してください。'
  },
}

export { halfAlphaNum }
