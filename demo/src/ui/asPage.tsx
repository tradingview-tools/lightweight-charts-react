import React from 'react';
import { majorScale, Pane, Heading, Paragraph } from 'evergreen-ui';

type AsPageOptions = {
  title: React.ReactNode;
  description?: React.ReactNode;
};

function asPage<P>(Component: React.FC<P>, options: AsPageOptions): React.FC<P> {
  return (props: P) => (
    <Pane
      elevation={1}
      paddingX={majorScale(4)}
      paddingY={majorScale(2)}
      marginX={majorScale(4)}
      marginY={majorScale(2)}
    >
      <Heading size={800} is="h1">
        {options.title}
      </Heading>
      {options.description && <Paragraph>{options.description}</Paragraph>}
      <Component {...props} />
    </Pane>
  );
}

export default asPage;
