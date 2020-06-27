import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import { Home, Resume, Portfolio, Contacts } from "./screens";
import CssBaseline from "@material-ui/core/ScopedCssBaseline";
function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Route exact path="/" component={Home} />
      <Route path="/resume" component={Resume} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/contacts" component={Contacts} />
    </React.Fragment>
  );
}

export default App;
