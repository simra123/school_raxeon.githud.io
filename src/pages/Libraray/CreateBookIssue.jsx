import React , {useState} from 'react';
import PrimarySelect from '../../components/select/PrimarySelect';
import Sidebar from '../../components/sidebar/SideBar';
import { HiPencilAlt ,HiMenu} from 'react-icons/hi';
import PrimaryTextFields from '../../components/textFields/PrimaryTextFields';
import FileUpload from '../../components/FileUpload';
import SidebarMobile from '../../components/SidebarMobile';
import Navbar from '../../components/Navbar';


const CreateBookIssue  = () => {
const [sidebarActive, setSidebarActive] = useState(false);
const [branch2, setBranch2] = useState('Select');
const [bookCate2, setBookCate2] = useState('Select');
const [bookTitle, setBookTitle] = useState('Select');

const [role, setRole] = useState('Select');

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
                        Create Book Issue
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
                                 Book Issue
                            </div>
                        </div>

                        <div className="w-full rounded shadow  mt-3 bg-white p-4">

                            {/* branch */}
                            <div className="w-full pb-4">
                                <p className="py-1">
                                    Branch <span className="text-red-600">*</span>
                                </p>
                                <PrimarySelect id="branch2" value={branch2} options={["Icon School & College", "Oxford International"]} onClick={(e) => {
                                        setBranch2(e.target.innerText);
                                    }} />
                            </div>

                            <div className="w-full pb-4 ">
                                <label htmlFor="">Book Category  <span className="text-red-600">*</span></label>
                                <PrimarySelect id="bookCate2" value={bookCate2} options={["Science", "Networking" , "Drawing", "Mythology"]} onClick={(e) => {
                                        setBookCate2(e.target.innerText);
                                    }} />
                            </div>

                            {/*Book Title*/}
                            <div className="w-full pb-4">
                            <label htmlFor="">Book Title  <span className="text-red-600">*</span></label>
                            <PrimarySelect id="bookTitle" value={bookTitle} options={["Select Category"]} onClick={(e) => {
                                        setBookTitle(e.target.innerText);
                                    }} />
                            </div>

                            {/*Role*/}
                            <div className="w-full pb-4">
                            <label htmlFor="">Role  <span className="text-red-600">*</span></label>
                            <PrimarySelect id="role" value={role} options={["Admin" , "Teacher" , "Accountant" ,"Librarian", "Student"]} onClick={(e) => {
                                setRole(e.target.innerText);
                                 }} />
                            </div>

                            {/*Username*/}
                            <div className="w-full pb-4">
                                <label htmlFor="">Username  <span className="text-red-600">*</span></label>
                                <PrimaryTextFields/>
                            </div>

                            

                             {/*Date Of Expiry*/}
                             <div className="w-full pb-4">
                                <label htmlFor="">Date Of Expiry  <span className="text-red-600">*</span></label>
                                <input type="date" className="appearance-none w-full rounded  text-gray-400 border  focus:ring-1 ring-primary-purple focus:outline-none px-4 p-1 border-gray-300 shadow-sm" />

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
 export default CreateBookIssue;