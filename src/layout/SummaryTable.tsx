import SummaryTableRow from "../components/SummaryTableRow";
import useActiveArchivedNotes from "../hooks/useActiveArchivedNotes";

function SummaryTable() {
  const activeArchivedNotes = useActiveArchivedNotes();
  const rows = activeArchivedNotes.map(
    ({ categoryName, activeNum, archivedNum }) => (
      <SummaryTableRow
        key={categoryName}
        noteCategory={categoryName}
        activeNum={activeNum}
        archivedNum={archivedNum}
      />
    )
  );

  return (
    <table className="w-full mt-8 border-collapse bg-white">
      <thead>
        <tr className="border-2 border-white text-left">
          <th className="p-2 pl-12 bg-gray text-white">Note Category</th>
          <th className="p-2 bg-gray text-white">Active</th>
          <th className="p-2 bg-gray text-white">Archived</th>
        </tr>
      </thead>

      <tbody>{rows}</tbody>
    </table>
  );
}

export default SummaryTable;
