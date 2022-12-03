import React from "react";
import Image from "next/image";
import Card from "./Card";
import logo from "../../assets/logo.png";
import bgImg from "../../assets/bg-our-fields.png";
import gameDevImg from "../../assets/game-dev.png";
import cyberSecurityImg from "../../assets/cyber-security.png";
import mobileDevImg from "../../assets/mobile-dev.png";
import aiImg from "../../assets/ai.png";
import webDevImg from "../../assets/web-dev.png";

function index() {
  return (
    <>
      <header className="w-[] h-[77px] bg-gradient-to-r from-gdsc-gradient-d to-gdsc-gradient-w flex items-center pl-[7px]">
        <Image src={logo} alt="gdsc logo" className="w-[65px] h-[65px]" />
        <h1 className="text-[23px] font-bold text-gdsc-background">
          Our fields of work
        </h1>
      </header>
      <section className="my-[25px] flex flex-col justify-evenly items-center sm:flex-row sm:flex-wrap sm:h[100%] lg:flex-row lg:flex-wrap lg:h-[100%] lg:my-[50px]">
        <Card
          img={gameDevImg}
          title="Game Development"
          description="After a lot of research and years of experience in web development, we choose for you MERN stack to be learned and followed in making projects in this section. Mern stack stands for MongoDB, express, ReactJs, NodeJs With one language which is javascript"
        />

        <Card
          img={cyberSecurityImg}
          title="Cyber Security"
          description="After a lot of research and years of experience in web development, we choose for you MERN stack to be learned and followed in making projects in this section. Mern stack stands for MongoDB, express, ReactJs, NodeJs With one language which is javascript"
        />

        <Card
          img={mobileDevImg}
          title="Mobile Development"
          description="After a lot of research and years of experience in web development, we choose for you MERN stack to be learned and followed in making projects in this section. Mern stack stands for MongoDB, express, ReactJs, NodeJs With one language which is javascript"
        />

        <Card
          img={aiImg}
          title="Artificial Intelligence"
          description="After a lot of research and years of experience in web development, we choose for you MERN stack to be learned and followed in making projects in this section. Mern stack stands for MongoDB, express, ReactJs, NodeJs With one language which is javascript"
        />

        <Card
          img={webDevImg}
          title="Web Development"
          description="After a lot of research and years of experience in web development, we choose for you MERN stack to be learned and followed in making projects in this section. Mern stack stands for MongoDB, express, ReactJs, NodeJs With one language which is javascript"
        />
      </section>
      <footer className="text-center">
        <button className="w-[121px] h-[32px] my-[50px] text-gdsc-background bg-gdsc-blue rounded-[8px]">
          Leaders
        </button>
      </footer>
    </>
  );
}

export default index;
