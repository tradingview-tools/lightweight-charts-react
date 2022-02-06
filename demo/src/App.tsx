import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppRoot from './ui/AppRoot';
import AppHeader from './ui/AppHeader';
import AppMain from './ui/AppMain';
import Typography from './ui/Typography';
import ButtonLink from './ui/ButtonLink';

const SeriesHome = React.lazy(() => import('./series/Home'));
const SeriesCandlestick = React.lazy(() => import('./series/Candlestick'));

function App() {
  return (
    <BrowserRouter>
      <AppRoot>
        <AppHeader>
          <Typography variant="app-title">lightweight-charts Demo</Typography>
          <ButtonLink to="series/candlestick">Candlestick Series</ButtonLink>
        </AppHeader>
        <AppMain>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Typography>Welcome to the demo!</Typography>
                </>
              }
            />
            <Route path="series">
              <Route
                path=""
                element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <SeriesHome />
                  </Suspense>
                }
              />
              <Route
                path="candlestick"
                element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <SeriesCandlestick />
                  </Suspense>
                }
              />
            </Route>
          </Routes>
        </AppMain>
      </AppRoot>
    </BrowserRouter>
  );
}

export default App;
