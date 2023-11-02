import React from "react";
import { Box } from "@mui/material";
import Header from "../../componets/header/Header";
import Footer from "../../componets/Footer";
import Banner from "../../componets/home-data/banner/Banner";
import OneSection from "../../componets/home-data/one-section/Onesection";


function Home() {
    return (
        <>
            <Box>
                <Header />
                <Banner />
                <OneSection />
                <Footer />
            </Box>
        </>
    )
} export default Home;