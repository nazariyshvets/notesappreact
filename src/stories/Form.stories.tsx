import { Provider } from "react-redux";
import type { Meta, StoryObj } from "@storybook/react";
import Form from "../components/Form";
import store from "../redux/store";

const meta = {
  title: "Components/Form",
  component: Form,
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
  tags: ["autodocs"],
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onClose: () => {},
  },
};

export const Prefilled: Story = {
  args: {
    note: {
      id: "1",
      name: "Meeting Agenda",
      created: "2023-07-25T07:00:00.000Z",
      category: "Task",
      content: "Prepare presentation and finalize meeting agenda.",
      isActive: true,
    },
    onClose: () => {},
  },
};
