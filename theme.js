"use client"

import { createTheme } from "@mui/material/styles"

export function createCustomTheme() {
  return createTheme({
    palette: {
      primary: {
        main: "#B9FF66",
        light: "#C7FF85",
        dark: "#A8E65C",
        contrastText: "#000000",
      },
      secondary: {
        main: "#272D38",
        light: "#3E4756",
        dark: "#1A1F28",
        contrastText: "#FFFFFF",
      },
      background: {
        default: "#FFFFFF",
        paper: "#F3F3F3",
      },
      text: {
        primary: "#272D38",
        secondary: "#5E6674",
      },
    },
    typography: {
      fontFamily: "Inter, sans-serif",
      h1: {
        fontWeight: 700,
        fontSize: "3.5rem",
        lineHeight: 1.2,
      },
      h2: {
        fontWeight: 700,
        fontSize: "3rem",
        lineHeight: 1.2,
      },
      h3: {
        fontWeight: 600,
        fontSize: "2.5rem",
        lineHeight: 1.2,
      },
      h4: {
        fontWeight: 600,
        fontSize: "2rem",
        lineHeight: 1.2,
      },
      h5: {
        fontWeight: 600,
        fontSize: "1.5rem",
        lineHeight: 1.2,
      },
      h6: {
        fontWeight: 600,
        fontSize: "1.25rem",
        lineHeight: 1.2,
      },
      body1: {
        fontSize: "1rem",
        lineHeight: 1.5,
      },
      body2: {
        fontSize: "0.875rem",
        lineHeight: 1.5,
      },
      button: {
        textTransform: "none",
        fontWeight: 600,
      },
    },
    shape: {
      borderRadius: 8,
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            textTransform: "none",
            fontWeight: 600,
            boxShadow: "none",
            "&:hover": {
              boxShadow: "none",
            },
          },
          contained: {
            "&:hover": {
              backgroundColor: "#A8E65C",
            },
          },
          outlined: {
            borderWidth: 2,
            "&:hover": {
              borderWidth: 2,
            },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 12,
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.05)",
          },
        },
      },
    },
  })
} 