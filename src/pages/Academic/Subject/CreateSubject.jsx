import React , {useState} from 'react';
// importing components
import PrimarySelect from '../../../components/select/PrimarySelect';
import PrimaryTextFields from "../../../components/textFields/PrimaryTextFields";
import Sidebar from '../../../components/sidebar/SideBar';
import SidebarMobile from '../../../components/SidebarMobile';
import Navbar from '../../../components/Navbar';

import {

    HiPencilAlt
    ,HiMenu,
} from 'react-icons/hi';

const CreateSubject = () => {

const [sidebarActive, setSidebarActive] = useState(false);
const [branch, setBranch] = useState('Select');
const [subType, setSubType] = useState('Select');


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
                           Create Subject
                        </p>
                        
                    </div>
                    <br />
                    <div className="w-full rounded shadow mb-3 bg-white p-1">
                        <div className="inline-flex align-middle text-secondary text-lg px-5 font-semibold font-sans">
                            <span className="px-2 text-2xl">
                                <HiPencilAlt/>
                            </span>
                            Create Subject
                        </div>
                    </div>

                    <div className="bg-white border   shadow rounded " >
                        <div className="grid grid-cols-1 gap-4 p-4">
                            <div>
                                <label htmlFor="" className=" ">
                                Branch  <span className="text-red-600">*</span> </label>
                                <PrimarySelect
                                    id="branch"
                                    value={branch}
                                    options={["Icon School & College", "Oxford International"]}
                                    onClick={(e) => {
                                        setBranch(e.target.innerText);
                                    }}
                                />
                            </div>

                            <div>
                                <label htmlFor="" className=" ">
                                Subject Name  <span className="text-red-600">*</span> </label>
                                <PrimaryTextFields/>
                            </div>

                            <div>
                                <label htmlFor="" className=" ">
                                Subject Code <span className="text-red-600">*</span> </label>
                                <PrimaryTextFields/>
                            </div>

                            <div>
                                <label htmlFor="" className=" ">
                                Subject Aurthor  <span className="text-red-600">*</span> </label>
                                <PrimaryTextFields/>
                            </div>

                            <div>
                                <label htmlFor="" className=" ">
                                Subject Type  <span className="text-red-600">*</span> </label>
                                <PrimarySelect
                                    id="subType"
                                    value={subType}
                                    options={["Theory", "Practical" , "Mandatory" , "Optional"]}
                                    onClick={(e) => {
                                        setSubType(e.target.innerText);
                                    }}
                                />
                            </div>

                        </div>


                           
                    </div>
                    <div className="w-full bg-white rounded mt-3 shadow p-6">
                                
                      <button className="bg-primary rounded p-2 text-white font-sans w-full">Save</button>
                                    
                    </div>
                    <div className="py-10"></div>


               </div>    

            </div>     
        </div>        
        </>
        
    )
}
export default CreateSubject