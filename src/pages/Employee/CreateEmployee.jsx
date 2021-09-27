import React, { useState } from 'react';
import Sidebar from '../../components/sidebar/SideBar';
import PrimarySelect from '../../components/select/PrimarySelect';
import SecondaryTextField from '../../components/textFields/SecondaryTextFields';
import PrimaryTextFields from '../../components/textFields/PrimaryTextFields';
import IconHeading from '../../components/IconHeading';

import { FaSchool, FaUserGraduate, FaBirthdayCake, FaLockOpen, FaUserAlt, FaBlenderPhone, FaVoicemail, FaBus, FaUserCheck, FaUserLock, FaUserCircle, FaGlobe, FaFacebookF, FaLinkedinIn, FaTwitter, FaPiggyBank } from 'react-icons/fa';
import Textarea from '../../components/textFields/Textarea';
import FileUpload from '../../components/FileUpload';
import {
    HiPencilAlt
    , HiMenu,
} from 'react-icons/hi';
import SidebarMobile from '../../components/SidebarMobile';
import Navbar from '../../components/Navbar';


const CreateEmployee = () => {


    const [roll, setRoll] = useState('Select');
    const [department, setDepartment] = useState('Select');
    const [designation, setDesignation] = useState('Select');


    const [branch, setBranch] = useState('Select');
    const [gender, setGender] = useState('Select');
    const [bloodGroup, setBloodGroup] = useState('Select');
    const [Bank, setBank] = useState(false);
    const [sidebarActive, setSidebarActive] = useState(false);


    const branchOptions = ["Icon School & College", "Oxford International"];
    const genderOptions = ["Male", "Female"];
    const bloodGroupOptions = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];

    const bgchangeG = () => {
        if (!Bank) {
            document.querySelector('#BankOutline').classList.add('border-purple-700');
            document.querySelector('#Bank').classList.remove('hidden');
            setBank(true);
        } else {
            document.querySelector('#BankOutline').classList.remove('border-purple-700');
            document.querySelector('#Bank').classList.add('hidden');
            setBank(false)
        }

    }

    return (

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
                <div className="w-full  md:px-10 bg-gray-200 max-h-screen overflow-auto">

                    {/* <div className="grid grid-cols-2 gap-4 tab-sm:grid-cols-1">
                        <p className="text-4xl text-secondary font-bold w-full">
                            Create Employee
                        </p>
                        
                    </div> */}
                    <br />
                    <div className="w-full rounded shadow mb-3  bg-white p-1">
                        <div className="inline-flex align-middle text-secondary text-lg font-semibold font-sans">
                            <span className="px-2 text-2xl">
                                <FaUserCircle />

                            </span>
                            Create Employee
                        </div>
                    </div>
                    <div className="w-full bg-white rounded shadow " >
                        <IconHeading icon={<FaSchool />} heading="Academic Details" />
                        <hr/>
                        <div className="p-4">
                            <div className="grid grid-cols-1 md:grid-cols-3 py-2 gap-4 ">
                                <div className="w-full">
                                    <p className="">

                                        Branch <span className="text-red-600">*</span>
                                    </p>
                                    <PrimarySelect id="branch" value={branch} options={branchOptions} onClick={(e) => {
                                        setBranch(e.target.innerText);
                                    }} />
                                </div>
                                <div className="w-full">

                                    <p className="">
                                        Roll  <span className="text-red-600">*</span>
                                    </p>
                                    <PrimarySelect
                                        id="roll"
                                        value={roll}

                                        options={["Admin", "Teacher", "Accountant", "Librarian"]}

                                        onClick={(e) => {
                                            setRoll(e.target.innerText);
                                        }}
                                    />
                                </div>
                                <div className="w-full">
                                    Joining Date<span className="text-red-600">*</span>

                                    <div className="inline-flex w-full border rounded">

                                        <div className="w-1/6 bg-gray-200 py-2">
                                            <FaBirthdayCake className="mx-auto" />
                                        </div>
                                        <div className="w-3/4">
                                            <input type="date" className="w-full p= text-sm text-gray-400 p-2 focus:ring-1 ring-primary-purple focus:outline-none  p= border-gray-300 shadow-sm" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-4 py-2  gap-4 ">
                                <div>
                                    <label htmlFor=""> Designation  <span className="text-red-600">*</span></label>
                                    <PrimarySelect
                                        id="designation"
                                        value={designation}
                                        options={["select branch"]}
                                        onClick={(e) => {
                                            setDesignation(e.target.innerText);
                                        }}
                                    />
                                </div>
                                <div>
                                    <label htmlFor=""> Department <span className="text-red-600">*</span></label>
                                    <PrimarySelect
                                        id="department"
                                        value={department}
                                        options={["select branch"]}
                                        onClick={(e) => {
                                            setDepartment(e.target.innerText);
                                        }}
                                    />
                                </div>
                                

                                <div>
                                    <label htmlFor="">Qualification  <span className="text-red-600">*</span></label>
                                    <Textarea rows="1" />
                                </div>
                               
                                <div>
                                    <label htmlFor="">Experience Details</label>
                                    <Textarea rows="1" />
                                </div>
                            </div>     
                               
                            


                        </div>

                    

                        <IconHeading icon={<FaUserCheck />} heading="Employee Details" />
                        <hr />

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4  px-4 py-2">
                            <div className="w-full">
                                <p className="">
                                   First Name <span className="text-red-600">*</span>
                                </p>
                                <SecondaryTextField icon={<FaUserGraduate className="mx-auto" />} />
                            </div>
                            <div className="w-full">
                                <p className="">
                                   Last Name <span className="text-red-600">*</span>
                                </p>
                                <SecondaryTextField icon={<FaUserGraduate className="mx-auto" />} />
                            </div>

                            <div className="w-full">
                                <p className="">
                                    Gender <span className="text-red-600">*</span>
                                </p>
                                <PrimarySelect id="gender" value={gender} options={genderOptions} onClick={(e) => {
                                    setGender(e.target.innerText);
                                }} />
                            </div>
                            

                            <div className="w-full">
                                <p className="">
                                    Religion  <span className="text-red-600">*</span>
                                </p>
                                <PrimaryTextFields />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4  px-4 py-2">

                            <div className="w-full">
                                <p className="">
                                    Date of Birth <span className="text-red-600">*</span>
                                </p>
                                <div className="inline-flex w-full border rounded">
                                    <div className="w-1/4 bg-gray-200 py-2">
                                        <FaBirthdayCake className="mx-auto" />
                                    </div>
                                    <div className="w-3/4">
                                        <input type="date" className="w-full p= text-sm text-gray-400 p-2 focus:ring-1 ring-primary-purple focus:outline-none  p= border-gray-300 shadow-sm" />
                                    </div>
                                </div>
                            </div>

                            <div className="w-full">
                                <p className="">
                                    Mobile No  <span className="text-red-600">*</span>
                                </p>
                                <SecondaryTextField icon={<FaBlenderPhone className="mx-auto" />} />
                            </div>
                            <div className="w-full">
                                <p className="">
                                    Email  <span className="text-red-600">*</span>
                                </p>
                                <SecondaryTextField icon={<FaVoicemail className="mx-auto" />} />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4  px-4 py-2">

                            <div className="w-full">
                                <p className="">
                                    Present Adress <span className="text-red-600">*</span>
                                </p>
                                <Textarea rows="1" name="adress" id="adress1" />
                            </div>
                            <div className="w-full">
                                <p className="">
                                    Permanent Address <span className="text-red-600">*</span>
                                </p>
                                <Textarea rows="1" name="adress" id="adress2" />
                            </div>
                        </div>

                    


                        {/* File upload */}

                        <div className="px-4" >
                            <label htmlFor="" className="" >Profile Picture  <span className="text-red-600">*</span></label>
                            <FileUpload  id1="employeesvg" id2="employeeimg"/>

                        </div> 
                    

                                            

            <IconHeading icon={<FaGlobe />} heading="Social Links" />
            <hr/>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
                <div className="w-full">
                    <p>
                        Facebook <span className="text-red-600">*</span>
                    </p>
                    <SecondaryTextField icon={<FaFacebookF className="mx-auto" />} />
                </div>
                <div className="w-full">
                    <p>
                        Twitter <span className="text-red-600">*</span>
                    </p>
                    <SecondaryTextField icon={<FaLinkedinIn className="mx-auto" />} />
                </div>
                <div className="w-full">
                    <p>
                        Linkedin <span className="text-red-600">*</span>
                    </p>
                    <SecondaryTextField icon={<FaTwitter />} />
                </div>
            </div>

            <IconHeading icon={<FaUserLock />} heading="Login Details" />
            <hr/>


            <div className=" grid grid-cols-1 md:grid-cols-3 gap-4 p-4">

                <div>
                    <p className="">
                        Username <span className="text-red-600">*</span>
                    </p>
                    <SecondaryTextField icon={<FaUserAlt className="mx-auto" />} />
                </div>
                <div>
                    <p className="">

                        Password <span className="text-red-600">*</span>
                    </p>
                    <SecondaryTextField icon={<FaLockOpen className="mx-auto" />} />


                </div>
                <div>
                    <p className="">

                        Retype Password<span className="text-red-600">*</span>
                    </p>
                    <SecondaryTextField icon={<FaLockOpen className="mx-auto" />} />

                </div>


            </div>


    
            {/* <IconHeading icon={<FaPiggyBank />} heading="Bank Details" />

            <div className=" grid grid-cols-1  p-4 ">

                <div className="inline-flex">

                    <div id="BankOutline" className="w-6 h-6 mr-2 border bg-white transition duration-1000 rounded" style={{ padding: '0.32rem' }} onClick={bgchangeG}>
                        <div id="Bank" className="w-3 h-3 bg-purple-700 transition duration-1000 hidden"></div>

                    </div>
                    <span for="guardian">Skipped bank details</span>

                </div>
            </div>
            
                {
                    !Bank ?
                        <>
                            <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 p-4    ">
                                <div className="w-full">
                                    <p className="">
                                        Bank Name  <span className="text-red-600">*</span>
                                    </p>
                                    <PrimaryTextFields />
                                </div>
                                <div className="w-full">
                                    <p className="">
                                        Holder Name   <span className="text-red-600">*</span>
                                    </p>
                                    <PrimaryTextFields />

                                </div>
                                <div className="w-full">
                                    <p className="">
                                        Bank Branch   <span className="text-red-600">*</span>
                                    </p>
                                    <PrimaryTextFields />

                                </div>

                                <div className="w-full">
                                    <p className="">
                                        Bank Address  <span className="text-red-600">*</span>
                                    </p>
                                    <PrimaryTextFields />
                                </div>
                                <div className="w-full">
                                    <p className="">
                                        IFSC Code <span className="text-red-600">*</span>
                                    </p>
                                    <PrimaryTextFields />

                                </div>
                                <div className="w-full">
                                    <p className="">
                                        Account No  <span className="text-red-600">*</span>
                                    </p>
                                    <PrimaryTextFields />

                                </div>
                            </div>
                        </>
                        :
                        null
                }*/}

            </div> 
            
            <div className="w-full bg-white rounded mt-3 shadow p-4">
                <button className="bg-primary rounded p-2 text-white font-sans w-full">Save</button>
            </div>
                <div className="py-20"></div>
            </div>

            </div>

        </div>
           
        </>
    );
}

export default CreateEmployee;