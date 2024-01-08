import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Header from '../pages/header';
import { FaMobileAlt } from 'react-icons/fa'; // Import the mobile icon
import Loading from './Loading'; // Import the loading component

const MobileNumber = () => {
  const router = useRouter();
  const { brand, model, price, lenses, condition } = router.query;
  const [loading, setLoading] = useState(false); // Add loading state
  const [mobileNumber, setMobileNumber] = useState("");
  const [error, setError] = useState("");



 


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

  const addMobileNumber = async (mobileNumber) => {
    const mobileData = {
      brand,
      model,
      mobilenumber: mobileNumber,
    };

    try {
      const response = await fetch("https://stark-meadow-99394-06b7b830b309.herokuapp.com/mobilenumber", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(mobileData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Mobile Number Added", data);
        router.push(`/lens?brand=${brand}&model=${encodeURIComponent(model)}&price=${price}`);
      } else {
        console.error("Error adding mobile number");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true before making the API call

    if (mobileNumber.length < 10) {
      setError('Please enter a valid mobile number');
      setLoading(false); // Set loading to false if there's an error
      return;
    }

    try {
      await addMobileNumber(mobileNumber);
    } catch (error) {
      console.error('Error adding mobile number', error);
      setLoading(false); // Set loading to false in case of an error
    }

    setMobileNumber(""); // Clear the input field after submitting
  };

  return (
    <div className="bg-gray-200 min-h-screen flex flex-col items-center justify-center">
    <Header />
    <div className="pt-0 mt-0 text-center bg-gray-200">
      <h2 className="bg-gray-300 p-5 font-bold font-bricolage-grotesque text-2xl text-black">
        Please Enter Mobile Number to Continue.
    

        
      </h2>
    </div>
    <div className="p-4 rounded-lg text-center bg-gray-200 mt-4 ">
      <h2
        style={{
          fontFamily: 'Arial, sans-serif',
          fontSize: '24px',
          fontWeight: 'bold',
          color: '#333',
          border: '2px solid black',
          padding: '10px 20px',
          borderRadius: '10px',
          boxShadow: '3px 3px 5px rgba(0, 0, 0, 0.2)',
          display: 'inline-block',
        }}
      >
        Estimated Price: ₹XX,XXX
      </h2>
    </div>

      {loading ? (
        <Loading />
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="relative mt-4 ml-8 mr-8">
            <FaMobileAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="tel"
              placeholder="Enter mobile number"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              className="pl-10 py-4 pr-4 border rounded-md focus:ring focus:ring-black transition-colors text-black w-full"
            />
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <div className="bg-gray-700 mt-8 mx-8">
            <button
              type="submit"
              className="px-36 py-3 text-white hover:bg-gray-500 rounded-md bg-gray-700 focus:ring focus:ring-gray-300 transition-colors"
            >
              Next
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default MobileNumber;
