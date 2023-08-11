import { Provider } from "react-redux";
import type { Meta, StoryObj } from "@storybook/react";
import Modal from "../layout/Modal";
import Form from "../components/Form";
import store from "../redux/store";

const meta = {
  title: "Layout/Modal",
  component: Modal,
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
  tags: ["autodocs"],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <></>,
    onClose: () => {},
  },
};

export const WithForm: Story = {
  args: {
    children: <Form onClose={() => {}} />,
    onClose: () => {},
  },
};
