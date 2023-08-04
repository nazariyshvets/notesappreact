import { MouseEvent } from "react";
import { useDispatch } from "react-redux";
import getCategoryIcon from "../utils/getCategoryIcon";
import formatToUSDateString from "../utils/formatToUSDateString";
import getDatesString from "../utils/getDatesString";
import Note from "../interfaces/Note";

interface Props {
  note: Note;
  onEdit: () => void;
}

function NotesTableRow({ note, onEdit }: Props) {
  const dispatch = useDispatch();

  function handleAddToArchive(event: MouseEvent<HTMLButtonElement>) {
    dispatch({ type: "notes/archived", payload: note.id });
  }

  function handleRemove(event: MouseEvent<HTMLButtonElement>) {
    dispatch({ type: "notes/removed", payload: note.id });
  }

  const { category, name, created, content } = note;
  const categoryIcon = getCategoryIcon(category);
  const formattedDate = formatToUSDateString(created);
  // select all dates from a string in the format mm/dd/yyyy
  const dates = getDatesString(content);

  return (
    <tr>
      <td>
        <div className="notes-table-row--name-wrapper">
          {categoryIcon}
          <span className="notes-table-row--name">{name}</span>
        </div>
      </td>
      <td>{formattedDate}</td>
      <td>{category}</td>
      <td>{content}</td>
      <td>{dates}</td>
      <td>
        <div className="notes-table-row--buttons">
          <button title="edit" onClick={onEdit}>
            <i className="fa-solid fa-pencil"></i>
          </button>
          <button title="add to archive" onClick={handleAddToArchive}>
            <i className="fa-solid fa-plus"></i>
          </button>
          <button title="remove" onClick={handleRemove}>
            <i className="fa-solid fa-trash"></i>
          </button>
        </div>
      </td>
    </tr>
  );
}

export default NotesTableRow;
