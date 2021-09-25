import React , {useState} from 'react';
import PrimarySelect from '../../../components/select/PrimarySelect';
import Sidebar from '../../../components/sidebar/SideBar';
import {
    HiPencilAlt
    ,HiMenu,
} from 'react-icons/hi';

import {
    FaListUl
} from 'react-icons/fa';
import PrimaryTextFields from '../../../components/textFields/PrimaryTextFields';
import SidebarMobile from '../../../components/SidebarMobile';
import Navbar from '../../../components/Navbar';

const AssignList = () => {
const [sidebarActive, setSidebarActive] = useState(false);
const [branch, setBranch] = useState('Select');
const [Class, setClass] = useState('Select');
const [section, setSection] = useState('Select');




 return(
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
                        Assign List
                    </p>
                   
                </div>
                <br />

                
              
                <div className="w-full rounded shadow bg-white p-1 mb-3">
                            <div className="inline-flex align-middle text-secondary text-lg px-5 font-semibold font-sans">
                                <span className="px-2 py-1 text-xl">
                                    <FaListUl />
                                </span>
                                Assign List
                            </div>
                        </div>
                        <div className="w-full bg-white rounded shadow p-5 pr-5 overflow-auto">
                            <table className="table-auto w-full">
                                <thead className="p-2 font-thin font-sans">
                                    <tr>
                                        <th className="bg-gray-100 p-3 border">Sl</th>
                                        <th className="bg-gray-100 border">Branch Name</th>
                                        <th className="bg-gray-100 border">Class</th>
                                        <th className="bg-gray-100 border">Section</th>
                                        <th className="bg-gray-100 border">Subject</th>
                                        <th className="bg-gray-100 p-2 border">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="text-gray-700 hover:bg-gray-100 text-sm px-5 border">
                                        <td className="text-center p-4 px-2 border">1</td>
                                        <td className="text-center p-4 px-2 border">Oxford International</td>
                                        <td className="text-center p-4 px-2 border">six</td>
                                        <td className="text-center p-4 px-2 border">A</td>
                                        <td className="text-center p-4 px-2 border">- English <br /> - Physics</td>
                                        <td className="text-center p-4 px-2 border">
                                            <div className="grid grid-cols-3 gap-1 ">
                                                <button className="border bg-blue-600 text-blue-600 rounded-lg ">HH</button>

                                                <button className="border bg-green-600 text-green-600 rounded-lg">HH</button>

                                                <button className="border bg-red-600 text-red-600 rounded-lg">HH</button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="text-gray-700 hover:bg-gray-100 text-sm px-5 border">
                                    <td className="text-center p-4 px-2 border">2</td>
                                        <td className="text-center p-4 px-2 border">Oxford International</td>
                                        <td className="text-center p-4 px-2 border">six</td>
                                        <td className="text-center p-4 px-2 border">A</td>
                                        <td className="text-center p-4 px-2 border">- English <br /> - Physics</td>
                                        <td className="text-center p-4 px-2 border">
                                            <div className="grid grid-cols-3 gap-1">
                                                <button className="border bg-blue-600 text-blue-600 rounded-lg">HH</button>

                                                <button className="border bg-green-600 text-green-600 rounded-lg">HH</button>

                                                <button className="border bg-red-600 text-red-600 rounded-lg">HH</button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="text-gray-700 hover:bg-gray-100 text-sm px-5 border">
                                        <td className="text-center p-4 px-2 border">3</td>
                                        <td className="text-center p-4 px-2 border">Oxford International</td>
                                        <td className="text-center p-4 px-2 border">six</td>
                                        <td className="text-center p-4 px-2 border">A</td>
                                        <td className="text-center p-4 px-2 border">- English <br /> - Physics</td>
                                        <td className="text-center p-4 px-2 border">
                                            <div className="grid grid-cols-3 gap-1">
                                                <button className="border bg-blue-600 text-blue-600 rounded-lg">HH</button>

                                                <button className="border bg-green-600 text-green-600 rounded-lg">HH</button>

                                                <button className="border bg-red-600 text-red-600 rounded-lg">HH</button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="text-gray-700 hover:bg-gray-100 text-sm px-5 border">
                                    <td className="text-center p-4 px-2 border">4</td>
                                    <td className="text-center p-4 px-2 border">Oxford International</td>
                                        <td className="text-center p-4 px-2 border">six</td>
                                        <td className="text-center p-4 px-2 border">A</td>
                                        <td className="text-center p-4 px-2 border">- English <br /> - Physics</td>
                                        <td className="text-center p-4 px-2 border">
                                            <div className="grid grid-cols-3 gap-1">
                                                <button className="border bg-blue-600 text-blue-600 rounded-lg">HH</button>

                                                <button className="border bg-green-600 text-green-600 rounded-lg">HH</button>

                                                <button className="border bg-red-600 text-red-600 rounded-lg">HH</button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="text-gray-700 hover:bg-gray-100 text-sm px-5 border">
                                    <td className="text-center p-4 px-2 border">5</td>
                                        <td className="text-center p-4 px-2 border">Oxford International</td>
                                        <td className="text-center p-4 px-2 border">six</td>
                                        <td className="text-center p-4 px-2 border">A</td>
                                        <td className="text-center p-4 px-2 border">- English <br /> - Physics</td>
                                        <td className="text-center p-4 px-2 border">
                                            <div className="grid grid-cols-3 gap-1">
                                                <button className="border bg-blue-600 text-blue-600 rounded-lg">HH</button>

                                                <button className="border bg-green-600 text-green-600 rounded-lg">HH</button>

                                                <button className="border bg-red-600 text-red-600 rounded-lg">HH</button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="text-gray-700 hover:bg-gray-100 text-sm px-5 border">
                                        <td className="text-center p-4 px-2 border">6</td>
                                        <td className="text-center p-4 px-2 border">Oxford International</td>
                                        <td className="text-center p-4 px-2 border">six</td>
                                        <td className="text-center p-4 px-2 border">A</td>
                                        <td className="text-center p-4 px-2 border">- English <br /> - Physics</td>
                                        <td className="text-center p-4 px-2 border">
                                            <div className="grid grid-cols-3 gap-1">
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
 )

}
export default AssignList;
