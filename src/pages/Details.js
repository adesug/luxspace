import React from 'react';
import Header from 'parts/Header';
import Breadcrumb from 'components/Breadcrumb/index';
import ProductDetails from 'parts/Details/ProductDetails';
import Sugesstion  from 'parts/Details/Suggestion';
import Client from 'parts/Client';
import Sitemap from 'parts/HomePage/Sitemap';
import Footer from 'parts/Footer';

export default function HomePages() {

    return (
         <>
            <Header theme="black"  />
            <Breadcrumb list={[
                { url: "/", name: "Home"},
                { url: "/categories/91231", name: "Office Room"},
                { url: "/categories/91231/products/788", name: "Details"}
            ]} />
            <ProductDetails/>
            <Sugesstion/>
            <Client/>
            <Sitemap/>
            <Footer/>

         
        </>
    )
}
