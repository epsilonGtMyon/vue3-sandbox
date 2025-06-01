import type { MyValidationCore } from '../type'

const required: MyValidationCore = {
  validate(value, _context) {
    if (value == null) {
      return false
    }

    if (typeof value === 'string') {
      if (value === '') {
        return false
      }
      return true
    }

    if (Array.isArray(value) && value.length === 0) {
      return false
    }
    return true
  },
  getMessage(_value, _context) {
    return '必須です。'
  },
}

export { required }
