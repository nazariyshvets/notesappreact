import CATEGORIES from "../constants/CATEGORIES";

function getCategoryIcon(categoryName: string) {
  return (
    CATEGORIES.find((category) => category.name === categoryName)?.icon || ""
  );
}

export default getCategoryIcon;
