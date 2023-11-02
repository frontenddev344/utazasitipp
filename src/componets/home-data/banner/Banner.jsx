import React from "react";
import { BannerWrapper } from "./style";
import { Box, Container, Typography } from '@mui/material';


function Banner() {
    return (
        <BannerWrapper>
            <Box component='section' className="bannerMain">
                <Container>
                    <Box className="textwrapper">
                        <Typography variant="h1" >Isten hozott a
                            <Typography  component="span"> Utazasitipp</Typography>
                        </Typography>
                    </Box>

                </Container>
            </Box>
        </BannerWrapper>
    );
} export default Banner;