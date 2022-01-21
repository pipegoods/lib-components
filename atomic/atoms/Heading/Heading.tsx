import { HeadingProps } from './Heading.types'
import styles from './Heading.module.css'

const Heading = ({
  children,
  size = 'base',
  color = 'default',
  weight = 'normal',
}: HeadingProps) => (
  <h1
    className={`${styles.heading} ${styles[`size-${size}`]} ${
      styles[`color-${color}`]
    } ${styles[`weight-${weight}`]}`}
  >
    {children}
  </h1>
)

export default Heading
