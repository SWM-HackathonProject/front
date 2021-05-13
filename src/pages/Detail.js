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
  VerticalGridLines,
  HorizontalGridLines,
  LineSeries,
  Crosshair,
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
function Chart() {
  const DATA = [
    [
      { x: 1, y: 10 },
      { x: 2, y: 7 },
      { x: 3, y: 15 },
    ],
    [
      { x: 1, y: 20 },
      { x: 2, y: 5 },
      { x: 3, y: 15 },
    ],
  ];

  /**
   * Event handler for onMouseLeave.
   * @private
   */
  const _onMouseLeave = () => {
    setState({ crosshairValues: [] });
  };

  /**
   * Event handler for onNearestX.
   * @param {Object} value Selected value.
   * @param {index} index Index of the value in the data array.
   * @private
   */
  const _onNearestX = (value, { index }) => {
    setState({ crosshairValues: DATA.map((d) => d[index]) });
  };

  return (
    <XYPlot onMouseLeave={_onMouseLeave} width={300} height={300}>
      <VerticalGridLines />
      <HorizontalGridLines />
      <XAxis />
      <YAxis />
      <LineSeries onNearestX={_onNearestX} data={DATA[0]} />
      <LineSeries data={DATA[1]} />
      <Crosshair values={state.crosshairValues} className={"test-class-name"} />
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
