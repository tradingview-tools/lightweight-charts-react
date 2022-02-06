import React from 'react';
import { Chart, Series, SeriesProps } from '@tradingview-tools/lightweight-charts-react';
import chartProps from '../props/chart.json';
import seriesProps from '../props/series/area.json';

const Area: React.FC = () => {
  return (
    <Chart {...chartProps}>
      <Series {...(seriesProps as SeriesProps<'Area'>)} />
    </Chart>
  );
};

export default Area;
