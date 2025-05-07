import React from "react";

const HeroSection = () => {
    return (
        <div className='flex flex-col text-white items-center justify-center h-[100vh]' style={{ 
            backgroundImage: "url('/src/assets/beauteful.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}>
            <h2 className="text-4xl md:text-6xl mb-4 font-bold tracking-widest"> Welcome to My Website</h2>
            <p className="text-2xl md:text-3xl font-semibold mb-4"> Your Journey Start Here</p>
            <button className="text-indigo-600 bg-white px-6 py-2 rounded border-none font-semibold cursor-pointer hover:bg-gray-400"> Purchase Products</button>
        </div>
  )
};

export default HeroSection;
