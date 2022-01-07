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
    if (isIObjectKeys(value)) {
      const customProperty =
        parentKey !== ''
          ? `${parentKey}-${ToKebabCase(objectKey)}`
          : `${objectKey}`
      return `${tokensTransformed}${transformTokens(customProperty, value)}`
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

  fs.writeFile('./tokens.css', data, 'utf8', (error: Error) => {
    if (error) {
      return console.log(error)
    }
    console.log('The file was saved!')
  })
}

BuildTokens()
