import { Meta, StoryObj } from "@storybook/react";
import Benefits from "../components/Benefits/Benefits";

const meta: Meta<typeof Benefits> = {
  title: "Section/Benefits",
  component: Benefits,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: () => <Benefits />,
};
