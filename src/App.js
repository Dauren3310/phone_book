import { Route, Switch } from 'react-router';
import './App.css';
import Layout from './components/Layout/Layout';
import Home from './containers/Home/Home';


const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route render={() => {
          return <h1>Page not found</h1>;
        }} />
      </Switch>
    </Layout>
  );
}

export default App;
