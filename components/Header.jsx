"use client"

import React, { useState } from "react"
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
  useTheme,
  useMediaQuery,
  Divider,
} from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"

const pages = [
  { name: "About us", href: "#aboutus" },
  { name: "Services", href: "#services" },
  { name: "Use Cases", href: "#usecases" },
  { name: "Pricing", href: "#pricing" },
  { name: "Blog", href: "#blog" },
]

export default function Header() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))
  const [anchorElNav, setAnchorElNav] = useState(null)

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  return (
    <AppBar position="sticky" color="default" elevation={0}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>


          {/* Logo */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, flexGrow: isMobile ? 1 : 0 }}>
            <img src="/brands/Vector.png" alt="Vector Logo" style={{ height: isMobile ? "25px" : "30px", width: "auto" }} />
            <Typography
              variant={isMobile ? "h5" : "h6"}
              component="a"
              href="/"
              sx={{
                fontWeight: 700,
                fontSize: isMobile ? 24 : 30,
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Positivus
            </Typography>
          </Box>

          {/* Mobile: Menu Icon on the left */}
          {isMobile && (
            <Box sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleOpenNavMenu}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
              >
                {pages.map((page) => (
                  <MenuItem key={page.name} onClick={handleCloseNavMenu} component="a" href={page.href}>
                    <Typography textAlign="center">{page.name}</Typography>
                  </MenuItem>
                ))}
                <Divider />
                <MenuItem onClick={handleCloseNavMenu}>
                  <Button
                    variant="contained"
                    fullWidth
                    sx={{
                      border: 1,
                      borderColor: "black",
                      textTransform: "none",
                      fontWeight: 500,
                      borderRadius: 1,
                      color: "black",
                      backgroundColor: "white",
                      mt: 1,
                      px: 3,
                    }}
                  >
                    Request a quote
                  </Button>
                </MenuItem>
              </Menu>
            </Box>
          )}


          {/* Desktop Navigation Links */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, justifyContent: "flex-end", gap: 2 }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                href={page.href}
                sx={{
                  color: "text.primary",
                  display: "block",
                  textTransform: "none",
                  fontWeight: 500,
                }}
              >
                {page.name}
              </Button>
            ))}
          </Box>

          {/* Desktop "Request a quote" Button */}
          <Box sx={{ display: { xs: "none", md: "flex" }, ml: 2 }}>
            <Button
              variant="contained"
              sx={{
                border: 1,
                borderColor: "black",
                textTransform: "none",
                fontWeight: 500,
                borderRadius: 1,
                color: "black",
                backgroundColor: "white",
                px: 3,
              }}
            >
              Request a quote
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
