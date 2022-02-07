import React from 'react';
import { ListItem, UnorderedList } from 'evergreen-ui';
import Link from '../../ui/Link';
import asPage from '../../ui/asPage';

const Home: React.FC = () => {
  return (
    <UnorderedList>
      <ListItem>
        <Link to="examples">See examples</Link>
      </ListItem>
    </UnorderedList>
  );
};

export default asPage(Home, { title: 'Welcome' });
