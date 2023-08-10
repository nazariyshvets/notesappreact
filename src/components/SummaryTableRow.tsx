import getCategoryIcon from "../utils/getCategoryIcon";

interface Props {
  noteCategory: string;
  activeNum: number;
  archivedNum: number;
}

function SummaryTableRow({ noteCategory, activeNum, archivedNum }: Props) {
  const categoryIcon = getCategoryIcon(noteCategory);

  return (
    <tr className="border-2 border-white text-left">
      <td className="max-w-40 p-2 bg-opacity-70 bg-lightpurple truncate">
        <div className="flex items-center gap-x-2 gap-y-2">
          {categoryIcon}
          <span className="truncate">{noteCategory}</span>
        </div>
      </td>
      <td className="max-w-40 p-2 bg-opacity-70 bg-lightpurple text-gray truncate">
        {activeNum}
      </td>
      <td className="max-w-40 p-2 bg-opacity-70 bg-lightpurple text-gray truncate">
        {archivedNum}
      </td>
    </tr>
  );
}

export default SummaryTableRow;
