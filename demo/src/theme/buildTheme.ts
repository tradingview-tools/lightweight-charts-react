import {
  ThemeConfig,
  ThemeSpacing,
  Theme,
  ThemePalette,
  ThemePaletteConfig,
  ThemeSpacingConfig,
  ThemeTypography,
  ThemeTypographyConfig,
} from './types';

function buildThemePalette(config: ThemePaletteConfig): ThemePalette {
  return config.default;
}

function buildThemeSpacing(config: ThemeSpacingConfig): ThemeSpacing {
  return (value: number) => `${value * config.multiple.value}${config.multiple.unit}`;
}

function buildThemeTypography(config: ThemeTypographyConfig): ThemeTypography {
  return config;
}

function buildTheme(config: ThemeConfig): Theme {
  return {
    palette: buildThemePalette(config.palette),
    spacing: buildThemeSpacing(config.spacing),
    typography: buildThemeTypography(config.typography),
  };
}

export default buildTheme;
