import React from 'react';
import asPage from '../../ui/asPage';
import { Paragraph } from 'evergreen-ui';

const NoPriceScale: React.FC = () => {
  return <Paragraph>Coming Soon</Paragraph>;
};

export default asPage(NoPriceScale, { title: 'No Price Scale' });
