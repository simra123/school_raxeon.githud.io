import React, { useState } from "react";


// importing icons
import {
    FaCalculator,
    FaGlobe,
    FaSchool,
    FaPhoneAlt,
    FaTwitter,
    FaFacebookF,
    FaLinkedinIn,
    FaUserLock, FaLockOpen, FaUserAlt
} from 'react-icons/fa';
import {
    RiParentFill,
} from 'react-icons/ri';
import {
    HiMenu,
    HiMail
} from 'react-icons/hi';


// importing components
import PrimarySelect from '../../components/select/PrimarySelect';
import PrimaryTextFields from "../../components/textFields/PrimaryTextFields";
import SecondaryTextField from '../../components/textFields/SecondaryTextFields';
import Textarea from '../../components/textFields/Textarea';
import FileUpload from '../../components/FileUpload';
import Sidebar from '../../components/sidebar/SideBar';
import SidebarMobile from "../../components/SidebarMobile";
import Navbar from "../../components/Navbar";

function AddParent() {

    const [sidebarActive, setSidebarActive] = useState(false);


    // Input Field States
    const [branch, setBranch] = useState('Select');

    return (
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
                            Add Parent
                        </p>
                        
                    </div>
                    <br />
                    <div className="w-full rounded shadow bg-white p-1">
                        <div className="inline-flex align-middle text-secondary text-lg px-5 font-semibold font-sans">
                            <span className="px-2 text-2xl">
                                <RiParentFill />
                            </span>
                            Add Parent
                        </div>
                    </div>
                    <div className="py-2"></div>
                    <div className="w-full bg-white rounded shadow">
                        <div className="inline-flex align-middle text-primary text-lg p-2 font-sans">
                            <span className="px-2 text-2xl">
                                <FaSchool />
                            </span>
                            Academic Details
                        </div>
                        <div className="grid grid-cols-1 gap-4 p-4">
                            <div className="w-full">
                                <p>
                                    Branch <span className="text-red-600">*</span>
                                </p>
                                <PrimarySelect
                                    id="branch"
                                    value={branch}
                                    options={["Icon School & College", "Oxford International"]}
                                    onClick={(e) => {
                                        setBranch(e.target.innerText);
                                    }}
                                />
                            </div>
                        </div>
                
                        <div className="inline-flex align-middle text-primary text-lg p-2 font-sans">
                            <span className="px-2 text-2xl">
                                <RiParentFill />
                            </span>
                            Parents Details
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
                            <div className="w-full">
                                <p>
                                    First Name <span className="text-red-600">*</span>
                                </p>
                                <PrimaryTextFields />
                            </div>
                            <div className="w-full">
                                <p>
                                   Last Name <span className="text-red-600">*</span>
                                </p>
                                <PrimaryTextFields />
                            </div>
                            <div className="w-full">
                                <p>
                                   Relation <span className="text-red-600">*</span>
                                </p>
                                <PrimaryTextFields />
                            </div>
                        </div>    
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 py-2">
                            <div className="w-full">
                                <p>
                                    Education <span className="text-red-600">*</span>
                                </p>
                                <PrimaryTextFields />
                            </div>
                           
                            <div className="w-full">
                                <p>
                                    Occupation <span className="text-red-600">*</span>
                                </p>
                                <PrimaryTextFields />
                            </div>
                            <div className="w-full">
                                <p>
                                    Income <span className="text-red-600">*</span>
                                </p>
                                <SecondaryTextField icon={<FaCalculator className="mx-auto" />} />
                            </div>
                           
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 px-4 py-2">

                            <div className="w-full">
                                <p>
                                    City <span className="text-red-600">*</span>
                                </p>
                                <PrimaryTextFields />
                            </div>
                            <div className="w-full">
                                <p>
                                    State <span className="text-red-600">*</span>
                                </p>
                                <PrimaryTextFields />
                            </div>
                            <div className="w-full">
                                <p>
                                    Mobile No <span className="text-red-600">*</span>
                                </p>
                                <SecondaryTextField icon={<FaPhoneAlt className="mx-auto" />} />
                            </div>
                            <div className="w-full">
                                <p>
                                    Email <span className="text-red-600">*</span>
                                </p>
                                <SecondaryTextField icon={<HiMail className="mx-auto" />} />
                            </div>

                        </div>
                        <div className="grid-cols-1 gap-4 px-4 py-2">
                            <div className="w-full">
                                <p>
                                    Address <span className="text-red-600">*</span>
                                </p>
                                <Textarea />
                            </div>
                            <div className="w-full  pt-4">
                                <p>
                                    Profile Picture <span className="text-red-600">*</span>
                                </p>
                                <br />
                                <FileUpload id1="parentsvg" id2="parentimg" />
                            </div>
                        </div>
                    
                        <div className="inline-flex align-middle text-primary text-lg p-2 font-sans">
                            <span className="px-2 text-2xl">
                                <FaGlobe />
                            </span>
                            Social Links
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 py-2">
                            <div className="w-full">
                                <p>
                                    Facebook <span className="text-red-600">*</span>
                                </p>
                                <SecondaryTextField icon={<FaFacebookF className="mx-auto" />} />
                            </div>
                            
                            <div className="w-full">
                                <p>
                                    Twitter <span className="text-red-600">*</span>
                                </p>
                                <SecondaryTextField icon={<FaTwitter />} />
                            </div>
                            <div className="w-full">
                                <p>
                                    LinkedIn <span className="text-red-600">*</span>
                                </p>
                                <SecondaryTextField icon={<FaLinkedinIn className="mx-auto" />} />
                            </div>
                        </div>
                        
                        <div className="inline-flex align-middle text-primary text-lg p-2 font-sans">
                            <span className="px-2 text-2xl">
                                <FaUserLock />
                            </span>
                            Login Details
                        </div>


                        <div className=" grid grid-cols-1 md:grid-cols-3  gap-4 px-4 py-2">

                            <div>
                                <p className="">
                                    Username <span className="text-red-600">*</span>
                                </p>
                                <SecondaryTextField icon={<FaUserAlt className="mx-auto" />} />


                            </div>
                            <div>
                                <p className="">

                                    Password <span className="text-red-600">*</span>
                                </p>
                                <SecondaryTextField icon={<FaLockOpen className="mx-auto" />} />


                            </div>
                            <div>
                                <p className="">

                                    Retype Password<span className="text-red-600">*</span>
                                </p>
                                <SecondaryTextField icon={<FaLockOpen className="mx-auto" />} />

                            </div>
                        </div>
                    </div>    
                        <div className="py-2"></div>
                        <div className="w-full bg-white rounded shadow">
                            <div className="p-4">
                                <button className="bg-primary rounded p-2 text-white font-sans w-full">Save</button>
                            </div>
                        </div>
                        <div className="py-20"></div>
                   
                </div>

            </div>



        </div>
    );
}


export default AddParent;