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
    <table className="summary-table">
      <thead>
        <tr>
          <th>Note Category</th>
          <th>Active</th>
          <th>Archived</th>
        </tr>
      </thead>

      <tbody>{rows}</tbody>
    </table>
  );
}

export default SummaryTable;
