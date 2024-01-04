import {
  createTheme,
  Palette,
  PaletteColor,
  PaletteColorOptions,
  PaletteOptions,
  ThemeOptions,
} from '@mui/material/styles';

interface NumberedPaletteColorOptions {
  900: string;
  800: string;
  700: string;
  600: string;
  500: string;
  400: string;
  300: string;
  200: string;
  100: string;
}

interface CustomPalette extends Palette {
  primary: PaletteColor & NumberedPaletteColorOptions;
}

interface CustomPaletteOptions extends PaletteOptions {
  primary: PaletteColorOptions & NumberedPaletteColorOptions;
}

interface CustomThemeOptions extends ThemeOptions {
  palette?: CustomPaletteOptions;
}

declare module '@mui/material/styles' {
  interface Theme {
    palette: CustomPalette;
    typography: {
      fontFamily: string;
    };
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#DF643A',
    },
  },
  typography: {
    fontFamily: `var('--font-sintony')`,
    button: {
      textTransform: 'none',
    },
  },
} as CustomThemeOptions);

export default theme;
