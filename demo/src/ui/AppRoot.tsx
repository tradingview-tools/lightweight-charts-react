import styled from 'styled-components';
import { withTheme } from '../theme';

const AppRoot = withTheme(styled.div`
  display: flex;
  flex-flow: column nowrap;
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  ${({ theme }) => {
    const background = theme.palette.darkMode ? theme.palette.neutral['900'] : theme.palette.neutral['050'];
    const color = theme.palette.darkMode ? theme.palette.text.light : theme.palette.text.dark;
    return `
      background-color: ${background};
      color: ${color};
    `;
  }}
`);

export default AppRoot;
