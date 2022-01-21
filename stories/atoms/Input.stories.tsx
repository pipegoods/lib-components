import Input from '../../atomic/atoms/Input'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'atoms/Input',
  component: Input,
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />

export const Primary = Template.bind({})
Primary.args = {
  type: 'text',
  placeholder: 'Nombres',
}
