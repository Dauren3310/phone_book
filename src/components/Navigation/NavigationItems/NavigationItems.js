import "./NavigationItems.css";
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = () => {
  return (
    <ul className="NavigationItems">
      <NavigationItem to="/" exact>Page 1</NavigationItem>
      <NavigationItem to="/page-2">Page 2</NavigationItem>
      <NavigationItem to="/page-3">Page 3</NavigationItem>
    </ul>
  );
};

export default NavigationItems;