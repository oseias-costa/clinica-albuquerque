import { Meta, StoryObj } from "@storybook/react";
import { Headline } from "../components/Headline/Headline";

const meta: Meta<typeof Headline> = {
  title: "Section/Headline",
  component: Headline,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: () => <Headline />,
};
