import React from "react";
import "./Header.scss"
import { Link } from "gatsby"


function Header() {
    return (
        <div>
            <div className="header-bg-color w-full sticky z-50 top-0">
                <div className="container mx-auto flex justify-between p-3">
                    <div className="container cursor-pointer">
                        logo
                    </div>
                    <div className="container flex justify-evenly">
                        <b>
                            <Link className="header-text-color text-l font-bold cursor-pointer">About</Link>
                        </b>
                        <b>
                            <Link className="header-text-color text-l font-bold cursor-pointer">Why HSS</Link>
                        </b>
                        <b>
                            <Link className="header-text-color text-l font-bold cursor-pointer">Techical</Link>
                        </b>
                        <b>
                            <Link className="header-text-color text-l font-bold cursor-pointer">Reach us</Link>
                        </b>

                    </div>
                </div>
            </div>
            <div className="header-bg-color-bottom w-full">
                <div className="container mx-auto flex justify-between p-3">
                    <div className="container mx-auto flex justify-start p-3">
                        <b>
                            <Link className="header-text-color text-xl font-bold cursor-pointer ml-3 mr-10">Our Products</Link>
                        </b>
                        <b>
                            <Link className="header-text-color text-xl font-bold cursor-pointer ml-5 mr-10">Market</Link>
                        </b>
                        <b>
                            <Link className="header-text-color text-xl font-bold cursor-pointer ml-5">Our Services</Link>
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