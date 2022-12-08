import React from "react";
import Image from "next/image";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import logo from "../../assets/logo.png";
import left from "../../assets/left.png";
import right from "../../assets/right.png";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



function AboutUs() {
    return (
        <>
            <header className="  w-[] h-[100px] bg-gradient-to-r from-gdsc-gradient-d to-gdsc-gradient-w flex items-center pt-[25px] pb-[80px] pl-[60px]">
            <Image src={logo} alt="gdsc logo" className="w-[90px] h-[90px]" />
            <h1 className="text-[25px] font-bold text-Black">
              About Us
            </h1>
           </header>
            <Swiper
             grabCursor={true}
             pagination={true}
             navigation
             modules={[ Pagination, Navigation]}
             className="mySwiper"
            >
               <SwiperSlide>
                  <div className="text-center">
                   <h3 className="text-center font-bold text-[18px] text-black  pb-[45px]">What is GDSC Usthb</h3>
                    <p className="text-center  text-black text-[12px] lg:text-[18px] pl-[100px] pr-[100px] lg:pl-[360px] lg:pr-[360px] pb-[70px]">Google Developers Students Club USTHB is a scientiŕc club with a local community related to the University of Science and Technology of Houari Boumediene in Algiers and It is a fragment of the Google Developer Student Clubs program with communities that are scattered all around the world</p>
                  </div>
               </SwiperSlide>
               <SwiperSlide>
                  <div className="text-center">
                   <h3 className="text-center font-bold text-[18px] text-black  pb-[45px]">What is GDSC Usthb</h3>
                   <p className="text-center  text-black text-[12px] lg:text-[18px] pl-[100px] pr-[100px] lg:pl-[360px] lg:pr-[360px] pb-[70px]">Google Developers Students Club USTHB is a scientiŕc club with a local community related to the University of Science and Technology of Houari Boumediene in Algiers and It is a fragment of the Google Developer Student Clubs program with communities that are scattered all around the world</p>
                  </div>
               </SwiperSlide>
               <SwiperSlide>
                  <div className="text-center">
                   <h3 className="text-center font-bold text-[18px] text-black  pb-[45px]">What is GDSC Usthb</h3>
                    <p className="text-center  text-[12px] lg:text-[18px] text-black pl-[100px] pr-[100px] lg:pl-[360px] lg:pr-[360px] pb-[70px]">Google Developers Students Club USTHB is a scientiŕc club with a local community related to the University of Science and Technology of Houari Boumediene in Algiers and It is a fragment of the Google Developer Student Clubs program with communities that are scattered all around the world</p>
                  </div>
                </SwiperSlide>
            </Swiper>

            <footer className="text-center">
               <button className="w-[121px] h-[32px] my-[50px] text-gdsc-background bg-gdsc-blue rounded-[8px]">
                  Join Us
               </button>
            </footer>
        </>
    );
}

export default AboutUs;