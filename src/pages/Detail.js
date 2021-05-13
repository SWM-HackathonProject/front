/** @format */

import React from "react";
import { useAsync } from "react-async";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import { GetFishInfo } from "./Detail.ctrl";

import { MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";

import ImageCard from "../components/ImageCard";

const Detail = () => {
  let match = useRouteMatch();

  return (
    <Router>
      <Switch>
        <Route path={`${match.path}/:fishCode`}>
          <Child />
        </Route>
        <Route path='/'>
          <Default />
        </Route>
      </Switch>
    </Router>
  );
};

function Child() {
  let { fishCode } = useParams();

  const {
    isLoading,
    data: fish,
    error,
    reload,
  } = useAsync({
    promiseFn: GetFishInfo,
    fishCode,
    watch: fishCode,
  });

  if (isLoading) return Loading();
  if (error) return Err();
  if (!fish) return NotFounded();

  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol>
          <MDBRow center>
            <div>{fish.fishName}</div>
          </MDBRow>
          <MDBRow>
            <ImageCard src={`/fishImg/${fish.imageURL}.jpeg`} />
          </MDBRow>
        </MDBCol>
        <MDBCol>
          <Chart data={fish.prices} />
        </MDBCol>
      </MDBRow>
      <MDBRow>{fish.description}</MDBRow>
    </MDBContainer>
  );
}

function Chart() {
  const data = [
    { x: 0, y: 8 },
    { x: 1, y: 5 },
    { x: 2, y: 4 },
    { x: 3, y: 9 },
    { x: 4, y: 1 },
    { x: 5, y: 7 },
    { x: 6, y: 6 },
    { x: 7, y: 3 },
    { x: 8, y: 2 },
    { x: 9, y: 0 },
  ];

  return (
    <XYPlot height={200} width={200}>
      <LineSeries data={data} />
    </XYPlot>
  );
}

function Loading() {
  return <div>로딩중...</div>;
}

function Err() {
  return <div>에러가 발생했습니다.</div>;
}

function NotFounded() {
  return <h2>없는 물고기 입니다.</h2>;
}

function Default() {
  return <h2>물고기의 상세정보를 보여줍니다.</h2>;
}

export default Detail;
