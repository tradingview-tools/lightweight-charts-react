import React from 'react';
import { ListItem, UnorderedList } from 'evergreen-ui';
import Link from '../../../ui/Link';
import asPage from '../../../ui/asPage';

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
        <Link to="custom-font-family">Custom Font Family</Link>
      </ListItem>
      <ListItem>
        <Link to="custom-price-formatter">Custom Price Formatter</Link>
      </ListItem>
      <ListItem>
        <Link to="custom-locale">Custom Locale</Link>
      </ListItem>
      <ListItem>
        <Link to="custom-themes">Custom Themes</Link>
      </ListItem>
      <ListItem>
        <Link to="custom-watermark">Custom Watermark</Link>
      </ListItem>
      <ListItem>
        <Link to="legend">Legend</Link>
      </ListItem>
      <ListItem>
        <Link to="3-line-legend">3-Line Legend</Link>
      </ListItem>
      <ListItem>
        <Link to="fit-content">Fit Content</Link>
      </ListItem>
      <ListItem>
        <Link to="floating-tooltip">Floating Tooltip</Link>
      </ListItem>
      <ListItem>
        <Link to="tracking-tooltip">Tracking Tooltip</Link>
      </ListItem>
      <ListItem>
        <Link to="magnifier-tooltip">Magnifier Tooltip</Link>
      </ListItem>
    </UnorderedList>
  );
};

export default asPage(Home, { title: 'Examples' });
