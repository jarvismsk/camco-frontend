import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../pages/header';
import Steps from './steps';

const HomePage = () => {
  return (
    <div className="bg-gray-200 min-h-screen flex flex-col items-center justify-center overflow-y-auto">
      <Header />
      <div className="pt-6 pr-2 pl-9  md:text-center text-left ">
        <h1 className="text-3xl text-bold md:text-5xl lg:text-6xl md:px-12 md:mx-20 md:mb-3 pb-2 pt-4 font-bold text-black" >
          Sell Your Used Camera Now and Get Instant Cash!
        </h1>

      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
  <div className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4 flex justify-center items-center">
    <div className="mx-auto sm:flex sm:flex-row flex-col items-center space-y-4 sm:space-y-0 sm:space-x-5"> 
      {[
        { brand: 'canon', logo: '/images/logo/canon.png', alt: 'Canon Logo' },
        { brand: 'nikon', logo: '/images/logo/nikon.png', alt: 'Nikon Logo' },
        { brand: 'sony', logo: '/images/logo/sony.png', alt: 'Sony Logo' },
      ].map((item, index) => (
        <li
          key={index}
          className="p-8 md:p-9 rounded-lg text-center border-black border"
          style={{
            background: 'white',
            color: 'black',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Link href={`/brand?brand=${item.brand}`} passHref>
            <div>
              <Image
                src={item.logo}
                width={150}
                height={92}
                alt={item.alt}
                loading="lazy"
              />
            </div>
          </Link>
        </li>
      ))}
    </div>
  </div>
</ul>

      <Steps />
    </div>
  );
};

export default HomePage;
