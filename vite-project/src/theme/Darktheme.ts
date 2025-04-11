// src/theme/DarkTheme.ts
import { createTheme } from "@mui/material/styles";

// Extend MUI's palette to support 'black' and 'textColor'
declare module "@mui/material/styles" {
  interface Palette {
    black: Palette['primary'];
    textColor: Palette['primary'];
  }
  interface PaletteOptions {
    black?: PaletteOptions['primary'];
    textColor?: PaletteOptions['primary'];
  }
  interface TypeBackground {
    main: string;
  }
}

export const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#5A20CB",
    },
    black: {
      main: "#242B2E",
    },
    background: {
      main: "#000000",
      default: "#0D0D0D",
    },
    text: {
      primary: "#ffffff",
      secondary: "#aaaaaa"
    }
  },
});

