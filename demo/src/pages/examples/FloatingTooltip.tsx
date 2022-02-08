import React from 'react';
import asPage from '../../ui/asPage';
import { Paragraph } from 'evergreen-ui';

const FloatingTooltip: React.FC = () => {
  return <Paragraph>Coming Soon</Paragraph>;
};

export default asPage(FloatingTooltip, { title: 'Floating Tooltip' });
