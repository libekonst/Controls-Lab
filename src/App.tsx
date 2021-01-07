import "./styles.css";
import * as React from "react";
import { SegmentedControlDemo } from "./SegmentedControl/SegmentedControlDemo";
import { ButtonLink } from "./Navigation/ButtonLink";
import { Routes } from "./Navigation/routes";
import { Page } from "./Navigation/Page";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ProductTablePage } from "./ProductTable/ProductTablePage";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path={Routes.SEGMENTED_CONTROLS}>
            <Page>
              <SegmentedControlDemo />
            </Page>
          </Route>

          <Route path={Routes.PRODUCT_TABLE}>
            <Page>
              <ProductTablePage />
            </Page>
          </Route>

          <Route path={Routes.MODALS}>
            <Page>
              <SegmentedControlDemo />
            </Page>
          </Route>

          <Route path={Routes.HOME}>
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
        <ButtonLink to={Routes.SEGMENTED_CONTROLS}>
          Segmented Controls
        </ButtonLink>
      </div>
      <div>
        <ButtonLink to={Routes.PRODUCT_TABLE}>Product Table</ButtonLink>
      </div>
      <div>
        <ButtonLink to={Routes.MODALS}>Modals</ButtonLink>
      </div>
    </nav>
  );
}
