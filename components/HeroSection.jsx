"use client"
import React from "react"
import { Box, Typography, Button, useTheme, useMediaQuery } from "@mui/material"

export default function HeroSection() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 4, sm: 6, md: 8 },
        px: { xs: 2, sm: 4, md: 6 },
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        gap: { xs: 4, md: 8 },
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      <Box sx={{ flex: 1, textAlign: { xs: "center", md: "left" } }}>
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "2.5rem", sm: "3rem", md: "3.5rem" },
            textAlign: { xs: "left", md: "left" },
            fontWeight: 700,
            mb: 2,
            lineHeight: 1.2,
          }}
        >
          Navigating the digital landscape for success
        </Typography>

        {/* 👇 Mobile Illustration right after headline */}
        {isMobile && (
          <Box
            component="img"
            src="/brands/Illustration.png"
            alt="Digital Marketing Illustration"
            sx={{
              width: "100%",
              maxWidth: "600px",
              height: "auto",
              mb: 2,
            }}
          />
        )}

        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            fontSize: { xs: "1rem", sm: "1.125rem" },
            mb: 4,
            maxWidth: "600px",
            mx: { xs: "auto", md: 0 },
            textAlign: { xs: "left", md: "left" },
          }}
        >
          Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: 2,
            justifyContent: { xs: "center", md: "flex-start" },
            mb: 4,
          }}
        >
          <Button
            variant="contained"
            size="large"
            sx={{
              px: 4,
              py: 1.5,
              borderRadius: 2,
              textTransform: "none",
              fontWeight: 300,
              fontSize: { xs: "1rem", sm: "1.125rem" },
              backgroundColor: "black",
              color: "white",
            }}
          >
            Book a consultation
          </Button>
        </Box>
      </Box>

      {/* 👇 Desktop Illustration on the side */}
      {!isMobile && (
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            component="img"
            src="/brands/Illustration.png"
            alt="Digital Marketing Illustration"
            sx={{
              width: "100%",
              maxWidth: "600px",
              height: "auto",
            }}
          />
        </Box>
      )}
    </Box>
  )
}
