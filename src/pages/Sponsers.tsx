import githubLogo from "../assets/sponsers/github.png";
import gdscLogo from "../assets/sponsers/gdsc.jpeg";
export default function Sponsors() {
  const partners = [
    {
      logo: null,
      img: <img src={githubLogo} alt="github" />,
      link: "https://github.com",
    },
    {
      logo: null,
      img: <img src={gdscLogo} alt="github" />,
      link: "https://gdsc.community.dev/university-of-rwanda/",
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
      <p className="text-2xl font-bold text-center py-2 grid grid-cols-1 md:grid-cols-3 gap-3 px-20">
        {partners.map((partner) => (
          <div
            className="bg-white py-2 px-12 text-textDark rounded-md cursor-pointer  
                 
                "
          >
            <a href={partner.link}>
              <div className="">
                {partner.logo ? (
                  <img src={partner.logo} alt={partner.logo} />
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
