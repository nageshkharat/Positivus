"use client"

import React from "react"
import { Box, Container, Typography, useMediaQuery } from "@mui/material"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { useTheme } from "@mui/material/styles"

const testimonials = [
  {
    desktopImage: "/brands/testimonialDesktop.png",
    mobileImage: "/brands/testimonialMobile.png",
  },
  {
    desktopImage: "/brands/testimonialDesktop.png",
    mobileImage: "/brands/testimonialMobile.png",
  },
  {
    desktopImage: "/brands/testimonialDesktop.png",
    mobileImage: "/brands/testimonialMobile.png",
  },
  {
    desktopImage: "/brands/testimonialDesktop.png",
    mobileImage: "/brands/testimonialMobile.png",
  },
  {
    desktopImage: "/brands/testimonialDesktop.png",
    mobileImage: "/brands/testimonialMobile.png",
  },
]

const TestimonialsSection = () => {
  const theme = useTheme()
  const sliderRef = React.useRef(null)
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))
  const [currentSlide, setCurrentSlide] = React.useState(0)

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
    centerMode: !isMobile,
    centerPadding: !isMobile ? "15%" : "0",
  }

  const handlePrev = () => {
    sliderRef.current.slickPrev()
  }

  const handleNext = () => {
    sliderRef.current.slickNext()
  }

  const handleDotClick = (index) => {
    sliderRef.current.slickGoTo(index)
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
            Testimonials
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "16px", md: "18px" },
              color: "#666",
              maxWidth: "600px",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            Don't just take our word for it. Here's what our clients have to say about working with us:
          </Typography>
        </Box>

        {/* ✅ Updated centered Box below */}
        <Box
          sx={{
            position: "relative",
            width: "100%",
            maxWidth: "1240px", // Ensures it doesn’t exceed this width
            height: { xs: "auto", md: "700px" },
            borderRadius: "45px",
            overflow: "hidden",
            mx: "auto", // ✅ Centers the box
            backgroundColor: "#191A23",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            p: { xs: 2, md: 0 },
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: { xs: "auto", md: "335px" },
              position: "relative",
              mb: { xs: 4, md: 6 },
            }}
          >
            <Slider ref={sliderRef} {...settings}>
              {testimonials.map((testimonial, index) => (
                <Box key={index} sx={{ height: { xs: "auto", md: "335px" } }}>
                  {isMobile ? (
                    <Box
                      component="img"
                      src={testimonial.mobileImage}
                      alt={`Testimonial ${index + 1}`}
                      sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  ) : (
                    <Box
                      component="img"
                      src={testimonial.desktopImage}
                      alt={`Testimonial ${index + 1}`}
                      sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                    />
                  )}
                </Box>
              ))}
            </Slider>
          </Box>

          {/* Arrows and Dots */}
          <Box
            sx={{
              position: "relative",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 2,
              mt: { xs: 2, md: 0 },
            }}
          >
            <Box
              component="img"
              src="/brands/ArrowTestimonial.png"
              alt="Previous"
              onClick={handlePrev}
              sx={{
                cursor: "pointer",
                width: { xs: "25px", md: "25px" },
                height: { xs: "25px", md: "25px" },
                transform: "rotate(180deg)",
              }}
            />
            <Box
              sx={{
                display: "flex",
                gap: 1,
              }}
            >
              {testimonials.map((_, index) => (
                <Box
                  key={index}
                  onClick={() => handleDotClick(index)}
                  sx={{
                    cursor: "pointer",
                    width: { xs: "16px", md: "20px" },
                    height: { xs: "16px", md: "20px" },
                  }}
                >
                  <Box
                    component="img"
                    src={
                      index === currentSlide
                        ? "/brands/VectorCurrent.png"
                        : "/brands/VectorNext.png"
                    }
                    alt={index === currentSlide ? "Current slide" : "Next slide"}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                  />
                </Box>
              ))}
            </Box>
            <Box
              component="img"
              src="/brands/ArrowTestimonial.png"
              alt="Next"
              onClick={handleNext}
              sx={{
                cursor: "pointer",
                width: { xs: "25px", md: "25px" },
                height: { xs: "25px", md: "25px" },
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default TestimonialsSection
