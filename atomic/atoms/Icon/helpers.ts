const ICONS_ASSETS_PATH = '/icons'

type TIconList = {
  [key: string]: string | number
}

const iconMap: TIconList = {
  arrowRight: 'arrow-right',
  homeOutline: 'home-outline',
  expandMore: 'expand-more',
}

const iconSize: TIconList = {
  sm: 15,
  md: 26,
  lg: 30,
  xl: 40,
}

export const mapType = (type: string) =>
  `${ICONS_ASSETS_PATH}/${iconMap[type]}.svg`

export const mapSize = (size: string) => iconSize[size]
