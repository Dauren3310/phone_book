import "./NavigationItems.css";
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = () => {
  return (
    <ul className="NavigationItems">
      <NavigationItem to="/add-new-contact">Add new contact</NavigationItem>
    </ul>
  );
};

export default NavigationItems;