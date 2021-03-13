import Backdrop from '../Backdrop/Backdrop';
import "./Spinner.css";

const Spinner = props => {
  return (
    <>
      <Backdrop show={true} />
      <div className="Spinner"></div>
    </>
  );
}

export default Spinner;