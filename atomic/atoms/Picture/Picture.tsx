import { PictureProps } from './Picture.types'
import styles from './Picture.module.css'
import { getWidth } from './helpers'

const Picture = ({
  width = '100%',
  src,
  alt,
  height = 'auto',
  isRounded = false,
}: PictureProps) => (
  <picture className={`${styles.picture} ${isRounded && styles['is-rounded']}`}>
    <img alt={alt} src={src} style={{ maxWidth: getWidth(width), height }} />
  </picture>
)

export default Picture
