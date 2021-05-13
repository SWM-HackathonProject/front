/** @format */

import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

const Detail = () => {
  let match = useRouteMatch();

  return (
    <Router>
      <Switch>
        <Route path={`${match.path}/:idx`}>
          <Child />
        </Route>
        <Route path='/'>
          <NotFounded />
        </Route>
      </Switch>
    </Router>
  );
};

function Child() {
  let { idx } = useParams();
  return <h2>물고기 idx는 {idx}입니다.</h2>;
}

function NotFounded() {
  return <h2>없는 물고기 입니다.</h2>;
}

export default Detail;
