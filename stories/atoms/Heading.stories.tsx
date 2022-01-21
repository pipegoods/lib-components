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

export const Colors = () => (
  <>
    <Heading size="lg" color="default">
      Texto por defecto
    </Heading>
    <Heading size="lg" color="primary">
      Texto primario
    </Heading>
  </>
)

export const Sizes = () => (
  <>
    <Heading>Texto base</Heading>
    <Heading size="sm">Texto pequeño</Heading>
    <Heading size="md">Texto mediano</Heading>
    <Heading size="lg">Texto grande</Heading>
    <Heading size="xl">Texto extra grande</Heading>
    <Heading size="2xl">Texto extra extra grande</Heading>
  </>
)
