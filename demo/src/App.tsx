import { Heading, majorScale, Pane } from 'evergreen-ui';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ButtonLink from './ui/ButtonLink';
import SuspenseLoader from './ui/SuspenseLoader';
import withTheme from './ui/withTheme';

const Home = React.lazy(() => import('./pages/Home'));
const ExamplesHome = React.lazy(() => import('./pages/examples/Home'));
const ExamplesCandlestickChart = React.lazy(() => import('./pages/examples/CandlestickChart'));
const ExamplesBarChart = React.lazy(() => import('./pages/examples/BarChart'));

function App() {
  return (
    <BrowserRouter>
      <Pane display="flex" flexDirection="column" background="tint2" height="100vh">
        <Pane display="flex" elevation={1} paddingX={majorScale(4)} paddingY={majorScale(2)}>
          <Pane flex={1} alignItems="center" display="flex">
            <Heading size={600}>Demo App</Heading>
          </Pane>
          <Pane>
            <ButtonLink to="/" marginX={majorScale(1)}>
              Home
            </ButtonLink>
            <ButtonLink to="examples">Examples</ButtonLink>
          </Pane>
        </Pane>

        <Routes>
          <Route
            path="/"
            element={
              <SuspenseLoader>
                <Home />
              </SuspenseLoader>
            }
          />
          <Route path="examples">
            <Route
              path=""
              element={
                <SuspenseLoader>
                  <ExamplesHome />
                </SuspenseLoader>
              }
            />
            <Route
              path="bar-chart"
              element={
                <SuspenseLoader>
                  <ExamplesBarChart />
                </SuspenseLoader>
              }
            />
            <Route
              path="candlestick-chart"
              element={
                <SuspenseLoader>
                  <ExamplesCandlestickChart />
                </SuspenseLoader>
              }
            />
          </Route>
        </Routes>
      </Pane>
    </BrowserRouter>
  );
}

export default withTheme(App);
