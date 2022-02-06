import { Merge } from 'type-fest';

export type ThemePaletteNeutral = {
  '050': string;
  '100': string;
  '200': string;
  '300': string;
  '400': string;
  '500': string;
  '600': string;
  '700': string;
  '800': string;
  '900': string;
};

export type ThemePaletteText = {
  main: string;
  light: string;
  dark: string;
};

export type ThemePaletteColorShades = {
  main: string;
  light: string;
  dark: string;
};

export type ThemePalette = {
  darkMode: boolean;
  neutral: ThemePaletteNeutral;
  color: Record<string, ThemePaletteColorShades>;
  text: ThemePaletteText;
};

export type ThemeSpacing = (value: number) => string;

export type ThemeTypographyVariant = {
  fontSize: string;
  fontFamily: string;
};

export type ThemeTypography = Merge<
  {
    base: ThemeTypographyVariant;
  },
  Record<string, Partial<ThemeTypographyVariant>>
>;

export type Theme = {
  palette: ThemePalette;
  spacing: ThemeSpacing;
  typography: ThemeTypography;
};
