import React from 'react';
import asPage from '../../ui/asPage';
import { Paragraph } from 'evergreen-ui';

const FitContent: React.FC = () => {
  return <Paragraph>Coming Soon</Paragraph>;
};

export default asPage(FitContent, { title: 'Fit Content' });
