import Footer from "../layouts/Footer";
import Nav from "../layouts/nav-bar";

export default function Schedule() {
  return (
    <>
      <Nav styles="mb-40" />
      <div className="m-0 w-full h-screen p-0 bg-textDark text-white">
        <section
          aria-labelledby="schedule"
          className="max-w-[var(--max-width)] mx-auto p-2 mt-10"
        >
          <h2
            className="text-[clamp(2rem,3.6vw,5.5rem)] font-extrabold py-10 text-center"
            id="schedule"
          >
            Schedule
          </h2>
          <p className="text-2xl font-bold text-center py-2">
            We will be announcing the schedule soon!
          </p>
        </section>
      </div>
      <Footer />
    </>
  );
}
