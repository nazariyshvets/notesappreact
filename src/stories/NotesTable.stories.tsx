import { Provider } from "react-redux";
import type { Meta, StoryObj } from "@storybook/react";
import NotesTable from "../layout/NotesTable";
import Note from "../interfaces/Note";
import store from "../redux/store";

const meta = {
  title: "Layout/NotesTable",
  component: NotesTable,
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
  tags: ["autodocs"],
} satisfies Meta<typeof NotesTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onArchiveOpen: () => {},
    onFormOpen: (note: Note) => {},
  },
};
