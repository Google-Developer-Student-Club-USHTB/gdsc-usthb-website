import "../../assets/bg-our-evetns.png";
import Title from "../shared/title";
import Cards from "./Cards";

const OurEvents = () => {
  const bgImage = new URL("./../../assets/bg-our-evetns.png", import.meta.url);
  const bgImageLocal = new URL(
    "./../../assets/local-hack-day.png",
    import.meta.url
  );
  const bgImageHash = new URL("./../../assets/hash-code.png", import.meta.url);
  const bgImageKick = new URL("./../../assets/kick start.png", import.meta.url);

  return (
    <div>
      <Title title={"Our Events"} image={bgImage} />
      <div className="flex justify-around flex-wrap gap-6">
        <Cards
          date={"12 dec 2021 / 4 juin 2022"}
          image={bgImageLocal}
          title={"Local Hack day : Learn, Build, Share."}
          desc={
            "Learn is your opportunity to spend a week focused on learning the skills you’ve always wanted to tackle. In accepting this quest, you are in for an adventure featuring workshops, fun mini-events,"
          }
        />
        <Cards
          date={"12 dec 2021 / 4 juin 2022"}
          image={bgImageHash}
          title={"Hash Code"}
          desc={
            "Hash Code is a team programming competition, organized by Google, for students and professionals around the world. You pick your team and programming language and we pick an engineering problem for you to solve."
          }
        />
        <Cards
          date={"12 dec 2021 / 4 juin 2022"}
          image={bgImageKick}
          title={"Kick start"}
          desc={
            "Kick Start is a global online coding competition, consisting of three-hour rounds of a variety of algorithmic challenges designed by Google engineers."
          }
        />
      </div>
      <div className="flex justify-center">
        <button className="w-32 bg-[#4285F4] text-[white] mt-16 mb-8 rounded-sm text-bold">
          All Events
        </button>
      </div>
    </div>
  );
};

export default OurEvents;
