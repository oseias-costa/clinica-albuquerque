import Header from '@/components/Header/Header'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Header> = {
    title: 'Section/Header',
    component: Header
} 

export default meta
type Story = StoryObj<typeof Header>

export const Primary: Story = {
    render: () => <Header />
}