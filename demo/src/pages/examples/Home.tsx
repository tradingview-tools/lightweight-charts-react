import React from 'react';
import { ListItem, UnorderedList } from 'evergreen-ui';
import Link from '../../ui/Link';
import asPage from '../../ui/asPage';

const Home: React.FC = () => {
  return (
    <UnorderedList>
      <ListItem>
        <Link to="bar-chart">Bar Chart</Link>
      </ListItem>
      <ListItem>
        <Link to="candlestick-chart">Candlestick Chart</Link>
      </ListItem>
      <ListItem>
        <Link to="change-series-visibility">Change Series Visibility</Link>
      </ListItem>
      <ListItem>
        <Link to="custom-font-family">Custom Font Family</Link>
      </ListItem>
      <ListItem>
        <Link to="custom-locale">Custom Locale</Link>
      </ListItem>
      <ListItem>
        <Link to="custom-price-formatter">Custom Price Formatter</Link>
      </ListItem>
      <ListItem>
        <Link to="custom-themes">Custom Themes</Link>
      </ListItem>
      <ListItem>
        <Link to="custom-watermark">Custom Watermark</Link>
      </ListItem>
      <ListItem>
        <Link to="fit-content">Fit Content</Link>
      </ListItem>
      <ListItem>
        <Link to="floating-tooltip">Floating Tooltip</Link>
      </ListItem>
      <ListItem>
        <Link to="go-to-realtime-button">Go To Realtime Button</Link>
      </ListItem>
      <ListItem>
        <Link to="infinite-history">Infinite History</Link>
      </ListItem>
      <ListItem>
        <Link to="intraday-data">Intraday Data</Link>
      </ListItem>
      <ListItem>
        <Link to="inverted-price-scale">Inverted Price Scale</Link>
      </ListItem>
      <ListItem>
        <Link to="legend">Legend</Link>
      </ListItem>
      <ListItem>
        <Link to="logarithmic-price-scale">Logarithmic Price Scale</Link>
      </ListItem>
      <ListItem>
        <Link to="magnifier-tooltip">Magnifier Tooltip</Link>
      </ListItem>
      <ListItem>
        <Link to="moving-average">Moving Average</Link>
      </ListItem>
      <ListItem>
        <Link to="no-price-scale">No Price Scale</Link>
      </ListItem>
      <ListItem>
        <Link to="no-time-scale">No Time Scale</Link>
      </ListItem>
      <ListItem>
        <Link to="percentage-price-scale">Percentage Price Scale</Link>
      </ListItem>
      <ListItem>
        <Link to="price-lines-with-titles">Price Lines With Titles</Link>
      </ListItem>
      <ListItem>
        <Link to="price-scale-at-left">Price Scale At Left</Link>
      </ListItem>
      <ListItem>
        <Link to="range-switcher">Range Switcher</Link>
      </ListItem>
      <ListItem>
        <Link to="realtime-emulation">Realtime Emulation</Link>
      </ListItem>
      <ListItem>
        <Link to="series-markers">Series Markers</Link>
      </ListItem>
      <ListItem>
        <Link to="three-line-legend">Three Line Legend</Link>
      </ListItem>
      <ListItem>
        <Link to="tick-marks-formatter">Tick Marks Formatter</Link>
      </ListItem>
      <ListItem>
        <Link to="tracking-tooltip">Tracking Tooltip</Link>
      </ListItem>
      <ListItem>
        <Link to="two-price-scales">Two Price Scales</Link>
      </ListItem>
      <ListItem>
        <Link to="volume-study">Volume Study</Link>
      </ListItem>
      <ListItem>
        <Link to="whitespaces">Whitespaces</Link>
      </ListItem>
    </UnorderedList>
  );
};

export default asPage(Home, { title: 'Examples' });
