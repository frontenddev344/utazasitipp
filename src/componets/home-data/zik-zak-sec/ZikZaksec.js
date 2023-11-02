import React from "react";
import { ZikZaksecWrapper } from "./style";
import { Box, Typography, Container } from "@mui/material";
import { Data } from "./Data";

function ZikZaksec() {
    return (
        <ZikZaksecWrapper>
            {Data?.map((item, index) => (
                <Box component="section" className="mainWrapper" key={index}>
                    <Container>
                        <Box className="zik-inner ">
                            <Box className="text-bar">
                                <Typography>{item?.titel}</Typography>
                            </Box>
                            <Box className="img_bar">
                                <img src={item?.brand} alt="img" className="Brand-Img" />
                            </Box>
                        </Box>
                    </Container>
                </Box>
            ))}
        </ZikZaksecWrapper>
    );
}

export default ZikZaksec;
