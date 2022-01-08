import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import ButtonIcon from '../../atomic/molecules/ButtonIcon'

export default {
  title: 'molecules/ButtonIcon',
  component: ButtonIcon,
} as ComponentMeta<typeof ButtonIcon>

const Template: ComponentStory<typeof ButtonIcon> = (args) => (
  <ButtonIcon {...args} />
)

export const Default = Template.bind({})
Default.args = {
  children: 'ButtonIcon',
  icon: 'arrowRight',
}
