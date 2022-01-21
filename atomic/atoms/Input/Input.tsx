import { InputProps } from './Input.types'
import styles from './Input.module.css'

const Input = ({ type, value, onChange, placeholder }: InputProps) => (
  <input
    className={styles.input}
    type={type}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
  />
)

export default Input
