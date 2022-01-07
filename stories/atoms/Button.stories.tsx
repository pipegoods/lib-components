import React from 'react'
import Button from '../../atomic/atoms/Button'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'atoms/Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  type: 'primary',
  children: 'Primary',
}

export const Secondary = Template.bind({})
Secondary.args = {
  type: 'secondary',
  children: 'Secondary',
}

export const Tertiary = Template.bind({})
Tertiary.args = {
  type: 'tertiary',
  children: 'Tertiary',
}
