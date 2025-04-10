"use client"

import React from "react"
import { Box, Container } from "@mui/material"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const companies = [
  { name: "Dribbble", logo: "/brands/dribbble.png" },
  { name: "Notion", logo: "/brands/notion.png" },
  { name: "Hubspot", logo: "/brands/hubspot.png" },
  { name: "Amazon", logo: "/brands/amazon.jpg" },
  { name: "Netflix", logo: "/brands/netflix.png" },
  { name: "Zoom", logo: "/brands/zoom.png" },
]

const TrustedBySection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          rows: 2,
          slidesPerRow: 1,
        },
      },
    ],
  }

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
            "& .slick-slide": {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "auto",
              "& > div": {
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                // ✅ Add gap between two rows only in mobile view
                "@media (max-width: 480px)": {
                  marginBottom: "10px",
                },
              },
            },
            "& .slick-track": {
              display: "flex",
              alignItems: "center",
            },
            "& img": {
              maxWidth: "80%",
              height: "auto",
              filter: "grayscale(100%)",
              opacity: 0.6,
              transition: "all 0.3s ease",
              "&:hover": {
                filter: "grayscale(0%)",
                opacity: 1,
              },
            },
          }}
        >
          <Slider {...settings}>
            {companies.map((company, index) => (
              <Box key={index}>
                <img
                  src={company.logo}
                  alt={company.name}
                  style={{ width: "100%", height: "auto" }}
                />
              </Box>
            ))}
          </Slider>
        </Box>
      </Container>
    </Box>
  )
}

export default TrustedBySection
