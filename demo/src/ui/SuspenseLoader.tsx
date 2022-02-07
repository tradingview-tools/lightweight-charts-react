import { Pane, Spinner, Text } from 'evergreen-ui';
import { Suspense, SuspenseProps } from 'react';

const SuspenseFallback: React.FC = () => (
  <Pane>
    <Spinner marginX="auto" marginY={120} />
    <Text>Loading...</Text>
  </Pane>
);

export type SuspenseLoaderProps = Omit<SuspenseProps, 'fallback'>;

const SuspenseLoader: React.FC<SuspenseLoaderProps> = (props) => {
  return <Suspense fallback={<SuspenseFallback />} {...props} />;
};

export default SuspenseLoader;
