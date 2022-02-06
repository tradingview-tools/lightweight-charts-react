import React from 'react';
import { Chart, Series, SeriesProps } from '@tradingview-tools/lightweight-charts-react';
import chartProps from '../props/chart.json';
import seriesProps from '../props/series/candlestick.json';

const Candlestick: React.FC = () => {
  return (
    <Chart {...chartProps}>
      <Series {...(seriesProps as SeriesProps<'Candlestick'>)} />
    </Chart>
  );
};

export default Candlestick;
