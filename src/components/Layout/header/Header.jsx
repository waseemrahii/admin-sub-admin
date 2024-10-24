// import React, { useState } from "react";
// import { FaGlobe, FaCommentDots, FaShoppingCart } from "react-icons/fa";
// import "./Header.css";
// import { NavDropdown } from "react-bootstrap";
// import { Link } from "react-router-dom";
// // import { useAuth } from '../context/AuthContext.jsx';
// import { toast, ToastContainer } from "react-toastify";
// import { useDispatch, useSelector } from "react-redux";
// import { logout } from "../../../redux/slices/admin/authSlice";
// // import { logout } from "../../../redux/admin/authSlice";
// const Header = () => {
//   const dispatch = useDispatch();
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [isMessageTooltipVisible, setIsMessageTooltipVisible] = useState(false);
//   const [isGlobeTooltipVisible, setIsGlobeTooltipVisible] = useState(false);
//   const [selectedCountry, setSelectedCountry] = useState("English");

//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   const showMessageTooltip = () => {
//     setIsMessageTooltipVisible(true);
//   };

//   const hideMessageTooltip = () => {
//     setIsMessageTooltipVisible(false);
//   };

//   const showGlobeTooltip = () => {
//     setIsGlobeTooltipVisible(true);
//   };

//   const hideGlobeTooltip = () => {
//     setIsGlobeTooltipVisible(false);
//   };

//   const handleCountrySelect = (country) => {
//     setSelectedCountry(country);
//     setIsDropdownOpen(false);
//   };

//   const handleLogout = () => {
//     logout(); // Call the logout function from the context
//     toast.success("Logged out successfully!");
//     console.log("Logging out...");
//   };
//   return (
//     <>
//       <ToastContainer />
//       <div>
//         {/* Header Component */}
//         <div className="header flex items-center justify-between py-2 px-6 shadow fixed top-0 left-0 right-0 bg-white z-50">
//           {/* Left Section: Logo */}
//           <div className="left px-7">
//             <img
//               src="/vistalogo.png"
//               alt="Logo"
//               width="40"
//               style={{ height: "4rem" }}
//             />
//           </div>

//           {/* Right Section: Menu and Icons */}
//           <div className="right flex items-center justify-around">
//             {/* Language Dropdown */}
//             {/* <div className="relative flex items-center mr-6">
//               <img
//                 src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
//                 alt="US Flag"
//                 className="w-5 h-3 mr-1"
//               />
//               <span className="text-sm cursor-pointer" onClick={toggleDropdown}>
//                 {selectedCountry}
//               </span>
//               <svg
//                 className="w-4 h-4 ml-1 cursor-pointer"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//                 onClick={toggleDropdown}
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M19 9l-7 7-7-7"
//                 ></path>
//               </svg>
//               {isDropdownOpen && (
//                 <ul className="absolute top-10 right-0 mt-2 w-40 bg-white border border-gray-300 rounded shadow-lg z-10">
//                   <li
//                     className="px-4 py-2 cursor-pointer hover:bg-gray-100"
//                     onClick={() => handleCountrySelect("English")}
//                   >
//                     <img
//                       src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
//                       alt="US Flag"
//                       className="w-5 h-3 mr-2 inline-block"
//                     />
//                     English
//                   </li>
//                   <li
//                     className="px-4 py-2 cursor-pointer hover:bg-gray-100"
//                     onClick={() => handleCountrySelect("Français")}
//                   >
//                     <img
//                       src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg"
//                       alt="France Flag"
//                       className="w-5 h-3 mr-2 inline-block"
//                     />
//                     Français
//                   </li>
//                   <li
//                     className="px-4 py-2 cursor-pointer hover:bg-gray-100"
//                     onClick={() => handleCountrySelect("Español")}
//                   >
//                     <img
//                       src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg"
//                       alt="Spain Flag"
//                       className="w-5 h-3 mr-2 inline-block"
//                     />
//                     Español
//                   </li>
//                 </ul>
//               )}
//             </div>

        
//             <div
//               className="relative flex items-center mr-6 cursor-pointer"
//               onMouseEnter={showGlobeTooltip}
//               onMouseLeave={hideGlobeTooltip}
//             >
//               <FaGlobe size={20} />
//               {isGlobeTooltipVisible && (
//                 <span className="absolute top-8 left-1/2 transform -translate-x-1/2 mt-2 p-1 text-xs bg-gray-500 text-white rounded z-10">
//                   Globe Tooltip
//                 </span>
//               )}
//             </div>

       
//             <div
//               className="relative flex items-center mr-6 cursor-pointer"
//               onMouseEnter={showMessageTooltip}
//               onMouseLeave={hideMessageTooltip}
//             >
//               <FaCommentDots size={20} />
//               {isMessageTooltipVisible && (
//                 <span className="absolute top-8 left-1/2 transform -translate-x-1/2 mt-2 p-1 text-xs bg-gray-500 text-white rounded z-10">
//                   Message Tooltip
//                 </span>
//               )}
//             </div>

           
//             <div className="relative flex items-center mr-6 cursor-pointer">
//               <FaShoppingCart size={20} />
           
//             </div> */}

//             {/* User Icon */}
//             <div className="flex items-center cursor-pointer">
//               <img src="man.jpg" alt="User" className="w-8 h-8 rounded-full" />

