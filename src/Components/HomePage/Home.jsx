import React from 'react'
import NavBar from "../NavBar/NavBar";
import HeroSection from "../HeroSection/HeroSection";
import VideoHeader from "../Feed/VideoHeader";
import Feed from "../Feed/Feed";

const Home = () => {
    return (
        <>
            <NavBar/>
            <HeroSection/>
            <VideoHeader/>
            <Feed/>
        </>
    )
}

export default Home