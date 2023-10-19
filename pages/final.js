import React from 'react';
import { useRouter } from 'next/router';
import Header from '../pages/header';

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
                    NOTE: This is an estimated price and may vary upon physical inspection.
                </p>
                <p className="text-lg text-gray-600">LOCATION: We currently serve Bangalore, but we're expanding.</p>
            </div>
            <div className="mt-6 p-6 rounded bg-gray-200 mx-5 text-center">
                <p className="text-lg text-gray-600">
                    Not satisfied with the price? Don't worry! Call us -{' '}
                    <a href="tel:7022935544" className="text-black font-semibold">
                        702-293-5544
                    </a>
                </p>
            </div>
        </div>
    );
};

export default FinalPage;
