import React from 'react'

const Feature = ({ icon, label }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-200 shadow-md rounded-full p-6  transition w-36 h-32 mx-auto text-center">
        <span className="text-3xl mb-2">{icon}</span>
        <span className="text-md font-medium">{label}</span>
    </div>
);
  
}

export default Feature
