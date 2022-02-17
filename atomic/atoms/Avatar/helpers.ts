type TAvatarSize = {
  [key: string]: number
}

export const iconSize: TAvatarSize = {
  small: 22,
  medium: 44,
  large: 66,
}

export const mapSize = (size: keyof typeof iconSize) => iconSize[size]
