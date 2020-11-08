import { Component } from 'react';
import Dashboard from './components/Dashboard';
import V_data from './components/V_data';
import Login from './components/Login';
import Register from './components/Register';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import NavbarComp from './components/NavbarComp';
import Requesthg from './components/Requesthg';



// function Test(props) {
//   return (
//     <h1>Halo {props.name} </h1>
//   );
// }

// function App() {
//   return (
//     <div className="App">
//       <Login />
//     </div>
//   );
// }

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/data" component={V_data} />
          <Route exact path="/hg_check" component={Requesthg} />
        </Switch>
      </div>
    );
  }
}

export default App;