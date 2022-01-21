import { getSize } from './helpers'
import { SpacerProps } from './Spacer.types'
import styles from './Spacer.module.css'

const Horizontal = ({ size, isVisibly }: SpacerProps) => (
  <div
    className={`${styles.spacer} ${styles[getSize(size)]} ${
      isVisibly && styles['spacer-visibly']
    }`}
    style={{
      display: 'inline-block',
      width: '100%',
      height: getSize(size),
    }}
  ></div>
)

export default Horizontal
