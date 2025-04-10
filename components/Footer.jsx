"use client"
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Link,
  IconButton,
  useTheme,
  Divider,
} from "@mui/material"
import { Facebook, Twitter, LinkedIn, Instagram } from "@mui/icons-material"

export default function Footer() {
  const theme = useTheme()
  const footerLinks = ["About us", "Services", "Use Cases", "Pricing", "Blog"]

  return (
    <Box
      sx={{
        width: { xs: "100%", md: "1240px" },
        backgroundColor: "#191A23",
        borderRadius: { xs: 0, md: "45px 45px 0 0" },
        mt: 10,
        py: 6,
        mx: "auto",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            width: { xs: "100%", md: "1240px" },
            mx: "auto",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: { xs: 4, md: 0 },
          }}
        >
          {/* Logo */}
          <Box sx={{ flex: 1, minWidth: 200, textAlign: { xs: "center", md: "left" } }}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2, gap: 1, justifyContent: { xs: "center", md: "flex-start" } }}>
              <img
                src="/brands/vector2.png"
                alt="Vector Logo"
                style={{ height: "30px", width: "auto" }}
              />
              <Typography variant="h6" sx={{ fontWeight: 700, color: "white" }}>
                Positivus
              </Typography>
            </Box>
          </Box>

          {/* Footer Links + Social Icons */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 2,
              justifyContent: "center",
              flex: 2,
              minWidth: 300,
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            {footerLinks.map((link, i) => (
              <Link
                key={i}
                href="#"
                color="inherit"
                underline="always"
                sx={{ fontSize: "0.95rem", fontWeight: 500, color: "white" }}
              >
                {link}
              </Link>
            ))}
            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
              <IconButton size="small" sx={{ color: "#191A23", backgroundColor: "white" }}>
                <Facebook />
              </IconButton>
              <IconButton size="small" sx={{ color: "#191A23", backgroundColor: "white" }}>
                <Twitter />
              </IconButton>
              <IconButton size="small" sx={{ color: "#191A23", backgroundColor: "white" }}>
                <LinkedIn />
              </IconButton>
            </Box>
          </Box>
        </Box>

        {/* Contact Details + Newsletter Box */}
        <Box
          sx={{
            mt: 5,
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 4,
            alignItems: "center",
          }}
        >
          {/* Contact Details */}
          <Box sx={{ flex: 1, minWidth: 200, textAlign: { xs: "center", md: "left" } }}>
            <Typography
              variant="subtitle2"
              sx={{
                display: "inline-block",
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.secondary.main,
                px: 1.5,
                py: 0.5,
                borderRadius: 1,
                fontWeight: 600,
                mb: 1,
              }}
            >
              Contact us:
            </Typography>

            <Box mt={1}>
              <Typography variant="body2" paragraph sx={{ color: "white" }}>
                <Link
                  href="mailto:hello@positivus.com"
                  color="inherit"
                  underline="hover"
                >
                  hello@positivus.com
                </Link>
                <br />
                <br />
                Phone: 555-567-8901
                <br />
                <br />
                Address: 1234 Main St <br /> Moonstone City, Stardust State 12345
              </Typography>
            </Box>
          </Box>

          {/* Newsletter Subscribe Box */}
          <Box
            sx={{
              border: "1px",
              borderRadius: 2,
              padding: 2,
              display: "flex",
              flexDirection: "column",
              gap: 2,
              maxWidth: 634,
              height: 184,
              width: "100%",
              backgroundColor: "#292A32",
            }}
          >
            <Box
              component="form"
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                gap: 1,
                height: "100%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <TextField
                placeholder="Email"
                variant="outlined"
                size="small"
                sx={{
                  backgroundColor: "#292A32",
                  borderRadius: 1,
                  height: "68px",
                  width: "280px",
                  "& .MuiOutlinedInput-root": {
                    height: "100%",
                    "& fieldset": {
                      borderColor: "rgba(255,255,255,0.3)",
                    },
                    "&:hover fieldset": {
                      borderColor: "rgba(255,255,255,0.5)",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: theme.palette.primary.main,
                    },
                  },
                  "& input": {
                    color: "white",
                    height: "100%",
                  },
                }}
              />
              <Button
                variant="contained"
                type="submit"
                sx={{
                  backgroundColor: theme.palette.primary.main,
                  color: "black",
                  px: 3,
                  height: "68px",
                  width: "280px",
                  "&:hover": {
                    backgroundColor: theme.palette.primary.dark,
                  },
                }}
              >
                Subscribe to newsletter
              </Button>
            </Box>
          </Box>
        </Box>

        {/* Social Media Icons - Mobile Only */}
        <Box sx={{ display: { xs: "flex", md: "none" }, justifyContent: "center", gap: 1, mt: 4 }}>
          <IconButton size="small" sx={{ color: "#191A23", backgroundColor: "white" }}>
            <Facebook />
          </IconButton>
          <IconButton size="small" sx={{ color: "#191A23", backgroundColor: "white" }}>
            <Twitter />
          </IconButton>
          <IconButton size="small" sx={{ color: "#191A23", backgroundColor: "white" }}>
            <LinkedIn />
          </IconButton>
        </Box>

        <Divider sx={{ my: 4, backgroundColor: "white" }} />

        {/* Bottom Row */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", sm: "center" },
            color: "white",
          }}
        >
          <Typography variant="body2" sx={{ mb: { xs: 2, sm: 0 } }}>
            © 2023 Positivus. All rights reserved.
          </Typography>
          <Link
            href="#"
            color="inherit"
            sx={{
              textDecoration: "none",
              "&:hover": { color: "primary.main" },
              
            }}
          >
            Privacy Policy
          </Link>
        </Box>
      </Container>
    </Box>
  )
}
