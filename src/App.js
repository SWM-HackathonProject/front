/** @format */

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import styled from "styled-components";

import Header from "./components/Header";

import Home from "../src/pages/Home";
import About from "./pages/About";
import Detail from "./pages/Detail";

function App() {
  return (
    <Router>
      {/* 상단 네비바 */}
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/detail'>Detail</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path='/detail'>
          <Detail />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/'>
          <Header />
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

const Container = styled.div``;

export default App;
