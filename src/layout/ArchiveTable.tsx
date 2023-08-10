import { useSelector } from "react-redux";
import ArchiveTableRow from "../components/ArchiveTableRow";
import State from "../interfaces/State";

function ArchiveTable() {
  const notes = useSelector((state: State) => state.notes);

  const archivedNotes = notes.filter((note) => !note.isActive);
  const rows = archivedNotes.map((note) => (
    <ArchiveTableRow key={note.id} note={note} />
  ));

  return (
    <table className="w-3/5 border-collapse bg-white">
      <thead>
        <tr className="border-2 border-white text-left">
          <th className="p-2 pl-12 bg-gray text-white">Name</th>
          <th className="p-2 bg-gray text-white"></th>
        </tr>
      </thead>

      <tbody>{rows}</tbody>
    </table>
  );
}

export default ArchiveTable;
