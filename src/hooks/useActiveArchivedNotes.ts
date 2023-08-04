import { useSelector } from "react-redux";
import { useMemo } from "react";
import CATEGORIES from "../constants/CATEGORIES";
import State from "../interfaces/State";

// returns the number of active and archived notes for each category
function useActiveArchivedNotes() {
  const notes = useSelector((state: State) => state.notes);

  const activeArchivedNotes = useMemo(() => {
    return CATEGORIES.map((category) => {
      const { activeNum, archivedNum } = notes.reduce(
        (prevResult, note) => ({
          activeNum:
            prevResult.activeNum +
            (note.isActive && note.category === category.name ? 1 : 0),
          archivedNum:
            prevResult.archivedNum +
            (!note.isActive && note.category === category.name ? 1 : 0),
        }),
        { activeNum: 0, archivedNum: 0 }
      );

      return { categoryName: category.name, activeNum, archivedNum };
    });
  }, [notes]);

  return activeArchivedNotes;
}

export default useActiveArchivedNotes;
