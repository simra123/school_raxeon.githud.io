import React , {useState} from 'react';
import Sidebar from '../../components/sidebar/SideBar';
import {FaFileImport} from 'react-icons/fa'
import {
    HiMenu
} from 'react-icons/hi';
import PrimaryTextFields from '../../components/textFields/PrimaryTextFields';
import PrimarySelect from '../../components/select/PrimarySelect';
import FileUpload from '../../components/FileUpload';
import SidebarMobile from '../../components/SidebarMobile';
import Navbar from '../../components/Navbar';


const branchOptions = ["Icon School & College", "Oxford International"];



const MultipleImport = () => {
const [sidebarActive, setSidebarActive] = useState(false);
const [branch, setBranch] = useState('Select');
const [Class, setClass] = useState('Select');
const [section, setSection] = useState('Select');


return (
    <>
    <div className="fixed h-full">
        <SidebarMobile/>
        <Navbar/>
        

        <div className="tab-sm:inline-flex w-full h-full bg-gray-200 ">

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
                        Multiple Import
                    </p>
                   
                </div>
                <br />

                {/* page heading */}
                <div className="w-full rounded shadow mb-3  bg-white p-1">
                    <div className="inline-flex align-middle text-secondary text-lg px-5 font-semibold font-sans">
                        <span className="px-2 text-2xl">
                            <FaFileImport />

                        </span>
                        Create Employee
                    </div>
                </div>

                {/* The Download button  */}
                <div className=" bg-white rounded mt-3 shadow p-4 inline-flex w-full ">
                   <button className="bg-primary rounded p-2 text-white font-sans w-full inline-flex place-items-center place-content-center"> <FaFileImport className="mr-3"/> Download Sample Import File</button>
                 </div>
               
               {/* instruction list */}
               <div className=" bg-white rounded mt-3 shadow p-4  w-full ">
                   <h2 className="text-md font-medium"> Instructions :</h2>
                  
                   <div className="text-sm leading-relaxed font-medium text-gray-500">
                        <p>1. Download the first sample file.</p>
                        <p>2. Open the downloaded 'csv' file and carefully fill the details of the student.</p>
                        <p>3. The date you are trying to enter the "Birthday" and "AdmissionDate" column make sure the date format is Y-m-d (2021-09-16).</p>
                        <p>4. Do not import the duplicate "Roll Number" And "Register No".</p>
                        <p>5. For student "Gender" use Male, Female value.</p>
                        <p>7. The Category name comes from another table, so for the "Category", enter Category ID (can be found on the Category page).</p>
                        <p>8. If a parent is existing / if you want to use the same parent information for multiple students only enter the "GuardianUsername" and leave other columns blank.</p>
                   </div>
               

                  {/* the textFields */}
              
                   <div className="grid grid-cols-1 gap-4 p-4 ">

                        {/* Branch */}
                       <div className="w-full">
                           <label htmlFor="">Branch <span className="text-red-600">*</span></label>
                           <PrimarySelect id="branch" value={branch} options={branchOptions} onClick={(e) => {
                             setBranch(e.target.innerText);
                            }} />
                       </div>

                        {/* Class*/}
                        <div className="w-full">
                           <label htmlFor="">Class <span className="text-red-600">*</span></label>
                           <PrimarySelect id="Class" value={Class} options={['six', 'seven']} onClick={(e) => {
                              setClass(e.target.innerText);
                            }} />
                        </div>

                         {/*Section*/}
                        <div className="w-full">
                           <label htmlFor="">Section  <span className="text-red-600">*</span></label>
                           <PrimarySelect id="section" value={section} options={['A', 'B']} onClick={(e) => {
                              setSection(e.target.innerText);
                            }} />
                        </div>

                   </div>
               
                {/* Fileupload */}
               
                   <div className="" >
                        <label htmlFor="" className="" >Profile Picture  <span className="text-red-600">*</span></label>
                        <FileUpload />
                    </div> 

                </div>

                {/* The save button */}
                <div className="w-full bg-white rounded mt-3 shadow p-4">
                   <button className="bg-primary rounded p-2 text-white font-sans w-full">Save</button>
                </div>
                <div className="py-10"></div>


            </div>
        </div>
    </div>
    </>
)
}
export default MultipleImport;





