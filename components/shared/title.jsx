const Title = ({ title, image }) => {
  return (
    <div className="overflow-hidden">
      <div
        className="-ml-2 -mt-1 h-[80px] lg:h-[140px] relative title p-8 w-[101%] bg-left text-[white] mb-[50px] lg:mb-[100px]"
        style={{
          backgroundImage: `url("${image}")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <h1 className="absolute left-24 md:left-28 lg:left-40 top-[48%] translate-y-[-50%] text-xl font-bold lg:text-2xl">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default Title;
