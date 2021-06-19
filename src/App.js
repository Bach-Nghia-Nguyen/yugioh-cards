import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import SideMenu from "./components/SideMenu";

import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import SpellCard from "./pages/SpellCard";
import TrapCard from "./pages/TrapCard";

function App() {
  return (
    <div className="page-container">
      <Router>
        <SideMenu />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/trap" component={TrapCard} />
          <Route exact path="/spell" component={SpellCard} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
