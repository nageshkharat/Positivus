"use client"

import React from "react"
import { Box, Typography, TextField, Button, Grid, useTheme } from "@mui/material"
import { Send } from "@mui/icons-material"

export default function ContactSection() {
  const theme = useTheme()

  const handleSubmit = (event) => {
    event.preventDefault()
    // Handle form submission
  }

  return (
    <Box component="section" sx={{ py: { xs: 6, md: 10 } }}>
      <Typography variant="h2" component="h2" gutterBottom sx={{ mb: 6 }}>
        Get in Touch
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 6, maxWidth: "600px" }}>
        Ready to take your business to the next level? Contact us today for a free consultation and discover how our digital marketing services can help you achieve your goals.
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            <TextField
              required
              fullWidth
              label="Name"
              variant="outlined"
              sx={{ "& .MuiOutlinedInput-root": { borderRadius: 2 } }}
            />
            <TextField
              required
              fullWidth
              label="Email"
              type="email"
              variant="outlined"
              sx={{ "& .MuiOutlinedInput-root": { borderRadius: 2 } }}
            />
            <TextField
              required
              fullWidth
              label="Message"
              multiline
              rows={4}
              variant="outlined"
              sx={{ "& .MuiOutlinedInput-root": { borderRadius: 2 } }}
            />
            <Button
              type="submit"
              variant="contained"
              size="large"
              endIcon={<Send />}
              sx={{
                borderRadius: 2,
                py: 1.5,
                px: 4,
                textTransform: "none",
                fontWeight: 600,
              }}
            >
              Send Message
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            <Box>
              <Typography variant="h6" gutterBottom>
                Email
              </Typography>
              <Typography variant="body1" color="text.secondary">
                info@positivus.com
              </Typography>
            </Box>
            <Box>
              <Typography variant="h6" gutterBottom>
                Phone
              </Typography>
              <Typography variant="body1" color="text.secondary">
                +1 (555) 123-4567
              </Typography>
            </Box>
            <Box>
              <Typography variant="h6" gutterBottom>
                Address
              </Typography>
              <Typography variant="body1" color="text.secondary">
                123 Marketing Street
                <br />
                Suite 456
                <br />
                New York, NY 10001
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
} 