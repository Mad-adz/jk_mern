import { useState } from "react";
import { useLocation } from "react-router-dom";
import {
  LuChevronDown,
  LuMenu,
  // LuUser,
  // LuSettings,
  // LuLogOut,
} from "react-icons/lu";

import { NavLink } from "react-router-dom";
import { jaikosha } from "../assets/images";
import { navLinks } from "@/constants";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState({
    about: false,
    initiatives: false,
    profile: false,
  });
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleDropdown = (key) =>
    setOpenDropdown((prev) => ({ ...prev, [key]: !prev[key] }));

  // const navLinks = [
  //   { id: 1, to: "", label: "Home", hasSubmenu: false },
  //   {
  //     id: 2,
  //     to: "",
  //     label: "About",
  //     hasSubmenu: true,
  //     openKey: "about",
  //     submenu: [
  //       { id: 21, to: "autobiography", label: "Auto Biography" },
  //       { id: 22, to: "yendhrakovil", label: "Yendhra Kovil" },
  //     ],
  //   },
  //   {
  //     id: 3,
  //     to: "",
  //     label: "Initiatives",
  //     hasSubmenu: true,
  //     openKey: "initiatives",
  //     submenu: [
  //       { id: 31, to: "activities", label: "Activities" },
  //       { id: 32, to: "events", label: "Events" },
  //       { id: 33, to: "workshops", label: "Workshops" },
  //     ],
  //   },
  //   {
  //     id: 4,
  //     to: "book-my-dharshan",
  //     label: "Book My Dharshan",
  //     hasSubmenu: false,
  //   },
  //   { id: 5, to: "contact", label: "Contact", hasSubmenu: false },
  //   { id: 6, to: "donate", label: "Donate", hasSubmenu: false },
  // ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-40 px-2 py-2 backdrop-blur-sm border-b border-zinc-200 ${
        isMenuOpen ? "bg-yellow-50" : "bg-yellow-50 backdrop-blur-sm"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-between flex-grow">
            <div className="flex-shrink-0">
              <NavLink to={"/"}>
                <div className="flex items-center space-x-2 text-2xl font-medium">
                  <img
                    className="block w-20 h-20"
                    src={jaikosha}
                    alt="Jai Kosha"
                  />
                  <span className="text-red-500 font-bold">
                    Jai Kosha <br />
                    Foundation
                  </span>
                </div>
              </NavLink>
            </div>
            <nav className="hidden lg:block">
              <ul className="flex items-center gap-2">
                {navLinks.map((link) => {
                  const isSubmenuActive =
                    link.hasSubmenu &&
                    link.submenu.some(
                      (sublink) => location.pathname === `/${sublink.to}`
                    );
                  return link.hasSubmenu ? (
                    <li key={link.id} className="relative">
                      <span
                        className="relative"
                        onMouseEnter={() => handleDropdown(link.openKey)}
                        onMouseLeave={() => handleDropdown(link.openKey)}
                      >
                        <button
                          className={`flex flex-row items-center px-3 py-2 ml-4 lg:ml-0 text-sm font-medium rounded-md focus:outline-none 
                          ${
                            isSubmenuActive
                              ? "text-emerald-600 bg-yellow-100/50"
                              : "text-zinc-600 hover:text-emerald-600 hover:bg-yellow-100/50"
                          }`}
                        >
                          <span className="mx-2">{link.label}</span>
                          <LuChevronDown />
                        </button>
                        <span
                          className={`absolute right-0 w-32 mt-0 origin-top-right rounded-md shadow-lg bg-white
                          transition-transform transform ease-out duration-100 
                          ${
                            openDropdown[link.openKey]
                              ? "opacity-100 scale-100"
                              : "opacity-0 scale-95 pointer-events-none"
                          }`}
                        >
                          {/* Submenu */}
                          <ul className="py-1 bg-yellow-100/30 rounded-md shadow-xs">
                            {link.submenu.map((sublink) => (
                              <li key={sublink.id}>
                                <NavLink
                                  to={sublink.to}
                                  className="flex flex-row items-center px-4 py-2 text-sm font-medium text-gray-700 focus:text-gray-900 hover:text-gray-900 focus:outline-none hover:bg-yellow-100/50 focus:bg-yellow-100 whitespace-nowrap"
                                >
                                  {sublink.label}
                                </NavLink>
                              </li>
                            ))}
                          </ul>
                        </span>
                      </span>
                    </li>
                  ) : (
                    <li key={link.id}>
                      <NavLink
                        to={link.to}
                        className={({ isActive }) =>
                          `${
                            isActive
                              ? "text-emerald-600 bg-yellow-100/70 shadow-sm"
                              : "text-zinc-600 bg-transparent"
                          } flex flex-row items-center p-2 ml-4 lg:ml-0 text-sm font-medium text-zinc-600 rounded-md hover:text-emerald-600 hover:bg-yellow-100/50 focus:outline-none focus:text-emerald-600`
                        }
                      >
                        <span className="mx-2">{link.label}</span>
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>

          <div className="flex lg:hidden">
            <button
              className="inline-flex items-center justify-center p-2 text-zinc-600 rounded-md hover:text-emerald-500 hover:bg-yellow-100/50 focus:outline-none focus:bg-emerald-100 focus:text-emerald-600"
              onClick={toggleMenu}
            >
              <LuMenu className="text-3xl" />
            </button>
          </div>
        </div>
      </div>

      <div className={`${isMenuOpen ? "block" : "hidden"} lg:hidden`}>
        <div className="container">
          <ul className="pt-2 pb-3">
            {navLinks.map((link) =>
              link.hasSubmenu ? (
                <li key={link.id}>
                  <span className="relative">
                    <button
                      className="w-full flex flex-row items-center p-2 text-base font-medium text-zinc-600 bg-transparent rounded-md focus:outline-none focus:text-emerald-600 focus:bg-yellow-100/50"
                      onClick={() => handleDropdown(link.openKey)}
                    >
                      <span className="mx-2">{link.label}</span>
                      <LuChevronDown />
                    </button>
                    <ul
                      className={`${
                        openDropdown[link.openKey] ? "block" : "hidden"
                      } p-2 mb-1 bg-yellow-50 rounded-md shadow-xs`}
                    >
                      {link.submenu.map((sublink) => (
                        <li
                          key={sublink.id}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <NavLink
                            to={sublink.to}
                            className={({ isActive }) =>
                              `${
                                isActive
                                  ? "text-emerald-600 bg-yellow-100/70 shadow-sm"
                                  : "text-zinc-600 bg-transparent"
                              } flex flex-row items-center px-4 py-2 text-base font-medium rounded-md hover:text-emerald-600 hover:bg-yellow-100/50 focus:outline-none focus:text-emerald-600`
                            }
                          >
                            {sublink.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </span>
                </li>
              ) : (
                <li key={link.id} onClick={() => setIsMenuOpen(false)}>
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "text-emerald-600 bg-yellow-100/70 shadow-sm"
                          : "text-zinc-600 bg-transparent"
                      } flex flex-row items-center p-2 text-base font-medium rounded-md hover:text-emerald-600 hover:bg-yellow-100/50 focus:outline-none focus:text-emerald-600`
                    }
                  >
                    <span className="ml-2">{link.label}</span>
                  </NavLink>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
