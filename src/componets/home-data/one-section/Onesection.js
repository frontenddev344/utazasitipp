import React from "react";
import { Box } from '@mui/material';
import { OneSectionWrapper } from "./style";
import ZikZaksec from "../zik-zak-sec/ZikZaksec";
import ContentSec from "../zik-zak-sec/ContentSec";
import Testimonial from "../../testimonial/Testimonial";

function OneSection() {
    return (
        <OneSectionWrapper>
            <Box component='section' className="wholeSec">

                <ZikZaksec />
                <ContentSec />
                <Testimonial />
            </Box>
        </OneSectionWrapper>
    );
} export default OneSection;