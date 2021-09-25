import React , {useState} from 'react';
import PrimarySelect from '../../../components/select/PrimarySelect';
import Sidebar from '../../../components/sidebar/SideBar';

import {
    FaListUl
} from 'react-icons/fa';
import {
    HiPencilAlt
    ,HiMenu,
} from 'react-icons/hi';
import PrimaryTextFields from '../../../components/textFields/PrimaryTextFields';
import Navbar from '../../../components/Navbar';
import SidebarMobile from '../../../components/SidebarMobile';

const ControlClass = () => {
const [sidebarActive, setSidebarActive] = useState(false);
const [branch, setBranch] = useState('Select');
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
                        Control Classes
                    </p>
                   
                </div>
                <br />

                <div className="grid  grid-cols-1">
                 {/* half width input fields  */}
                <div className="section1">
                    <div className="w-full rounded shadow mb-3  bg-white">
                        <div className="inline-flex align-middle text-secondary text-lg px-5 py-2 font-semibold font-sans">
                            <span className="px-2 text-2xl">
                                <HiPencilAlt />

                            </span>
                            Create Class
                        </div>
                    </div>

                    <div className="w-full rounded shadow  mt-3 bg-white p-4">

                        {/* branch */}
                        <div className="w-full pb-4">
                            <p className="py-1">
                                Branch <span className="text-red-600">*</span>
                            </p>
                            <PrimarySelect id="branch" value={branch} options={["Icon School & College", "Oxford International"]} onClick={(e) => {
                                setBranch(e.target.innerText);
                            }} />
                        </div>

                        {/* name*/}
                        <div className="w-full pb-4">
                            <label htmlFor="">Name <span className="text-red-600">*</span></label>
                            <PrimaryTextFields/>
                        </div>

                        {/*class numeric*/}
                        <div className="w-full pb-4">
                           <label htmlFor="">Class Numeric   <span className="text-red-600">*</span></label>
                            <PrimaryTextFields/>
                        </div>

                        {/*Section*/} 
                        <div className="w-full pb-4">
                           <label htmlFor="">Section  <span className="text-red-600">*</span></label>
                           <PrimarySelect id="section" value={section} options={['first select the branch']} onClick={(e) => {
                              setSection(e.target.innerText);
                            }} />
                        </div>

                    </div>
                    {/* The save button */}
                    <div className="w-full bg-white rounded mt-3 shadow p-4">
                     <button className="bg-primary rounded p-2 text-white font-sans w-full">Save</button>
                    </div>
                    <div className="py-5"></div>

                  
                </div>
                </div>
                <div className="w-full rounded shadow bg-white p-1 mb-3">
                    <div className="inline-flex align-middle text-secondary text-lg px-5 font-semibold font-sans">
                        <span className="px-2 py-1 text-xl">
                            <FaListUl />
                        </span>
                        Class List
                    </div>
                </div>
                <div className="w-full bg-white rounded shadow p-5 pr-5 overflow-auto">
                    <table className="table-auto w-full">
                        <thead className="p-2 font-thin font-sans">
                            <tr>
                                <th className="bg-gray-100 p-3 border">#</th>
                                <th className="bg-gray-100 border">Branch Name</th>
                                <th className="bg-gray-100 border">Class Name</th>
                                <th className="bg-gray-100 border">Class Numeric</th>
                                <th className="bg-gray-100 border">Section</th>
                                <th className="bg-gray-100 p-2 border">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="text-gray-700 hover:bg-gray-100 text-sm px-5 border">
                                <td className="text-center p-4 px-2 border">1</td>
                                <td className="text-center p-4 px-2 border">Oxford International</td>
                                <td className="text-center p-4 px-2 border">Eight</td>
                                <td className="text-center p-4 px-2 border">8</td>
                                <td className="text-center p-4 px-2 border">B</td>
                                <td className="text-center p-4 px-2 border">
                                    <div className="grid grid-cols-3 ">
                                        <button className="border bg-blue-600 text-blue-600 rounded-lg ">HH</button>

                                        <button className="border bg-green-600 text-green-600 rounded-lg">HH</button>

                                        <button className="border bg-red-600 text-red-600 rounded-lg">HH</button>
                                    </div>
                                </td>
                            </tr>
                            <tr className="text-gray-700 hover:bg-gray-100 text-sm px-5 border">
                            <td className="text-center p-4 px-2 border">2</td>
                                <td className="text-center p-4 px-2 border">Oxford International</td>
                                <td className="text-center p-4 px-2 border">Eight</td>
                                <td className="text-center p-4 px-2 border">8</td>
                                <td className="text-center p-4 px-2 border">B</td>
                                <td className="text-center p-4 px-2 border">
                                    <div className="grid grid-cols-3">
                                        <button className="border bg-blue-600 text-blue-600 rounded-lg">HH</button>

                                        <button className="border bg-green-600 text-green-600 rounded-lg">HH</button>

                                        <button className="border bg-red-600 text-red-600 rounded-lg">HH</button>
                                    </div>
                                </td>
                            </tr>
                            <tr className="text-gray-700 hover:bg-gray-100 text-sm px-5 border">
                                <td className="text-center p-4 px-2 border">3</td>
                                <td className="text-center p-4 px-2 border">Oxford International</td>
                                <td className="text-center p-4 px-2 border">Eight</td>
                                <td className="text-center p-4 px-2 border">8</td>
                                <td className="text-center p-4 px-2 border">B</td>
                                <td className="text-center p-4 px-2 border">
                                    <div className="grid grid-cols-3">
                                        <button className="border bg-blue-600 text-blue-600 rounded-lg">HH</button>

                                        <button className="border bg-green-600 text-green-600 rounded-lg">HH</button>

                                        <button className="border bg-red-600 text-red-600 rounded-lg">HH</button>
                                    </div>
                                </td>
                            </tr>
                            <tr className="text-gray-700 hover:bg-gray-100 text-sm px-5 border">
                            <td className="text-center p-4 px-2 border">4</td>
                                <td className="text-center p-4 px-2 border">Oxford International</td>
                                <td className="text-center p-4 px-2 border">Eight</td>
                                <td className="text-center p-4 px-2 border">8</td>
                                <td className="text-center p-4 px-2 border">B</td>
                                <td className="text-center p-4 px-2 border">
                                    <div className="grid grid-cols-3">
                                        <button className="border bg-blue-600 text-blue-600 rounded-lg">HH</button>

                                        <button className="border bg-green-600 text-green-600 rounded-lg">HH</button>

                                        <button className="border bg-red-600 text-red-600 rounded-lg">HH</button>
                                    </div>
                                </td>
                            </tr>
                            <tr className="text-gray-700 hover:bg-gray-100 text-sm px-5 border">
                            <td className="text-center p-4 px-2 border">5</td>
                                <td className="text-center p-4 px-2 border">Oxford International</td>
                                <td className="text-center p-4 px-2 border">Eight</td>
                                <td className="text-center p-4 px-2 border">8</td>
                                <td className="text-center p-4 px-2 border">B</td>
                                <td className="text-center p-4 px-2 border">
                                    <div className="grid grid-cols-3">
                                        <button className="border bg-blue-600 text-blue-600 rounded-lg">HH</button>

                                        <button className="border bg-green-600 text-green-600 rounded-lg">HH</button>

                                        <button className="border bg-red-600 text-red-600 rounded-lg">HH</button>
                                    </div>
                                </td>
                            </tr>
                            <tr className="text-gray-700 hover:bg-gray-100 text-sm px-5 border">
                                <td className="text-center p-4 px-2 border">6</td>
                                <td className="text-center p-4 px-2 border">Oxford International</td>
                                <td className="text-center p-4 px-2 border">Eight</td>
                                <td className="text-center p-4 px-2 border">8</td>
                                <td className="text-center p-4 px-2 border">B</td>
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
)

}
export default ControlClass;
