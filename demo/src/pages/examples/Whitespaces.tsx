import React from 'react';
import asPage from '../../ui/asPage';
import { Paragraph } from 'evergreen-ui';

const Whitespaces: React.FC = () => {
  return <Paragraph>Coming Soon</Paragraph>;
};

export default asPage(Whitespaces, { title: 'Whitespaces' });
