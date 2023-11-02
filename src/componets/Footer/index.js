import React from 'react'
import { FooterWrapper } from './style';
import { Box } from '@mui/material';
import LogoImg from "../../assests/logo.png";
export default function Footer() {
    return (
        <>

            <FooterWrapper>
                <footer>
                    <Box>
                        <img src={LogoImg} alt='logo' />
                    </Box>
                </footer>
            </FooterWrapper>
        </>

    )
}