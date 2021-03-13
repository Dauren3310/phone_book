import "./Button.css";

const Button = ({children, onClick, btnType}) => {
  return (
    <button 
      onClick={onClick}
      className={["Button", btnType].join(" ")}
    >
      {children}
    </button>
  );
};

export default Button;