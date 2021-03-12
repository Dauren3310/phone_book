import "./Toolbar.css";
import NavigationItems from '../NavigationItems/NavigationItems';

const Toolbar = () => {
  return (
    <header className="Toolbar">
      <div className='Logo'>LOGO</div>
      <nav>
        <NavigationItems/>
      </nav>
    </header>
  );
};

export default Toolbar;
