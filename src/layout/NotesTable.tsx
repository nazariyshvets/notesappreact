import { MouseEvent } from "react";
import { useSelector, useDispatch } from "react-redux";
import NotesTableRow from "../components/NotesTableRow";
import Note from "../interfaces/Note";
import State from "../interfaces/State";

interface Props {
  onArchiveOpen: () => void;
  onFormOpen: (note: Note) => void;
}

function NotesTable({ onArchiveOpen, onFormOpen }: Props) {
  const dispatch = useDispatch();

  function handleRemoveAll(event: MouseEvent<HTMLButtonElement>) {
    dispatch({ type: "notes/removedAll" });
  }

  const notes = useSelector((state: State) => state.notes);
  const activeNotes = notes.filter((note) => note.isActive);
  const rows = activeNotes.map((note) => (
    <NotesTableRow key={note.id} note={note} onEdit={() => onFormOpen(note)} />
  ));

  return (
    <table className="w-full border-collapse bg-white">
      <thead>
        <tr className="border-2 border-white text-left">
          <th className="p-2 pl-12 bg-gray text-white">Name</th>
          <th className="p-2 bg-gray text-white">Created</th>
          <th className="p-2 bg-gray text-white">Category</th>
          <th className="p-2 bg-gray text-white">Content</th>
          <th className="p-2 bg-gray text-white">Dates</th>
          <th className="p-2 bg-gray text-white">
            <div className="text-right">
              <button
                className="ml-2 border-none bg-transparent text-lg text-white cursor-pointer"
                title="view archive"
                onClick={onArchiveOpen}
              >
                <i className="fa-solid fa-folder-open"></i>
              </button>
              <button
                className="ml-2 border-none bg-transparent text-lg text-white cursor-pointer"
                title="remove all notes"
                onClick={handleRemoveAll}
              >
                <i className="fa-solid fa-trash"></i>
              </button>
            </div>
          </th>
        </tr>
      </thead>

      <tbody>{rows}</tbody>
    </table>
  );
}

export default NotesTable;
