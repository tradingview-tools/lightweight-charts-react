import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SeriesRoutes from './series';
import AppRoot from './ui/AppRoot';
import AppHeader from './ui/AppHeader';
import AppMain from './ui/AppMain';
import Typography from './ui/Typography';
import ButtonBase from './ui/ButtonBase';
import ButtonLink from './ui/ButtonLink';

function App() {
  return (
    <BrowserRouter>
      <AppRoot>
        <AppHeader>
          <Typography variant="app-title">lightweight-charts Demo</Typography>
        </AppHeader>
        <AppMain>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Typography>Welcome to the demo!</Typography>
                  <ButtonLink to="series">Series</ButtonLink>
                </>
              }
            />
            <Route path="/series" element={<SeriesRoutes />} />
          </Routes>
        </AppMain>
      </AppRoot>
    </BrowserRouter>
  );
}

export default App;
