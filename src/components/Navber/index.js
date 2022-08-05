import React from "react";
import AppsIcon from "@mui/icons-material/Apps";
import HelpIcon from "@mui/icons-material/Help";
import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";

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
const Logo = "/assets/images/logo.png";
const Navbar = ({ menuname, button }) => {
  return (
    <div>
      {/* This example requires Tailwind CSS v2.0+ */}
      <nav className="bg-white shadow-lg">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <AppsIcon className="mr-2 bg-white" />
                <img
                  className="hidden h-8 w-20 rounded-lg  bg-blue-700 px-2 py-1 lg:block"
                  src={Logo}
                  alt="Workflow"
                />
                <h3 className="ml-3 font-bold uppercase text-gray-500">
                  Admin
                </h3>
              </div>
              {menuname.map((menu) => {
                return (
                  <div className="hidden sm:ml-6 sm:block" key={menu.id} ml-8>
                    <div className="flex space-x-1 ">
                      {menu.isActive ? (
                        <a
                          href="#"
                          className="text-md rounded-md border-b-4 border-blue-700 px-3 py-2 font-medium text-black  "
                          aria-current="page"
                        >
                          {menu.list}
                        </a>
                      ) : (
                        <a
                          href="#"
                          className="text-md rounded-md px-3 py-2 font-medium text-black "
                          aria-current="page"
                        >
                          {menu.list}
                        </a>
                      )}
                    </div>
                  </div>
                );
              })}
              <button
                className=" text-md ml-3 rounded-md bg-blue-700 px-3 py-2 font-medium uppercase text-white"
                {...button.props}
              >
                {button.buttonName}
              </button>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <HelpIcon className="mr-2 rounded-full bg-gray-100" />
              <AccountCircleSharpIcon className="mr-2 rounded-full bg-orange-400" />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
