import React from "react";
import "./Footer.scss"

function Footer() {
    return (
        <div className="w-full footer-bg-color p-8">
            <div className="container mx-auto grid grid-cols-5 gap-5">
                <div className="p-1">
                    <p className="text-white text-xl"><b>About Us</b></p>
                    <p className="text-justify text-white mt-4">At HSS, our mission is to enhance your competitiveness with industry-leading motion and control solutions. We accomplish this by designing, building, and delivering complete hydraulic and pneumatic systems with leading edge technology and design assistance, backed by quality products, value pricing, and premier service that will exceed your expectations.</p>
                </div>
                <div>
                    <p className="text-white text-xl"><b>Our Products</b></p>
                    <div className="container mt-4 text-justify">
                        <span></span><p className="text-white">Hose Fittings</p>
                        <span></span><p className="text-white">Adaptors</p>
                        <span></span><p className="text-white">Accessories</p>
                        <span></span><p className="text-white">Tube Fittings</p>
                        <span></span><p className="text-white">SAE Flanges</p>
                    </div>
                </div>
                <div>
                    <div className="container mt-12 text-justify">
                        <span></span><p className="text-white ">Tube Assemblies</p>
                        <span></span><p className="text-white ">Tube Clamps</p>
                        <span></span><p className="text-white ">Spools</p>
                        <span></span><p className="text-white ">Hydraulic Manifolds</p>
                        <span></span><p className="text-white ">Ball Valves</p>
                    </div>
                </div>
                <div>
                    <p className="text-white text-xl"><b>Main Links</b></p>
                    <div className="container mt-4 text-justify">
                        <span></span><p className="text-white">Company</p>
                        <span></span><p className="text-white">Careers</p>
                        <span></span><p className="text-white">Get Quote</p>
                        <span></span><p className="text-white">Market</p>
                        <span></span><p className="text-white">Services</p>
                        <span></span><p className="text-white">Support</p>
                    </div>

                </div>
                <div>
                    <p className="text-white text-xl"><b>Contact Details</b></p>
                    <div className="container  grid grid-cols-1 divide-y mt-4 text-justify">
                        <span></span><p className="text-white">Plot no. 382, Sec.- 68, IMT </p>
                        <span></span><p className="text-white">Faridabad, Haryana, India</p>
                        <span></span><p className="text-white">sales@hssindia.in</p>
                        <span></span><p className="text-white">+91-9667 73 62 68</p>
                        <span></span><p className="text-white">+91-129-4057836</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer