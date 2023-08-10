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
    <tr className="border-2 border-white text-left">
      <td className="p-2 bg-opacity-70 bg-lightpurple truncate">
        <div className="flex items-center gap-x-2 gap-y-2">
          {categoryIcon}
          <span className="truncate">{name}</span>
        </div>
      </td>
      <td className="max-w-40 p-2 bg-opacity-70 bg-lightpurple text-gray truncate">
        {formattedDate}
      </td>
      <td className="max-w-40 p-2 bg-opacity-70 bg-lightpurple text-gray truncate">
        {category}
      </td>
      <td className="max-w-40 p-2 bg-opacity-70 bg-lightpurple text-gray truncate">
        {content}
      </td>
      <td className="max-w-40 p-2 bg-opacity-70 bg-lightpurple text-gray truncate">
        {dates}
      </td>
      <td className="max-w-40 p-2 bg-opacity-70 bg-lightpurple text-gray truncate">
        <div className="text-right">
          <button
            className="ml-2 border-none bg-transparent text-lg text-gray cursor-pointer"
            title="edit"
            onClick={onEdit}
          >
            <i className="fa-solid fa-pencil"></i>
          </button>
          <button
            className="ml-2 border-none bg-transparent text-lg text-gray cursor-pointer"
            title="add to archive"
            onClick={handleAddToArchive}
          >
            <i className="fa-solid fa-plus"></i>
          </button>
          <button
            className="ml-2 border-none bg-transparent text-lg text-gray cursor-pointer"
            title="remove"
            onClick={handleRemove}
          >
            <i className="fa-solid fa-trash"></i>
          </button>
        </div>
      </td>
    </tr>
  );
}

export default NotesTableRow;
