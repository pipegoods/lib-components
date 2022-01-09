import React from 'react'
import Spacer from '../../atomic/layout/Spacer'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'layout/Spacer',
  component: Spacer,
} as ComponentMeta<typeof Spacer>

const Template: ComponentStory<typeof Spacer> = (args) => <Spacer {...args} />

export const Default = Template.bind({})
Default.args = {
  size: '12',
}

export const Visibly = Template.bind({})
Visibly.args = {
  size: '12',
  isVisibly: true,
}
