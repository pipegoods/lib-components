import { choices } from '../../../tokens/tokens'

export type SpacerProps = {
  size: keyof typeof choices.spacing
  isVisibly?: boolean
  maxHeight?: string | number
}
