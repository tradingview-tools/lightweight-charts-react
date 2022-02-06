import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const Candlestick = React.lazy(() => import('./Candlestick'));

const SeriesRoutes: React.FC = () => {
  return (
    <Routes>
      <Route
        path="/candlestick"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <Candlestick />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default SeriesRoutes;
