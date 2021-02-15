import React, { lazy, Suspense } from "react";
import { Redirect, Route, Switch } from 'react-router-dom';
import Loading from 'components/shared-components/Loading';

const Clients = ({ match }) => {
  return(
  <Suspense fallback={<Loading cover="content"/>}>
    <Switch>
      <Route path={`${match.url}/adresses`} component={lazy(() => import(`./adresses`))} />
      <Route path={`${match.url}/geozones`} component={lazy(() => import(`./geozones`))} />
      <Redirect from={`${match.url}`} to={`${match.url}/adresses`} />
    </Switch>
  </Suspense>
)};

export default Clients;