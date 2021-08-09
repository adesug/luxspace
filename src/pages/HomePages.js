import React from 'react';
import Header from 'parts/Header';
import Hero from 'parts/Hero';
import JustArrived from 'parts/HomePage/JustArrived';
import BrowseRoom from 'parts/HomePage/BrowseRoom';
import Client from 'parts/Client';
import Sitemap from 'parts/HomePage/Sitemap';
import Footer from 'parts/Footer';

export default function HomePages(props) {
    return (
         <>
         <Header/>
         <Hero/>
         <BrowseRoom/>
         <JustArrived/>
         <Client/>
         <Sitemap/>
         <Footer/>

         
        </>
    )
}
