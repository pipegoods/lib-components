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
  src: 'https://placeimg.com/600/600/people',
  alt: 'Placeholder',
  width: 300,
}
