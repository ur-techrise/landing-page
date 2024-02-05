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
              <p className="text-base xl:text-xl max-w-[80ch]">Loading...</p>
            </div>
            <img
              src="/Frame.png"
              alt="logos"
              className="object-scale-down max-h-full drop-shadow-md rounded-md m-auto hidden lg:block"
            />
          </div>
          <div className="flex content-center items-center flex-grow h-65 mx-20 my-12 gap-6">
            <div className="grid order-2 gap-6">
              <h3 className="text-2xl xl:text-4xl lg:text-3xl font-bold">
                Our Vision
              </h3>
              <p className="text-base xl:text-xl max-w-[80ch]">Loading...</p>
            </div>
            <img
              src="/goal_art.png"
              alt="logos"
              className="object-scale-down max-h-full drop-shadow-md rounded-md m-auto hidden lg:block"
            />
          </div>
          <div className="flex content-center items-center flex-grow h-65 mx-20 my-12 gap-6">
            <div className="grid undefined gap-6">
              <h3 className="text-2xl xl:text-4xl lg:text-3xl font-bold">
                Why Participate
              </h3>
              <p className="text-base xl:text-xl max-w-[80ch]">Loading...</p>
            </div>
            <img
              src="/person.png"
              alt="logos"
              className="object-scale-down max-h-full drop-shadow-md rounded-md m-auto hidden lg:block"
            />
          </div>
        </div>
      </section>
      <section
        aria-labelledby="tracks"
        className="max-w-[var(--max-width)] mx-auto p-2"
      >
        <h2
          className="text-[clamp(2rem,3.6vw,5.5rem)] font-extrabold py-10 text-center"
          id="tracks"
        >
          Tracks
        </h2>
        <p className="text-2xl font-bold text-center py-2">
          We will be announcing the tracks soon!
        </p>
      </section>
      <section
        aria-labelledby="categories"
        className="max-w-[var(--max-width)] mx-auto p-2"
      >
        <h2
          className="text-[clamp(2rem,3.6vw,5.5rem)] font-extrabold py-10 text-center"
          id="categories"
        >
          Categories
        </h2>
        <p className="text-2xl font-bold text-center py-2">
          We will be announcing the categories soon!
        </p>
      </section>
      <section
        aria-labelledby="prizes"
        className="max-w-[var(--max-width)] mx-auto p-2"
      >
        <h2
          className="text-[clamp(2rem,3.6vw,5.5rem)] font-extrabold py-10 text-center"
          id="prizes"
        >
          Prizes
        </h2>
        <p className="text-2xl font-bold text-center py-2">
          We will be announcing prizes soon!
        </p>
      </section>
      <section
        aria-labelledby="sponsors"
        className="max-w-[var(--max-width)] mx-auto p-2"
      >
        <h2
          className="text-[clamp(2rem,3.6vw,5.5rem)] font-extrabold py-10 text-center"
          id="sponsors"
        >
          Sponsors
        </h2>
        <p className="text-2xl font-bold text-center py-2">
          We will be announcing the sponsors soon!
        </p>
      </section>
      <section
        aria-labelledby="faqs"
        className="max-w-[var(--max-width)] mx-auto p-2"
      >
        <h2
          className="text-[clamp(2rem,3.6vw,5.5rem)] font-extrabold py-10 text-center"
          id="faqs"
        >
          FAQs
        </h2>
        <div style={{ fill: "#fff", height: "50px", width: "50px" }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
            <path transform="translate(2)" d="M0 12 V20 H4 V12z">
              <animate
                attributeName="d"
                values="M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z"
                dur="1.2s"
                repeatCount="indefinite"
                begin="0"
                keyTimes="0;.2;.5;1"
                keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8"
                calcMode="spline"
              ></animate>
            </path>
            <path transform="translate(8)" d="M0 12 V20 H4 V12z">
              <animate
                attributeName="d"
                values="M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z"
                dur="1.2s"
                repeatCount="indefinite"
                begin="0.2"
                keyTimes="0;.2;.5;1"
                keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8"
                calcMode="spline"
              ></animate>
            </path>
            <path transform="translate(14)" d="M0 12 V20 H4 V12z">
              <animate
                attributeName="d"
                values="M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z"
                dur="1.2s"
                repeatCount="indefinite"
                begin="0.4"
                keyTimes="0;.2;.5;1"
                keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8"
                calcMode="spline"
              ></animate>
            </path>
            <path transform="translate(20)" d="M0 12 V20 H4 V12z">
              <animate
                attributeName="d"
                values="M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z"
                dur="1.2s"
                repeatCount="indefinite"
                begin="0.6"
                keyTimes="0;.2;.5;1"
                keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8"
                calcMode="spline"
              ></animate>
            </path>
            <path transform="translate(26)" d="M0 12 V20 H4 V12z">
              <animate
                attributeName="d"
                values="M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z"
                dur="1.2s"
                repeatCount="indefinite"
                begin="0.8"
                keyTimes="0;.2;.5;1"
                keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8"
                calcMode="spline"
              ></animate>
            </path>
          </svg>
        </div>
      </section>
      <section
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
      </section>
    </main>
  );
}
