import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Header from '../pages/header';

const ConditionPage = () => {
    const router = useRouter();
    const { brand, model, price, lenses } = router.query;
    const [selectedCondition, setSelectedCondition] = useState(null);

    const handleConditionSelect = (condition) => {
        setSelectedCondition(condition);
      
        const updatedPrice = parseInt(price) + conditionPrice[condition];
        const queryString = `brand=${brand}&model=${model}&price=${updatedPrice}&lenses=${lenses}&condition=${condition}`;
        
        const route = `/accessories?${queryString}`;
      
        router.push(route);
      };
      


    const conditionPrice = {
        great: 0,
        good: -500,
        average: -1200,
    };

    return (
        <div className="bg-gray-200 min-h-screen flex flex-col items-center justify-center">
            <Header />
            <h1 className="text-4xl md:text-5xl  pb-3 mb-4 mx-5 my-5 lg:text-6xl mt-8 font-bold text-black text-center">
            Select the Camera Condition
          </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 text-bold gap-6 p-6 md:p-10 bg-white rounded">
                <button
                    onClick={() => handleConditionSelect('great')}
                    className={`py-8 px-12 rounded-md border ${
                        selectedCondition === 'great'
                            ? 'bg-gray-600 text-black'
                            : 'border-black text-black'
                    } hover:bg-gray-300 focus:ring focus:ring-gray-300 transition-colors`}
                >
                    GREAT
                </button>
                <button
                    onClick={() => handleConditionSelect('good')}
                    className={`py-8 px-12 rounded-md border ${
                        selectedCondition === 'good'
                            ? 'bg-gray-600 text-black'
                            : 'border-black text-black'
                    } hover:bg-gray-300 focus:ring focus:ring-gray-300 transition-colors`}
                >
                    GOOD
                </button>
                <button
                    onClick={() => handleConditionSelect('average')}
                    className={`py-8 px-12 rounded-md border ${
                        selectedCondition === 'average'
                            ? 'bg-gray-800 text-black'
                            : 'border-black text-black'
                    } hover:bg-gray-300 focus:ring focus:ring-gray-300 transition-colors`}
                >
                    AVERAGE
                </button>
            </div>
        </div>
    );
};

export default ConditionPage;
