import Main from '.'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Main> = {
  title: 'Main',
  component: Main,
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' }
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}

export default meta
type Story = StoryObj<typeof Main>

export const Basic: Story = {
  args: {
    title: 'React Avançado',
    description: 'TypeScript, ReactJS, NextJS e Styled Components'
  }
}

export const Test: Story = {
  args: {
    title: 'Title Primary',
    description: 'Description Primary'
  },
  parameters: {
    backgrounds: {
      default: 'light'
    }
  }
}
