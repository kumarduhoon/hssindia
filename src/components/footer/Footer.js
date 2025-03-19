import React from "react";
import "./Footer.scss"
import { Link } from "gatsby";
import logo from "../../assests/images/headerpage/hss_logo.svg"
import x from "../../assests/images/homepage/x.svg"
import location from "../../assests/images/homepage/location.svg"
import insta from "../../assests/images/homepage/insta.svg"
import linkdin from "../../assests/images/homepage/linkdin.svg"
import email from "../../assests/images/homepage/email.svg"
// import mob from "../../assests/images/homepage/mob.svg"
import phone from "../../assests/images/homepage/phone.svg"

function Footer() {
    return (
        <div>
            <footer className="bg-cover bg-center text-white py-12 bg-image-class">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
                    {/* Logo and Navigation */}
                    <div className="cursor-pointer  w-1/4 flex justify-center">
                        <div className="logo-con">
                            <Link to="/">
                                <img
                                    src={logo}
                                    alt="Logo"
                                    className="logo-class"
                                />
                            </Link>
                        </div>
                    </div>
                    <div className="border-l-4 border-white">
                        <ul className="list-none pl-4">
                            <li className="mb-2">
                                <Link to="/" className="hover:text-orange-500">Home</Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/about" className="hover:text-orange-500">About Us</Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/our-services" className="hover:text-orange-500">Our Services</Link>
                            </li>
                            <li>
                                <Link to="/" className="hover:text-orange-500">Our Customer</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact and Company Links */}
                    <div className="border-l-4 border-white">
                        <ul className="list-none pl-4">
                            <li className="mb-2">
                                <Link to="/contact" className="hover:text-orange-500">Contact Us</Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/" className="hover:text-orange-500">Support</Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/about" className="hover:text-orange-500">Company</Link>
                            </li>
                            <li>
                                <Link to="/careers" className="hover:text-orange-500">Careers</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Information */}
                    <div>
                        <p className="mb-2 flex ">
                            <img
                                src={location}
                                alt="location"
                                className="img-card-margin-left"
                            />
                            Plot no. 382, Sec - 68, IMT Faridabad, Haryana, India
                        </p>
                        {/* <p className="mb-2 flex items-center">
                            <img
                                src={mob}
                                alt="mob"
                                className="img-card-margin-left"
                            />
                            +91-99586 29977
                        </p> */}
                        <p className="mb-2 flex items-center">
                            <img
                                src={phone}
                                alt="phone"
                                className="img-card-margin-left"
                            />
                            +91-99586 29977
                        </p>
                        <p className="mb-2 flex items-center">
                            <img
                                src={email}
                                alt="mail"
                                className="img-card-margin-left"
                            />
                            sales@hssindia.in
                        </p>
                    </div>
                </div>
                <div className="max-w-7xl m-auto bg-white h-1 mt-10"></div>
                <div className="mt-3 border-white pt-6 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-500 text-sm mb-4 pl-8 md:mb-0">
                        &copy; 2020. Hydraulic Sealing Solutions Pvt. Ltd.
                    </p>

                    {/* Social Media Icons */}
                    <div className="flex space-x-4 pr-8">
                        <Link to="#" className="hover:text-orange-500">
                            <img
                                src={x}
                                alt="x"
                                className="img-width-footer"
                            />
                        </Link>
                        <Link to="#" className="hover:text-orange-500">
                            <img
                                src={linkdin}
                                alt="linkdin"
                                className="img-width-footer"
                            />
                        </Link>
                        <Link to="#" className="hover:text-orange-500">
                            <img
                                src={insta}
                                alt="insta"
                                className="img-width-footer"
                            />
                        </Link>
                    </div>
                </div>
            </footer>
        </div>
    )
}
export default Footer