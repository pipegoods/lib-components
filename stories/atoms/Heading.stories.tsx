import React from 'react'
import Heading from '../../atomic/atoms/Heading'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'atoms/Heading',
  component: Heading,
} as ComponentMeta<typeof Heading>

const Template: ComponentStory<typeof Heading> = (args) => <Heading {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Texto por defecto',
}

export const Primary = Template.bind({})
Primary.args = {
  children: 'Texto primario',
  color: 'primary',
}

export const Small = Template.bind({})
Small.args = {
  children: 'Texto pequeño',
  size: 'sm',
}

export const Medium = Template.bind({})
Medium.args = {
  children: 'Texto mediano',
  size: 'md',
}

export const Large = Template.bind({})
Large.args = {
  children: 'Texto grande',
  size: 'lg',
}
