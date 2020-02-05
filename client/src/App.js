import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// User Components
import Home from "./components/user/Home";
import Search from "./components/user/WebsiteNew";
import Details from "./components/user/Details";
import Login from "./components/user/Login";
import Register from "./components/user/Register";
import Dashboard from "./components/user/Dashboard";
import ProfileView from "./components/user/ProfileView";

// // Routing Components
// import PrivateRoute from "./components/routing/PrivateRoute";

function App() {

//   // user data
//   const [users]

  return (
    <Router> 
      <Switch>
        {/* UserService */}
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/search">
          <Search />
        </Route>
        <Route exact path="/details">
          <Details />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/dashboard/:id">
          <Dashboard />
        </Route>

        <Route exact path="/user/:id/view" component={ProfileView} /> 

        {/* Home Page */}
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
