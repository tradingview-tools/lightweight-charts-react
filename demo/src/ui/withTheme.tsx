import React from 'react';
import { mergeTheme, defaultTheme, ThemeProvider, Theme, Components } from 'evergreen-ui';

function withTheme<P>(Component: React.FC<P>, theme: Partial<Theme<Components>> = {}): React.FC<P> {
  const mergedTheme = mergeTheme(defaultTheme, theme);

  return (props: P) => (
    <ThemeProvider value={mergedTheme}>
      <Component {...props} />
    </ThemeProvider>
  );
}

export default withTheme;
