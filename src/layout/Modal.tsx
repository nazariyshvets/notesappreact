interface Props {
  children: JSX.Element;
  onClose: () => void;
}

function Modal({ children, onClose }: Props) {
  return (
    <div className="fixed z-10 top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-70">
      <button
        className="absolute top-8 right-8 border-none bg-transparent text-4xl text-white cursor-pointer"
        onClick={onClose}
      >
        <i className="fa-solid fa-xmark"></i>
      </button>

      {children}
    </div>
  );
}

export default Modal;
