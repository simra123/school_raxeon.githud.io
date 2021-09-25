import React, { useState } from 'react';

import Dropdown from './dropdown.component';
import {HiMenu} from 'react-icons/hi';
import PurpleLogoWhite from '../images/purple-logo.jpg';

import { FiUser, FiKey, FiMail, FiBriefcase, FiLogOut, FiGrid, FiMenu, FiSearch, FiBell, FiFlag, FiCalendar, FiMessageSquare } from 'react-icons/fi';
import { BiFullscreen } from 'react-icons/bi';

import ProfileDropdownImage from '../images/profileImage.webp';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';



function Navbar() {

    const [profileDropdownActive, setProfileDropdownActive] = useState(false);

    const profileDropdownSectionOneLinks = ["Profile", "Reset Password", "Mailbox"];
    const profileDropdownSectionOneUrls = ["/dashboard/profile", "/dashboard", "/dashboard"];
    const profileDropdownSectionOneIcons = [<FiUser />, <FiKey />, <FiMail />];

    const profileDropdownSectionTwoLinks = ["Global Settings"];
    const profileDropdownSectionTwoUrls = ["/dashboard"];
    const profileDropdownSectionTwoIcons = [<FiBriefcase />];

    const profileDropdownSectionThreeLinks = ["Logout"];
    const profileDropdownSectionThreeUrls = ["/dashboard"];
    const profileDropdownSectionThreeIcons = [<FiLogOut />];

    return (
        <div className=" inline-flex  bg-white shadow-lg lg:px-3 border-b px-5 py-3 lg:py-5  w-full">
            <div className=" hidden lg:block  pt-3">
                <Link to="/dashboard" >
                   <img src={logo} alt="logo" style={{width : "100%" , height:"35px"}} />
                </Link>
            </div>
            
            {/* <div className="p-6">
                
                <button className="bg-white rounded-md text-center p-1 text-xl text-gray-500 border border-purple-200" onClick={() => {
                    let sidebar = document.querySelector('#sidebar');

                    if (sidebarActive) {
                        sidebar.classList.remove('animate-grow');
                        sidebar.classList.add('animate-shrink');
                        sidebar.style.width = '5%';
                    } else {
                        sidebar.classList.remove('animate-shrink');
                        sidebar.classList.add('animate-grow');
                        sidebar.style.width = '16.66%';
                    }
                }}>
                    <FiMenu className="mx-auto" />
                </button>
                <button className="bg-white rounded-md text-center p-1 text-xl text-gray-500 border border-purple-200">
                    <BiFullscreen className="mx-auto" />
                </button>
                <button className="bg-white rounded-md text-center p-1 text-xl text-gray-500 border border-purple-200 py-2">
                    <FiGrid className="mx-auto" />
                </button>
                
            </div> */}
            <button className="relative p-3 border ml-auto hidden lg:block border-purple-200  hover:shadow-lg rounded-md">
                <HiMenu  className="text-black"/>
            </button>
            <div className="hidden lg:block  tracking-wider text-gray-400 focus:ring-1 ring-primary-purple focus:outline-none px-4  shadow-sm border w-1/2 border-purple-200   ml-auto rounded bg-white">
                <div className="flex  ">
                    <div className=" text-xl px-2 py-3">
                        <FiSearch className="text-black"/>
                    </div>
                    <input type="search" className="appearance-none px-5  w-full font-light focus:outline-none text-black " placeholder="Search" />
                </div>
            </div>
            <div className="flex ml-auto lg:mx-auto ">
                
                <div className="inline-flex  text-md text-gray-500 ml-auto">
                    <button className="relative p-3 border mx-3 border-purple-200  hover:shadow-lg rounded-md">
                        <FiCalendar  className="text-black"/>
                    </button>
                    <button className="relative p-3 border mr-3 border-purple-200  hover:shadow-lg rounded-md">
                        <FiFlag className="text-black " />
                    </button>

                    <Dropdown class id="notificationDropdown" titleIcon={<FiBell  className="text-black" />} headerTitle="Jennifer Adams" headerSubTitle="Super Admin" withImage={false} headerImage={<FiMessageSquare />} sectionOneLinks={profileDropdownSectionOneLinks} sectionOneUrls={profileDropdownSectionOneUrls} sectionOneIcons={profileDropdownSectionOneIcons} sectionTwoLinks={profileDropdownSectionTwoLinks} sectionTwoIcons={profileDropdownSectionTwoIcons} sectionTwoUrls={profileDropdownSectionTwoUrls} sectionThreeLinks={profileDropdownSectionThreeLinks} sectionThreeIcons={profileDropdownSectionThreeIcons} sectionThreeUrls={profileDropdownSectionThreeUrls} onClick={() => {
                        let dropdown = document.querySelector('#profileDropdown');

                        if (profileDropdownActive) {
                            dropdown.classList.remove('block');
                            dropdown.classList.add('hidden');

                            setProfileDropdownActive(false);
                        } else {
                            dropdown.classList.remove('hidden');
                            dropdown.classList.add('block');

                            setProfileDropdownActive(true);
                        }
                    }} />
                    <p className="text-gray-400 place-items-center mx-3 pt-2">|</p>
                    <Dropdown id="profileDropdown" title="Profile" titleIcon={<FiUser  className="text-black"/>} headerTitle="Jennifer Adams" headerSubTitle="Super Admin" withImage={true} headerImage={ProfileDropdownImage} sectionOneLinks={profileDropdownSectionOneLinks} sectionOneUrls={profileDropdownSectionOneUrls} sectionOneIcons={profileDropdownSectionOneIcons} sectionTwoLinks={profileDropdownSectionTwoLinks} sectionTwoIcons={profileDropdownSectionTwoIcons} sectionTwoUrls={profileDropdownSectionTwoUrls} sectionThreeLinks={profileDropdownSectionThreeLinks} sectionThreeIcons={profileDropdownSectionThreeIcons} sectionThreeUrls={profileDropdownSectionThreeUrls} onClick={() => {
                        let dropdown = document.querySelector('#profileDropdown');

                        if (profileDropdownActive) {
                            dropdown.classList.remove('block');
                            dropdown.classList.add('hidden');

                            setProfileDropdownActive(false);
                        } else {
                            dropdown.classList.remove('hidden');
                            dropdown.classList.add('block');

                            setProfileDropdownActive(true);
                        }
                    }} />
                </div>
            </div>
           
        </div>

    );
}

export default Navbar;