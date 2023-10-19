import React from 'react';
import { FaClipboardList, FaCalendarAlt, FaMoneyBill } from 'react-icons/fa';

const Steps = () => {
  return (
    <div className="bg-gray-200 text-black p-4 mt-10 mx-3.5  md:p-8">
      <h2 className="text-3xl  font-bold mb-3 md:text-4xl lg:text-5xl text-left">
        Steps :-
      </h2>
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-center justify-center py-4 md:py-10">
        <div className="text-center lg:text-left">
          <div className="bg-white border-4 border-black rounded-lg p-6 flex flex-col items-center">
            <div className="text-3xl font-bold mb-4">
              <FaClipboardList />
            </div>
            <h1 className="text-2xl font-bold mb-4">Select the Details</h1>
            <p className="text-lg mb-6">Choose the camera details you want to sell.</p>
          </div>
        </div>
        <div className="text-center lg:text-left">
          <div className="bg-white border-4 border-black rounded-lg p-6 flex flex-col items-center">
            <div className="text-3xl font-bold mb-4">
              <FaCalendarAlt />
            </div>
            <h1 className="text-2xl font-bold mb-4">Schedule Pickup</h1>
            <p className="text-lg mb-6">We will call you within the next 45 minutes to arrange the pickup. We operate only in Bangalore.</p>
          </div>
        </div>
        <div className="text-center lg:text-left">
          <div className="bg-white border-4 border-black rounded-lg p-6 flex flex-col items-center">
            <div className="text-3xl font-bold mb-4">
              <FaMoneyBill />
            </div>
            <h1 className="text-2xl font-bold mb-4">Get Instant Cash</h1>
            <p className="text-lg mb-6">Receive instant cash for your camera.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
