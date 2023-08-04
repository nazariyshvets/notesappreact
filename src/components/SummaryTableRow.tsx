import getCategoryIcon from "../utils/getCategoryIcon";

interface Props {
  noteCategory: string;
  activeNum: number;
  archivedNum: number;
}

function SummaryTableRow({ noteCategory, activeNum, archivedNum }: Props) {
  const categoryIcon = getCategoryIcon(noteCategory);

  return (
    <tr>
      <td>
        <div className="summary-table-row--note-category-wrapper">
          {categoryIcon}
          <span className="summary-table-row--note-category">
            {noteCategory}
          </span>
        </div>
      </td>
      <td>{activeNum}</td>
      <td>{archivedNum}</td>
    </tr>
  );
}

export default SummaryTableRow;
