import React from 'react';
import Home from './component/Home';
import Dashboard from './component/Dashboard'
import Private from './component/Private'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/private" component={Private} />
          <Route path="/dashboard/:id" component={Dashboard} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
