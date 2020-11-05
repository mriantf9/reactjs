import { Component } from 'react';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import { Route, Switch } from 'react-router-dom';


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
        </Switch>
      </div>
    );
  }
}

export default App;