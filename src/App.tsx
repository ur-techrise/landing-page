import "./App.css";

function App() {
  return (
    <div className="m-0 w-full p-0 ">
      <div>
      <div className="lg:block z-10 bg-gradient-to-br from-blue-400 via-blue-300 via-light-blue-200 to-white h-screen w-screen absolute">

      </div>
      </div>
      <header className="-ml-2 z-30 relative  h-screen grid place-items-center place-content-center bg-[url('/hero-bg.svg')] bg-cover bg-center font-bold">
        <img src="/full_logo.png" alt="Techrise Hackthon Logo" />
        <h1 className="text-[clamp(2.5rem,5vw,7rem)] text-[#13274F] font-extrabold">
          TechRise Hackthon 2024
        </h1>
        <h2 className="text-[clamp(1.5rem,2vw,5rem)] text-[#13274F] font-normal pb-4">
          16th March - 17 March 2024
        </h2>
        <nav
          className="flex items-center fixed inset-0 justify-center bg-[var(--bg-dark)] transition-all text-2xl font-bold -translate-y-full 2xl:translate-y-0 w-full z-10
					2xl:bg-transparent 2xl:static h-screen 2xl:h-fit 
					"
        >
          <a href="/">
            <img
              src="/hackfest_logo.svg"
              alt="Tech rise hackathon"
              className="pointer-events-none  hidden h-full absolute py-2 px-4 top-0 left-0"
            />
          </a>
          <ul className="flex h-3/5 justify-evenly 2xl:flex-row 2xl:gap-8 p-2 flex-col [&amp;>li]:opacity-100 [&amp;>li]:pointer-events-auto">
            <li className="hover:opacity-70 text-center">
              <a href="/#about">About</a>
            </li>
            <li className="hover:opacity-70 text-center">
              <a href="/#tracks">Tracks</a>
            </li>
            <li className="hover:opacity-70 text-center">
              <a href="/#categories">Categories</a>
            </li>
            <li className="hover:opacity-70 text-center">
              <a href="/#prizes">Prizes</a>
            </li>
            <li className="hover:opacity-70 text-center">
              <a href="/teams">Teams</a>
            </li>
            <li className="hover:opacity-70 text-center">
              <a href="/schedule">Schedule</a>
            </li>
            <li className="hover:opacity-70 text-center">
              <a href="/#faqs">FAQs</a>
            </li>
            <li className="hover:opacity-70 text-center">
              <a href="/#resources">Resources</a>
            </li>
            <li className="hover:opacity-70 text-center">
              <a href="/#sponsors">Sponsors</a>
            </li>
          </ul>
        </nav>
        <nav
          className="flex items-center fixed inset-0 justify-center bg-[var(--bg-dark)] transition-all text-2xl font-bold -translate-y-full 2xl:translate-y-0 w-full z-10
					2xl:bg-transparent 2xl:static h-screen 2xl:h-fit 
					"
        >
          <a href="/">
            <img
              src="/hackfest_logo.svg"
              alt="Techrise Hackthon "
              className="pointer-events-none  hidden h-full absolute py-2 px-4 top-0 left-0"
            />
          </a>
        </nav>
        <div className="grid gap-4 p-10 text-xl lg:flex">
          <a
            className="py-3 px-6 rounded-lg flex items-center justify-center hover:opacity-80 gap-4 transition-all bg-btnLight text-white"
            target="_blank"
            href=""
          >
            Apply
          </a>

          <a
            className="py-3 rounded-lg flex items-center justify-center hover:opacity-80 gap-4 transition-all px-8 bg-btnLight text-white"
            target="_blank"
            href="mailto:techrise@gmail.com?subject=Sponsorship Inquiry"
          >
            Sponsor Us
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
