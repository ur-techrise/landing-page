import githubLogo from "../assets/sponsers/github.png";
import gdscLogo from "../assets/sponsers/gdsc.jpeg";
import evotechLogo from "../assets/sponsers/evotechLogo1.png";
import debugCorner from "../assets/sponsers/debugCorner.jpg";

export default function Sponsors() {
  const partners = [
    {
      logo: null,
      img: <img src={githubLogo} alt="github" className="mt-10"/>,
      link: "https://github.com",
    },
    {
      logo: null,
      img: <img src={gdscLogo} alt="github" className="mt-12"/>,
      link: "https://gdsc.community.dev/university-of-rwanda/",
    },
    {
      logo: null,
      img: <img src={evotechLogo} alt="github" className="mt-12"/>,
      link: "#",
    
    },
    {
      logo: null,
      img: <img src={debugCorner} alt="github" className="rounded-e-3xl"/>,
      link: "https://debugcorner.com/",
    
    },
  ];

  return (
    <section
      aria-labelledby="sponsors"
      className="max-w-[var(--max-width)] mx-auto p-2"
    >
      <h2
        className="text-[clamp(2rem,3.6vw,5.5rem)] font-extrabold py-10 text-center"
        id="sponsors"
      >
        Partners
      </h2>
      <p className="text-2xl font-bold text-center py-2 grid grid-cols-1 md:grid-cols-4 gap-3 px-20">
        {partners.map((partner) => (
          <div
            className="bg-white py-2 px-12 text-textDark rounded-md cursor-pointer      "
          >
            <a href={partner.link}>
              <div className="">
                {partner.logo ? (
                  <img src={partner.logo} alt={partner.logo}/>
                ) : (
                  partner?.img
                )}
              </div>
            </a>
          </div>
        ))}
      </p>
    </section>
  );
}
