import React from 'react';
import { useRouter } from 'next/router';
import Header from '../pages/header';

const Meta = () => {
    return (
      <>
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="Camco is your go-to place to sell Nikon, Canon, and Sony cameras online in Bangalore. Get instant cash for your used DSLR cameras and camera lenses. Explore our online camera sale for exciting offers and the best prices."
        />
        <meta
          name="keywords"
          content="sell camera online, sell my camera online, sell your camera online, sell Nikon camera, sell Canon camera, sell Sony camera, DSLR camera, camera lenses, sell used camera Bangalore, camera sale online, online camera selling, camera equipment sale"
        />
        <meta name="robots" content="index, follow" />
  
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Camco is your go-to place to sell Nikon, Canon, and Sony cameras online in Bangalore. Get instant cash for your used DSLR cameras and camera lenses. Explore our online camera sale for exciting offers and the best prices."
        />
     
        <meta property="og:url" content="https://www.camco.org.in/" />
  
        {/* Twitter */}
        <meta name="twitter:card" />
        <meta
          name="twitter:description"
          content="Camco is your go-to place to sell Nikon, Canon, and Sony cameras online in Bangalore. Get instant cash for your used DSLR cameras and camera lenses. Explore our online camera sale for exciting offers and the best prices."
        />
      
        <meta name="twitter:url" content="https://www.camco.org.in/" />
      </>
    );
  };

const FinalPage = () => {
    const router = useRouter();
    const {
        brand,
        model,
        price,
        lenses,
        accessories,
    } = router.query;

    // Calculate the total price based on selections
    const calculateFinalPrice = () => {
        let totalPrice = parseInt(price, 10); // Parse price to an integer

        // Add lens prices
        if (lenses) {
            lenses.split(',').forEach((lensPrice) => {
                totalPrice += parseInt(lensPrice, 10); // Parse lens price to an integer
            });
        }

        // Add accessories price
        if (accessories) {
            const selectedAccessories = accessories.split(',');
            if (selectedAccessories.includes('box')) {
                totalPrice += 500;
            }
            if (selectedAccessories.includes('bill')) {
                totalPrice += 500;
            }
            if (selectedAccessories.includes('warranty')) {
                totalPrice += 500;
            }
        }

        return totalPrice;
    };

    return (
        <div className="bg-gray-200 min-h-screen flex flex-col items-center justify-center">
            <Header />
            <h1 className="text-4xl text-grey-300 font-semibold mt-10 mb-8">
                The Approximate Price is
            </h1>
            <div className="bg-black rounded p-6 text-center">
                <p className="text-3xl font-semibold text-white">₹ {calculateFinalPrice()}</p>
            </div>
            <div className="bg-gray-200 mt-6 p-6 rounded mx-5 text-center">
                <p className="text-lg text-gray-600 mb-4">
                    NOTE - This is an estimated price and may vary upon physical inspection.
                </p>
             
            </div>
            <div className="m-4 mt-1 p-4 rounded bg-white text-center">
          <p className="text-gray-600 text-lg mt-1">
          Not Satisfied with the price? We'll make it right! Call us -{' '}
            <a href="tel:7022935544" className="text-black font-semibold">
              +91 70229 35544
            </a>
          </p>
        </div>
        </div>
    );
};

export default FinalPage;
