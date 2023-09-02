import { Meta, StoryObj } from '@storybook/react'
import { Header } from '../components/Header/Header'

const meta: Meta<typeof Header> = {
    title: 'Section/Header',
    component: Header
}

export default meta
type Story: StoryObj = <typeof meta>

export const Primary: Story = {
    render: () => <Header />
}