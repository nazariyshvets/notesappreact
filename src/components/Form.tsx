import { useState, FormEvent } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import CATEGORIES from "../constants/CATEGORIES";
import Note from "../interfaces/Note";

interface Props {
  note?: Note;
  onClose: () => void;
}

function Form({ note, onClose }: Props) {
  // we derive data in states from note only as the initial data
  const [name, setName] = useState(note?.name || "");
  const [category, setCategory] = useState(
    note?.category || CATEGORIES[0].name
  );
  const [content, setContent] = useState(note?.content || "");
  const dispatch = useDispatch();

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const id: string = note?.id || nanoid();
    const created: string = new Date().toISOString();
    const newNote = {
      id,
      name,
      created,
      category,
      content,
      isActive: true,
    };

    if (note) {
      dispatch({ type: "notes/edited", payload: newNote });
    } else {
      dispatch({ type: "notes/added", payload: newNote });
    }

    onClose();
  }

  const categoryOptions = CATEGORIES.map((category) => (
    <option key={category.name} value={category.name}>
      {category.name}
    </option>
  ));

  return (
    <form
      className="relative flex flex-col justify-center gap-y-4 p-16 rounded-2xl bg-white"
      method="post"
      action="#"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="p-2 border font-medium text-lg"
        name="name"
        value={name}
        placeholder="Name..."
        required
        onChange={(event) => setName(event.target.value)}
      />
      <select
        className="p-2 border font-medium text-lg"
        name="category"
        value={category}
        onChange={(event) => setCategory(event.target.value)}
      >
        {categoryOptions}
      </select>
      <textarea
        className="p-2 border font-medium text-lg resize-none"
        name="content"
        value={content}
        cols={30}
        rows={10}
        placeholder="Content..."
        required
        onChange={(event) => setContent(event.target.value)}
      />
      <button
        type="submit"
        className="p-2 border font-medium text-lg cursor-pointer"
      >
        Submit
      </button>
    </form>
  );
}

export default Form;
