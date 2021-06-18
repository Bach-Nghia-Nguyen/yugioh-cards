import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
// import CardDetail from "./components/CardDetail";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        {/* <Route exact path="/cards/:id" component={CardDetail} /> */}
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
