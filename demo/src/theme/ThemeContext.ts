import { createContext } from 'react';
import buildTheme from './buildTheme';
import { Theme } from './types/Theme';
import defaultThemeConfig from '../props/theme.json';

export const defaultTheme = buildTheme(defaultThemeConfig);

const ThemeContext = createContext<Theme>(defaultTheme);

export default ThemeContext;
