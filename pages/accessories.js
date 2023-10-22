import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../pages/header';
import { FaCheck } from 'react-icons/fa';

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

const AccessoriesPage = () => {
    const router = useRouter();
    const { brand, model, price, lenses, condition } = router.query;
    const [selectedAccessories, setSelectedAccessories] = useState({
        Box: false,
        Bill: false,
        Warranty: false,
    });

    const handleAccessoryToggle = (accessory) => {
        setSelectedAccessories((prevAccessories) => ({
            ...prevAccessories,
            [accessory]: !prevAccessories[accessory],
        }));
    };

    const accessoryImage = (accessory) => {
        switch (accessory) {
            case 'Box':
                return '/images/accessories/box.png';
            case 'Bill':
                return '/images/accessories/bill.png';
            case 'Warranty':
                return '/images/accessories/warranty.png';
            default:
                return ''; // Default image path
        }
    };

    return (
        <div className="bg-gray-200 min-h-screen flex flex-col items-center justify-center">
            <Header />
            <h1 className="text-4xl md:text-5xl pb-6 mb-4 mt-0 font-bold text-black text-center">
                Select the Accessories
            </h1>
            <ul className="w-full max-w-md space-y-4">
                {Object.entries(selectedAccessories).map(([accessory, isSelected]) => (
                    <li key={accessory}>
                        <button
                            onClick={() => handleAccessoryToggle(accessory)}
                            className={`py-2 px-4 rounded-md ${
                                isSelected
                                    ? 'bg-gray-700 text-white'
                                    : 'bg-gray-200 text-black border border-gray-300'
                            } focus:ring focus:ring-gray-300 transition-colors w-full flex items-center justify-between`}
                        >
                            <div className="flex items-center space-x-2">
                                <Image
                                    src={accessoryImage(accessory)}
                                    alt={accessory}
                                    width={40}
                                    height={30}
                                />
                                <span className={`uppercase ${isSelected ? 'font-bold' : ''}`}>{accessory}</span>
                            </div>
                            {isSelected && <FaCheck className="text-green-500" />}
                        </button>
                    </li>
                ))}
            </ul>
            <div className="w-full max-w-md mt-8">
                <Link
                    href={`/final?brand=${brand}&model=${model}&price=${price}&lenses=${lenses}&condition=${condition}&accessories=${Object.entries(
                        selectedAccessories
                    )
                        .filter(([, isSelected]) => isSelected)
                        .map(([accessory]) => accessory)
                        .join(',')}`}
                >
                    <button
                        className="w-full py-3 px-4 my-3 bg-black text-white hover:bg-gray-500 rounded-md bg-gray-700 focus:ring focus:ring-gray-300 transition-colors"
                    >
                        Next: View Final Price
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default AccessoriesPage;
