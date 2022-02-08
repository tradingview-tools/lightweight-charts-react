import React from 'react';
import asPage from '../../ui/asPage';
import { Paragraph } from 'evergreen-ui';

const CustomPriceFormatter: React.FC = () => {
  return <Paragraph>Coming Soon</Paragraph>;
};

export default asPage(CustomPriceFormatter, { title: 'Custom Price Formatter' });
