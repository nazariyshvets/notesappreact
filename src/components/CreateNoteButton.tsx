interface Props {
  onClick: () => void;
}

function CreateNoteButton({ onClick }: Props) {
  return (
    <button
      className="self-end px-4 py-1 border border-black bg-lightgray text-base cursor-pointer"
      onClick={onClick}
    >
      Create Note
    </button>
  );
}

export default CreateNoteButton;
