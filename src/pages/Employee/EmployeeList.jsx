import React, { useState } from "react";


// importing icons
import {
    FaListUl
} from 'react-icons/fa';
import {
    HiMenu,
} from 'react-icons/hi';
import Navbar from "../../components/Navbar";


// importing components
import Sidebar from '../../components/sidebar/SideBar';
import SidebarMobile from "../../components/SidebarMobile";

const EmployeeList = () => {

    const [sidebarActive, setSidebarActive] = useState(false);

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
                            <p className="text-4xl text-secondary font-bold w-full">
                                Employees List
                            </p>
                            
                        </div>
                        <br />
                        <div className="w-full rounded shadow bg-white p-1">
                            <div className="inline-flex align-middle text-secondary text-lg px-5 font-semibold font-sans">
                                <span className="px-2 py-1 text-xl">
                                    <FaListUl />
                                </span>
                                Employee List
                            </div>
                        </div>
                        <div className="py-2"></div>
                        <div className="w-full bg-white rounded shadow p-5 pr-5 overflow-auto">
                            <table className="table-auto w-full">
                                <thead>
                                    <tr className="font-thin font-sans">
                                        <th className="bg-gray-200 rounded-l-lg p-2 font-sans text-base">S. No</th>
                                        <th className="bg-gray-200 font-sans text-base">Branch</th>
                                        <th className="bg-gray-200 font-sans text-base">Guardian Name</th>
                                        <th className="bg-gray-200 font-sans text-base">Occupation</th>
                                        <th className="bg-gray-200 font-sans text-base">Mobile No</th>
                                        <th className="bg-gray-200 font-sans text-base">Email</th>
                                        <th className="bg-gray-200 rounded-r-lg p-1 font-sans text-base">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="text-gray-700 hover:bg-gray-100 text-sm px-5 border-b">
                                        <td className="text-center p-4 px-2">001</td>
                                        <td className="text-center p-4 px-2">Icon School & College</td>
                                        <td className="text-center p-4 px-2">Md. Ballayet Mollha</td>
                                        <td className="text-center p-4 px-2">Bussiness</td>
                                        <td className="text-center p-4 px-2">+14424575757</td>
                                        <td className="text-center p-4 px-2">parent@ramom.com</td>
                                        <td className="text-center p-4 px-2">
                                            <div className="grid grid-cols-3 gap-2">
                                                <button className="border bg-blue-600 text-blue-600 rounded-lg">HH</button>

                                                <button className="border bg-green-600 text-green-600 rounded-lg">HH</button>

                                                <button className="border bg-red-600 text-red-600 rounded-lg">HH</button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="text-gray-700 hover:bg-gray-100 text-sm px-5 border-b">
                                        <td className="text-center p-4 px-2">002</td>
                                        <td className="text-center p-4 px-2">Oxford International</td>
                                        <td className="text-center p-4 px-2">Bohot Hi Acha Nam Hai</td>
                                        <td className="text-center p-4 px-2">Bussiness, Enterprenuer, Philanthorphist</td>
                                        <td className="text-center p-4 px-2">+14424575757</td>
                                        <td className="text-center p-4 px-2">parentfathermother@ramom.com</td>
                                        <td className="text-center p-4 px-2 w-32">
                                            <div className="grid grid-cols-3 gap-2">
                                                <button className="border bg-blue-600 text-blue-600 rounded-lg">HH</button>

                                                <button className="border bg-green-600 text-green-600 rounded-lg">HH</button>

                                                <button className="border bg-red-600 text-red-600 rounded-lg">HH</button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="text-gray-700 hover:bg-gray-100 text-sm px-5 border-b">
                                        <td className="text-center p-4 px-2">001</td>
                                        <td className="text-center p-4 px-2">Icon School & College</td>
                                        <td className="text-center p-4 px-2">Md. Ballayet Mollha</td>
                                        <td className="text-center p-4 px-2">Bussiness</td>
                                        <td className="text-center p-4 px-2">+14424575757</td>
                                        <td className="text-center p-4 px-2">parent@ramom.com</td>
                                        <td className="text-center p-4 px-2">
                                            <div className="grid grid-cols-3 gap-2">
                                                <button className="border bg-blue-600 text-blue-600 rounded-lg">HH</button>

                                                <button className="border bg-green-600 text-green-600 rounded-lg">HH</button>

                                                <button className="border bg-red-600 text-red-600 rounded-lg">HH</button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="text-gray-700 hover:bg-gray-100 text-sm px-5 border-b">
                                        <td className="text-center p-4 px-2">001</td>
                                        <td className="text-center p-4 px-2">Icon School & College</td>
                                        <td className="text-center p-4 px-2">Md. Ballayet Mollha</td>
                                        <td className="text-center p-4 px-2">Bussiness</td>
                                        <td className="text-center p-4 px-2">+14424575757</td>
                                        <td className="text-center p-4 px-2">parent@ramom.com</td>
                                        <td className="text-center p-4 px-2">
                                            <div className="grid grid-cols-3 gap-2">
                                                <button className="border bg-blue-600 text-blue-600 rounded-lg">HH</button>

                                                <button className="border bg-green-600 text-green-600 rounded-lg">HH</button>

                                                <button className="border bg-red-600 text-red-600 rounded-lg">HH</button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="text-gray-700 hover:bg-gray-100 text-sm px-5 border-b">
                                        <td className="text-center p-4 px-2">001</td>
                                        <td className="text-center p-4 px-2">Icon School & College</td>
                                        <td className="text-center p-4 px-2">Md. Ballayet Mollha</td>
                                        <td className="text-center p-4 px-2">Bussiness</td>
                                        <td className="text-center p-4 px-2">+14424575757</td>
                                        <td className="text-center p-4 px-2">parent@ramom.com</td>
                                        <td className="text-center p-4 px-2">
                                            <div className="grid grid-cols-3 gap-2">
                                                <button className="border bg-blue-600 text-blue-600 rounded-lg">HH</button>

                                                <button className="border bg-green-600 text-green-600 rounded-lg">HH</button>

                                                <button className="border bg-red-600 text-red-600 rounded-lg">HH</button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="text-gray-700 hover:bg-gray-100 text-sm px-5 border-b">
                                        <td className="text-center p-4 px-2">001</td>
                                        <td className="text-center p-4 px-2">Icon School & College</td>
                                        <td className="text-center p-4 px-2">Md. Ballayet Mollha</td>
                                        <td className="text-center p-4 px-2">Bussiness</td>
                                        <td className="text-center p-4 px-2">+14424575757</td>
                                        <td className="text-center p-4 px-2">parent@ramom.com</td>
                                        <td className="text-center p-4 px-2">
                                            <div className="grid grid-cols-3 gap-2">
                                                <button className="border bg-blue-600 text-blue-600 rounded-lg">HH</button>

                                                <button className="border bg-green-600 text-green-600 rounded-lg">HH</button>

                                                <button className="border bg-red-600 text-red-600 rounded-lg">HH</button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="text-gray-700 hover:bg-gray-100 text-sm px-5 border-b">
                                        <td className="text-center p-4 px-2">001</td>
                                        <td className="text-center p-4 px-2">Icon School & College</td>
                                        <td className="text-center p-4 px-2">Md. Ballayet Mollha</td>
                                        <td className="text-center p-4 px-2">Bussiness</td>
                                        <td className="text-center p-4 px-2">+14424575757</td>
                                        <td className="text-center p-4 px-2">parent@ramom.com</td>
                                        <td className="text-center p-4 px-2">
                                            <div className="grid grid-cols-3 gap-2">
                                                <button className="border bg-blue-600 text-blue-600 rounded-lg">HH</button>

                                                <button className="border bg-green-600 text-green-600 rounded-lg">HH</button>

                                                <button className="border bg-red-600 text-red-600 rounded-lg">HH</button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="text-gray-700 hover:bg-gray-100 text-sm px-5 border-b">
                                        <td className="text-center p-4 px-2">001</td>
                                        <td className="text-center p-4 px-2">Icon School & College</td>
                                        <td className="text-center p-4 px-2">Md. Ballayet Mollha</td>
                                        <td className="text-center p-4 px-2">Bussiness</td>
                                        <td className="text-center p-4 px-2">+14424575757</td>
                                        <td className="text-center p-4 px-2">parent@ramom.com</td>
                                        <td className="text-center p-4 px-2">
                                            <div className="grid grid-cols-3 gap-2">
                                                <button className="border bg-blue-600 text-blue-600 rounded-lg">HH</button>

                                                <button className="border bg-green-600 text-green-600 rounded-lg">HH</button>

                                                <button className="border bg-red-600 text-red-600 rounded-lg">HH</button>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="py-10"></div>
                    </div>

                </div>



            </div>
        </>
    );
}

export default EmployeeList;