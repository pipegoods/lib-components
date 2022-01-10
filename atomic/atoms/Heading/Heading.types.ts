import { choices } from 'tokens/tokens'

export type HeadingProps = {
  /**
   * The text to display in the Heading.
   */
  children: React.ReactNode
  /**
   * The size of the Heading.
   * @default "medium"
   */
  size?: keyof typeof choices.fontSize

  /**
   * The color of the Heading.
   *  @default "default"
   * @example
   * <Heading color="primary">Primary Heading</Heading>
   */
  color?: 'primary' | 'default'
  weight?: 'bold' | 'normal'
}
