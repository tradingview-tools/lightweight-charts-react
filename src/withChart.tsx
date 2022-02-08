import React from 'react';
import Chart, { ChartOptions } from './Chart';

function withChart<P>(Component: React.FC<P>, options: ChartOptions): React.FC<P> {
  return (props: P) => (
    <Chart options={options}>
      <Component {...props} />
    </Chart>
  );
}

export default withChart;
