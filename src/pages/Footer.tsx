export default function Footer() {
  return (
    <footer className="bg-[#002244] lg:flex-row text-white pl-10">
      <div className="max-w-[var(--max-width)] mx-auto py-16 grid w-fit gap-14 lg:w-auto lg:grid-cols-3">
        <div className="flex flex-col gap-3 items-start content-center">
          <div>
            <span className="text-[#0071c5] font-bold text-2xl uppercase">
                TechRise UR
            </span>
          </div>
          <div className="flex gap-5 items-center text-3xl py-3">
            <a
              href="#"
              rel="noreferrer"
              target="_blank"
              className="hover:bg-[#011F5B] p-3 hover:opacity-70"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                className="iconify iconify--il"
                width="0.88em"
                height="1em"
                viewBox="0 0 740 850"
              >
                <path
                  fill="currentColor"
                  d="M372 182q41 0 77 15t63 42t42 63t15 77t-15 76t-42 63t-63 42t-77 16t-77-16t-62-42t-42-63t-16-76t16-77t42-63t62-42t77-15m0 324q26 0 49-10t41-27t27-41t10-49t-10-50t-27-41t-41-27t-49-10t-49 10t-41 27t-27 41t-10 50t10 49t27 41t41 27t49 10m368-314q9 187 0 374q-2 36-17 68t-39 56t-57 40t-68 17q-47 2-93 3t-94 1t-93-1t-94-3q-36-2-68-17t-56-40t-40-56t-17-68q-8-187 0-374q2-36 17-68t40-57t56-39t68-17q187-9 374 0q36 2 68 17t57 39t39 57t17 68m-70 370q9-183 0-367q-1-22-11-42t-25-36t-36-26t-42-11q-46-2-92-3t-92-1t-92 1t-92 3q-22 1-42 11t-35 26t-26 36t-11 42q-9 184 0 368q1 22 11 42t26 35t35 26t42 11q184 9 368 0q22-1 42-11t36-26t25-36t11-42M569 138q18 0 31 13t13 31t-13 31t-31 13t-31-13t-13-31t13-31t31-13"
                ></path>
              </svg>
            </a>
        
            <a
              href="https://www.x.com/kuhackfest"
              rel="noreferrer"
              target="_blank"
              className="hover:bg-[#011F5B] p-3 hover:opacity-70"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                className="iconify iconify--il"
                width="1.03em"
                height="1em"
                viewBox="0 0 830 810"
              >
                <path
                  fill="currentColor"
                  d="M741 170v22q0 56-14 113t-41 111t-69 101t-94 82t-119 55t-144 20q-72 0-137-20T0 598q19 3 40 3q60 0 114-20t97-53q-56-1-99-34t-60-84q16 3 32 3q22 0 45-5q-29-6-54-21t-43-37t-28-50t-11-59v-2q36 21 77 22q-35-23-55-60t-21-81q0-23 6-45t17-41q63 78 153 125t196 52q-2-9-3-19t-1-19q0-35 14-66t36-54t54-37t65-13q37 0 69 14t55 40q57-12 108-41q-10 29-29 53t-46 40q51-6 97-26q-34 52-84 87"
                ></path>
              </svg>
            </a>
           
          </div>
          <p className="font-bold flex gap-2 w-fit">
            Email:
            <span className="font-normal">
              <a href="mailto:contact@kuhackfest.com">techrise@gmail.com</a>
            </span>
          </p>
          
          <p>
            All Rights Reserved © <a href="/">Techrise Hackathon </a>
          </p>
        </div>
      
        <div className="flex flex-col gap-4 [&amp;>*]:text-center justify-center">
          <h2 className="text-2xl font-bold items-start">Event Summary</h2>
          <p>Date: 216th March - 17th March 2023</p>
        </div>
      </div>
    </footer>
  );
}
