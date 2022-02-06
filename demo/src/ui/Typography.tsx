import React from 'react';
import styled from 'styled-components';
import { PropsWithTheme, withTheme } from '../theme';

export type TypographyProps = {
  component?: React.ElementType;
  variant?: string;
  color?: string;
};

type TypographyBaseProps = PropsWithTheme<TypographyProps>;

const TypographyBase: React.FC<TypographyBaseProps> = (props) => {
  const { theme, variant, color, component: Component = 'span', ...other } = props;
  return <Component {...other} />;
};

const Typography: React.FC<TypographyProps> = withTheme(styled(TypographyBase)`
  font-size: ${({ theme, variant = 'base' }) => {
    if (!theme.typography[variant]) return theme.typography.base.fontSize;
    return theme.typography[variant].fontSize || theme.typography.base.fontSize;
  }};
`);

export default Typography;
