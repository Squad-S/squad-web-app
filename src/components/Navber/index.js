import React, { useState } from "react";
import AppsIcon from "@mui/icons-material/Apps";
import HelpIcon from "@mui/icons-material/Help";
import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";
import { NavLink } from "react-router-dom";
import { links } from "./MyLinks";

const Logo = "/assets/images/logo.png";

//Example
// const menuname = [
//     {
//         "list": "Dashboard",
//         "isActive":true,
//         "id":1
//     },
//     {
//       "list": "Dashboard",
//       "isActive": false,
//       "id":1
//   },
//   {
//     "list": "Dashboard",
//     "isActive":false,
//     "id":1
// },
// {
//   "list": "Dashboard",
//   "isActive": false,
//   "id":1
// },

// ]

//    const button = {
//     buttonName: "create",
//         props: {
//         type: 'button'}
//    }

const Navbar = () => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  return (
    <div>
      {/* This example requires Tailwind CSS v2.0+ */}
      <nav className="bg-white shadow-lg">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <AppsIcon className="mr-2 bg-white" />
                <NavLink to="/">
                  <img
                    className="hidden h-8 w-20 rounded-lg  bg-blue-700 px-2 py-1 lg:block"
                    src={Logo}
                    alt="Workflow"
                  />
                </NavLink>
                <h3 className="ml-3 mr-3 font-bold uppercase text-gray-500">
                  Admin
                </h3>
              </div>
              <>
                {links.map((link, index) => (
                  <div key={index}>
                    <div className="group px-1 text-left md:cursor-pointer">
                      <h1
                        className="group ml-2 flex items-center justify-between py-7 pr-5 text-sm font-bold uppercase text-gray-600 md:pr-0"
                        onClick={() => {
                          heading !== link.name
                            ? setHeading(link.name)
                            : setHeading("");
                          setSubHeading("");
                        }}
                      >
                        {link.name}
                        <span className="inline text-xl md:hidden">
                          <ion-icon
                            name={`${
                              heading === link.name
                                ? "chevron-up text-md rounded-md border-b-4 border-blue-700 px-3 py-2 font-medium text-black "
                                : "chevron-down text-md rounded-md px-3 py-2 font-medium text-black"
                            }`}
                          ></ion-icon>
                        </span>
                        <span className="hidden text-xl group-hover:-mt-2  group-hover:rotate-180 md:mt-1 md:ml-2 md:block">
                          <ion-icon name="chevron-down "></ion-icon>
                        </span>
                      </h1>
                      {link.submenu && (
                        <div>
                          <div className="absolute top-10 hidden list-none hover:md:block group-hover:md:block">
                            <div className="py-3">
                              <div
                                className="absolute left-3 mt-1 h-4 
                    w-4 rotate-45 bg-white"
                              ></div>
                            </div>
                            <div className="my-2 bg-white p-5 shadow-sm">
                              {link.sublinks.map((mysublinks, index) => (
                                <div key={index} className="mb-2">
                                  {mysublinks.Head && (
                                    <h1>{mysublinks.Head}</h1>
                                  )}
                                  <div className="shadow-sm">
                                    {mysublinks.sublink.map((slink, index) => (
                                      <li
                                        key={index}
                                        className="py-1 px-2 text-sm text-gray-600 hover:bg-gray-200 "
                                      >
                                        <NavLink
                                          to={slink.link}
                                          className="text-md rounded-md px-3 py-2 font-medium text-black "
                                        >
                                          {slink.name}
                                        </NavLink>
                                      </li>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </>
              <button
                type="button"
                className="mt-6 mr-2 mb-2 ml-2 h-9 rounded-lg bg-blue-700 px-3 py-1 text-sm font-medium uppercase text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Create
              </button>
              <NavLink to="/login">
                <button
                  type="button"
                  className="mt-6 mr-2 mb-2 ml-1 h-9 rounded-lg bg-orange-400 px-3 py-1 text-sm font-medium uppercase text-white hover:bg-orange-500 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-orange-400 dark:hover:bg-orange-500 dark:focus:ring-blue-800"
                >
                  Signin
                </button>
              </NavLink>
              <NavLink to="/signup">
                <button
                  type="button"
                  className="mt-6 mr-2 mb-2 ml-1 h-9 rounded-lg bg-orange-400 px-3 py-1 text-sm font-medium uppercase text-white hover:bg-orange-500 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-orange-400 dark:hover:bg-orange-500 dark:focus:ring-blue-800"
                >
                  Signup
                </button>
              </NavLink>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <HelpIcon className="mr-2 ml-6 rounded-full bg-gray-100" />
              <AccountCircleSharpIcon className="mr-2 rounded-full bg-orange-400" />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
