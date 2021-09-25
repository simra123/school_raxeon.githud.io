import React , {useState} from 'react';

import PrimarySelect from '../../components/select/PrimarySelect';
import Sidebar from '../../components/sidebar/SideBar';
import { HiPencilAlt ,HiMenu,} from 'react-icons/hi';
import PrimaryTextFields from '../../components/textFields/PrimaryTextFields';
import Textarea from '../../components/textFields/Textarea';
import FileUpload from '../../components/FileUpload';
import Navbar from '../../components/Navbar';
import SidebarMobile from '../../components/SidebarMobile';


const CreateAttachments = () => {
 
const [sidebarActive, setSidebarActive] = useState(false);
const [branch, setBranch] = useState('Select');
const [section, setSection] = useState('Select');
const [type, setType] = useState('Select');
const [Class, setClass] = useState('Select');
const [classes, setClasses] = useState(false);
const [notification, setnotification] = useState(false);

const bgchangeG = () => {
    if (!classes) {
        document.querySelector('#classesOutline').classList.add('border-purple-700');
        document.querySelector('#classes').classList.remove('hidden');
        setClasses(true);
    } else {
        document.querySelector('#classesOutline').classList.remove('border-purple-700');
        document.querySelector('#classes').classList.add('hidden');
        setClasses(false)
    }

}
const bgchangeGN = () => {
    if (!notification) {
        document.querySelector('#notificationOutline').classList.add('border-purple-700');
        document.querySelector('#notification').classList.remove('hidden');
        setnotification(true);
    } else {
        document.querySelector('#notificationOutline').classList.remove('border-purple-700');
        document.querySelector('#notification').classList.add('hidden');
        setnotification(false)
    }

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

           <div className="w-full tab-sm:p-10 px-3 py-10 bg-gray-200 max-h-screen overflow-auto">
   
               <div className="grid grid-cols-2 gap-4 tab-sm:grid-cols-1">
                   <p className="text-4xl text-secondary font-bold w-full">
                       Create Attachments
                   </p>
                  
               </div>
               <br />
               
               
                    {/* input fields  */}
                    
                    <div className="w-full rounded shadow mb-3  bg-white">
                        <div className="grid  grid-cols-1">
                            <div className="inline-flex align-middle text-secondary text-lg px-5 py-2 font-semibold font-sans">
                                <span className="px-2 text-2xl">
                                    <HiPencilAlt />

                                </span>
                                Create Attachments
                            </div>
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

                            {/*title*/}
                            <div className="w-full pb-4">
                                <label htmlFor="">Title <span className="text-red-600">*</span></label>
                                <PrimaryTextFields/>
                            </div>

                            {/*type*/}
                            <div className="w-full pb-4">
                            <label htmlFor="">Type <span className="text-red-600">*</span></label>
                            <PrimarySelect id="type" value={type} options={['select branch']} onClick={(e) => {
                                setType(e.target.innerText);
                            }} />
                            </div>

                           
                           
                           <div className="inline-flex">

                               <div id="classesOutline" className="w-6 h-6 mr-2 border bg-white transition duration-1000 rounded" style={{ padding: '0.32rem' }} onClick={bgchangeG}>
                                   <div id="classes" className="w-3 h-3 bg-purple-700 transition duration-1000 hidden"></div>
                               </div>
                               <span for="classes"> Available For All Classes</span>

                           </div>

                          
                   
  
                
                     <div className="grid grid-cols-1 gap-4">

                     {  !classes ? 
            
                        <>
                        <div className="w-full ">
                            <label htmlFor="">Class  <span className="text-red-600">*</span></label>
                            <PrimarySelect id="Class" value={Class} options={['six', 'seven']} onClick={(e) => {
                                setClass(e.target.innerText);
                            }} />
                        </div>
                        <div className="inline-flex">

                            <div id="notificationOutline" className="w-6 h-6 mr-2 border bg-white transition duration-1000 rounded" style={{ padding: '0.32rem' }} onClick={bgchangeGN}>
                                <div id="notification" className="w-3 h-3 bg-purple-700 transition duration-1000 hidden"></div>
                            </div>
                            <span for="notification">Not According Subject</span>

                        </div>
                      {!notification ? <div className="w-full ">
                            <label htmlFor="">Subject  <span className="text-red-600">*</span></label>
                            <PrimaryTextFields/>
                            
                        </div> : null} </>
                    
                        : null   
                                
                            }
                                <div className="w-full  ">
                                    <label htmlFor="">Publish Date  <span className="text-red-600">*</span></label>
                                    <input type="date" className="appearance-none w-full rounded  text-gray-400 border  focus:ring-1 ring-primary-purple focus:outline-none px-4 p-1 border-gray-300 shadow-sm" />

                                </div>
                                <div className="w-full  ">
                                    <label htmlFor="">Remarks <span className="text-red-600">*</span></label>
                                    <Textarea/>
                                </div>
                            </div> 
              

                
                            <div className="grid grid-cols-1 gap-4">
                                <div>
                                        <label htmlFor="">Attachment File  <span className="text-red-600">*</span></label>
                                        <FileUpload id1="attachmentssvg" id2="attachmentsimg"/>
                                </div>
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
   );
}
export default CreateAttachments;



