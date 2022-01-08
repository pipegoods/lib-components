import React from 'react'
import Picture from '../../atomic/atoms/Picture'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'atoms/Picture',
  component: Picture,
} as ComponentMeta<typeof Picture>

const Template: ComponentStory<typeof Picture> = (args) => <Picture {...args} />

export const Default = Template.bind({})
Default.args = {
  src: 'https://via.placeholder.com/640',
  alt: 'Placeholder',
  width: 640,
}
