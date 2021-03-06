// eslint-disable-next-line
import { choices, decisions } from '../tokens/tokens'

// eslint-disable-next-line
const fs = require('fs')

const ToKebabCase = (str: string): string =>
  str
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/\s+/g, '-')
    .toLowerCase()

interface IObjectKeys {
  [key: string]: string | object
}

function isIObjectKeys(object: object | string): object is IObjectKeys {
  return typeof object === 'object'
}

const transformTokens = (parentKey: string, object: IObjectKeys): string => {
  const objectKeys = Object.keys(object)
  return objectKeys.reduce((tokensTransformed, objectKey) => {
    const value: IObjectKeys | string | object = object[objectKey]

    if (Array.isArray(value)) {
      const customProperty = parentKey
        ? `${parentKey}-${objectKey}`
        : `${objectKey}`
      return `${tokensTransformed}\n\t--${ToKebabCase(
        customProperty
      )} : ${value.join(', ')};`
    } else if (isIObjectKeys(value)) {
      const customPropertyO =
        parentKey !== ''
          ? `${parentKey}-${ToKebabCase(objectKey)}`
          : `${ToKebabCase(objectKey)}`
      return `${tokensTransformed}${transformTokens(customPropertyO, value)}`
    }

    return `${tokensTransformed}
        --${parentKey}-${ToKebabCase(objectKey)}: ${value};`
  }, '')
}

const BuildTokens = (): void => {
  const customProperties = `${transformTokens('', choices)}${transformTokens(
    '',
    decisions
  )}`

  const data = `:root {${customProperties}}`

  fs.writeFile('./styles/tokens.css', data, 'utf8', (error: Error) => {
    if (error) {
      return console.log(error)
    }
    console.log('The file was saved!')
  })
}

BuildTokens()
