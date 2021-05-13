/** @format */

import React from "react";

import { MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";

import DefaultImage from "../images/fish.jpg";
import ImageCard from "../components/ImageCard";

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

  let fish = [
    {
      src: DefaultImage,
      name: "참돔",
      text: "제철시기: 3~5월",
    },
    {
      src: DefaultImage,
      name: "숭어",
      text: "제철시기: 3~5월",
    },
    {
      src: DefaultImage,
      name: "볼락",
      text: "제철시기: 3~5월",
    },
  ][idx];

  if (!fish) return <h2>없는 물고기 입니다.</h2>;

  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol>
          <ImageCard src={fish.src} />
        </MDBCol>
        <MDBCol>
          <ImageCard title={fish.name} children={fish.text} />
        </MDBCol>
      </MDBRow>
      <MDBRow>상세한 내용들</MDBRow>
    </MDBContainer>
  );
}

function NotFounded() {
  return <h2>물고기의 상세정보를 보여줍니다.</h2>;
}

export default Detail;
