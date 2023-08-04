import { MouseEvent } from "react";
import { useDispatch } from "react-redux";
import getCategoryIcon from "../utils/getCategoryIcon";
import Note from "../interfaces/Note";

interface Props {
  note: Note;
}

function ArchiveTableRow({ note }: Props) {
  const dispatch = useDispatch();

  function handleRemoveFromArchive(event: MouseEvent<HTMLButtonElement>) {
    dispatch({ type: "notes/unarchived", payload: note.id });
  }

  const categoryIcon = getCategoryIcon(note.category);

  return (
    <tr>
      <td>
        <div className="archive-table-row--name-wrapper">
          {categoryIcon}
          <span className="archive-table-row--name">{note.name}</span>
        </div>
      </td>
      <td>
        <button
          className="archive-table-row--unarchive"
          onClick={handleRemoveFromArchive}
        >
          Unarchive
        </button>
      </td>
    </tr>
  );
}

export default ArchiveTableRow;
