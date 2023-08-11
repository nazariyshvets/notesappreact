import { Provider } from "react-redux";
import type { Meta, StoryObj } from "@storybook/react";
import NotesTableRow from "../components/NotesTableRow";
import store from "../redux/store";

const meta = {
  title: "Components/NotesTableRow",
  component: NotesTableRow,
  decorators: [
    (story) => (
      <Provider store={store}>
        <table>
          <tbody>{story()}</tbody>
        </table>
      </Provider>
    ),
  ],
  tags: ["autodocs"],
} satisfies Meta<typeof NotesTableRow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    note: {
      id: "1",
      name: "Meeting Agenda",
      created: "2023-07-25T07:00:00.000Z",
      category: "Task",
      content: "Prepare presentation and finalize meeting agenda.",
      isActive: true,
    },
    onEdit: () => {},
  },
};
