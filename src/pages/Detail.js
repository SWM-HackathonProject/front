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

import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines,
  VerticalBarSeries,
} from "react-vis";

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

// https://github.com/uber/react-vis/blob/premodern/showcase/axes/dynamic-crosshair.js
function Chart({ data }) {
  return (
    <div>
      <XYPlot xType='linear' width={300} height={300}>
        <HorizontalGridLines />
        <VerticalGridLines />
        <YAxis title='가격 (원/kg)' />
        <VerticalBarSeries
          data={data.map((d) => {
            return { x: d.yearMonth, y: d.price };
          })}
        />
      </XYPlot>
    </div>
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
