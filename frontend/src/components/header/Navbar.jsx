import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full px-4 py-3 transition-all duration-300 ease-in-out ${
        isSticky ? "bg-white shadow-md" : "bg-white lg:bg-transparent"
      }`}
    >
      <div className="container mx-auto flex h-24 items-center justify-between px-14 lg:px-20">
        <a
          href="/"
          className="font-bold text-[#3083ff] text-3xl"
        >
          <span>Easy Car</span>
        </a>
        <ul className="hidden md:flex space-x-8 sm:pl-0 md:pl-12 lg:pl-20 xl:pl-[9.5rem]">
          <li>
            <a
              href="/renter"
              className="hover:text-blue-500"
            >
              Tentang Kami
            </a>
          </li>
          <li>
            <a
              href="/rental-deals"
              className="hover:text-blue-500"
            >
              Sewa Mobil
            </a>
          </li>
          <li>
            <a
              href="/rental-deals"
              className="hover:text-blue-500"
            >
              Kontak Kami
            </a>
          </li>
        </ul>
        <div className="flex gap-6">
          {/* Mobile navigation toggle */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setToggleMenu(!toggleMenu)}>
              {!toggleMenu ? (
                <AiOutlineMenu size={20} />
              ) : (
                <AiOutlineClose size={20} />
              )}
            </button>
          </div>
        </div>

        <div className="hidden md:flex">
          <Link
            to="/login"
            className="rounded  text-white bg-blue-600 py-2 px-4 "
          >
            Login
          </Link>
        </div>
      </div>
      {/* mobile navigation */}
      <div
        className={`fixed left-0 z-40 w-full bg-blue-500 overflow-hidden flex flex-col md:hidden gap-12  origin-top duration-700 ${
          !toggleMenu ? "h-0" : "h-full"
        }`}
      >
        <div className="px-[4.5rem] py-8">
          <div className="flex flex-col gap-8 font-bold tracking-wider text-white">
            <a href="#">Tentang Kami</a>
            <a href="#">Sewa Mobil</a>
            <a href="#">Kontak Kami</a>
            <Link
              to="/login"
              className="rounded text-center text-blue-700 bg-white py-2 px-4 "
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;