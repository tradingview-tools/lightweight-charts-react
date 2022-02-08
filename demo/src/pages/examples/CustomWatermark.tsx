import React from 'react';
import asPage from '../../ui/asPage';
import { Paragraph } from 'evergreen-ui';

const CustomWatermark: React.FC = () => {
  return <Paragraph>Coming Soon</Paragraph>;
};

export default asPage(CustomWatermark, { title: 'Custom Watermark' });
