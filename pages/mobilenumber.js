import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Header from '../pages/header';
import { FaMobileAlt } from 'react-icons/fa'; // Import the mobile icon

const MobileNumber = () => {
    const router = useRouter();
    const { brand, model, price, lenses, condition } = router.query;

    const addMobileNumber = async (mobileNumber) => {
        const mobileData = {
            brand,
            model,
            mobilenumber: mobileNumber,
        };

        try {
            const response = await fetch("https://arcane-caverns-64937-622e2d9b7ed8.herokuapp.com/mobilenumber", {
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

    const MobileNumberForm = () => {
        const [mobileNumber, setMobileNumber] = useState("");
        const [error, setError] = useState("");

        const handleSubmit = async (e) => {
            e.preventDefault();

            if (mobileNumber.length < 10) {
                setError("Please enter a valid mobile number");
                return;
            }

            try {
                await addMobileNumber(mobileNumber);
            } catch (error) {
                console.error("Error adding mobile number", error);
            }

            setMobileNumber(""); // Clear the input field after submitting
        };

        return (
            <div className="bg-gray-200 min-h-screen flex flex-col items-center justify-center">
                <Header />
                <div className="p-4 mt-8 rounded-lg text-center bg-gray-200">
                <h2 className="bg-gray-300 p-5 font-bold font-bricolage-grotesque text-2xl text-black">
                Please Enter Mobile Number to Continue!
                    </h2>
                </div>
                <div className="p-4 rounded-lg text-center bg-gray-200"> 
                    <h2 className="font-bricolage-grotesque text-2xl text-black">
                        Estimated Price - ₹ XX,XXX
                    </h2>
                </div>

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
            </div>
        );
    };

    return (
        <div>
            <MobileNumberForm />
        </div>
    );
};

export default MobileNumber;
