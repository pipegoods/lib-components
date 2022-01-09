const ICONS_ASSETS_PATH = '/icons'

type TIconMap = {
  [key: string]: string
}

type TIconSize = {
  [key: string]: number
}

export const iconMap: TIconMap = {
  arrowRight: 'arrow-right',
  homeOutline: 'home-outline',
  expandMore: 'expand-more',
}

export const iconSize: TIconSize = {
  sm: 15,
  md: 26,
  lg: 30,
  xl: 40,
}

export const mapType = (type: keyof typeof iconMap) =>
  `${ICONS_ASSETS_PATH}/${iconMap[type]}.svg`

export const mapSize = (size: keyof typeof iconSize) => iconSize[size]
