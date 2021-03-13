import "./Modal.css";
import Backdrop from '../Backdrop/Backdrop';

const Modal = ({ children, show, close }) => {
  return (
    <>
      <Backdrop show={show} clicked={close} />
      <div
        className="Modal"
        style={{
          transform: `translateY(${show ? 0 : "-200vh"})`,
          opacity: show ? 1 : 0
        }}
      >
        <button onClick={close}>X</button>
        {children}
      </div>
    </>
  );
};

export default Modal;