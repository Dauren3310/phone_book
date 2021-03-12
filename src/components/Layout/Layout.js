import Toolbar from '../Navigation/Toolbar/Toolbar';
import "./Layout.css";

const Layout = (props) => {
  return (
    <>
      <Toolbar />
      <main className="Layout-Content">
        {props.children}
      </main>
      <footer className="footer">Footer will be here</footer>
    </>
  );
};

export default Layout;