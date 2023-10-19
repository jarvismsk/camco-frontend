import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../pages/header';
import useSWR from 'swr';

const fetcher = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const BrandPage = () => {
  const router = useRouter();
  const { brand } = router.query;
  const { data: models, error } = useSWR(`https://arcane-caverns-64937-622e2d9b7ed8.herokuapp.com/${brand}camera`, fetcher);
  const loading = !models && !error;

  // Function to return the image path based on the camera model
  const modelImage = (model) => {
    switch (model) {
      case 'Canon 200D':
        return "/images/canonModels/canon200dm2.png"; // Add image path for Canon 200D

      case 'Canon 200D M2':
        return "/images/canonModels/canon200dm2.png";

      case 'Canon M50':
        return "/images/canonModels/canonm50.png";

      case 'Canon M50 II':
        return "/images/canonModels/canonm50m2.png";

      case 'Canon 700D':
        return "/images/canonModels/canon700d.png";

      case 'Canon 1300D':
        return "/images/canonModels/canon1300.png";

      case 'Canon 1200D':
        return "/images/canonModels/canon1200.png";

      case 'Canon 80D':
        return "/images/canonModels/canon80.png";

      case 'Canon 90D':
        return "/images/canonModels/canon90d.png";

      case 'Canon 750D':
        return "/images/canonModels/canon750.png";

      case 'Canon 77D':
        return "/images/canonModels/canon77d.png";

      //Nikon

      case 'Nikon D5600':
        return "/images/nikonModels/nikon5600.png";

      case 'Nikon D5300':
        return "/images/nikonModels/nikon5300.png";

      case 'Nikon D7500D':
        return "/images/nikonModels/nikon7500.png";

      case 'Nikon D3500':
        return "/images/nikonModels/nikon3500.png";

      case 'Nikon Z50':
        return "/images/nikonModels/nikonz50.png";

      case 'Nikon D5200':
        return "/images/nikonModels/nikon5200.png";

      case 'Nikon D3400':
        return "/images/nikonModels/nikon3400.png";

      // Sony

      case 'Sony A6400':
        return '/images/sonyModels/sony6400.png';

      case 'Sony A6000':
        return '/images/sonyModels/sony6000.png';

      case 'Sony A7 III':
        return '/images/sonyModels/sonym3.png';



      default:
        return "/images/models/default.png"; // Default image path
    }
  };

  return (
    <div className="bg-gray-200 min-h-screen flex flex-col items-center justify-center">
      <Header />
      <h1 className="text-4xl md:text-5xl lg:text-6xl mt-8 font-bold text-black text-center">
        Select Camera Model
      </h1>
      {loading ? (
        <div className="text-2xl mt-4">Loading...</div>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6 p-4">
{models.map((model) => (
  <li key={model._id}>
    <Link
      href={`/mobilenumber?brand=${brand}&model=${model.model}&price=${model.price}`}
    >
      <div className="bg-white border border-gray-300 p-7 px-12  rounded-lg shadow-md transition-transform transform hover:-translate-y-2" style={{ width: '300px', height: '250px' }}>
        <div className="flex items-center justify-center">
          <Image
            src={modelImage(model.model)} // Use the modelImage function
            alt={model.model}
            width={140}
            height={90}
          />
        </div>
        <p className="text-xl font-semibold text-center mt-4">{model.model}</p>
      </div>
    </Link>
  </li>
))}

        </ul>
      )}
      <div className="mt-6 p-4 bg-white rounded text-center">
        <p className="text-gray-600 text-lg mt-1">
          Didn't find your Model? Don't worry! Call us - <a href="tel:7022935544" className="text-black font-semibold">702-293-5544</a>
        </p>
      </div>
    </div>
  );
};

export default BrandPage;