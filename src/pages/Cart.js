import React from 'react';
import Header from 'parts/Header';
import Breadcrumb from 'components/Breadcrumb/index';
// import ProductDetails from 'parts/Cart/Details/ProductDetails';
// import Sugesstion  from 'parts/Cart/Details/Suggestion'; 
import Sitemap from 'parts/HomePage/Sitemap';
import Footer from 'parts/Footer';
import ShoppingCart from 'parts/Cart/ShoppingCart';
import ShippingDetails from 'parts/Cart/ShippingDetails';

export default function HomePages() {

    return (
         <>
            <Header theme="black"  />
            <Breadcrumb list={[
                { url: "/", name: "Home"},
                { url: "/cart", name: "Shopping Cart"},
               
            ]} />

            <section class="md:py-16"> 
                <div class="container mx-auto px-4">
                    <div class="flex -mx-4 flex-wrap">
                        <ShoppingCart/>
                        <ShippingDetails/>
                    </div>
                </div>
            </section>

            {/* <ProductDetails/>
            <Sugesstion/> */}


            <Sitemap/>
     
      
            <Footer/>

         
        </>
    )
}
