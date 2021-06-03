import Navbar from './components/Navbar/Navbar';
import MyCards from './components/CardList/MyCards';
import Auth from './components/Auth/Auth';
import Log from './components/Log';
import Admin from './components/Admin/Admin';
import { connect } from 'react-redux';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './styles/App.css';
import './styles/Navbar.css';
import CardTable from './components/CardTable/CardTable';

const mapStateToProps = (state, ownProps) => {
  return ({

  });
};

const mapDispatchToProps = dispatch => ({

});

function App() {
  console.log("RENDERING")
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Switch>
            <Route path='/auth'>
              <Auth/>
            </Route>
            <Route path='/mycards'>
              <CardTable/>
            </Route>
            <Route path="/log">
              <Log/>
            </Route>
            <Route path="/admin">
              <Admin/>
            </Route>
            <Route path='/'>

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
