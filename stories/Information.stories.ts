import { Meta, StoryObj } from "@storybook/react";
import Information from "../components/Information/Information";

const meta: Meta<typeof Information> = {
  title: "Section/Information",
  component: Information,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: () => <Information />,
};
