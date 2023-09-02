import { Meta, StoryObj } from "@storybook/react";
import Location from "../components/Location/Location";

const meta: Meta<typeof Location> = {
  title: "Section/Location",
  component: Location,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: () => <Location />,
};
