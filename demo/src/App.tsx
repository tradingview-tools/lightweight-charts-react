import { Heading, majorScale, Pane, Text } from 'evergreen-ui';
import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ButtonLink from './ui/ButtonLink';
import SuspenseLoader from './ui/SuspenseLoader';
import withTheme from './ui/withTheme';

const ExamplesHome = React.lazy(() => import('./examples/Home'));
const ExamplesCandlestickChart = React.lazy(() => import('./examples/CandlestickChart'));

function App() {
  return (
    <BrowserRouter>
      <Pane display="flex" flexDirection="column" background="tint2">
        <Pane display="flex" elevation={1} paddingX={majorScale(4)} paddingY={majorScale(2)}>
          <Pane flex={1} alignItems="center" display="flex">
            <Heading size={600}>Demo</Heading>
          </Pane>
          <Pane>
            <ButtonLink to="examples">Button</ButtonLink>
          </Pane>
        </Pane>

        <Pane
          elevation={1}
          paddingX={majorScale(4)}
          paddingY={majorScale(2)}
          marginX={majorScale(4)}
          marginY={majorScale(2)}
        >
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Text>Welcome to the demo!</Text>
                </>
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
      </Pane>
    </BrowserRouter>
  );
}

export default withTheme(App);
