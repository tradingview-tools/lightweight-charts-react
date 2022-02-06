import { ThemePalette, ThemeTypographyVariant } from './Theme';

export type ThemePaletteConfig = {
  default: ThemePalette;
  [palette: string]: Partial<ThemePalette>;
};

export type ThemeSpacingConfig = {
  multiple: {
    value: number;
    unit: string;
  };
};

export type ThemeTypographyConfig = {
  base: ThemeTypographyVariant;
  [variant: string]: Partial<ThemeTypographyVariant>;
};

export type ThemeConfig = {
  palette: ThemePaletteConfig;
  spacing: ThemeSpacingConfig;
  typography: ThemeTypographyConfig;
};
