import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import ButtonLink from '../ui/ButtonLink';

const Home: React.FC = () => {
  return (
    <div>
      <ButtonLink to="area">Area Series</ButtonLink>
      <ButtonLink to="candlestick">Candlestick Series</ButtonLink>
    </div>
  );
};

export default Home;
