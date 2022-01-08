import { ButtonProps } from '@components/atoms/Button/Button.types'
import { IconProps } from '@components/atoms/Icon/Icon.types'

export type Props = {
  children?: React.ReactNode
  type: ButtonProps['type']
  icon: IconProps['type']
}
