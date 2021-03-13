import "./Toolbar.css";
import NavigationItems from '../NavigationItems/NavigationItems';
import { NavLink } from "react-router-dom";

const Toolbar = () => {
  return (
    <header className="Toolbar">
      <div>
        <NavLink to='/' exact className='Logo' >
          Contacts
        </NavLink>
      </div>
      <nav>
        <NavigationItems/>
      </nav>
    </header>
  );
};

export default Toolbar;
