import { BrowserRouter, Switch, Route } from "react-router-dom";
import Landing from "../src/screens/Landing/index";
import OrphanagesMap from "../src/screens/OrphanageMap/index";
import Orphanage from "../src/screens/Orphanage";
import CreateOrphanage from "../src/screens/CreateOrphanage";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/app" component={OrphanagesMap} />

        <Route path="/orphanages/create" component={CreateOrphanage} />
        <Route path="/orphanages/:id" component={Orphanage} />
      </Switch>
    </BrowserRouter>
  );
}
export default Routes;
