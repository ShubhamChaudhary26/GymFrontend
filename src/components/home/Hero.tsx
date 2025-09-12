"use client";
import React from "react";
import Lightning from "./Lightning";
import Image from "next/image";
import gymPerson from "@/assets/banner.png";

const HomePage: React.FC = () => {
  return (
    <>
      {/* Background lightning */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <Lightning hue={62} xOffset={0} speed={0.9} intensity={1} size={0.8} />
      </div>

      <div className="relative w-full h-screen text-white overflow-hidden">
        {/* Center wrapper */}
        <div className="relative flex flex-col items-center justify-center h-full px-6">
          {/* Heading */}
          <h1 className="absolute top-[22%] md:top-[12%] text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight opacity-80 z-0 text-center px-4">
            Sculpt <span className="text-lime-400">Your</span> Body,
            <br />
            Elevate <span className="text-lime-400">Your</span> Spirit
          </h1>

          {/* Stats cards - HIDE on mobile */}
          <div className="absolute inset-0 hidden md:flex items-center justify-center pointer-events-none">
            <div className="absolute top-[45%] left-[35%] bg-gradient-to-br from-black to-gray-800 text-lime-400 font-bold backdrop-blur-lg rounded-xl px-4 py-1 shadow-lg transform -rotate-[25deg] border-2 border-lime-400">
              <Image src="/watch.png" alt="Hours" width={50} height={40} />
              <p>Hours</p>
              <p>1.5</p>
            </div>
            <div className="absolute top-[45%] left-[60%] bg-gradient-to-br from-gray-800 to-black text-lime-400 border-2 border-lime-400 font-bold backdrop-blur-lg rounded-xl px-4 py-1 shadow-lg transform rotate-[25deg]">
              <Image
                src="/run.png"
                alt="Poses"
                width={30}
                height={20}
                className="ml-3"
              />
              <p>Poses</p>
              <p>20</p>
            </div>
            <div className="absolute bottom-[14%] left-[35%] bg-gradient-to-br from-black to-gray-800 text-lime-400 border-2 border-lime-400 font-bold backdrop-blur-lg rounded-xl px-5 py-3 shadow-lg transform -rotate-[25deg]">
              <Image
                src="/Cal.png"
                alt="Kcal"
                width={30}
                height={30}
                className="ml-1"
              />
              <p>Kcal</p>
              <p>550</p>
            </div>
            <div className="absolute bottom-[14%] left-[59.5%] bg-gradient-to-br from-gray-800 to-black text-lime-400 border-2 border-lime-400 font-bold backdrop-blur-lg rounded-xl px-4 py-5 shadow-lg transform rotate-[25deg]">
              <Image
                src="/dumble.png"
                alt="Sets"
                width={40}
                height={30}
                className="ml-1"
              />
              <p>Sets</p>
              <p>5</p>
            </div>
          </div>

          {/* Bottom Section */}
       <div className="absolute bottom-0 md:bottom-6 w-full flex flex-col-reverse md:flex-row md:justify-between md:items-end px-1 md:px-6 z-20">
  {/* Left Avatars + Text */}
  <div className="flex items-center space-x-2 md:space-x-4">
    {/* Avatars */}
  <div className="flex -space-x-1 md:-space-x-3">
  {/* Avatar 1 → Always visible */}
  <div className=" hidden w-8 h-8 md:w-12 md:h-12 rounded-full border-2 border-black overflow-hidden">
    <Image
      src="/gyml.webp"
      alt="User1"
      width={48}
      height={48}
      className="object-cover"
    />
  </div>

  {/* Avatar 2 → Hide on mobile */}
  <div className="hidden md:block w-8 h-8 md:w-12 md:h-12 rounded-full border-2 border-black overflow-hidden">
    <Image
      src="/gym2.webp"
      alt="User2"
      width={48}
      height={48}
      className="object-cover"
    />
  </div>

  {/* Avatar 3 → Hide on mobile */}
  <div className="hidden md:block w-8 h-8 md:w-12 md:h-12 rounded-full border-2 border-black overflow-hidden">
    <Image
      src="/gym3.webp"
      alt="User3"
      width={48}
      height={48}
      className="object-cover"
    />
  </div>
</div>


    {/* Text */}
    <div className="flex flex-col items-center md:items-start  mb-2">
      <p className="text-lg md:text-2xl font-bold text-white">
        12k<span className="text-lime-400">+</span>
      </p>
      <p className="text-gray-300 md:text-sm text-xs">Happy Spirits</p>
    </div>
  </div>

  {/* Button */}
  <button className="mt-5 bottom-2 md:mt-0 bg-lime-400 text-black font-bold md:px-8 md:py-3 px-3 py-1 rounded-full hover:scale-105 transition absolute md:static bottom-4 right-4">
    Let's Start &gt;&gt;&gt;
  </button>
</div>


          {/* Gym Image */}
          <div className="absolute bottom-0 w-[450px] h-[400px] md:w-[650px] md:h-[550px] z-10">
            <Image
              src={gymPerson}
              alt="Gym Person"
              fill
              className="object-contain shadow-2xl"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
