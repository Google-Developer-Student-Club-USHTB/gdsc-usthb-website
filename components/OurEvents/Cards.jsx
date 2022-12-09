import React from "react";
import "../../assets/Icon awesome-calendar-alt.svg";

const Cards = ({ image, title, date, desc }) => {
  const calendar = new URL(
    "./../../assets/Icon awesome-calendar-alt.svg",
    import.meta.url
  );

  return (
    <div className="w-72 bg-[white] flex-col rounded-2xl shadow-sm hover:shadow-[#4285F4] relative">
      <div
        className="h-36 w-full"
        style={{
          backgroundImage: `url("${image}")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>
      <div className="mt-4 px-2 mb-8">
        <div className=" flex items-center justify-center gap-1 ">
          <img src={calendar} alt="" className="w-3 inline-block" />
          <h5 className="inline-block text-xs text-[#4285F4]">{date}</h5>
        </div>
        <h3 className="text-center mt-2 font-bold">{title}</h3>
        <p className="text-center text-sm mt-2 mb-10">{desc}</p>
      </div>
      <div className="flex justify-center absolute bottom-0 left-[39%]">
        <a href="#" className="text-[#4285F4] text-center mb-4 font-bold">
          Discover
        </a>
      </div>
    </div>
  );
};

export default Cards;
