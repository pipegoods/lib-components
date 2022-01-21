import { ButtonProps } from './Button.types'
import styles from './Button.module.css'

const Button = ({
  children,
  type = 'primary',
  isBlock = true,
}: ButtonProps) => (
  <button
    className={`${styles.button} ${styles[`type-${type}`]} ${
      isBlock && type !== 'tertiary' && styles[`is-block`]
    }`}
  >
    {children}
  </button>
)

export default Button
