import React from 'react';
import { Chart, CrosshairMode, Series } from '@tradingview-tools/lightweight-charts-react';
import data from '../../data/bar-data.json';
import asPage from '../../ui/asPage';

const BarChart: React.FC = () => {
  return (
    <Chart
      options={{
        width: 600,
        height: 300,
        layout: {
          backgroundColor: '#ffffff',
          textColor: 'rgba(33, 56, 77, 1)',
        },
        crosshair: {
          mode: CrosshairMode.Normal,
        },
        rightPriceScale: {
          borderColor: 'rgba(197, 203, 206, 1)',
        },
        timeScale: {
          borderColor: 'rgba(197, 203, 206, 1)',
        },
      }}
    >
      <Series
        type="Bar"
        options={{
          thinBars: true,
          downColor: '#000',
          upColor: '#000',
        }}
        data={data}
      />
    </Chart>
  );
};

export default asPage(BarChart, { title: 'Bar Chart' });
