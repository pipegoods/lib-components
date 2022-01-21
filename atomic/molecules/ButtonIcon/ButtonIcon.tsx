import { Props } from './ButtonIcon.types'
import Button from '../../atoms/Button'
import Icon from '../../atoms/Icon'
import Spacer from '../../layout/Spacer'

const ButtonIcon = ({ children, type = 'secondary', icon }: Props) => (
  <Button type={type} isBlock={false}>
    {children}
    <Spacer.vertical size="xs" />
    <Icon type={icon} />
  </Button>
)

export default ButtonIcon
