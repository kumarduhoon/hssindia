import React from "react";
import "./Footer.scss"
import { Link } from "gatsby";
import arrow from "../../../static/right_arrow.png"
import address from "../../../static/address.png"
import email from "../../../static/email.png"
import phone from "../../../static/phone.png"
import footerImage from "../../../static/footer_img.png"
import copyright from "../../../static/copyright.svg"

function Footer() {
    return (
        <div>
            <div className="w-full footer-bg-color p-8">
                <div className="container mx-auto flex justify-evenly">
                    <div className="p-1 div-custom-css-one">
                        <p className="text-white text-xl"><b>About Us</b></p>
                        <p className="text-justify text-white mt-4">At HSS, our mission is to enhance your competitiveness with industry-leading motion and control solutions. We accomplish this by designing, building, and delivering complete hydraulic and pneumatic systems with leading edge technology and design assistance, backed by quality products, value pricing, and premier service that will exceed your expectations.</p>
                    </div>
                    <div className="ml-4 pl-1 mt-1">
                        <p className="text-white text-xl"><b>Our Products</b></p>
                        <div className="container mt-4 text-justify">
                            <div className="container flex justify-start">
                                <div className="w-4">
                                    <img
                                        src={arrow}
                                        alt="right arrow"
                                        className="mt-1"
                                    />
                                </div>
                                <Link
                                    to="/hose-fittings"
                                    className="text-white ml-1 cursor-pointer hover:text-orange-600"
                                    activeClassName="active-footer"
                                >Hose Fittings</Link>
                            </div>
                            <div className="container flex justify-start mt-3">
                                <div className="w-4">
                                    <img
                                        src={arrow}
                                        alt="right arrow"
                                        className="mt-1"
                                    />
                                </div>
                                <Link
                                    to="/adaptors"
                                    className="text-white ml-1 cursor-pointer hover:text-orange-600"
                                    activeClassName="active-footer"
                                >Adaptors</Link>
                            </div>
                            <div className="container flex mt-3 justify-start">
                                <div className="w-4">
                                    <img
                                        src={arrow}
                                        alt="right arrow"
                                        className="mt-1"
                                    />
                                </div>
                                <Link
                                    to="/accessories"
                                    className="text-white ml-1 cursor-pointer hover:text-orange-600"
                                    activeClassName="active-footer"
                                >Accessories</Link>
                            </div>
                            <div className="container flex mt-3 justify-start">
                                <div className="w-4">
                                    <img
                                        src={arrow}
                                        alt="right arrow"
                                        className="mt-1"
                                    />
                                </div>
                                <Link
                                    to="/tube-fitting"
                                    className="text-white ml-1 cursor-pointer hover:text-orange-600"
                                    activeClassName="active-footer"
                                >Tube Fittings</Link>
                            </div>
                            <div className="container flex mt-3 justify-start">
                                <div className="w-4">
                                    <img
                                        src={arrow}
                                        alt="right arrow"
                                        className="mt-1"
                                    />
                                </div>
                                <Link
                                    to="/sae-flanges"
                                    className="text-white ml-1 cursor-pointer hover:text-orange-600"
                                    activeClassName="active-footer"
                                >SAE Flanges</Link>
                            </div>
                        </div>
                    </div>
                    <div className="ml-4 pl-1 mt-1">
                        <div className="container mt-12 text-justify">
                            <div className="container flex justify-start">
                                <div className="w-4">
                                    <img
                                        src={arrow}
                                        alt="right arrow"
                                        className="mt-1"
                                    />
                                </div>
                                <Link
                                    to="/tube-assemblies"
                                    className="text-white ml-1 cursor-pointer hover:text-orange-600"
                                    activeClassName="active-footer"
                                >Tube Assemblies</Link>
                            </div>
                            <div className="container flex mt-3 justify-start">
                                <div className="w-4">
                                    <img
                                        src={arrow}
                                        alt="right arrow"
                                        className="mt-1"
                                    />
                                </div>
                                <Link
                                    to="/tube-clamps"
                                    className="text-white ml-1 cursor-pointer hover:text-orange-600"
                                    activeClassName="active-footer"
                                >Tube Clamps</Link>
                            </div>
                            <div className="container flex mt-3 justify-start">
                                <div className="w-4">
                                    <img
                                        src={arrow}
                                        alt="right arrow"
                                        className="mt-1"
                                    />
                                </div>
                                <Link
                                    to="/spools"
                                    className="text-white ml-1 cursor-pointer hover:text-orange-600"
                                    activeClassName="active-footer"
                                >Spools</Link>
                            </div>
                            <div className="container flex mt-3 justify-start">
                                <div className="w-4">
                                    <img
                                        src={arrow}
                                        alt="right arrow"
                                        className="mt-1"
                                    />
                                </div>
                                <Link
                                    to="/hydraulic-manifolds"
                                    className="text-white ml-1 cursor-pointer hover:text-orange-600"
                                    activeClassName="active-footer"
                                >Hydraulic Manifolds</Link>
                            </div>
                            <div className="container flex mt-3 justify-start">
                                <div className="w-4">
                                    <img
                                        src={arrow}
                                        alt="right arrow"
                                        className="mt-1"
                                    />
                                </div>
                                <Link
                                    to="/ball-valves-qrc"
                                    className="text-white ml-1 cursor-pointer hover:text-orange-600"
                                    activeClassName="active-footer"
                                >Ball Valves</Link>
                            </div>
                        </div>
                    </div>
                    <div className="ml-4 pl-1 mt-1">
                        <p className="text-white text-xl"><b>Main Links</b></p>
                        <div className="container mt-4 text-justify">
                            <div className="container flex justify-start">
                                <div className="w-4">
                                    <img
                                        src={arrow}
                                        alt="right arrow"
                                        className="mt-1"
                                    />
                                </div>
                                <Link
                                    to="/about"
                                    className="text-white ml-1 cursor-pointer hover:text-orange-600"
                                    activeClassName="active-footer"
                                >Company</Link>
                            </div>
                            <div className="container flex mt-3 justify-start">
                                <div className="w-4">
                                    <img
                                        src={arrow}
                                        alt="right arrow"
                                        className="mt-1"
                                    />
                                </div>
                                <Link
                                    to="/careers"
                                    className="text-white ml-1 cursor-pointer hover:text-orange-600"
                                    activeClassName="active-footer"
                                >Careers</Link>
                            </div>
                            <div className="container flex mt-3 justify-start">
                                <div className="w-4">
                                    <img
                                        src={arrow}
                                        alt="right arrow"
                                        className="mt-1"
                                    />
                                </div>
                                <Link
                                    to="/contact"
                                    className="text-white ml-1 cursor-pointer hover:text-orange-600"
                                    activeClassName="active-footer"
                                >Get Quote</Link>
                            </div>
                            <div className="container flex mt-3 justify-start">
                                <div className="w-4">
                                    <img
                                        src={arrow}
                                        alt="right arrow"
                                        className="mt-1"
                                    />
                                </div>
                                <Link
                                    to="/market"
                                    className="text-white ml-1 cursor-pointer hover:text-orange-600"
                                    activeClassName="active-footer"
                                >Market</Link>
                            </div>
                            <div className="container flex mt-3 justify-start">
                                <div className="w-4">
                                    <img
                                        src={arrow}
                                        alt="right arrow"
                                        className="mt-1"
                                    />
                                </div>
                                <Link
                                    to="/our-services"
                                    className="text-white ml-1 cursor-pointer hover:text-orange-600"
                                    activeClassName="active-footer"
                                >Services</Link>
                            </div>
                            {/* <div className="container flex mt-3 justify-start">
                                <div className="w-4">
                                    <img
                                        src="/right_arrow.png"
                                        alt="right arrow"
                                        className="mt-1"
                                    />
                                </div>
                                <Link
                                    to="/contact"
                                    className="text-white ml-1 cursor-pointer underline-animation-light">Support</Link>
                            </div> */}
                        </div>

                    </div>
                    <div className="ml-4 pl-1 mt-1">
                        <p className="text-white text-xl"><b>Contact Details</b></p>
                        <div className="container  grid grid-cols-1 mt-4 text-justify">
                            <div className="container flex justify-start">
                                <div >
                                    <div className="text-white">Plot no. 382, Sec.- 68, IMT </div>
                                    <div className="text-white mt-3">Faridabad, Haryana, India</div>
                                </div>
                                <div className=" container w-8 ml-3">
                                    <img
                                        src={address}
                                        alt="address img"
                                        className="mt-3 ml-3"
                                    />
                                </div>
                            </div>
                            <div className="underline-con-address"></div>
                            <div className="container flex mt-3 justify-start">
                                <div className="text-white ">sales@hssindia.in</div>
                                <div className="container w-8">
                                    <img
                                        src={email}
                                        alt="email img"
                                        className="ml-3 custom-css-email"
                                    />
                                </div>
                            </div>
                            <div className="underline-con-email"></div>
                            <div className="container flex mt-3 justify-start">
                                <div className="text-white ">+91-9667 73 62 68</div>
                                <div className="container w-5">
                                    <img
                                        src={phone}
                                        alt="phone img"
                                        className="ml-3 custom-css-phone"
                                    />
                                </div>
                            </div>
                            <div className="underline-con-phone"></div>
                            <div className="container flex mt-3 justify-start">
                                <div className="text-white ">+91-129-4057836</div>
                                <div className="container w-5">
                                    <img
                                        src={phone}
                                        alt="phone img"
                                        className="ml-3 custom-css-phone"
                                    />
                                </div>
                            </div>
                            <div className="underline-con-phone"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative">
                <div className="max-w-full">
                    <img
                        src={footerImage}
                        alt="footer img"
                    />
                </div>
                <div className="container absolute top-9 left-1/3 flex justify-start max-w-sm m-auto pl-11">
                    <div className="container w-3 mt-2">
                        <img
                            src={copyright}
                            alt="copyright svg"
                        />
                    </div>
                    <div className="container mt-0.5 ml-2">
                        <b>2024 Hydraulic Sealing Solutions Pvt. Ltd.</b>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer