import { IconProps } from './Icon.types'
import { mapSize, mapType } from './helpers'
import Picture from '../Picture'
import styles from './Icon.module.css'

const Icon = ({ type, size = 'md', hasBackground, className }: IconProps) => (
  <div
    className={`${styles.icon} ${
      hasBackground && styles['has-background']
    } ${className}`}
    style={{ width: mapSize(size), height: mapSize(size) }}
  >
    <Picture src={mapType(type)} alt={`icono ${type}`} width={mapSize(size)} />
  </div>
)

export default Icon
