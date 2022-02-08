import React from 'react';
import asPage from '../../ui/asPage';
import { Paragraph } from 'evergreen-ui';

const ThreeLineLegend: React.FC = () => {
  return <Paragraph>Coming Soon</Paragraph>;
};

export default asPage(ThreeLineLegend, { title: 'Three Line Legend' });
