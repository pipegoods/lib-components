const ICONS_ASSETS_PATH = '/icons'

type TIconList = {
  [key: string]: string
}

const iconMap: TIconList = {
  rightArrow: 'right-arrow',
  homeOutline: 'home-outline',
}

export const mapType = (type: string) =>
  `${ICONS_ASSETS_PATH}/${iconMap[type]}.svg`
