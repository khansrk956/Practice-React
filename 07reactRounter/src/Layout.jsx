import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom"; // we can change things dynamically when we use outlet.

function Layout(){
    return (
        // we can also this work in App.jsx
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout