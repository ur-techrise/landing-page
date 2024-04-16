import { Disclosure, Transition } from "@headlessui/react";
import { PiMinus, PiPlus } from "react-icons/pi";
import Footer from "../layouts/Footer";
import Nav from "../layouts/nav-bar";

export default function Faq() {
  const faqs = [
    {
      question: "Do i need to know how to code?",
      answer:
        "While coding skills are valued, we welcome participants of all proficiency levels to join us. We offer introductory workshops and mentor support to ensure everyone has the necessary knowledge. Additionally, there are alternative tracks available that do not require coding expertise.",
    },
    {
      question: "Who is allowed to participate?",
      answer: "Students in  the Univeristy of Rwanda.",
    },
    {
      question: "I have more questions, how and where can I ask them?",
      answer:
        "email us at urtechrise@gmail.com ! We're always ready to answer all your questions.",
    },
    {
      question: "When and where will the hackathon take place?",
      answer:
        "Techrise Hacks will take place in April 2024 at the University of Rwanda, KIST campus. It will be fully in-person this 2024 season!",
    },
    {
      question: "Can I work on my project before the hackathon?",
      answer:
        "No, all project development must occur during Techrise Hackathon.",
    },
  ];
  return (
    <>
      <Nav styles="mb-40" />
      <section
        aria-labelledby="faqs"
        className="max-w-[var(--max-width)] h-screen bg-textDark mx-auto p-2 text-white flex flex-col justify-center items-center"
      >
        <h2
          className="text-[clamp(2rem,3.6vw,5.5rem)] font-extrabold py-10 text-center "
          id="faqs"
        >
          FAQs
        </h2>
        <div className=" ml-4 grid grid-cols-1 md:grid-cols-2 ">
          {faqs.map((faq, index) => (
            <div className="py-4 rounded-md ">
              <Disclosure key={index}>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex justify-center items-center text-xl font-semibold hover:text-blue-300">
                      {faq.question}
                      {!open ? (
                        <PiPlus className="transition-all duration-150" />
                      ) : (
                        <PiMinus className="transition-all duration-150" />
                      )}
                    </Disclosure.Button>
                    <Transition
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel className="mt-4 text-base line-clamp-4">
                        {faq.answer}
                      </Disclosure.Panel>
                    </Transition>
                  </>
                )}
              </Disclosure>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
