import { ConnectedRouter } from "connected-react-router";
import {
  BrowserRouter,
  Router,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";

import history from "../app/history";
import Home from "../views/home";
import NotFound from "../views/NotFound";

const Routes = () => {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route path={"/"} exact={true} component={Home} />
        <Route component={NotFound} />
      </Switch>
    </ConnectedRouter>
  );
};

export default Routes;
