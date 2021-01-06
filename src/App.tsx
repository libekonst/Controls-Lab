import "./styles.css";
import * as React from "react";
import { SegmentedControlDemo } from "./SegmentedControl/SegmentedControlDemo";
import { ButtonLink } from "./Navigation/ButtonLink";
import { Routes } from "./Navigation/routes";
import { Page } from "./Navigation/Page";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path={Routes.SEGMENTED_CONTROLS}>
            <Page>
              <SegmentedControlDemo />
            </Page>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <nav>
      <div>
        {/* <Link to="/segmented-control">Segmented Controls</Link> */}
        <ButtonLink to={Routes.SEGMENTED_CONTROLS}>
          Segmented Controls
        </ButtonLink>
      </div>
      {/* <div>
        <Link
          to="/about"
          component={() => <div style={{ backgroundColor: "pink" }}></div>}
        >
          About
        </Link>
      </div>
      <div>
        <Link to="/users">Users</Link>
      </div> */}
    </nav>
  );
}
