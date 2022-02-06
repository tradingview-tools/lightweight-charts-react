import React, { useContext } from 'react';
import { Merge } from 'type-fest';
import ThemeContext from './ThemeContext';
import { Theme } from './types';

export type PropsWithTheme<P> = Merge<
  P,
  {
    theme: Theme;
  }
>;

function withTheme<P>(Component: React.FC<PropsWithTheme<P>>): React.FC<P> {
  return (props: P) => {
    const theme = useContext(ThemeContext);
    return <Component {...props} theme={theme} />;
  };
}

export default withTheme;
