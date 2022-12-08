import React, { useState, useEffect } from 'react';
import Image from 'next/image';
const Hero = () => {
  return (
    <div className="hero bg-contain max-w-full lg:bg-[url('/assets/bg-home.png')]  bg-no-repeat relative flex flex-col  items-start  w-screen h-screen">
      <img
        src="./assets/Dots.png "
        className="w-8 mx-3 my-10 lg:hidden   "
        alt=""
      />
      <div className="hero-text md:max-w-md flex flex-col gap-10 absolute lg:top-[15vw] top-52 left-[13vw] ">
        <img
          className="absolute lg:hidden top-[-220px] w-[450px]  left-[-190px]  z-0"
          src="/assets/home-boy1.png"
          alt=""
        />
        <h1 className="text-gdsc-dark-grey z-20 font-bold font-IBM-Plex text-5xl max-w-md">
          <span className="text-gdsc-background">We</span> do cool things that
          matter
        </h1>
        <p className="font-IBM-Plex font-medium text-lg tracking-wider max-w-2xl">
          Coming together to <span className="text-gdsc-green">connect</span>,
          staying together to <span className="text-gdsc-blue">learn</span> and
          working together to <span className="text-gdsc-yellow">grow</span>
        </p>
        <a
          href="#"
          className=" bg-gdsc-blue font-medium tracking-wider w-fit py-2 px-8 rounded-md text-gdsc-background"
        >
          Discover
        </a>
        <h3 className="font-bold text-xl font-IBM-Plex">Follow us</h3>
        <div className="socials flex flex-row gap-5 items-center">
          <a href="">
            <img
              src="./assets/Icon awesome-twitter-square.svg"
              className="h-14 w-14 fill-gdsc-background "
              alt=""
            />
          </a>
          <a href="">
            <img
              src="./assets/Icon awesome-instagram.svg"
              className="h-14 w-14 fill-gdsc-background "
              alt=""
            />
          </a>
          <a href="">
            <img
              src="./assets/Icon awesome-facebook-square.svg"
              className="h-14 w-14 fill-gdsc-background "
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
