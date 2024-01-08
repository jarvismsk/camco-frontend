import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../pages/header';
import Loading from './Loading'; // Import the Loading component

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

const ScrollDownIndicator = () => {
  const handleScrollDown = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <div
      className="fixed bottom-10 right-10 flex items-center justify-center bg-black rounded-full p-3 cursor-pointer"
      onClick={handleScrollDown}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-white animate-bounce"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 14l-7 7m0 0l-7-7m7 7V3"
        />
      </svg>
    </div>
  );
};

const LensPage = ({ lenses }) => {
  const router = useRouter();
  const { brand, model, price } = router.query;
  const [selectedLenses, setSelectedLenses] = useState([]);
  const [loading, setLoading] = useState(false); // Add loading state

  const handleLensToggle = (lens) => {
    if (isSelected(lens)) {
      handleLensDeselect(lens);
    } else {
      handleLensSelect(lens);
    }
  };

  const handleLensSelect = (lens) => {
    if (selectedLenses.length < 3) {
      setSelectedLenses((prevLenses) => [...prevLenses, lens]);
    }
  };

  const handleLensDeselect = (lens) => {
    setSelectedLenses((prevLenses) =>
      prevLenses.filter((prevLens) => prevLens.model !== lens.model)
    );
  };

  const isSelected = (lens) =>
    selectedLenses.some((selectedLens) => selectedLens.model === lens.model);

  const lensImage = (model) => {
    switch (model) {
            case 'Canon EF-S 18-55mm f/3.5-5.6':
                return '/images/canonLens/canon18-55.png';

            case 'Canon EF-S 55-250mm F4-5.6':
                return '/images/canonLens/canon55-250.png';

            case 'Canon EF 50mm F/1.8':
                return '/images/canonLens/canon50.png';

            case 'Canon 15-45mm f3.5-6.3':
                return '/images/canonLens/canon15-45.png';

            case 'Canon EF-S 18-135mm f/3.5-5.6':
                return '/images/canonLens/canon18-135.png';


            // Nikon

            case 'Nikon 18-55mm F/3.5-5.6G':
                return '/images/nikonLens/nikon18-55.png';

            case 'Nikon 70-300 mm f/4.5-6.3G':
                return '/images/nikonLens/nikon70-300.png';

            case 'Nikon 50mm F/1.8G':
                return '/images/nikonLens/nikon50.png';

            case 'Nikon 18-140mm F/3.5-5.6G':
                return '/images/nikonLens/nikon18-140.png';

            case 'Nikon 16-50mm f/3.5-6.3':
                return '/images/nikonLens/nikon16-50.png';

            case 'Nikon 50-250mm f/4.5-6.3':
                return '/images/nikonLens/nikon50-250.png';

            // Sony

            case 'Sony 16-50 mm F3.5-5.6':
                return '/images/sonyLens/sony16-50.png';

            case 'Sony 55 210 mm F4.5 6.3':
                return '/images/sonyLens/sony55-210.png';

            case 'Sony 50mm F1.8':
                return '/images/sonyLens/sony50.png';

            case 'Sony 18-135mm F3.5-5.6':
                return '/images/sonyLens/sony18-135.png';




            default:
                return '/images/default.png'; // Default image path
        }
    };

    return (
      <div className="bg-gray-200 min-h-screen flex flex-col items-center justify-center">
        <Header />
        <ScrollDownIndicator />
  
        <h1 className="text-4xl md:text-5xl  pb-3 mb-4 lg:text-6xl pt-24 mt-10 font-bold text-black text-center">
          Select the Camera Lens
        </h1>
        {loading ? (
          <Loading />
        ) : (
          <ul className="rounded bg-gray-100 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6 md:p-10">
            {lenses.map((lens) => (
              <li key={lens._id}>
                <button
                  onClick={() => handleLensToggle(lens)}
                  className={`py-3 px-6 rounded-md ${
                    isSelected(lens)
                      ? 'bg-gray-700 text-white focus:ring focus:ring-gray-300 transition-colors'
                      : 'bg-gray-200 text-black border border-gray-300 hover:bg-gray-300 focus:ring focus:ring-gray-300 transition-colors'
                  } w-full text-left`}
                >
                  <div className="flex items-center">
                    <Image
                      src={lensImage(lens.model)}
                      alt={lens.model}
                      width={120}
                      height={80}
                      loading="lazy"
                    />
                    <span className="ml-2">{lens.model}</span>
                  </div>
                </button>
              </li>
            ))}
          </ul>
        )}
        <Link
          href={`/condition?brand=${brand}&model=${model}&price=${price}&lenses=${selectedLenses
            .map((lens) => lens.price)
            .join(',')}`}
        >
          <div className="ml-9 mr-9 mt-8 px-12">
            <button
              className={`py-3 px-12 mb-10 hover:bg-gray-500 bg-black text-white rounded-md bg-gray-700 focus:ring focus:ring-gray-300 transition-colors`}
            >
              Next
            </button>
          </div>
        </Link>
        <div className="m-4 mt-1 p-4 rounded bg-white text-center">
          <p className="text-gray-600 text-lg mt-1">
            Didn't find your Lens? Don't worry! Call us -{' '}
            <a href="tel:7022935544" className="text-black font-semibold">
            +91 70229 35544
            </a>
          </p>
        </div>
      </div>
    );
  };
  
  export async function getServerSideProps({ query }) {
    const { brand } = query;
  
    // Ensure the API endpoint name corresponds to the naming convention
    const res = await fetch(
      `https://stark-meadow-99394-06b7b830b309.herokuapp.com/${brand.toLowerCase()}lens`
    );
    const lenses = await res.json();
  
    return {
      props: {
        lenses,
      },
    };
  }
  
  export default LensPage;