//               <NavDropdown title="Admin Master" id="basic-nav-dropdown ">
//                 <NavDropdown.Item>
//                   <div className="flex gap-2">
//                     <img
//                       src="https://cdn.vectorstock.com/i/1000x1000/23/85/courier-checks-parcels-list-boxes-for-sending-vector-13222385.webp"
//                       className="w-10 h-10"
//                       alt=""
//                     />
//                     <div>
//                       <h1>Admin</h1>
//                       <h2>a...@admin@gmail.com</h2>
//                     </div>
//                   </div>
//                 </NavDropdown.Item>
//                 <NavDropdown.Item>
//                   <Link to={"/profileinformation"}>Setting</Link>
//                 </NavDropdown.Item>

//                 <NavDropdown.Divider />
//                 {/* <NavDropdown.Item  onClick={handleLogout}>Logout</NavDropdown.Item> */}
//                 <NavDropdown.Item onClick={() => dispatch(logout())}>
//                   Logout
//                 </NavDropdown.Item>
//               </NavDropdown>
//             </div>
//           </div>
//         </div>

//         {/* Spacer for Header */}
//         <div className="header-spacer"></div>
//       </div>
//     </>
//   );
// };

// export default Header;





import React, { useState, useEffect } from "react";
import { FaGlobe, FaCommentDots, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../redux/slices/admin/authSlice";

const Header = () => {
  const dispatch = useDispatch();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    dispatch(logout());
    toast.success("Logged out successfully!");
  };

  const handleOutsideClick = (e) => {
    if (!e.target.closest("#dropdown")) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <>
      <ToastContainer />
      <div>
        {/* Header Component */}
        <div className="header flex items-center justify-between py-2 px-6 shadow fixed top-0 left-0 right-0 bg-white z-50">
          {/* Left Section: Logo */}
          <div className=" ">
            <img
              src="/vistalogo.png"
              alt="Logo"
              className="md:h-12 h-8 w-full object-center"
            />
          </div>

          {/* Right Section: Menu and Icons */}
          <div className="right flex items-center space-x-4">
            {/* User Icon and Dropdown */}
            <div className="relative" id="dropdown">
              <div
                className="flex items-center cursor-pointer"
                onClick={toggleDropdown}
              >
                <img
                  src="man.jpg"
                  alt="User"
                  className="w-8 h-8 rounded-full"
                />
                <span className="ml-2">Admin</span>
              </div>

              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white border rounded-lg shadow-lg z-50">
                  <div className="flex gap-2 p-4">
                    <img
                      src="https://cdn.vectorstock.com/i/1000x1000/23/85/courier-checks-parcels-list-boxes-for-sending-vector-13222385.webp"
                      className="w-10 h-10"
                      alt="Admin"
                    />
                    <div>
                      <h1 className="font-bold">Admin</h1>
                      <h2 className="text-sm text-wrap">
                        a...@admin@gmail.com
                      </h2>
                    </div>
                  </div>
                  <Link
                    to={"/profileinformation"}
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Setting
                  </Link>
                  <div className="border-t my-2"></div>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Spacer for Header */}
        <div className="h-16"></div>
      </div>
    </>
  );
};

export default Header;

// import { Link } from "react-router-dom";
// import { toast, ToastContainer } from "react-toastify";
// import { useDispatch } from "react-redux";
// import { logout } from "../../../redux/slices/admin/authSlice";

// const Header = () => {
//   const dispatch = useDispatch();
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const dropdownRef = useRef(null); // Reference for the dropdown

//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   const handleLogout = () => {
//     dispatch(logout());
//     toast.success("Logged out successfully!");
//   };

//   // Close the dropdown if clicked outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setIsDropdownOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [dropdownRef]);

//   return (
//     <>
//       <ToastContainer />
//       <div>
//         {/* Header Component */}
//         <div className="header flex items-center justify-between py-2 px-6 shadow fixed top-0 left-0 right-0 bg-white z-50">
//           {/* Left Section: Logo */}
//           <div className="left px-7">
//             <img
//               src="/vistalogo.png"
//               alt="Logo"
//               width="40"
//               style={{ height: "4rem" }}
//               className="h-16 w-32"
//             />
//           </div>

//           {/* Right Section: User Dropdown */}
//           <div className="relative inline-block text-left" ref={dropdownRef}>
//             {/* Dropdown Toggle */}
//             <div
//               className="flex items-center cursor-pointer"
//               onClick={toggleDropdown}
//             >
//               <img
//                 src="man.jpg"
//                 alt="User"
//                 className="w-8 h-8 rounded-full mr-2"
//               />
//               <span className="font-medium">Admin Master</span>
//             </div>

//             {/* Dropdown Menu */}
//             {isDropdownOpen && (
//               <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
//                 <div className="py-1">
//                   <div className="flex gap-2 px-4 py-2">
//                     <img
//                       src="https://cdn.vectorstock.com/i/1000x1000/23/85/courier-checks-parcels-list-boxes-for-sending-vector-13222385.webp"
//                       className="w-10 h-10"
//                       alt="Admin"
//                     />
//                     <div>
//                       <h1 className="font-semibold">Admin</h1>
//                       <h2 className="text-gray-500">a...@admin@gmail.com</h2>
//                     </div>
//                   </div>

//                   <div className="border-t border-gray-200"></div>

//                   <Link
//                     to="/profileinformation"
//                     className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                   >
//                     Setting
//                   </Link>

//                   <div className="border-t border-gray-200"></div>

//                   <button
//                     onClick={handleLogout}
//                     className="w-full text-left block px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
//                   >
//                     Logout
//                   </button>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Spacer for Header */}
//         <div className="header-spacer"></div>
//       </div>
//     </>
//   );
// };

// export default Header;