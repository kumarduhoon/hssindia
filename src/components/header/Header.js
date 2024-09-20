import React, { useState, useEffect } from "react";
import "./Header.scss"
import { Link } from "gatsby"
import { useLocation } from "@reach/router"
import logo from "../../assests/images/headerpage/hss_logo.svg"


function Header() {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const [scroll, setScroll] = useState(false);
    const isActive = (pathname, paths) => {
        return paths.some(path => pathname.includes(path));
    };


    const technicalPaths = [
        '/crimping-chart',
        '/non-skive-vs-skive-fittings',
        '/tube-fittings'
    ];


    const technicalActive = isActive(location.pathname, technicalPaths)


    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const handleScroll = () => {
        if (window.scrollY > 50) {
            setScroll(true);
        } else {
            setScroll(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`navbar ${scroll ? 'navbar-scrolled' : ''}`}>
            <div className="navbar-logo">
                <Link to="/">
                    <img src={logo} alt="HSS Logo" />
                </Link>
            </div>
            <ul className={`navbar-links ${isOpen ? 'show' : ''}`}>
                <li><Link activeClassName="active" to="/about/">About</Link></li>
                <li><Link activeClassName="active" to="/products">Product</Link></li>
                <li><Link activeClassName="active" to="/market">Market</Link></li>
                <li><Link activeClassName="active" to="/our-services">Services</Link></li>
                <li> <div className="group relative cursor-pointer">
                    <div className={`flex items-center ${technicalActive ? 'active' : ''}`}>
                        <b>
                            <span className=
                                {`header-text-color text-xm font-bold cursor-pointer ${technicalActive ? 'active' : ''}`}>
                                Technical
                            </span>
                        </b>
                        <span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 fill-current"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="1.5"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </span>
                    </div>
                    <div
                        className="absolute left-0 z-50 mt-2 flex flex-col bg-white py-1 px-4 text-gray-800 shadow-xl opacity-0 group-hover:opacity-100 group-hover:visible transition-all duration-300 w-64 origin-top invisible"
                    >
                        <Link
                            to="/crimping-chart"
                            activeClassName="active"
                            className={`my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black`}
                        >Crimping Chart</Link>
                        <Link
                            to="/non-skive-vs-skive-fittings"
                            activeClassName="active"
                            className={`my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black`}
                        >Non Skive vs Skive Fittings</Link>
                        <Link
                            to="/tube-fittings"
                            activeClassName="active"
                            className={`my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black`}
                        >Tube Fittings Comparison</Link>
                    </div>
                </div></li>
                <li><Link activeClassName="active" to="/why-hss">Why HSS</Link></li>
                <li><Link activeClassName="active" to="/contact">Reach Us</Link></li>
            </ul>
            <div className="navbar-toggle" onClick={toggleMenu}>
                <span className="toggle-bar"></span>
                <span className="toggle-bar"></span>
                <span className="toggle-bar"></span>
            </div>
        </nav>
    )
}

export default Header





