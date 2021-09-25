import React , {useState} from 'react';
import Sidebar from '../../components/sidebar/SideBar';
import PrimaryTextFields from '../../components/textFields/PrimaryTextFields';
import { FaPlusCircle } from 'react-icons/fa';
import FileUpload from '../../components/FileUpload';
import Textarea from '../../components/textFields/Textarea';
import PrimarySelect from '../../components/select/PrimarySelect';
import SidebarMobile from '../../components/SidebarMobile';
import Navbar from '../../components/Navbar';
import {
  HiPencilAlt
  ,HiMenu,
} from 'react-icons/hi';

const AddCertificate = () => {
    const [sidebarActive, setSidebarActive] = useState(false);


    // Input Field States
    const [branch, setBranch] = useState('Select');
    const [user , setUser] =  useState('Select')
    const [layout , setLayout] =  useState('Select')
    const [size , setSize] =  useState('Select')
    const [filename , setFilename] =  useState('Filename')
    const [imgButton , setImgButton] =  useState('select file')

    //get filename function
    const HandleFilename = (e) => {
       const fileName = e.target.files[0].name
        setFilename(fileName)
        setImgButton('Change image')
    }
      
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

                {/* section one starts */}
                <div className="w-full tab-sm:p-10 px-3 py-10 bg-gray-200 max-h-screen overflow-auto">

                    <div className="grid grid-cols-2 gap-4 tab-sm:grid-cols-1">
                        <p className="text-4xl text-secondary font-bold w-full">
                            Add Ceritificate
                        </p>
                       
                    </div>
                    <br />
                    <div className="w-full rounded shadow mb-3 bg-white p-1">
                        <div className="inline-flex align-middle text-secondary text-lg px-5 font-semibold font-sans">
                            <span className="px-2 text-2xl">
                                <HiPencilAlt/>
                            </span>
                            Add Certificate
                        </div>
                    </div>
                    <div className="bg-white border p-4 shadow rounded " >
                        <div className="grid grid-cols-1 gap-4">
                            <div>
                                <label htmlFor="" className=" text-sm font-medium ">
                                 Branch <span className="text-red-600">*</span>
                                </label>
                           
                                <PrimarySelect
                                    id="branch"
                                    value={branch}
                                    options={["Icon School & College", "Oxford International"]}
                                    onClick={(e) => {
                                        setBranch(e.target.innerText);
                                }}/>
                            </div>
                            
                          
    
                      
                       
                            <div className="" >
                            <label htmlFor="" className=" text-sm font-medium">
                              Certificate Name  <span className="text-red-600">*</span>
                            </label>
                            
                            <PrimaryTextFields/>
                            </div>
                        
                     
                            <div className="w-full " >
                            
                            <label htmlFor="" className=" text-sm font-medium">
                                Applicable User <span className="text-red-600">*</span>
                                </label>
                                    <PrimarySelect
                                        id="user"
                                        value={user}
                                        options={["Student", "Employee"]}
                                        onClick={(e) => {
                                            setUser(e.target.innerText);
                                        }}
                                    />
                                </div>
    
                         
                           <div className="w-full " >
                            <label htmlFor="" className=" text-sm font-medium">
                            Page Layout <span className="text-red-600">*</span>
                            </label>
                            
                                <PrimarySelect
                                    id="layout"
                                    value={layout}
                                    options={["A4 (Potrait)", "A4 (Layout)" ]}
                                    onClick={(e) => {
                                        setLayout(e.target.innerText);
                                    }}
                                />
                            </div>
                    
                        </div>
                

                      {/* Section two starts */}
                   
                        <div className="grid grid-cols-1 pt-4 gap-4">
                            <div >
                                <label htmlFor="" className=" text-sm font-medium">User Photo Style  <span className="text-red-600">*</span></label>
                            
                                <PrimarySelect
                                    id="size"
                                    value={size}
                                    options={["Rounded", "Square"]}
                                    onClick={(e) => {
                                        setSize(e.target.innerText);
                                    }}
                                /> 
                            </div>
                            <PrimaryTextFields placeholder="Photo size (px)"/>

                            
                           
                                
                            

                
                        <div >
                            <label htmlFor="" className=" text-sm font-medium">Layout Spacing  <span className="text-red-600">*</span></label>
                            

                              
                        
                             <PrimaryTextFields placeholder="Bottom Space (px)"/>
                        </div>    
                        <PrimaryTextFields placeholder="Top Space (px)"/>
                        <PrimaryTextFields placeholder="Left Space (px)"/>
                        <PrimaryTextFields placeholder="Right Space (px)"/>
                         
                   
                     </div>

                     {/* Section third starts */}
                        <div className="grid grid-cols-1 pt-4 ">
                            <label  className=" px-5 text-sm font-medium">Signature Image </label>

                            <FileUpload id1="certificatesvg" id2="certificateimg"/>
 
                        </div>
                          {/* bottom line */}
                          
                        <div className="grid grid-cols-1 ">
                          <label  className=" px-5 text-sm font-medium">Logo Image</label>

                          <FileUpload id1="logo5svg" id2="logo5img"/>
                          
                        </div>
                         {/* bottom line */}
                        

                        <div className="grid grid-cols-1 ">
                          <label  className=" px-5 text-sm font-medium">Background Image</label>

                          <FileUpload id1="bg3svg" id2="bg3img"/>

                            
                        </div>
                        {/* bottom line */}
                                              
                    </div>
                     
                    {/* section fourth text editor */}
                    <div className="bg-white border p-4 shadow rounded mt-3 " >
                        <div className="grid grid-cols-1 ">

                           <label htmlFor="" className=" text-sm font-medium">
                             Certificate Content <span className="text-red-600">*</span>
                           </label>
                            <div className="col-span-3 md:mr-5">
                             <textarea className="" id="editor"></textarea>

                            </div>

                        </div> 
                    </div>

                    
                    {/* the button */}
                    <div className="w-full bg-white rounded mt-3 shadow p-4">
                      
                         <button className="bg-primary rounded p-2 text-white font-sans w-full">Save</button>
                       
                    </div>

                </div>
            </div>
        </div>
    </>
   )
}
export default AddCertificate;