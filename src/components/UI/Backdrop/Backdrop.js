import "./Backdrop.css";

const Backdrop = ({ show, clicked }) => {
  return show ? <div onClick={clicked} className="Backdrop" /> : null;
};

export default Backdrop;