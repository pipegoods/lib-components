import { choices } from '../../../tokens/tokens'

export const getSize = (size: string): string =>
  choices.spacing[size as keyof typeof choices.spacing]
