import Spacer from '../../atomic/layout/Spacer'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'layout/Spacer',
  component: Spacer,
} as ComponentMeta<typeof Spacer>

const Template: ComponentStory<typeof Spacer> = (args) => <Spacer {...args} />
const TemplateHorizontal: ComponentStory<typeof Spacer> = (args) => (
  <Spacer.horizontal {...args} />
)
const TemplateVertical: ComponentStory<typeof Spacer> = (args) => (
  <Spacer.vertical {...args} />
)

export const Default = Template.bind({})
Default.args = {
  size: 'lg',
}

export const ExtraSmall = Template.bind({})
ExtraSmall.args = {
  size: 'xs',
  isVisibly: true,
}

export const Small = Template.bind({})
Small.args = {
  size: 'sm',
  isVisibly: true,
}

export const Medium = Template.bind({})
Medium.args = {
  size: 'md',
  isVisibly: true,
}

export const Large = Template.bind({})
Large.args = {
  size: 'lg',
  isVisibly: true,
}

export const Horizontal = TemplateHorizontal.bind({})
Horizontal.args = {
  size: 'lg',
  isVisibly: true,
}

export const Vertical = TemplateVertical.bind({})
Vertical.args = {
  size: 'lg',
  isVisibly: true,
  maxHeight: 200,
}
