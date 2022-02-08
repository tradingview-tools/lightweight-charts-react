const fs = require('fs');
const path = require('path');

const src = path.join(__dirname, 'src');
const dir = path.join(__dirname, 'src', 'pages', 'examples');
const entries = fs.readdirSync(dir, { withFileTypes: true });

const examples = entries
  .map((entry) => {
    if (entry.isFile() && entry.name.endsWith('.tsx') && entry.name !== 'Home.tsx') {
      const component = entry.name.replace('.tsx', '');
      const example = `Example${component}`;
      const page = component.replace(/([A-Z][a-z])/g, ' $1').trim();
      const url = page.toLowerCase().replace(/\s/g, '-');

      return { component, page, example, url };
    }
  })
  .filter((value) => !!value);

const appPath = path.join(src, 'App.tsx');
// const homeContents = fs.readFileSync(homePath, { encoding: 'utf-8' });

const appContents = `import { Heading, majorScale, Pane } from 'evergreen-ui';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ButtonLink from './ui/ButtonLink';
import SuspenseLoader from './ui/SuspenseLoader';
import withTheme from './ui/withTheme';

const Home = React.lazy(() => import('./pages/Home'));
const ExamplesHome = React.lazy(() => import('./pages/examples/Home'));
${examples
  .map(({ example, component }) => `const ${example} = React.lazy(() => import('./pages/examples/${component}'));`)
  .join('\n')}

function App() {
  return (
    <BrowserRouter>
      <Pane display="flex" flexDirection="column" background="tint2" height="100vh">
        <Pane display="flex" elevation={1} paddingX={majorScale(4)} paddingY={majorScale(2)}>
          <Pane flex={1} alignItems="center" display="flex">
            <Heading size={600}>Demo App</Heading>
          </Pane>
          <Pane>
            <ButtonLink to="/" marginX={majorScale(1)}>
              Home
            </ButtonLink>
            <ButtonLink to="examples">Examples</ButtonLink>
          </Pane>
        </Pane>

        <Routes>
          <Route
            path="/"
            element={
              <SuspenseLoader>
                <Home />
              </SuspenseLoader>
            }
          />
          <Route path="examples">
            <Route
              path=""
              element={
                <SuspenseLoader>
                  <ExamplesHome />
                </SuspenseLoader>
              }
            />
            ${examples
              .map(
                ({ url, example }) => `<Route path="${url}" element={
                <SuspenseLoader>
                  <${example} />
                </SuspenseLoader>
              }/>`
              )
              .join('\n')}
          </Route>
        </Routes>
      </Pane>
    </BrowserRouter>
  );
}

export default withTheme(App);
`;

fs.writeFileSync(appPath, appContents);
