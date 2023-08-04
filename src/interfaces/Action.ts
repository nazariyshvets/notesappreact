import Note from "./Note";

interface Action {
  type: string;
  payload?: string | Note;
}

export default Action;
