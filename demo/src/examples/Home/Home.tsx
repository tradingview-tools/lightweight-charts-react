import React from 'react';
import { Heading, ListItem, majorScale, Pane, UnorderedList } from 'evergreen-ui';
import Link from '../../ui/Link';

const Home: React.FC = () => {
  return (
    <>
      <Heading size={800} is="h1">
        Examples
      </Heading>
      <UnorderedList>
        <ListItem>
          <Link to="examples/bar-chart">Bar Chart</Link>
        </ListItem>
        <ListItem>
          <Link to="examples/candlestick-chart">Candlestick Chart</Link>
        </ListItem>
        <ListItem>
          <Link to="examples/custom-font-family">Custom Font Family</Link>
        </ListItem>
        <ListItem>
          <Link to="examples/custom-price-formatter">Custom Price Formatter</Link>
        </ListItem>
        <ListItem>
          <Link to="examples/custom-locale">Custom Locale</Link>
        </ListItem>
        <ListItem>
          <Link to="examples/custom-themes">Custom Themes</Link>
        </ListItem>
        <ListItem>
          <Link to="examples/custom-watermark">Custom Watermark</Link>
        </ListItem>
        <ListItem>
          <Link to="examples/legend">Legend</Link>
        </ListItem>
        <ListItem>
          <Link to="examples/3-line-legend">3-Line Legend</Link>
        </ListItem>
        <ListItem>
          <Link to="examples/fit-content">Fit Content</Link>
        </ListItem>
        <ListItem>
          <Link to="examples/floating-tooltip">Floating Tooltip</Link>
        </ListItem>
        <ListItem>
          <Link to="examples/tracking-tooltip">Tracking Tooltip</Link>
        </ListItem>
        <ListItem>
          <Link to="examples/magnifier-tooltip">Magnifier Tooltip</Link>
        </ListItem>
      </UnorderedList>
    </>
  );
};

export default Home;
