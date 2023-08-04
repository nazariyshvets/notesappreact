import Note from "../interfaces/Note";

function isNote(note: any): note is Note {
  return (
    note &&
    typeof note.id === "string" &&
    typeof note.name === "string" &&
    typeof note.created === "string" &&
    typeof note.category === "string" &&
    typeof note.content === "string" &&
    typeof note.isActive === "boolean"
  );
}

export default isNote;
