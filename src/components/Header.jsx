import { useState } from "react";
import { Link } from "react-router-dom";


const Header = () => {
   const [showNav, setShowNav] = useState(false) 

    return ( 
        <>
        <header
         className="absolute left-0 top-0 z-50 w-full"
      >
                <div  className="container mx-auto">
                <div  className="relative -mx-4 flex items-center justify-between">
                    <div  className="w-60 max-w-full px-4">
                    <a href="javascript:void(0)"  className="block w-full py-5">
                        <img
                        src="/tushdelta.png"
                        alt="logo"
                        className="w-full"
                        />
                    </a>
                    </div>
                    <div  className="flex w-full items-center justify-between px-4">
                    <div>
                        <button
                         onClick={() =>  setShowNav(!showNav)}
                        className="ring-primary   absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] focus:ring-2 lg:hidden"
                        >
                        <span
                            className="bg-gray-300 relative my-[6px] block h-[2px] w-[30px]"
                        ></span>
                        <span
                            className="bg-gray-300 relative my-[6px] block h-[2px] w-[30px]"
                        ></span>
                        <span
                            className="bg-gray-300 relative my-[6px] block h-[2px] w-[30px]"
                        ></span>
                        </button>

                        {/* Desktop Nav */}
                        <nav
                        className="absolute hidden lg:flex  right-4 top-full w-full max-w-[250px] rounded-lg bg-white py-5 px-6 shadow transition-all lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none"
                        >
                        <ul  className="block lg:flex">
                            <li>
                            <a
                                href="javascript:void(0)"
                                className="text-dark hover:text-primary flex py-2 text-base font-medium lg:ml-12 lg:inline-flex"
                            >
                                Home
                            </a>
                            </li>
                            <li>
                            <a
                                href="javascript:void(0)"
                                className="text-dark hover:text-primary flex py-2 text-base font-medium lg:ml-12 lg:inline-flex"
                            >
                                About
                            </a>
                            </li>
                            <li>
                                
                                <a
                                    href="javascript:void(0)"
                                    className="text-dark hover:text-primary flex py-2 text-base font-medium lg:ml-12 lg:inline-flex"
                                >
                                    Contact
                                </a>
                                </li>
                            <li>
                            <a
                                href="javascript:void(0)"
                                className="text-dark hover:text-primary flex py-2 text-base font-medium lg:ml-12 lg:inline-flex"
                            >
                                Shop
                            </a>
                            </li>
                        </ul>
                        </nav>

                        {/* Mobile Nav */}
                       {showNav && 
                        <nav
                        className="absolute lg:hidden right-4 top-full w-full max-w-[250px] rounded-lg bg-white py-5 px-6 shadow transition-all lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none"
                        >
                        <ul  className="block ">
                            <li>
                            <a
                                href="javascript:void(0)"
                                className="text-dark hover:text-primary flex py-2 text-base font-medium lg:ml-12 lg:inline-flex"
                            >
                                Home
                            </a>
                            </li>
                            <li>
                            <a
                                href="javascript:void(0)"
                                className="text-dark hover:text-primary flex py-2 text-base font-medium lg:ml-12 lg:inline-flex"
                            >
                                About
                            </a>
                            </li>
                            <li>
                                
                                <a
                                    href="javascript:void(0)"
                                    className="text-dark hover:text-primary flex py-2 text-base font-medium lg:ml-12 lg:inline-flex"
                                >
                                    Contact
                                </a>
                                </li>
                            <li>
                                
                            <a
                                href="javascript:void(0)"
                                className="text-dark hover:text-primary flex py-2 text-base font-medium lg:ml-12 lg:inline-flex"
                            >
                                Shop
                            </a>
                            </li>
                            <div  className="flex justify-end pr-16 sm:hidden lg:pr-0">
                        <Link
                           to="/login"
                        className="text-[#98AA6A] flex justify-center items-center border-2 border-[#98AA6A] rounded-sm border-solid min-w-[4rem] h-[2.5rem] hover:text-primary px-3 mx-2 text-base font-medium"
                        >
                        Login
                        </Link>
                        <Link
                           to="/login"
                        className="bg-primary bg-[#98AA6A] min-w-[5rem]  flex justify-center items-center  rounded-sm  text-base h-[2.5rem] font-medium text-white hover:bg-opacity-90"
                        >
                        Sign Up
                        </Link>
                    </div>
                        </ul>
                        </nav>}
                    </div>
                    <div  className="hidden justify-end pr-16 sm:flex lg:pr-0">
                        <Link
                           to="/login"
                        className="text-[#98AA6A] border-2 border-[#98AA6A] rounded-sm border-solid min-w-[5rem] hover:text-primary py-2 px-5 mx-2 text-base font-bold"
                        >
                        Login
                        </Link>
                        <Link
                           to="/login"
                        className="bg-primary bg-[#98AA6A] min-w-[7rem] rounded-sm py-3 px-7 text-base font-medium text-white hover:bg-opacity-90"
                        >
                        Sign Up
                        </Link>
                    </div>
                    </div>
                </div>
                </div>
            </header>
            {/* //   <!-- ====== Navbar Section End --> */}
            
       
        </>
    
     );
}
 
export default Header;