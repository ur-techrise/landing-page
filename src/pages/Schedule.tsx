import { useState } from "react";
import Footer from "../layouts/Footer";
import Nav from "../layouts/nav-bar";
import { Tab } from "@headlessui/react";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Schedule() {
  let [categories] = useState({
    "Opening Ceremony": [
      {
        id: 1,
        title: "Here we will introduce our hackathon!        ",
      },
    ],
    "Hacking Starts": [
      {
        id: 1,
        title: "You can start hacking now        ",
      },
    ],
    "Team Matching": [
      {
        id: 1,
        title:
          "We will facilitate team matching for Techrise Hacks. Please join if you don't already have a team and are looking to make one",
      },
    ],
    "Keynote Speaker:  TBA    ": [
      {
        id: 1,
        title: "Keynote speaker to be announced soon!",
      },
    ],
    Judging: [
      {
        id: 1,
        title: "Your projects will be judged expo style!",
      },
    ],
    "Closing Ceremony    ": [
      {
        id: 1,
        title: "We will present awards, recap the hackathon       !",
      },
    ],
  });

  return (
    <>
      <Nav styles="" />
      <section
        aria-labelledby="faqs"
        className="max-w-[var(--max-width)] h-screen bg-textDark mx-auto p-2 text-white flex flex-col  items-center"
      >
        <div className="w-full max-w-4xl px-2 py-16 mt-20 sm:px-0">
          <Tab.Group>
            <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
              {Object.keys(categories).map((category) => (
                <Tab
                  key={category}
                  className={({ selected }) =>
                    classNames(
                      "w-full rounded-lg py-2.5 text-sm font-medium leading-5",
                      "ring-white/60 ring-offset-1 ring-offset-blue-400 focus:outline-none focus:ring-2",
                      selected
                        ? "bg-white text-blue-700 shadow"
                        : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                    )
                  }
                >
                  {category}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="mt-2">
              {Object.values(categories).map((schedules, idx) => (
                <Tab.Panel
                  key={idx}
                  className={classNames(
                    "rounded-xl bg-white p-3",
                    "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                  )}
                >
                  <ul>
                    {schedules.map((post) => (
                      <li
                        key={post.id}
                        className="relative rounded-md p-3 hover:bg-gray-100 text-gray-700"
                      >
                        <h3 className="text-sm font-medium leading-5">
                          {post.title}
                        </h3>
                      </li>
                    ))}
                  </ul>
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </section>
      <Footer />
    </>
  );
}
