import { Meta, StoryObj } from "@storybook/react";
import { Services } from "../components/Services/Services";

const meta: Meta<typeof Services> = {
  title: "Section/Services",
  component: Services,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: () => <Services />,
};
