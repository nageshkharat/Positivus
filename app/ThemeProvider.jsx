"use client"

import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import { createCustomTheme } from "../theme"

export default function ThemeProvider({ children }) {
  const theme = createCustomTheme()

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  )
} 