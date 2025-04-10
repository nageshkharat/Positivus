"use client"

import React from "react"
import { Box, Container, Typography, Button, Grid } from "@mui/material"
import Image from "next/image"
import { useTheme } from "@mui/material/styles"

const services = [
  {
    title: "Search engine optimization",
    image: "/brands/boximage1.png",
  },
  {
    title: "Pay-per-click advertising",
    image: "/brands/boximage2.png",
  },
]

const ServicesSection = () => {
  const theme = useTheme()

  return (
    <Box
      sx={{
        py: 8,
        backgroundColor: "#f8f9fa",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mb: 8,
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 4, md: "40px" },
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "32px", md: "40px" },
              fontWeight: 600,
              color: "#000",
              backgroundColor: theme.palette.primary.main,
              textAlign: { xs: "center", md: "left" },
              whiteSpace: "nowrap",
              px: 2,
              py: 1,
              borderRadius: 1,
            }}
          >
            Services
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "16px", md: "18px" },
              color: "black",
              maxWidth: "600px",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            At our digital marketing agency, we offer a range of services to help
            businesses grow and succeed online. These services include:
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "40px",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
          }}
        >
          {services.map((service, index) => (
            <Box
              key={index}
              sx={{
                position: "relative",
                height: { xs: "auto", md: "310px" },
                width: { xs: "100%", md: "600px" },
                minHeight: { xs: "310px", md: "auto" },
                borderRadius: "45px",
                overflow: "hidden",
                boxShadow: "0 5px 0 #000",
                backgroundColor: index === 1 ? theme.palette.primary.main : "#fff",
                border: "1px solid black",
                p: { xs: "30px", md: "50px" },
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  zIndex: 1,
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  justifyContent: "space-between",
                }}
              >
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                  <Typography
                    variant="h5"
                    component="div"
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 1,
                    }}
                  >
                    <Box
                      component="span"
                      sx={{
                        fontWeight: 600,
                        color: index === 1 ? "black" : "#1a1a1a",
                        fontSize: { xs: "20px", md: "24px" },
                        backgroundColor: index === 1 ? "white" : theme.palette.primary.main,
                        display: "inline",
                        width: "fit-content",
                        px: 1,
                        py: 0.5,
                        borderRadius: 1,
                      }}
                    >
                      {index === 0 ? "Search engine" : "Pay-per-click"}
                    </Box>
                    <Box
                      component="span"
                      sx={{
                        fontWeight: 600,
                        color: index === 1 ? "black" : "#1a1a1a",
                        fontSize: { xs: "20px", md: "24px" },
                        backgroundColor: index === 1 ? "white" : theme.palette.primary.main,
                        display: "inline",
                        width: "fit-content",
                        px: 1,
                        py: 0.5,
                        borderRadius: 1,
                      }}
                    >
                      {index === 0 ? "optimization" : "advertising"}
                    </Box>
                  </Typography>
                </Box>
                <Button
                  variant="text"
                  sx={{
                    color: index === 1 ? "#fff" : "#1a1a1a",
                    textTransform: "none",
                    p: 0,
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    alignSelf: "flex-start",
                    "&:hover": {
                      backgroundColor: "transparent",
                    },
                  }}
                >
                  Learn more
                  <Image
                    src="/brands/arrow.png"
                    alt="Arrow"
                    width={24}
                    height={24}
                    style={{ marginLeft: "8px" }}
                  />
                </Button>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  right: { xs: "20px", md: "50px" },
                  transform: "translateY(-50%)",
                  width: { xs: "150px", md: "210px" },
                  height: { xs: "120px", md: "166.05px" },
                  zIndex: 0,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  width={210}
                  height={166.05}
                  style={{
                    objectFit: "contain",
                    width: "100%",
                    height: "auto",
                  }}
                />
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  )
}

export default ServicesSection
