import { ReactNode } from 'react'

export type ButtonProps = {
  /**
   * The text to display in the button.
   */
  children?: ReactNode
  /**
   * Type of button.
   */
  type?: 'primary' | 'secondary' | 'tertiary'
  /**
   * The button is block?
   * @default true
   */
  isBlock?: boolean
}
