const DateFormatTokenType = Object.freeze({
  AMPM: Symbol('a'),
  YY: Symbol('yy'),
  YYYY: Symbol('yyyy'),
  M_MONTH: Symbol('M'),
  MM_MONTH: Symbol('MM'),
  D: Symbol('d'),
  DD: Symbol('dd'),
  H_12: Symbol('h'),
  HH_12: Symbol('hh'),
  H: Symbol('H'),
  HH: Symbol('HH'),
  M_MINUTE: Symbol('m'),
  MM_MINUTE: Symbol('mm'),
  S_SECOND: Symbol('s'),
  SS_SECOND: Symbol('ss'),
  S_MILLISECOND: Symbol('S'),
  SS_MILLISECOND: Symbol('SS'),
  SSS_MILLISECOND: Symbol('SSS'),

  LITERAL: Symbol('LITERAL'),
  END: Symbol('END'),
})

export { DateFormatTokenType }
