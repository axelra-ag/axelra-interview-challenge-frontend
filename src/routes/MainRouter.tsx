import React from "react";
import styled from "styled-components";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import AxelraTrello from "../components/AxelraTrello";
import { EXTRA_SMALL_DEVICES, LARGE_DEVICES } from "../layout/Mobile";
import {CHALLENGE} from "./Routes";

const Container = styled.div``;

const RoutesContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2em 0;
  border-radius: 5px;
  padding: 2rem;
  ${EXTRA_SMALL_DEVICES`
   width: 260px;
   `};
  ${LARGE_DEVICES`
   width: 550px;
  `};
`;

const MainRouter = () => {
  return (
    <Container>
      <Router>
       {/* <NavigationTabs />*/}
        <RoutesContainer>
          <Switch>
            <Route
              component={AxelraTrello}
              path={CHALLENGE}
              exact
            />

            {/*Intentionally left at the bottom*/}
            <Route
              exact
              path={"/*"}
              render={() => {
                return <Redirect to={CHALLENGE} />;
              }}
            />
          </Switch>
        </RoutesContainer>
      </Router>
    </Container>
  );
};

export default MainRouter;
