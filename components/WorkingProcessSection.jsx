"use client"

import React from "react"
import { Box, Container, Typography, Accordion, AccordionSummary, AccordionDetails } from "@mui/material"
import { useTheme } from "@mui/material/styles"

const WorkingProcessSection = () => {
  const theme = useTheme()
  const [expanded, setExpanded] = React.useState(false)

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false)
  }

  const steps = [
    {
      title: "01 Consultation",
      description:
        "We start by understanding your business, target audience, and competitors to develop a comprehensive strategy.",
    },
    {
      title: "02 Research and Strategy Development",
      description:
        "Based on our research, we create a detailed plan outlining the steps needed to achieve your goals.",
    },
  ]

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
            Our Working Process 
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
            Step-by-Step Guide to Achieving Your Business Goals
          </Typography>
        </Box>
        <Box sx={{ width: "100%"}}>
          {steps.map((step, index) => (
            <Accordion
              key={index}
              expanded={expanded === index}
              onChange={handleChange(index)}
              sx={{
                mb: 2,
                borderRadius: 2,
                overflow: "hidden",
                boxShadow: "0 5px 0 #000",
                border: "1px solid #000",
                "&:before": {
                  display: "none",
                },
                "& .MuiAccordionSummary-root": {
                  minHeight: "120px",
                },
                "& .MuiAccordionDetails-root": {
                  minHeight: "120px",
                },
              }}
            >
              <AccordionSummary
                expandIcon={
                  <Box
                    sx={{
                      width: 50,
                      height: 50,
                      borderRadius: "50%",
                      border: "2px solid #000",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: expanded === index ? theme.palette.primary.main : "#fff",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "50px",
                        fontWeight: "bold",
                        color: "black",
                        lineHeight: 1,
                      }}
                    >
                      {expanded === index ? "-" : "+"}
                    </Typography>
                  </Box>
                }
                sx={{
                  backgroundColor: expanded === index ? theme.palette.primary.main : "#fff",
                  color: expanded === index ? "black" : "#000",
                  "& .MuiAccordionSummary-content": {
                    margin: "12px 0",
                  },
                  borderRadius: "8px",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      fontSize: "48px",
                      lineHeight: 1,
                    }}
                  >
                    {step.title.split(" ")[0]}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      fontSize: "24px",
                    }}
                  >
                    {step.title.split(" ").slice(1).join(" ")}
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  backgroundColor: "#fff",
                  padding: "16px 24px",
                  borderRadius: "0 0 8px 8px",
                }}
              >
                <Typography variant="body1" color="text.secondary">
                  {step.description}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>
    </Box>
  )
}

export default WorkingProcessSection
