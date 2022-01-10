import { choices } from '../../../tokens/tokens'

export const getSize = (size: string): string | number =>
  choices.spacing[size as keyof typeof choices.spacing]
