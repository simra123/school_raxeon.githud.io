import React, { useState } from "react";
import SidebarMobile from "../components/SidebarMobile";

// importing icons
import {
    FaCalculator,
    FaGlobe,
    FaSchool,
    FaPhoneAlt,
    FaTwitter,
    FaFacebookF,
    FaLinkedinIn,
    FaListUl
} from 'react-icons/fa';



// importing components

import Sidebar from '../components/sidebar/SideBar';
import Navbar from "../components/Navbar";
const DashboardPage = () => {

    const [sidebarActive, setSidebarActive] = useState(false);

    return ( <>
      

        <div className="fixed w-screen h-screen bg-gray-200">
        <SidebarMobile/>
        <Navbar/>
            
            <div className="tab-sm:inline-flex w-full h-full">

                {/* Sidebar */}
                <Sidebar onClick={() => {
                    const sidebar = document.querySelector('#sidebar');

                    sidebar.classList.remove('animate-grow');
                    sidebar.classList.add('animate-shrink');
                    setTimeout(() => {
                        sidebar.classList.add('hidden');
                    }, 500);
                    setSidebarActive(false);
                }} />

                <div className="w-full tab-sm:p-10 px-3 py-10 bg-gray-200 max-h-screen overflow-auto">

                    <div className="grid grid-cols-2 gap-4 tab-sm:grid-cols-1">
                        <p className="text-4xl text-secondary font-bold w-full">
                            Dashboard
                        </p>
                       
                    </div>
                    <div className="py-10"></div>
                </div>

            </div>



        </div>
        </>
    );
}


export default DashboardPage;