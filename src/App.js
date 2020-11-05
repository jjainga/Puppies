
import './App.css';

import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./components/pages/About";
import Discover from "./components/pages/Discover/Discover";
import Search from "./components/pages/Search/Search";
import NavTab from "./components/NavTab"


function App() {
  return (
    <Router>
    <div>
      <NavTab />
      <Route exact path="/" component={About} />
      <Route exact path="/discover" component={Discover} />
      <Route path="/search" component={Search} />
    </div>
  </Router>
  );
}

export default App;
