import React from 'react';
import asPage from '../../ui/asPage';
import { Paragraph } from 'evergreen-ui';

const NoTimeScale: React.FC = () => {
  return <Paragraph>Coming Soon</Paragraph>;
};

export default asPage(NoTimeScale, { title: 'No Time Scale' });
