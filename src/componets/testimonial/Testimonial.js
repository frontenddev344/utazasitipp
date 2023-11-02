import React from "react";
import { TestimoniaWrapper } from "./style";
import { Box, Typography, Container } from "@mui/material";
import { Data } from "./Data";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Testimonial() {
    const responsive = {
    
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 3,
          margin: 10
          
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          dots: true
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return (
        <TestimoniaWrapper>
            <Box component="section" className="mainTestiWrapper" >
                <Container>
                    <Box className="inner-wrapper">
                        {/* top heading */}
                        <Box className="top-heading">
                            <Typography variant="subtitle1" >
                                TESTIMONIALS
                            </Typography>
                            <Typography variant="h5">
                                What they're saying about us
                            </Typography>
                        </Box>

                        {/* client comment */}
                        <Carousel responsive={responsive}>
                          {/* loop map */}
                        {Data?.map((item, index) => (
                            
                            <Box className="testiMain" key={index}>
                                <Box className="testiText">
                                    <Typography variant="subtitle2">{item?.content}</Typography>
                                </Box>
                                <Box className="testiImgBar">
                                    <img src={item?.clientImg} alt="img" className="Brand-Img" />
                                    <Typography variant="h6">{item?.clientName}</Typography>
                                </Box>
                            </Box>
                            ))} 
                            {/* loop map end */}
                        </Carousel>
                    </Box>
                </Container>
            </Box>
        </TestimoniaWrapper>
    )
}
export default Testimonial;