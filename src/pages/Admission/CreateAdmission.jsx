import React, { useState } from 'react';
import Sidebar from '../../components/sidebar/SideBar';
import PrimarySelect from '../../components/select/PrimarySelect';
import SecondaryTextField from '../../components/textFields/SecondaryTextFields';
import PrimaryTextFields from '../../components/textFields/PrimaryTextFields';
import IconHeading from '../../components/IconHeading';

import { FaGraduationCap, FaSchool, FaUserGraduate, FaBirthdayCake, FaUserTie, FaBus, FaHotel, FaDumbbell, FaPlusCircle } from 'react-icons/fa';
import GuardianTextFields from '../../components/textFields/GuardianTextFields';
import Textarea from '../../components/textFields/Textarea';
import FileUpload from '../../components/FileUpload';
import Navbar from '../../components/Navbar';
import SidebarMobile from '../../components/SidebarMobile';
import {
    HiPencilAlt
    , HiMenu,
} from 'react-icons/hi';


function CreateAdmission() {

    const [acYear, setAcYear] = useState('Select');

    const [branch, setBranch] = useState('Select');
    const [Class, setClass] = useState('Select');
    const [department, setDepartment] = useState('Select');
    const [gender, setGender] = useState('Select');
    const [bloodGroup, setBloodGroup] = useState('Select');
    const [guardian, setguardian] = useState(false);
    const [schools, setSchools] = useState('Select');
    const [routes, setRoutes] = useState('Select');
    const [vehicle, setVehicle] = useState('Select');
    const [roomNo, setRoomNo] = useState('Select');
    const [institudeName, setInstitudeName] = useState('Select');
    const [sidebarActive, setSidebarActive] = useState(false);



    const acYearOptions = ["2020-2021", "2021-2022", "2022-2023", "2023-2024", "2024-2025", "2025-2026", "2026-2027"];

    const SchoolsOptions = ["Icon School & College", "Oxford International"]
    const RoutesOptions = ["Obama Road"]
    const vehicleOptions = ["1996 lexus"]
    const roomNoOptions = ["fortune"]
    const institudeNameOptions = ["Edgar gallary"]

    const branchOptions = ["Icon School & College", "Oxford International"];
    const genderOptions = ["Male", "Female"];
    const bloodGroupOptions = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];

    const bgchangeG = () => {
        if (!guardian) {
            document.querySelector('#guardianOutline').classList.add('border-purple-700');
            document.querySelector('#guardian').classList.remove('hidden');
            setguardian(true);
        } else {
            document.querySelector('#guardianOutline').classList.remove('border-purple-700');
            document.querySelector('#guardian').classList.add('hidden');
            setguardian(false)
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
                    <div className="w-full tab-sm:p-10 px-3 py-10 bg-gray-200 max-h-screen overflow-auto">

                        <div className="grid grid-cols-2 gap-4 tab-sm:grid-cols-1">
                            <p className="text-4xl text-secondary font-bold w-full">
                                Create Admission
                            </p>
                            
                        </div>
                        <br />
                        <div className="w-full rounded shadow mb-3  bg-white p-1">
                            <div className="inline-flex align-middle text-secondary text-lg px-5 font-semibold font-sans">
                                <span className="px-2 text-2xl">
                                    <FaGraduationCap />

                                </span>
                                Create Admission
                            </div>
                        </div>
                        <div className="w-auto bg-white rounded  pt-0  shadow overflow-auto" >



                            <IconHeading icon={<FaSchool />} heading="Academic Details" />

                            <div className="grid grid-cols-1 md:grid-cols-4  gap-4 p-4">
                                <div className="w-full">
                                    <p >
                                        Academic Year <span className="text-red-600">*</span>
                                    </p>
                                    <PrimarySelect id="acyear" value={acYear} options={acYearOptions} onClick={(e) => {
                                        setAcYear(e.target.innerText);
                                    }} />
                                </div>
                                <div className="w-full">
                                    <p >
                                        Register No <span className="text-red-600">*</span>
                                    </p>
                                    <PrimaryTextFields />
                                </div>
                                <div className="w-full">
                                    <p >
                                        Roll
                                    </p>
                                    <PrimaryTextFields />
                                </div>
                                <div className="w-full">
                                    <p >
                                        Admission Date <span className="text-red-600">*</span>
                                    </p>
                                    <input type="date" className="appearance-none w-full rounded  text-gray-400 border  focus:ring-1 ring-primary-purple focus:outline-none px-4 p-1 border-gray-300 shadow-sm" />
                                </div>
                            </div> 
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 py-2">  
                                <div className="w-full">
                                    <p >
                                        Branch <span className="text-red-600">*</span>
                                    </p>
                                    <PrimarySelect id="branch" value={branch} options={branchOptions} onClick={(e) => {
                                        setBranch(e.target.innerText);
                                    }} />
                                </div>
                                <div className="w-full">
                                    <p >
                                        Class <span className="text-red-600">*</span>
                                    </p>
                                    <PrimarySelect id="Class" value={Class} options={['six', 'seven']} onClick={(e) => {
                                        setClass(e.target.innerText);
                                    }} />
                                </div>
                                <div className="w-full">
                                    <p >
                                        Department <span className="text-red-600">*</span>
                                    </p>
                                    <PrimarySelect id="department" value={department} options={['medical', 'commerce']} onClick={(e) => {
                                        setDepartment(e.target.innerText);
                                    }} />
                                </div>
                            
                            </div>
                            <IconHeading icon={<FaUserGraduate />} heading="Student Details" />

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
                                <div className="w-full">
                                    <p >
                                        First Name <span className="text-red-600">*</span>
                                    </p>
                                    <SecondaryTextField icon={<FaUserGraduate className="mx-auto" />} />
                                </div>
                                <div className="w-full">
                                    <p >
                                        Last Name <span className="text-red-600">*</span>
                                    </p>
                                    <SecondaryTextField icon={<FaUserGraduate className="mx-auto" />} />
                                </div>
                                <div className="w-full">
                                    <p >
                                        Gender <span className="text-red-600">*</span>
                                    </p>
                                    <PrimarySelect id="gender" value={gender} options={genderOptions} onClick={(e) => {
                                        setGender(e.target.innerText);
                                    }} />
                                </div>
                            </div> 
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 py-2">

                                <div className="w-full">
                                    <p >
                                        Date of Birth <span className="text-red-600">*</span>
                                    </p>
                                    <div className="inline-flex w-full border rounded">
                                        <div className="w-1/4 bg-gray-200 py-2">
                                            <FaBirthdayCake className="mx-auto" />
                                        </div>
                                        <div className="w-3/4">
                                            <input type="date" className="w-full text-xs text-gray-400 p-2 focus:ring-1 ring-primary-purple focus:outline-none px-4 p= border-gray-300 shadow-sm" />
                                        </div>
                                    </div>
                                </div>

                                <div className="w-full">
                                    <p >
                                        Religion
                                    </p>
                                    <PrimaryTextFields />
                                </div>
                                <div className="w-full">
                                    <p>
                                        Caste
                                    </p>
                                    <PrimaryTextFields />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 py-2">

                                <div className="w-full">
                                    <p>
                                        Present Adress
                                    </p>
                                    <Textarea name="adress" id="adress1" rows="1" />
                                </div>
                                <div className="w-full">
                                    <p>
                                        Permanent Address
                                    </p>
                                    <Textarea name="adress" id="adress2" rows="1" />

                                </div>
                            
                            </div>
                            <div className="grid grid-cols-1  px-4">
                                <p>
                                    Profile Picture
                                </p>
                                {/* File upload */}
                                <FileUpload id1="admissionsvg" id2="admissionimg"/>
                            </div>

                            <IconHeading icon={<FaUserTie />} heading="Guardian Details" />


                            <div className=" grid grid-cols-1 p-4  ">

                                <div className="inline-flex">

                                    <div id="guardianOutline" className="w-6 h-6 mr-2 border bg-white transition duration-1000 rounded" style={{ padding: '0.32rem' }} onClick={bgchangeG}>
                                        <div id="guardian" className="w-3 h-3 bg-purple-700 transition duration-1000 hidden"></div>
                                    </div>
                                    <span for="guardian"> Guardian Already Exist</span>

                                </div>


                            </div>

                            {/* Guardian section starts */}
                            {
                                !guardian ?
                                    < GuardianTextFields />
                                    :
                                    <div className=" grid grid-cols-1 p-4 ">
                                        <div className="w-full">
                                            <p >
                                                Guardian <span className="text-red-600">*</span>
                                            </p>
                                            <PrimarySelect id="schools" value={schools} options={SchoolsOptions} onClick={(e) => {
                                                setSchools(e.target.innerText);
                                            }} />
                                        </div>
                                    </div>
                            }

                            <IconHeading icon={<FaBus />} heading="Transport Details" />

                            <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 p-4 ">
                                <div className="w-full">
                                    <p >
                                        Transport Route
                                    </p>
                                    <PrimarySelect id="routes" value={routes} options={RoutesOptions} onClick={(e) => {
                                        setRoutes(e.target.innerText);
                                    }} />
                                </div>
                                <div className="w-full">
                                    <p >
                                        Vehicle No
                                    </p>
                                    <PrimarySelect id="vehicle" value={vehicle} options={vehicleOptions} onClick={(e) => {
                                        setVehicle(e.target.innerText);
                                    }} />
                                </div>
                            </div>


                            <IconHeading icon={<FaHotel />} heading="Hostel Details" />

                            <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 p-4 ">
                                <div className="w-full">
                                    <p >
                                        Institude Name
                                    </p>
                                    <PrimarySelect id="institudeName" value={institudeName} options={institudeNameOptions} onClick={(e) => {
                                        setInstitudeName(e.target.innerText);
                                    }} />
                                </div>
                                <div className="w-full">
                                    <p >
                                        Room Name
                                    </p>
                                    <PrimarySelect id="roomNo" value={roomNo} options={roomNoOptions} onClick={(e) => {
                                        setRoomNo(e.target.innerText);
                                    }} />
                                </div>
                            </div>

                            <IconHeading icon={<FaDumbbell />} heading="Previous Institute Details" />

                            <div className="grid md:grid-cols-2 grid-cols-1 gap-4 p-4">
                                <div className="w-full">
                                    <p >
                                        Institute Name
                                    </p>
                                    <PrimaryTextFields />
                                </div>
                                <div className="w-full">
                                    <p >
                                        Qualification
                                    </p>
                                    <PrimaryTextFields />
                                </div>

                            </div>
                            <div className="grid grid-cols-1 px-4 pb-4">
                                <div className="w-full">
                                    <p >
                                        Remarks
                                    </p>
                                    <Textarea name="adress" id="adress3" />
                                </div>
                            </div>



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

export default CreateAdmission;