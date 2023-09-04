import Services from "@/components/Services/Services";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Services> = {
  title: "Section/Services",
  component: Services,
};

export default meta;
type Story = StoryObj<typeof Services>;

export const Primary: Story = {
  render: () => <Services />
};
