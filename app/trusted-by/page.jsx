"use client";
import React from "react";
import { Container, Typography } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/TrustedByPage.css";

const companies = [
  { name: "Google", logo: "/brands/google.svg" },
  { name: "Microsoft", logo: "/brands/microsoft.svg" },
  { name: "Apple", logo: "/brands/apple.svg" },
  { name: "Meta", logo: "/brands/meta.svg" },
  { name: "Adobe", logo: "/brands/adobe.svg" },
  { name: "Salesforce", logo: "/brands/salesforce.svg" },
  { name: "IBM", logo: "/brands/ibm.svg" },
  { name: "Oracle", logo: "/brands/oracle.svg" },
];

const TrustedByPage = () => {
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
        },
      },
    ],
  };

  return (
    <div className="trusted-by-page">
      <Container maxWidth="lg">
        <div className="page-header">
          <Typography variant="h2" component="h1">
            Trusted By Leading Companies
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            We are proud to work with some of the most innovative companies in the world
          </Typography>
        </div>

        <div className="companies-slider">
          <Slider {...settings}>
            {companies.map((company, index) => (
              <div key={index} className="company-logo-container">
                <img
                  src={company.logo}
                  alt={company.name}
                  className="company-logo"
                />
              </div>
            ))}
          </Slider>
        </div>
      </Container>
    </div>
  );
};

export default TrustedByPage; 