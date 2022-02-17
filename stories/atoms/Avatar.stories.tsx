import Avatar from '../../atomic/atoms/Avatar'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'atoms/Avatar',
  component: Avatar,
} as ComponentMeta<typeof Avatar>

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />

export const Default = Template.bind({})
Default.args = {
  src: 'https://picsum.photos/300/300',
}
