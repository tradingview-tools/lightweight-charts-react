import React, { useEffect, useState } from 'react';
import { useChart, Series, withChart } from '@tradingview-tools/lightweight-charts-react';
import data from '../../data/line-data.json';
import asPage from '../../ui/asPage';
import { RadioGroup } from 'evergreen-ui';

const FONT_FAMILY_OPTIONS = [
  { label: 'Courier New', value: 'Courier New' },
  { label: 'Arial', value: 'Arial' },
  { label: 'Times New Roman', value: 'Times New Roman' },
  { label: 'Comic Sans :(', value: 'Comic Sans MS' },
];

const CustomFontFamily: React.FC = withChart(
  () => {
    const chart = useChart();
    const [fontFamily, setFontFamily] = useState('Comic Sans MS');

    useEffect(() => {
      chart.applyOptions({
        layout: {
          fontFamily,
        },
      });
    }, [fontFamily, chart]);

    return (
      <>
        <Series
          type="Area"
          options={{
            topColor: 'rgba(33, 150, 243, 0.56)',
            bottomColor: 'rgba(33, 150, 243, 0.04)',
            lineColor: 'rgba(33, 150, 243, 1)',
            lineWidth: 2,
          }}
          data={data}
        />
        <RadioGroup
          label="Font Family"
          value={fontFamily}
          options={FONT_FAMILY_OPTIONS}
          onChange={(event) => setFontFamily(event.target.value)}
        />
      </>
    );
  },
  {
    width: 600,
    height: 300,
    layout: {
      fontFamily: 'Comic Sans MS',
    },
    rightPriceScale: {
      borderColor: 'rgba(197, 203, 206, 1)',
    },
    timeScale: {
      borderColor: 'rgba(197, 203, 206, 1)',
    },
  }
);

export default asPage(CustomFontFamily, { title: 'Custom Font Family' });
