import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../pages/header'; 


const LensPage = ({ lenses }) => {
  const router = useRouter();
  const { brand, model, price } = router.query;
  const [selectedLenses, setSelectedLenses] = useState([]);

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
    
          <h1 className="text-4xl md:text-5xl  pb-3 mb-4 lg:text-6xl mt-8 font-bold text-black text-center">
            Select the Camera Lens
          </h1>
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
                702-293-5544
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
        `https://arcane-caverns-64937-622e2d9b7ed8.herokuapp.com/${brand.toLowerCase()}lens`
      );
      const lenses = await res.json();
    
      return {
        props: {
          lenses,
        },
      };
    }
    
    export default LensPage;