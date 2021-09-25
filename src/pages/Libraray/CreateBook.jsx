import React , {useState} from 'react';
import PrimarySelect from '../../components/select/PrimarySelect';
import Sidebar from '../../components/sidebar/SideBar';
import { HiPencilAlt ,HiMenu} from 'react-icons/hi';
import PrimaryTextFields from '../../components/textFields/PrimaryTextFields';
import FileUpload from '../../components/FileUpload';
import SidebarMobile from '../../components/SidebarMobile';
import Navbar from '../../components/Navbar';


const CreateBook  = () => {
const [sidebarActive, setSidebarActive] = useState(false);
const [branch, setBranch] = useState('Select');
const [bookCate, setBookCate] = useState('Select');

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
                        Create Book
                    </p>
                      
                </div>
                <br />
                
                <div className="grid  grid-cols-1">
                 {/* input fields  */}
                    <div className="section1">
                        <div className="w-full rounded shadow mb-3  bg-white">
                            <div className="inline-flex align-middle text-secondary text-lg px-5 py-2 font-semibold font-sans">
                                <span className="px-2 text-2xl">
                                    <HiPencilAlt />

                                </span>
                                Create Book
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
                                <label htmlFor="">Book Title  <span className="text-red-600">*</span></label>
                                <PrimaryTextFields/>
                            </div>

                            {/*Book ISBN No*/}
                            <div className="w-full pb-4">
                            <label htmlFor="">Book ISBN No  <span className="text-red-600">*</span></label>
                            <PrimaryTextFields/>
                            </div>

                            {/*Author*/}
                            <div className="w-full pb-4">
                            <label htmlFor="">Author  <span className="text-red-600">*</span></label>
                             <PrimaryTextFields/>
                            </div>

                            {/*Edition*/}
                            <div className="w-full pb-4">
                                <label htmlFor="">Edition  <span className="text-red-600">*</span></label>
                                <PrimaryTextFields/>
                            </div>

                            

                             {/*Purchase Date*/}
                             <div className="w-full pb-4">
                                <label htmlFor="">Purchase Date  <span className="text-red-600">*</span></label>
                                <input type="date" className="appearance-none w-full rounded  text-gray-400 border  focus:ring-1 ring-primary-purple focus:outline-none px-4 p-1 border-gray-300 shadow-sm" />

                            </div>
                            
                           

                       
                            <label htmlFor="">Book Category  <span className="text-red-600">*</span></label>
                            <PrimarySelect id="bookCate" value={bookCate} options={["Science", "Networking" , "Drawing", "Mythology"]} onClick={(e) => {
                                    setBookCate(e.target.innerText);
                                }} />
                      
                        <div className="w-full pt-4  ">
                            <label htmlFor="">Publisher   <span className="text-red-600">*</span></label>
                             <PrimaryTextFields/>

                        </div>
                        <div className="w-full pt-4 ">
                            <label htmlFor="appt">Description <span className="text-red-600">*</span></label>
                            <PrimaryTextFields/>

                        </div>

                        <div className="w-full pt-4 ">
                            <label htmlFor="appt">Duration <span className="text-red-600">*</span></label>
                            <PrimaryTextFields/>

                        </div>
                        <div className="w-full pt-4 ">
                            <label htmlFor="appt">Price  <span className="text-red-600">*</span></label>
                            <PrimaryTextFields/>
                        </div>
                        <div className="pt-4 ">
                        
                            <label htmlFor="appt" >Cover Image  <span className="text-red-600">*</span></label>
                            <FileUpload id1="coversvg" id2="coverimg"/>


                        </div>
                        <div className="w-full ">
                            <label htmlFor="appt">Total Stock  <span className="text-red-600">*</span></label>
                            <input type="number"  className="w-full border rounded p-1 bg-white  tracking-wider text-gray-400 focus:ring-1 ring-primary-purple focus:outline-none px-4 border-gray-300 shadow-sm"/>

                        </div>
                        
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
 )}   
 export default CreateBook 