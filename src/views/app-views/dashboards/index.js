import React, { lazy, Suspense } from "react";
import { Redirect, Route, Switch } from 'react-router-dom';
import Loading from 'components/shared-components/Loading';

const Dashboards = ({ match }) => {
  return(
  <Suspense fallback={<Loading cover="content"/>}>
    <Switch>
      <Route path={`${match.url}/home`} component={lazy(() => import(`./home`))} />
      <Route path={`${match.url}/catalogue`} component={lazy(() => import(`./catalogue`))} />
      <Route path={`${match.url}/orders`} component={lazy(() => import(`./orders`))} />
      <Route path={`${match.url}/clients`} component={lazy(() => import(`./clients`))} />
      <Route path={`${match.url}/banners`} component={lazy(() => import(`./banners`))} />
      <Route path={`${match.url}/promocodes`} component={lazy(() => import(`./promocodes`))} />
      <Route path={`${match.url}/offline`} component={lazy(() => import(`./offline`))} />
      <Route path={`${match.url}/employees`} component={lazy(() => import(`./employees`))} />
      <Route path={`${match.url}/messages`} component={lazy(() => import(`./messages`))} />
      <Redirect from={`${match.url}`} to={`${match.url}/home`} />
    </Switch>
  </Suspense>
)};

export default Dashboards;