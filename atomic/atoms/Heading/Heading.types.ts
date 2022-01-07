export type Props = {
  /**
   * The text to display in the Heading.
   */
  children: React.ReactNode
  /**
   * The size of the Heading.
   * @default "medium"
   */
  size?: 'sm' | 'md' | 'lg'

  /**
   * The color of the Heading.
   *  @default "default"
   * @example
   * <Heading color="primary">Primary Heading</Heading>
   */
  color?: 'primary' | 'default'
}
