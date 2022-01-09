import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Dropdown from '../../atomic/molecules/Dropdown'

export default {
  title: 'molecules/Dropdown',
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>

const Template: ComponentStory<typeof Dropdown> = (args) => (
  <Dropdown {...args} />
)

export const Default = Template.bind({})
Default.args = {
  value: '1',
  options: [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' },
  ],
  onChange: (event) => console.log(event.target.value),
}
