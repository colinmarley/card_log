import Navbar from './components/Navbar/Navbar';
import List from './components/List';
import Auth from './components/Auth/Auth';
import Log from './components/Log';
import { connect } from 'react-redux';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './styles/App.css';
import Admin from './components/Admin/Admin';

const mapStateToProps = (state, ownProps) => {
  return ({

  });
};

const mapDispatchToProps = dispatch => ({

});

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Switch>
            <Route path='/auth'>
              <Auth/>
            </Route>
            <Route path='/list'>
              <List/>
            </Route>
            <Route path="/log">
              <Log/>
            </Route>
            <Route path="/admin">
              <Admin/>
            </Route>
            <Route path='/'>
              <Auth/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
