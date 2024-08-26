import React from "react";
import "./Header.scss"
import { Link } from "gatsby"
import { useLocation } from "@reach/router"


function Header() {
    const location = useLocation();
    const isActive = (pathname, paths) => {
        return paths.some(path => pathname.includes(path));
    };

    const technicalPaths = [
        '/crimping-chart',
        '/non-skive-vs-skive-fittings',
        '/tube-fittings'
    ];

    const technicalActive = isActive(location.pathname, technicalPaths);

    return (
        <div>
            <div className="header-bg-color w-full sticky z-50 top-0">
                <div className="container mx-auto flex justify-between p-3">
                    <div className="container cursor-pointer">
                        <div className="logo-con">
                            <Link to="/">
                                <img
                                    src='/logo.png'
                                    alt="Logo"
                                    className="logo-class"
                                />
                            </Link>
                        </div>
                    </div>
                    <div className="container flex justify-evenly pt-8">
                        <b>
                            <Link
                                to="/about"
                                className="header-text-color 
                            text-xl 
                            font-bold
                            cursor-pointer  
                            "
                                activeClassName="active"
                            >About</Link>
                        </b>
                        <b>
                            <Link
                                to="/why-hss"
                                className="header-text-color text-xl font-bold cursor-pointer"
                                activeClassName="active"
                            >Why HSS</Link>
                        </b>
                        <div className="group relative cursor-pointer">
                            <div className={`flex items-center justify-between space-x-2 px-4  ${technicalActive ? 'active' : ''}`}>
                                <b>
                                    <span className={`header-text-color text-xl font-bold cursor-pointer menu-hover  ${technicalActive ? 'active' : ''}`}
                                    >Technical</span>
                                </b>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="white" className="h-6 w-6 fill-current">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </span>
                            </div>
                            <div
                                className="absolute left-8 z-50 mt-2 flex flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl opacity-0 transform scale-y-0 group-hover:opacity-100 group-hover:scale-y-100 group-hover:visible transition-all duration-300 origin-top invisible w-36 group-hover:w-72">

                                <Link
                                    to="/crimping-chart"
                                    className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2 ">
                                    Crimping Chart
                                </Link>
                                <Link
                                    to="/non-skive-vs-skive-fittings"
                                    className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                                    Non Skive vs Skive Fittings.
                                </Link>
                                <Link
                                    to="/tube-fittings"
                                    className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                                    Tube Fittings Comparison
                                </Link>
                            </div>
                        </div>

                        <b>
                            <Link
                                to="/contact"
                                className="header-text-color text-xl font-bold cursor-pointer"
                                activeClassName="active"
                            >Reach us</Link>
                        </b>
                    </div>
                </div>
            </div>
            <div className="header-bg-color-bottom w-full">
                <div className="container mx-auto flex justify-between p-3">
                    <div className="container mx-auto flex justify-start p-3">
                        <b>
                            <Link
                                to="/products"
                                className="header-text-color text-2xl font-bold cursor-pointer ml-3 mr-10"
                                activeClassName="active"
                            >Our Products</Link>
                        </b>
                        <b>
                            <Link
                                to="/market"
                                className="header-text-color text-2xl font-bold cursor-pointer ml-5 mr-10"
                                activeClassName="active"
                            >Market</Link>
                        </b>
                        <b>
                            <Link
                                to="/our-services"
                                className="header-text-color text-2xl font-bold cursor-pointer ml-5"
                                activeClassName="active"
                            >Our Services</Link>
                        </b>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Header