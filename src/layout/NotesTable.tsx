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
    <table className="notes-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Created</th>
          <th>Category</th>
          <th>Content</th>
          <th>Dates</th>
          <th>
            <div className="notes-table--buttons">
              <button title="view archive" onClick={onArchiveOpen}>
                <i className="fa-solid fa-folder-open"></i>
              </button>
              <button title="remove all notes" onClick={handleRemoveAll}>
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
