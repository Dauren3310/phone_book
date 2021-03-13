import { Route, Switch } from 'react-router';
import './App.css';
import Layout from './components/Layout/Layout';
import Home from './containers/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddContactForm from './containers/Forms/AddContactForm';

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/add-new-contact" component={AddContactForm} />
        <Route render={() => {
          return <h1>Page not found</h1>;
        }} />
      </Switch>
    </Layout>
  );
}

export default App;
