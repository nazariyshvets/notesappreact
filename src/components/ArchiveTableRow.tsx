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
    <tr className="border-2 border-white text-left">
      <td className="max-w-40 p-2 bg-opacity-70 bg-lightpurple truncate">
        <div className="flex items-center gap-x-2 gap-y-2">
          {categoryIcon}
          <span className="truncate">{note.name}</span>
        </div>
      </td>
      <td className="max-w-40 p-2 bg-opacity-70 bg-lightpurple text-gray text-right truncate">
        <button
          className="px-4 py-1 border border-black bg-lightgray text-base text-black cursor-pointer"
          onClick={handleRemoveFromArchive}
        >
          Unarchive
        </button>
      </td>
    </tr>
  );
}

export default ArchiveTableRow;
