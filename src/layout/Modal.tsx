import "../css/Modal.css";

interface Props {
  children: JSX.Element;
  onClose: () => void;
}

function Modal({ children, onClose }: Props) {
  return (
    <div className="modal">
      <button className="modal--close" onClick={onClose}>
        <i className="fa-solid fa-xmark"></i>
      </button>

      {children}
    </div>
  );
}

export default Modal;
