import React from 'react';
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

// Routing Components
import PrivateRoute from "./components/routing/PrivateRoute";

function App() {
  return (
    <Router> 
      <Switch>
        {/* UserService */}
        <Route exact path="/home">
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
        <PrivateRoute exact path="/user/:uid">
          <Dashboard />
        </PrivateRoute>

        <Route exact path="/user/:uid/view" component={ProfileView} /> 

        {/* Home Page */}
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
