import Icon from '../../atomic/atoms/Icon'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'atoms/Icon',
  component: Icon,
} as ComponentMeta<typeof Icon>

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />

export const Default = Template.bind({})
Default.args = {
  type: 'arrowRight',
}

export const HasBackground = Template.bind({})
HasBackground.args = {
  type: 'arrowRight',
  hasBackground: true,
}
