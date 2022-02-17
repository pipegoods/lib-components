import Picture from '../Picture'
import { AvatarProps } from './Avatar.types'
import styles from './Avatar.module.css'
import { mapSize } from './helpers'

const Avatar = ({ src, size = 'medium', alt = 'Avatar' }: AvatarProps) => (
  <div className={styles.avatar}>
    <Picture
      src={src}
      alt={alt}
      width={mapSize(size)}
      height={mapSize(size)}
      isRounded
    />
  </div>
)

export default Avatar
