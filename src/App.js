/** @format */

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import styled from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "../src/pages/Home";
import About from "./pages/About";
import Detail from "./pages/Detail";

function App() {
  return (
    <Container>
      <Router>
        <Header />
        <ContentContainer>
          <Switch>
            <Route path='/detail'>
              <Detail />
            </Route>
            <Route path='/about'>
              <About />
            </Route>
            <Route path='/'>
              <Home />
            </Route>
          </Switch>
        </ContentContainer>
        <Footer />
      </Router>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContentContainer = styled.div`
  margin-bottom: 50px;
`;

export default App;
