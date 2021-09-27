import React, { useState } from 'react';
import Sidebar from '../../components/sidebar/SideBar';
import PrimarySelect from '../../components/select/PrimarySelect';
import PrimaryTextFields from '../../components/textFields/PrimaryTextFields';


import {
    HiPencilAlt
    , HiMenu,
} from 'react-icons/hi';
import SidebarMobile from '../../components/SidebarMobile';
import Navbar from '../../components/Navbar';

const CreateDesignation = () => {
    const [sidebarActive, setSidebarActive] = useState(false);
    const [branch, setBranch] = useState('Select');


    return (
        <>
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
                            <p className="text-4xl text-secondary font-bold w-full pb-5">
                                Add Designation
                            </p>
                           
                        </div>
                        <div className="w-full">
                            {/* 1st colume */}
                            <div>
                                <div className="w-full rounded shadow mb-3  bg-white">
                                    <div className="inline-flex align-middle text-secondary text-lg px-5 py-2 font-semibold font-sans">
                                        <span className="px-2 text-2xl">
                                            <HiPencilAlt />

                                        </span>
                                        Add Designation
                                    </div>
                                </div>
                                <div className="w-full rounded shadow mb-3 grid grid-cols-2 md:grid-cols-2 gap-4 bg-white p-4">

                                    <div className="w-full ">
                                        <p className="py-1">
                                            Branch <span className="text-red-600">*</span>
                                        </p>
                                        <PrimarySelect id="branch" value={branch} options={["Icon School & College", "Oxford International"]} onClick={(e) => {
                                            setBranch(e.target.innerText);
                                        }} />
                                    </div>
                                    <div>
                                        <p className="py-1">Designation Name  <span className="text-red-600">*</span> </p>
                                        <PrimaryTextFields />
                                    </div>
                                </div>
                                <div className="w-full bg-white rounded mt-3 shadow p-4">

                                    <button className="bg-primary rounded p-2 text-white font-sans w-full">Save</button>

                                </div>
                            </div>

                            {/* 2nd colume */}
                            {/*************  TABLE HEREEEE *******************/}
                        </div>
                        <br />
                    </div>
                </div>
            </div>
        </>
    )
}
export default CreateDesignation;