function getDatesString(string: string) {
  return (
    string
      .match(/\b(?:\d{1,2}\/\d{1,2}\/\d{4}|\d{1,2}\/\d{4})\b/g)
      ?.join(", ") || ""
  );
}

export default getDatesString;
