import React, { useState } from 'react';
import Sidebar from '../../components/sidebar/SideBar';
import PrimaryTextFields from '../../components/textFields/PrimaryTextFields';
import { FaPlusCircle } from 'react-icons/fa';
import FileUpload from '../../components/FileUpload';
import Textarea from '../../components/textFields/Textarea';
import SidebarMobile from '../../components/SidebarMobile';
import Navbar from '../../components/Navbar';

import {
  HiPencilAlt
  ,HiMenu,
} from 'react-icons/hi';

const CreateBranch = () => {
 const [sidebarActive, setSidebarActive] = useState(false);
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
                    Create Branch
                </p>
               
              </div>
              <br />
        
              <div className="w-full rounded shadow mb-3  bg-white p-1">
                <div className="inline-flex align-middle text-secondary text-lg px-5 font-semibold font-sans">
                  <span className="px-2 text-2xl">
                    <HiPencilAlt/>
                  </span>
                  Create Branch
                </div>
              </div>
              <div className="bg-white border   shadow rounded " >
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
                     
                    <div className="" >
                        <label htmlFor="" className=" ">
                        Branch Name  <span className="text-red-600">*</span>
                        </label>
                       <PrimaryTextFields/>
                   
                    </div>
                    <div className="" >
                        <label htmlFor="" className=" ">
                        Institute Name <span className="text-red-600">*</span>
                        </label>
                    
                      <PrimaryTextFields/>
                    </div>

                   <div className="" >
                        <label htmlFor="" className=" ">
                        Email <span className="text-red-600">*</span>
                        </label>
                    
                      <PrimaryTextFields/>
                    </div>
                    
              
                
                    <div className="" >
                        <label htmlFor="" className=" ">
                        Mobile No  <span className="text-red-600">*</span>
                        </label>
                    
                      <PrimaryTextFields/>
                    </div>
                    
               
                    <div className="" >
                        <label htmlFor="" className=" ">
                        Currency <span className="text-red-600">*</span>
                        </label>
                        
                      <PrimaryTextFields/>
                    </div>
                    
              
                    <div className="" > 
                        <label htmlFor="" className=" ">
                        Currency Symbol <span className="text-red-600">*</span>
                        </label>
                   
                      <PrimaryTextFields/>
                    </div>
                    
               
                    <div className="" > 
                        <label htmlFor="" className="">
                        City <span className="text-red-600">*</span>
                        </label>
                   
                      <PrimaryTextFields/>
                    </div>
                    
                   <div className="" >
                        <label htmlFor="" className="">
                        State <span className="text-red-600">*</span>
                        </label>
                   
                      <PrimaryTextFields/>
                    </div>
                    
               
                    
                    
                </div>
                <div className=" grid grid-cols-1 px-4 pb-4" > 
                        <label htmlFor="" className="">
                        Address <span className="text-red-600">*</span>
                        </label>
                   
                      <Textarea/>
                  </div>
           

             {/* image section starts */}
            

              <div className=" grid grid-cols-1 gap-3 md:grid-cols-2" >
                <div className="">
                <h2 className="px-5  ">System Logo</h2>
                <FileUpload id1='systemsvg' id2='systemimg'  />
                </div>
                <div className="">
                <h2 className="px-5 ">Text Logo</h2>
                <FileUpload id1='tlogosvg' id2='tlogoimg'/>
                </div>
                
              </div>
               <div className=" grid grid-cols-1 md:grid-cols-2 gap-3  mt-3">
                <div className="">
                <h2 className="px-5  ">Printing Logo</h2>
                <FileUpload id1='printlogosvg' id2='printlogoimg'/>
                </div>
                <div className="">
                <h2 className="px-5 ">Report Card</h2>
                <FileUpload id1='reportsvg' id2='reportimg'/>
                </div>
                
              </div>
                         </div>

            {/* the button */}
            <div className="w-full bg-white rounded mt-3 shadow p-6">
                      
              <button className="bg-primary rounded p-2 text-white font-sans w-full">Save</button>
              
            </div>
            <div className="py-20"></div>

            </div>
          </div>
        </div>
        </>
    )
}
export default CreateBranch