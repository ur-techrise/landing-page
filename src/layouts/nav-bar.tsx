import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

interface Props {
  styles?: any;
}

let Links = [
  { name: "Home", link: "/" },
  { name: "Schedule", link: "/schedule" },
  { name: "FAQ", link: "/faq" },
  // { name: "Contact", link: "/contact" },
];

const Nav = ({ styles }: Props) => {
  let [open, setOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className={` shadow-xs w-full fixed top-0 left-0 z-50 ${styles}`}>
      <div
        className={`md:flex items-center justify-center z-50    py-4 md:px-10 px-7
      ${open ? "shadow-none" : ""} 
      ${
        scrolling
          ? " border-b shadow-md bg-gray-50 bg-gradient-to-r from-gray-50 to-gray-50"
          : "bg-gradient-to-br from-blue-400 via-blue-300 via-light-blue-200 to-blue-300"
      }
      `}
      >
        <div
          onClick={() => handleClick()}
          className="text-3xl absolute right-8 top-6 cursor-pointer text-gray-900  md:hidden"
        >
          {open ? <FaTimes /> : <FaBars />}
        </div>

        <ul
          className={` md:flex md:items-center md:pb-0 drop-shadow-lg md:drop-shadow-none  border-b-4 md:border-b-0   pb-12 absolute md:static  md:z-40 z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-transform  duration-500 ease-in ${
            open ? "top-[72px] " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-lg md:my-0 my-7">
              <Link
                to={link.link}
                className="text-textDark text-lg font-semibold   hover:text-gray-200 duration-150"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Nav;
