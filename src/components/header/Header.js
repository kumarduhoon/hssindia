import React from "react";
import "./Header.scss"
import { Link } from "gatsby"




function Header() {
    return (
        <div>
            <div className="header-bg-color w-full sticky z-50 top-0">
                <div className="container mx-auto flex justify-between p-3">
                    <div className="container cursor-pointer">
                        <div className="logo-con">
                            <img
                                src='/logo.png'
                                alt="Logo"
                                className="logo-class"
                            />
                        </div>
                    </div>
                    <div className="container flex justify-evenly pt-8">
                        <b>
                            <Link
                                className="header-text-color 
                            text-xl 
                            font-bold
                            cursor-pointer 
                            underline-animation
                            ">About</Link>
                        </b>
                        <b>
                            <Link className="header-text-color text-xl font-bold cursor-pointer underline-animation">Why HSS</Link>
                        </b>
                        <div className="group relative cursor-pointer">
                            <div className="flex items-center justify-between space-x-2 px-4">
                                <b>
                                    <Link className="header-text-color text-xl font-bold cursor-pointer menu-hover">Technical</Link>
                                </b>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                        stroke="white" class="h-6 w-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </span>
                            </div>
                            <div
                                className="absolute left-8 z-50 mt-2 flex flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl opacity-0 transform scale-y-0 group-hover:opacity-100 group-hover:scale-y-100 group-hover:visible transition-all duration-300 origin-top invisible w-36 group-hover:w-72">

                                <Link className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2 ">
                                    Crimping Chart
                                </Link>
                                <Link className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                                    Non Skive vs Skive Fittings.
                                </Link>
                                <Link className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                                    Tube Fittings Comparison
                                </Link>
                            </div>
                        </div>

                        <b>
                            <Link className="header-text-color text-xl font-bold cursor-pointer underline-animation">Reach us</Link>
                        </b>
                    </div>
                </div>
            </div>
            <div className="header-bg-color-bottom w-full">
                <div className="container mx-auto flex justify-between p-3">
                    <div className="container mx-auto flex justify-start p-3">
                        <b>
                            <Link className="header-text-color text-2xl font-bold cursor-pointer ml-3 mr-10
                            underline-animation">Our Products</Link>
                        </b>
                        <b>
                            <Link className="header-text-color text-2xl font-bold cursor-pointer ml-5 mr-10 underline-animation">Market</Link>
                        </b>
                        <b>
                            <Link className="header-text-color text-2xl font-bold cursor-pointer ml-5 underline-animation">Our Services</Link>
                        </b>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Header