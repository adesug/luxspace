import React from 'react';
import Header from 'parts/Header';
import Hero from 'parts/HomePage/Hero';
import JustArrived from 'parts/HomePage/JustArrived';
import BrowseRoom from 'parts/HomePage/BrowseRoom';
import Client from 'parts/Client';
import Sitemap from 'parts/HomePage/Sitemap';
import Footer from 'parts/Footer';

import UseScrollAnchor from 'helpers/hooks/UseScrollAnchor';
import UseModalDOM from 'helpers/hooks/UseModalDOM';

export default function HomePages() {
    UseScrollAnchor();
    UseModalDOM();
    return (
         <>
         <Header theme="white" position="absolute"/>
         <Hero/>
         <BrowseRoom/>
         <JustArrived/>
         <Client/>
         <Sitemap/>
         <Footer/>

         
        </>
    )
}
