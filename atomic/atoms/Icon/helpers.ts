const ICONS_ASSETS_PATH = '/icons'

type TIconList = {
  [key: string]: string
}

const iconMap: TIconList = {
  arrowRight: 'arrow-right',
  homeOutline: 'home-outline',
  expandMore: 'expand-more',
}

export const mapType = (type: string) =>
  `${ICONS_ASSETS_PATH}/${iconMap[type]}.svg`
