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
                        <div className=" group relative cursor-pointer">
                            <div className="flex items-center justify-between space-x-2 px-4">
                                <b>
                                    <Link className="header-text-color text-xl font-bold cursor-pointer menu-hover">Techical</Link>
                                </b>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                        stroke="white" class="h-6 w-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </span>
                            </div>

                            <div
                                class="invisible absolute z-50 flex flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl group-hover:visible left-6">

                                <a class="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                                    Sunday
                                </a>

                                <a class="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                                    Monday
                                </a>

                                <a class="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                                    Tuesday
                                </a>

                                <a class="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                                    Wednesday
                                </a>

                                <a class="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                                    Thursday
                                </a>

                                <a class="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                                    Friday
                                </a>

                                <a class="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                                    Saturday
                                </a>

                            </div>
                        </div>
                        <b>
                            <Link className="header-text-color text-xl font-bold cursor-pointer underline-animation">Reach us</Link>
                        </b>
                        <div className="login-icon-con cursor-pointer">
                            <img
                                src='/login_icon.png'
                                alt="Login"
                                className="logo-class"
                            />
                        </div>
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
                    <div className="container flex justify-end ">
                        <input
                            className="outline-none placeholder-orange-500 pl-[5px] placeholder:text-lg rounded h-10 mt-2"
                            placeholder="Search"
                        />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Header