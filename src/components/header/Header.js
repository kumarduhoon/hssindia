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
                        <b>
                            <Link className="header-text-color text-xl font-bold cursor-pointer underline-animation">Techical</Link>
                        </b>
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