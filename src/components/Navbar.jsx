// import { Link } from "react-scroll";
// import "../index.css";

// const Navbar = () => {
//   return (
//     <>
//       <div className="w-screen hidden md:flex items-center justify-center py-4 fixed top-0 z-10">
//         <nav className="max-w-screen-xl bg-navbg rounded-xl shadow-lg shadow-sky-600/10 mx-auto py-3 p-6">
//           <ul className="flex items-center gap-14">
//             <li>
//               <Link to="hero" smooth spy offset={-80} className="menu-item">
//                 Home
//               </Link>
//             </li>

//             <li>
//               <Link to="skills" smooth spy offset={-80} className="menu-item">
//                 Skills
//               </Link>
//             </li>

//             <li>
//               <Link
//                 to="experience"
//                 smooth
//                 spy
//                 offset={-80}
//                 className="menu-item"
//               >
//                 Work Experience
//               </Link>
//             </li>

//             <li>
//               <Link to="about" smooth spy offset={-80} className="menu-item">
//                 About Me
//               </Link>
//             </li>

//             <li>
//               <Link to="contact" smooth spy offset={-80} className="menu-item">
//                 Contact
//               </Link>
//             </li>
//           </ul>
//         </nav>
//       </div>
//     </>
//   );
// };

// export default Navbar;

import { Link, animateScroll as scroll } from "react-scroll";
import { useState, useEffect } from "react";
import { RiCloseFill } from "react-icons/ri";
import { CgMenuMotion } from "react-icons/cg";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSetActive = (to) => {
    setActive(to);
  };

  useEffect(() => {
    // Highlight the navbar item on scroll
    const sections = document.querySelectorAll("section");
    const handleScroll = () => {
      let scrollY = window.pageYOffset;
      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 80; // Adjust to match your offset
        const sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActive(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {isMenuOpen && (
        <MobileNavbar isOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      )}
      <div className="w-screen hidden md:flex items-center justify-center py-4 fixed top-0 z-10">
        <nav className="max-w-screen-xl bg-navbg rounded-xl shadow-lg shadow-sky-600/10 mx-auto py-3 px-6">
          <ul className="flex items-center gap-14">
            <li>
              <Link
                to="hero"
                smooth
                spy
                offset={-80}
                className={`menu-item ${
                  active === "hero" ? "menu-item-active" : ""
                }`}
                onSetActive={handleSetActive}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                smooth
                spy
                offset={-80}
                className={`menu-item ${
                  active === "projects" ? "menu-item-active" : ""
                }`}
                onSetActive={handleSetActive}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="skills"
                smooth
                spy
                offset={-80}
                className={`menu-item ${
                  active === "skills" ? "menu-item-active" : ""
                }`}
                onSetActive={handleSetActive}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="experience"
                smooth
                spy
                offset={-80}
                className={`menu-item ${
                  active === "experience" ? "menu-item-active" : ""
                }`}
                onSetActive={handleSetActive}
              >
                Work Experience
              </Link>
            </li>
            <li>
              <Link
                to="about"
                smooth
                spy
                offset={-80}
                className={`menu-item ${
                  active === "about" ? "menu-item-active" : ""
                }`}
                onSetActive={handleSetActive}
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth
                spy
                offset={-80}
                className={`menu-item ${
                  active === "contact" ? "menu-item-active" : ""
                }`}
                onSetActive={handleSetActive}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="p-3 fixed top-0 right-0 z-50">
        <button
          className="w-11 h-11 text-2xl text-sky-300 bg-blue-800/40 border-sky-900/80 backdrop-blur-lg flex items-center justify-center rounded md:hidden z-50 ml-auto"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <RiCloseFill /> : <CgMenuMotion />}
        </button>
      </div>
    </>
  );
};

export default Navbar;
