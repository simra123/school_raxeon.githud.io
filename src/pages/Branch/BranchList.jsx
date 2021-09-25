import React, { useState } from "react";


// importing icons
import {
    FaListUl
} from 'react-icons/fa';
import {
    HiMenu,
} from 'react-icons/hi';


// importing components
import Sidebar from '../../components/sidebar/SideBar';
import Navbar from "../../components/Navbar";
import SidebarMobile from "../../components/SidebarMobile";

const ParentsList = () => {

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
                                Branch List
                            </p>
                           
                        </div>
                        <br />
                        <div className="w-full rounded shadow bg-white p-1">
                            <div className="inline-flex align-middle text-secondary text-lg px-5 font-semibold font-sans">
                                <span className="px-2 py-1 text-xl">
                                    <FaListUl />
                                </span>
                                Branch List
                            </div>
                        </div>
                        <div className="py-2"></div>
                        <div className="w-full bg-white rounded shadow p-5 pr-5 overflow-auto">
                            <table className="table-auto w-full">
                                <thead className="p-2 font-thin font-sans">
                                    <tr>
                                        <th className="bg-gray-100 p-3 border">Sl</th>
                                        <th className="bg-gray-100 border">Branch Name</th>
                                        <th className="bg-gray-100 border">Institude Name</th>
                                        <th className="bg-gray-100 border">Email</th>
                                        <th className="bg-gray-100 border">Mobile No</th>
                                        <th className="bg-gray-100 border p-2">Currency</th>
                                        <th className="bg-gray-100 border p-2">Symbol</th>
                                        <th className="bg-gray-100 border p-2">City</th>
                                        <th className="bg-gray-100 border">State</th>
                                        <th className="bg-gray-100 border">Address</th>
                                        <th className="bg-gray-100 p-2 border">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="text-gray-700 hover:bg-gray-100 text-sm px-5 border">
                                        <td className="text-center p-4 px-2 border">001</td>
                                        <td className="text-center p-4 px-2 border">Icon School & College</td>
                                        <td className="text-center p-4 px-2 border">Icon School & College</td>
                                        <td className="text-center p-4 px-2 border">icon@gmail.com</td>
                                        <td className="text-center p-4 px-2 border">+14424575757</td>
                                        <td className="text-center p-4 px-2 border">USD</td>
                                        <td className="text-center p-4 px-2 border">$</td>
                                        <td className="text-center p-4 px-2 border">New York</td>
                                        <td className="text-center p-4 px-2 border">New York</td>
                                        <td className="text-center p-4 px-2 border">Chyakunjo, Moylapotha, New York</td>
                                        <td className="text-center p-4 px-2 border">
                                            <div className="grid grid-cols-3 ">
                                                <button className="border bg-blue-600 text-blue-600 rounded-lg ">HH</button>

                                                <button className="border bg-green-600 text-green-600 rounded-lg">HH</button>

                                                <button className="border bg-red-600 text-red-600 rounded-lg">HH</button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="text-gray-700 hover:bg-gray-100 text-sm px-5 border">
                                    <td className="text-center p-4 px-2 border">002</td>
                                        <td className="text-center p-4 px-2 border">Icon School & College</td>
                                        <td className="text-center p-4 px-2 border">Icon School & College</td>
                                        <td className="text-center p-4 px-2 border">icon@gmail.com</td>
                                        <td className="text-center p-4 px-2 border">+14424575757</td>
                                        <td className="text-center p-4 px-2 border">USD</td>
                                        <td className="text-center p-4 px-2 border">$</td>
                                        <td className="text-center p-4 px-2 border">New York</td>
                                        <td className="text-center p-4 px-2 border">New York</td>
                                        <td className="text-center p-4 px-2 border">Chyakunjo, Moylapotha, New York</td>
                                        <td className="text-center p-4 px-2 border">
                                            <div className="grid grid-cols-3">
                                                <button className="border bg-blue-600 text-blue-600 rounded-lg">HH</button>

                                                <button className="border bg-green-600 text-green-600 rounded-lg">HH</button>

                                                <button className="border bg-red-600 text-red-600 rounded-lg">HH</button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="text-gray-700 hover:bg-gray-100 text-sm px-5 border">
                                    <td className="text-center p-4 px-2 border">003</td>
                                        <td className="text-center p-4 px-2 border">Icon School & College</td>
                                        <td className="text-center p-4 px-2 border">Icon School & College</td>
                                        <td className="text-center p-4 px-2 border">icon@gmail.com</td>
                                        <td className="text-center p-4 px-2 border">+14424575757</td>
                                        <td className="text-center p-4 px-2 border">USD</td>
                                        <td className="text-center p-4 px-2 border">$</td>
                                        <td className="text-center p-4 px-2 border">New York</td>
                                        <td className="text-center p-4 px-2 border">New York</td>
                                        <td className="text-center p-4 px-2 border">Chyakunjo, Moylapotha, New York</td>
                                        <td className="text-center p-4 px-2 border">
                                            <div className="grid grid-cols-3">
                                                <button className="border bg-blue-600 text-blue-600 rounded-lg">HH</button>

                                                <button className="border bg-green-600 text-green-600 rounded-lg">HH</button>

                                                <button className="border bg-red-600 text-red-600 rounded-lg">HH</button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="text-gray-700 hover:bg-gray-100 text-sm px-5 border">
                                    <td className="text-center p-4 px-2 border">004</td>
                                        <td className="text-center p-4 px-2 border">Icon School & College</td>
                                        <td className="text-center p-4 px-2 border">Icon School & College</td>
                                        <td className="text-center p-4 px-2 border">icon@gmail.com</td>
                                        <td className="text-center p-4 px-2 border">+14424575757</td>
                                        <td className="text-center p-4 px-2 border">USD</td>
                                        <td className="text-center p-4 px-2 border">$</td>
                                        <td className="text-center p-4 px-2 border">New York</td>
                                        <td className="text-center p-4 px-2 border">New York</td>
                                        <td className="text-center p-4 px-2 border">Chyakunjo, Moylapotha, New York</td>
                                        <td className="text-center p-4 px-2 border">
                                            <div className="grid grid-cols-3">
                                                <button className="border bg-blue-600 text-blue-600 rounded-lg">HH</button>

                                                <button className="border bg-green-600 text-green-600 rounded-lg">HH</button>

                                                <button className="border bg-red-600 text-red-600 rounded-lg">HH</button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="text-gray-700 hover:bg-gray-100 text-sm px-5 border">
                                    <td className="text-center p-4 px-2 border">005</td>
                                        <td className="text-center p-4 px-2 border">Icon School & College</td>
                                        <td className="text-center p-4 px-2 border">Icon School & College</td>
                                        <td className="text-center p-4 px-2 border">icon@gmail.com</td>
                                        <td className="text-center p-4 px-2 border">+14424575757</td>
                                        <td className="text-center p-4 px-2 border">USD</td>
                                        <td className="text-center p-4 px-2 border">$</td>
                                        <td className="text-center p-4 px-2 border">New York</td>
                                        <td className="text-center p-4 px-2 border">New York</td>
                                        <td className="text-center p-4 px-2 border">Chyakunjo, Moylapotha, New York</td>
                                        <td className="text-center p-4 px-2 border">
                                            <div className="grid grid-cols-3">
                                                <button className="border bg-blue-600 text-blue-600 rounded-lg">HH</button>

                                                <button className="border bg-green-600 text-green-600 rounded-lg">HH</button>

                                                <button className="border bg-red-600 text-red-600 rounded-lg">HH</button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="text-gray-700 hover:bg-gray-100 text-sm px-5 border">
                                    <td className="text-center p-4 px-2 border">006</td>
                                        <td className="text-center p-4 px-2 border">Icon School & College</td>
                                        <td className="text-center p-4 px-2 border">Icon School & College</td>
                                        <td className="text-center p-4 px-2 border">icon@gmail.com</td>
                                        <td className="text-center p-4 px-2 border">+14424575757</td>
                                        <td className="text-center p-4 px-2 border">USD</td>
                                        <td className="text-center p-4 px-2 border">$</td>
                                        <td className="text-center p-4 px-2 border">New York</td>
                                        <td className="text-center p-4 px-2 border">New York</td>
                                        <td className="text-center p-4 px-2 border">Chyakunjo, Moylapotha, New York</td>
                                        <td className="text-center p-4 px-2 border">
                                            <div className="grid grid-cols-3">
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

export default ParentsList;