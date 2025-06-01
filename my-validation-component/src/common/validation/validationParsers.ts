import type {
  MyValidationContext,
  MyValidationParseResult,
  MyValidationCore,
  MyValidator,
} from './type'

// -----------
import { halfAlphaNum } from './validator/halfAlphaNum'
import { maxLength } from './validator/maxLength'
import { minLength } from './validator/minLength'
import { required } from './validator/required'

const validators = new Map<string, MyValidationCore>()
validators.set('required', required)
validators.set('halfAlphaNum', halfAlphaNum)
validators.set('maxLength', maxLength)
validators.set('minLength', minLength)
// -----------

/**
 * 検証定義文字列を解析します。
 * @param rulesDefinitionText 検証定義文字列
 * @returns 解析結果
 */
function parseMyValidationRulesText(rulesDefinitionText: string): MyValidationParseResult[] {
  const validators: MyValidationParseResult[] = []

  const rulesDefinitions = rulesDefinitionText.split('|').map((s) => s.trim())

  for (const rulesDefinition of rulesDefinitions) {
    const nameAndArgs = rulesDefinition.split(':')
    const validationName = nameAndArgs[0]
    const validationArgArray = nameAndArgs[1]

    let validationArgs: MyValidationParseResult['args'] = []
    if (validationArgArray) {
      validationArgs = validationArgArray.split(',').map((s) => s.trim())
    }

    validators.push({
      validationName,
      args: validationArgs,
    })
  }

  return validators
}

/**
 * バリデーターを作成する。
 * @param parseResult 検証解析結果
 * @returns バリデーター
 */
function createMyValidation(parseResult: MyValidationParseResult): MyValidator {
  const validator = validators.get(parseResult.validationName)
  if (validator == null) {
    throw new Error(`validationName ${parseResult.validationName} was not found.`)
  }

  const validationName = parseResult.validationName
  const args = parseResult.args

  const validationContext: MyValidationContext = {
    validationName,
    args,
  }

  return {
    validate(value: any) {
      if (validator.validate(value, validationContext)) {
        return null
      }
      return validator.getMessage(value, validationContext)
    },
  }
}

/**
 * 検証定義文字列からバリデーター一覧を作成します。
 *
 * @param rulesDefinitionText 検証定義文字列
 * @returns バリデーター一覧
 */
function createMyValidationsFromRules(rulesDefinitionText: string): MyValidator[] {
  const parsedResults = parseMyValidationRulesText(rulesDefinitionText)

  const validators = parsedResults.map((r) => createMyValidation(r))

  return validators
}

export { createMyValidationsFromRules }
