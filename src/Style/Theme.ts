import { createTheme } from "@material-ui/core/styles";
import { TypographyOptions } from "@material-ui/core/styles/createTypography";

export const defaultColors = {
  colorPrimary: "#D95F69;",
  colorSecondary: "#1FC2C2",
  colorSecondary_light: "#1A8585",
  colorSecondary_dark: "#155050",
  colorTypography: "#ffffff",
  error: "#f44336",
};

declare module "@material-ui/core/styles/createPalette" {
  export default interface Theme {
    palette: PaletteColor;
    typography: TypographyOptions;
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: defaultColors.colorPrimary,
      light: defaultColors.colorTypography,
    },
    secondary: {
      main: defaultColors.colorSecondary,
      dark: defaultColors.colorSecondary_dark,
      light: defaultColors.colorSecondary_light,
    },
    error: {
      main: defaultColors.error,
    },
  },
  typography: {
    fontFamily: "Roboto",
  },
  shape: {
    borderRadius: 8,
  },
  breakpoints: {
    values: {
      //xxs: 0, // small phone
      xs: 300, // phone
      sm: 600, // tablets
      md: 900,
      lg: 1366, // laptop
      xl: 1536 // large screens
    }
  }
});

export default theme;