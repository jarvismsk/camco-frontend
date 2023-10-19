import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import utilsStyles from '../styles/utils.module.css';

const Header = () => {
  return (
    <header className={`bg-grey-200 py-4 px-6 md:px-8 border-b-2 border-black text-center z-50`}>
      <Head>
        <title>Camco - Sell Your Used Camera Now and Get Instant Cash!</title>
        <meta name="description" content="Sell your used DSLR camera quickly and easily with Camco. We buy cameras from top brands like Canon, Nikon, and Sony. Get the best possible price and expert evaluation in just 20 minutes." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto flex flex-col items-center">
        <Link className="text-black text-3xl font-bold cursor-pointer hover:text-gray-500 transition duration-300 mb-4 md:mb-0" href="/" passHref>
  
            Camco
    
        </Link>
        <p className="text-gray-600 text-lg">Call Now -  <a href="tel:7022935544" className="text-black font-semibold hover:underline">702-293-5544</a></p>
      </div>
    </header>
  );
};

export default Header;
