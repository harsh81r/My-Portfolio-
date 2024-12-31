
import React from 'react'
import {Link, NavLink} from 'react-router-dom'





// const Button = () => {
//     const [backgroundColor, setBackgroundColor] = useState('white');
  
//     const handleButtonClick = () => {
//       const newColor = backgroundColor === 'white' ? 'black' : 'white';
//       setBackgroundColor(newColor);
//     };
  
//     return (
//       <button onClick={handleButtonClick} style={{ padding: '10px 20px', cursor: 'pointer' }}>
//         Change Background Color
//       </button>
//     );
//   };

function Header() {
    const [isOpen, setIsOpen] = React.useState(false); // State for mobile menu
     return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-transparent`  border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img
                            src="./myph.jpg"
                            className="mr-3 h-12 rounded-3xl"
                            alt="Logo"
                        />
                    </Link>
                    <div className="flex items-center lg:order-2">
                        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-gray-800">
                            {/* Mobile menu button */}
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                        <Link
                            to="#"
                            className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            
                        </Link>
                        <Link
                            to="#"
                            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Get started
                        </Link>
                    </div>
                     <div className={`hidden lg:flex justify-between items-center w-full lg:w-auto lg:order-1 ${isOpen ? 'block' : 'hidden'}`} id="mobile-menu-2">
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            {/* ... existing NavLink items ... */}
                        </ul>
                    </div>
                    {/* Mobile menu for smaller screens */}
                    <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'}`}>
                        <ul className="flex flex-col mt-4 font-medium">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} hover:bg-gray-50`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} hover:bg-gray-50`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contact"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} hover:bg-gray-50`
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/github"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} hover:bg-gray-50`
                                    }
                                >
                                    Github
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/Groundwater"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} hover:bg-gray-50`
                                    }
                                >
                                    Game
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}



//  function Header() {
//     return (
//         <header className="shadow sticky z-50 top-0">
//             <nav className="bg- border-gray-200 px-4 lg:px-6 py-2.5">
//                 <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
//                     <Link to="/" className="flex items-center">
//                         <img
//                             src="https://media.licdn.com/dms/image/v2/D5603AQF-RFNeGK7BDw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1727793359643?e=1733356800&v=beta&t=yODdgzG3sXpYaC2JQftc_v4E72CdWE5XyOBtz99v-xA"
//                             className="mr-3 h-12 rounded-3xl"
//                             alt="Logo"
                            
//                         />
                        
                    
//                     </Link>
//                     <div className="flex items-center lg:order-2">
//                         <Link
//                             to="#"
//                             className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
//                         >
//                             Log in
//                         </Link>
//                         <Link
//                             to="#"
//                             className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
//                         >
//                             Get started
//                         </Link>
//                     </div>


//                     <div
//                         className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
//                         id="mobile-menu-2"
//                     >
//                         <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
//                             <li>
//                                 <NavLink
//                                 to="/"
//                                     className={({isActive}) =>
//                                         `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
//                                     }
//                                 >
//                                     Home
//                                 </NavLink>
//                             </li>
//                             <li>
//                                 <NavLink
//                                 to="/about"
//                                     className={({isActive}) =>
//                                         `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
//                                     }
//                                 >
//                                     About
//                                 </NavLink>
//                             </li>
//                             <li>
//                                 <NavLink
//                                 to="/contact"
//                                     className={({isActive}) =>
//                                         `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
//                                     }
//                                 >
//                                     Contact
//                                 </NavLink>
//                             </li>
//                             <li>
//                                 <NavLink
//                                 to="/github"
//                                     className={({isActive}) =>
//                                         `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
//                                     }
//                                 >
//                                     Github
//                                 </NavLink>
//                             </li>



//                             <li>
//                                 <NavLink
//                                 to="/Groundwater"
//                                     className={({isActive}) =>
//                                         `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
//                                     }
//                                 >
//                                     Game
//                                 </NavLink>
//                             </li>
        


                            
//                         </ul>
//                     </div>
//                 </div>
//             </nav>
//         </header>
//     );
// }

export default Header