import Logo from "../assets/logoWhite.png";

import Categories from "./Categories";
import Prizes from "./Prizes";
import Sponsors from "./Sponsers";

export default function About() {
  return (
    <main className="bg-[#073980] text-white">
      <section
        aria-labelledby="about"
        className="max-w-[var(--max-width)] mx-auto p-2"
      >
        <h2
          className="text-[clamp(2rem,3.6vw,5.5rem)] font-extrabold py-10 text-center"
          id="about"
        >
          About Us
        </h2>
        <div>
          <div className="flex content-center items-center flex-grow h-65 mx-20 my-12 gap-6">
            <div className="grid undefined gap-6">
              <h3 className="text-2xl xl:text-3xl lg:text-3xl font-bold">
                What is TechRise Hacks?
              </h3>
              <p className="text-base xl:text-lg max-w-[80ch]">
                Techrise is aiming to ignite enthusiasm for technology by
                addressing various challenges. Through this event, we invite all
                participants to explore and champion solutions, fostering
                innovation and empowerment through code.
              </p>
            </div>
            <img
              src={Logo}
              alt="logos"
              className=" w-[38rem] drop-shadow-md rounded-md  hidden lg:block"
            />
          </div>
        </div>
      </section>

      <Categories />
      <Prizes />
      <Sponsors />
      {/* <section
        aria-labelledby="resources"
        className="max-w-[var(--max-width)] mx-auto p-2"
      >
        <h2
          className="text-[clamp(2rem,3.6vw,5.5rem)] font-extrabold py-10 text-center"
          id="resources"
        >
          Resources
        </h2>
        <p className="text-2xl font-bold text-center py-2">
          We will be announcing resources soon!
        </p>
      </section> */}
    </main>
  );
}
