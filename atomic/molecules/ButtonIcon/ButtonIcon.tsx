import { Props } from './ButtonIcon.types'
import Button from '../../atoms/Button'
import Icon from '../../atoms/Icon'

const ButtonIcon = ({ children, type = 'secondary', icon }: Props) => (
  <Button type={type} isBlock={false}>
    {children} <Icon type={icon} />
  </Button>
)

export default ButtonIcon
