import styled from 'styled-components';
import { withTheme } from '../theme';
import ButtonBase from './ButtonBase';

const Button = withTheme(styled(ButtonBase)`
  padding: ${({ theme }) => theme.spacing(4)} ${({ theme }) => theme.spacing(8)};

  ${({ theme }) => {
    const background = theme.palette.darkMode ? theme.palette.neutral['800'] : theme.palette.neutral['100'];
    const color = theme.palette.darkMode ? theme.palette.text.light : theme.palette.text.dark;
    return `
      background-color: ${background};
      color: ${color};
    `;
  }}

  :hover, :focus {
    ${({ theme }) => {
      const background = theme.palette.darkMode ? theme.palette.neutral['700'] : theme.palette.neutral['100'];
      const color = theme.palette.darkMode ? theme.palette.text.light : theme.palette.text.dark;
      return `
      background-color: ${background};
      color: ${color};
    `;
    }}
  }
`);

export default Button;
