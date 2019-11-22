//import react package
import React from "react";
//import BrowserRouter, Route, and Switch features from react-router-dom package. BrowserRouter is imported as Router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
// import CreateUser from "./pages/CreateUser";

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    //uses router component imported above to be able to pass different routes to render different components based on URL
    <Router>
      <div>
        {/*render our nav component*/}
       
        {/*switch is imported from our react-router-dom to allow us to pass various paths for routing*/}
        <Switch>
          {/*Root route that renders our Home component*/}
          <Route exact path="/" component={Home} />
           <Route exact path="/SignUp" component={SignUp} />
           <Route exact path="/SignIn" component={SignIn} />
          {/* <Route exact path="/CreateUser" component={Saved} />
          <Route component={NoMatch} />  */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
