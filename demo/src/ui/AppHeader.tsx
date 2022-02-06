import styled from 'styled-components';
import { withTheme } from '../theme';

const AppHeader = withTheme(styled.header`
  display: flex;
  position: relative;
  margin: 0;
  padding: ${({ theme }) => theme.spacing(2)} ${({ theme }) => theme.spacing(8)};
  ${({ theme }) => {
    const background = theme.palette.darkMode ? theme.palette.neutral['800'] : theme.palette.neutral['100'];
    const color = theme.palette.darkMode ? theme.palette.text.light : theme.palette.text.dark;
    return `
      background-color: ${background};
      color: ${color};
    `;
  }}
`);

export default AppHeader;
