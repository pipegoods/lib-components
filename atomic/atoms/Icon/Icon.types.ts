import { iconMap, iconSize } from './helpers'

export type IconProps = {
  type: keyof typeof iconMap
  size?: keyof typeof iconSize
  hasBackground?: boolean
}
