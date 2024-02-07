import Faq from "./Faqs";
import Logo from "../assets/logo-text-blue.png";

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
              <h3 className="text-2xl xl:text-4xl lg:text-3xl font-bold">
                What is TechRise Hackathon?
              </h3>
              <p className="text-base xl:text-xl max-w-[80ch]">
                Techrise is a hackathon organized by student
                associations at the University of Rwanda, aiming to ignite
                student enthusiasm for technology by addressing various
                challenges. Through this event, we invite all participants to
                explore and champion solutions, fostering innovation and
                empowerment through code.
              </p>
            </div>
            <img
              src={Logo}
              
              alt="logos"
              className="object-scale-down max-h-full drop-shadow-md rounded-md m-auto hidden lg:block"
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
