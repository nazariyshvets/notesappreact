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
    <table className="archive-table">
      <thead>
        <tr>
          <th>Name</th>
          <th></th>
        </tr>
      </thead>

      <tbody>{rows}</tbody>
    </table>
  );
}

export default ArchiveTable;
