import Image from "next/image";
const Card = ({ img, title, description }) => {
  return (
    <div className=" w-[214px] h-[435px] my-[25px] bg-[white] rounded-[67px] shadow-[0_3px_6px_#00000030] flex flex-col items-center place-content-evenly hover:shadow-[0_3px_13px_#4285F4BF] sm:mt-[50px] lg:mt-[50px] mx-[20px] ">
      <Image src={img} className="w-[91px] h-[91px]" />
      <h1 className="text-center text-[#000000] text[17px] leading-[21px] capitalize font-semibold w-[104px] h-[42px]">
        {title}
      </h1>
      <p className="w-[182px] h[135px] text-xs text[#474646] text-center">
        {description}
      </p>
    </div>
  );
};

export default Card;
