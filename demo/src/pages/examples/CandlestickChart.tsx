import React from 'react';
import { Chart, CrosshairMode, Series } from '@tradingview-tools/lightweight-charts-react';
import data from '../../data/bar-data.json';
import asPage from '../../ui/asPage';

const CandlestickChart: React.FC = () => {
  return (
    <Chart
      options={{
        width: 600,
        height: 300,
        layout: {
          backgroundColor: '#000000',
          textColor: 'rgba(255, 255, 255, 0.9)',
        },
        grid: {
          vertLines: {
            color: 'rgba(197, 203, 206, 0.5)',
          },
          horzLines: {
            color: 'rgba(197, 203, 206, 0.5)',
          },
        },
        crosshair: {
          mode: CrosshairMode.Normal,
        },
        rightPriceScale: {
          borderColor: 'rgba(197, 203, 206, 0.8)',
        },
        timeScale: {
          borderColor: 'rgba(197, 203, 206, 0.8)',
        },
      }}
    >
      <Series
        type="Candlestick"
        options={{
          upColor: 'rgba(255, 144, 0, 1)',
          downColor: '#000',
          borderDownColor: 'rgba(255, 144, 0, 1)',
          borderUpColor: 'rgba(255, 144, 0, 1)',
          wickDownColor: 'rgba(255, 144, 0, 1)',
          wickUpColor: 'rgba(255, 144, 0, 1)',
        }}
        data={data}
      />
    </Chart>
  );
};

export default asPage(CandlestickChart, { title: 'Candlestick Chart' });
