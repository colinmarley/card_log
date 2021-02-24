import Navbar from './components/Navbar';
import { connect } from 'react-redux';
import './styles/App.css';
import './styles/Navbar.css';

const mapStateToProps = (state, ownProps) => {
  return ({

  });
};

const mapDispatchToProps = dispatch => ({

});

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
    </div>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
