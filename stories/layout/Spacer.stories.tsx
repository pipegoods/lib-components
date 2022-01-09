import React from 'react'
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
  size: '8',
}

export const Visibly = Template.bind({})
Visibly.args = {
  size: '8',
  isVisibly: true,
}

export const Horizontal = TemplateHorizontal.bind({})
Horizontal.args = {
  size: '8',
  isVisibly: true,
}

export const Vertical = TemplateVertical.bind({})
Vertical.args = {
  size: '8',
  isVisibly: true,
  maxHeight: 200,
}
