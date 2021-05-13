/** @format */

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import styled from "styled-components";
import { Drawer } from "antd"
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "../src/pages/Home";
import About from "./pages/About";
import Detail from "./pages/Detail";

function App() {
  return (
    <Router>
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
      <Footer />
    </Router>
  );
}

const Container = styled.div``;

export default App;
