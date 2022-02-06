import { Link, LinkProps } from 'react-router-dom';
import styled from 'styled-components';
import { withTheme } from '../theme';

const ButtonLink: React.FC<LinkProps> = withTheme(styled(Link)`
  outline: 0;
  padding: ${({ theme }) => theme.spacing(2)} ${({ theme }) => theme.spacing(4)};
  text-decoration: none;

  ${({ theme }) => {
    const background = theme.palette.darkMode ? theme.palette.neutral['800'] : theme.palette.neutral['200'];
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

export default ButtonLink;
