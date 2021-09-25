import React , {useState} from 'react';
// importing components
import PrimarySelect from '../../components/select/PrimarySelect';
import PrimaryTextFields from "../../components/textFields/PrimaryTextFields";
import Sidebar from '../../components/sidebar/SideBar';
import FileUpload from '../../components/FileUpload';
import Navbar from '../../components/Navbar';
import SidebarMobile from '../../components/SidebarMobile';


import {

    HiPencilAlt
    ,HiMenu,
} from 'react-icons/hi';


const AdmitcardTemp = ()=> {
    const [sidebarActive, setSidebarActive] = useState(false);


    // Input Field States
    const [branch, setBranch] = useState('Select');
    const [user , setUser] =  useState('Select')
    const [Qr , setQr] =  useState('Select')
    const [size , setSize] =  useState('Select')
  
    //get filename function
    const [filename , setFilename] =  useState('Filename')
    const [imgButton , setImgButton] =  useState('select file')

    const HandleFilename = (e) => {
       const fileName = e.target.files[0].name
        setFilename(fileName)
        setImgButton('Change image')
    }
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

            {/* section one starts */}
            <div className="w-full tab-sm:p-10 px-3 py-10 bg-gray-200 max-h-screen overflow-auto">

                <div className="grid grid-cols-2 gap-4 tab-sm:grid-cols-1">
                    <p className="text-4xl text-secondary font-bold w-full">
                        Add Admit Card
                    </p>
                      
                </div>
                <br />
                <div className="w-full rounded shadow mb-3 bg-white p-1">
                    <div className="inline-flex align-middle text-secondary text-lg px-5 font-semibold font-sans">
                        <span className="px-2 text-2xl">
                            <HiPencilAlt/>
                        </span>
                        Admit Card
                    </div>
                </div>
                <div className="bg-white border p-6 shadow rounded " >
                    <div className="grid grid-cols-1 py-3">
                        
                        <label htmlFor="" className=" ">
                        Branch <span className="text-red-600">*</span>
                        </label>
                        <div className=" w-full grid grid-col-2 " >
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
                    
                   

                    <div className="grid grid-cols-1 py-3">
                    
                        <label htmlFor="" className="">
                        Admit Card Name <span className="text-red-600">*</span>
                        </label>
                        <div className="w-full col-span-2" >
                        <PrimaryTextFields/>
                        </div>
                    
                    </div>

                     
                    

            

                    <div className="grid grid-cols-1 py-3">

                        <label htmlFor="" className="">Page Layout  <span className="text-red-600">*</span></label>
                        <div className="pb-3">

                         <PrimaryTextFields placeholder="Layout width (mm)"/>
                        </div> 
                        <PrimaryTextFields placeholder="Layout height (mm)"/>

                    </div>

                    
                  
                    <div className="grid grid-cols-1 py-3">
                            
                        <label htmlFor="" className="">
                        QR Code Text <span className="text-red-600">*</span>
                        </label>
                        <div className="w-full col-span-2" >
                            <PrimarySelect
                                id="Qr"
                                value={Qr}
                                options={["Name", "Date of Birth" , "Register No" ,"Roll"]}
                                onClick={(e) => {
                                    setQr(e.target.innerText);
                                }}
                            />
                        </div>

                    </div>
                    
                   

                    <div className="grid grid-cols-1 py-3">

                        <label htmlFor="" className="">User Photo Style  <span className="text-red-600">*</span></label>
                        <div className="pb-3">
                            <PrimarySelect
                                id="size"
                                value={size}
                                options={["Rounded", "Square"]}
                                onClick={(e) => {
                                    setSize(e.target.innerText);
                                }}
                            />
                        </div>
                        <div className="pb-3">
                          <PrimaryTextFields placeholder="Photo size (px)"/>
                            
                        </div>

                    </div>
                    
                   

                    <div className="grid grid-cols-1 py-3">
                        <label htmlFor="" className="">Layout Spacing  <span className="text-red-600">*</span></label>
                        <div className="pb-3">

                          <PrimaryTextFields placeholder="Top Space (px)"/>
                        </div>  
                        <PrimaryTextFields placeholder="Bottom Space (px)"/>
                        
                    </div>
                    <div className="grid grid-cols-1 py-3">
                         <div></div>
                        <div className="pb-3">

                         <PrimaryTextFields placeholder="Top Space (px)"/>
                        </div> 
                         <PrimaryTextFields placeholder="Bottom Space (px)"/>
                        
                    </div>
                    
                   
               
                  {/* Section third starts */}
                    <div className="grid grid-cols-1 py-3">
                        <label  className="px-5 ">Signature Image </label>

                        <FileUpload id1="sigsvg" id2="sigimg"/>
 
                    </div>
                        
                        
                    <div className="grid grid-cols-1 py-3">
                        <label  className="px-5 ">Logo Image</label>

                        <FileUpload id1="logoimgsvg" id2="logoimgimg"/>
                           
                    </div>
                        
                    

                    <div className="grid grid-cols-1 py-3">
                        <label  className="px-5 ">Logo Image</label>

                        <FileUpload id1="logoimg2svg" id2="logoimg2img"/>

                        
                    </div>
                                             
               
                 
                  {/* section fourth text editor */}
                    <div className="grid grid-cols-1 py-3">

                       <label htmlFor="" className="">
                         Certificate Content <span className="text-red-600">*</span>
                       </label>
                        <div className="col-span-3 md:mr-5">
                         <textarea className="" id="editor"></textarea>

                        </div>

                    </div> 
                </div>

                
                {/* the button */}
                <div className="w-full bg-white rounded mt-3 shadow p-6">
                      
                     <button className="bg-primary rounded p-2 text-white font-sans w-full">Save</button>
                       
                </div>
                <div className="py-10"></div>

            </div>
        </div>
    </div>
    )
}
export default AdmitcardTemp;