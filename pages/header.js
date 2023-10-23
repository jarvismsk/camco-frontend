import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`bg-gray-200 py-4 px-6 md:px-8 border-b-2 border-black text-center z-50 w-full top-0 left-0 right-0 fixed transition-all ${
        isScrolled ? 'backdrop-blur-lg' : ''
      }`}
    >

      <Head>
        <title>Camco - Sell Your Used Camera Now and Get Instant Cash!</title>
        <meta
          name="description"
          content="Sell your used DSLR camera online quickly and easily with Camco. We buy cameras from top brands like Canon, Nikon, and Sony. Get the best possible price and expert evaluation in just 20 minutes."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto flex flex-col items-center">
        <Link className="text-black text-3xl font-bold cursor-pointer hover:text-gray-500 transition duration-300 mb-4 md:mb-0" href="/" passHref>

            Camco
      
        </Link>
<p className="text-gray-600 text-lg">
          Call Now - <a href="tel:7022935544" className="text-black font-semibold hover:underline">+91 7022935544</a>
        </p>
      </div>
    </header>
  );
};








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

export default Header;
