import React, { useState, useEffect } from "react";
import { useLocation } from "@reach/router"
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Loader from "./components/Loader/Loader";

function Layout({ children }) {
    const [loading, setLoading] = useState(true);
    const location = useLocation();

    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2600);

        return () => clearTimeout(timer);
    }, [location.pathname]);

    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <>
                    <Header />
                    <div className="content">{children}</div>
                    <Footer />
                </>
            )}
        </>
    );
}

export default Layout;
