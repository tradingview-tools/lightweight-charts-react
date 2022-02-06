import styled from 'styled-components';
import { withTheme } from '../theme';

const AppMain = withTheme(styled.main`
  display: flex;
  flex-flow: column nowrap;
  flex-grow: 1;
  margin: 0;
  padding: ${({ theme }) => theme.spacing(4)} ${({ theme }) => theme.spacing(8)};
`);

export default AppMain;
