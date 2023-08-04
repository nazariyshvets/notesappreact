import "../css/CreateNoteButton.css";

interface Props {
  onClick: () => void;
}

function CreateNoteButton({ onClick }: Props) {
  return (
    <button className="create-note-button" onClick={onClick}>
      Create Note
    </button>
  );
}

export default CreateNoteButton;
