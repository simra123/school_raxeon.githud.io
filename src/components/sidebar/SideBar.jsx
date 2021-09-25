import React, { useState } from 'react';

// importing icons
import {
    FaUserGraduate,
    FaUser,
    FaIdCard,
    FaFileAlt,
    FaGraduationCap,
    FaCloudDownloadAlt,
    FaBookReader,
    FaPencilAlt,
    FaNewspaper,
    FaCertificate,
    FaCalculator,
    FaBriefcase,
    FaCalendarAlt,
    FaBusAlt,
    FaHotel,
    FaBell,
    FaGlobe,
    FaTools,
    FaMapSigns,
} from 'react-icons/fa';
import {
    RiParentFill,
    RiLiveFill,
    RiMessage3Fill,
    RiSettings5Fill
} from 'react-icons/ri';
import {
    GiHumanPyramid,
    GiDirectionSigns
} from 'react-icons/gi';
import {
    HiDocumentReport,
    HiViewGrid,
} from 'react-icons/hi';

import SidebarSubtitle from "./subtitles";
import SidebarTitle from './titles';

function Sidebar(props) {

    // Managing Sidebar Title States
    const [dashboardActive, setDashboardActive] = useState(false);
    const [branchActive, setBranchActive] = useState(false);
    const [admissionActive, setAdmissionActive] = useState(false);
    const [studentDetailsActive, setStudentDetailsActive] = useState(false);
    const [parentsActive, setParentsActive] = useState(false);
    const [employeeActive, setEmployeeActive] = useState(false);
    const [cardManagementActive, setCardManagementActive] = useState(false);
    const [attendanceActive, setAttendanceActive] = useState(false);
    const [academicActive, setAcademicActive] = useState(false);
    const [liveClassroomsActive, setLiveClassroomsActive] = useState(false);
    const [attachmentBookActive, setAttachmentBookActive] = useState(false);
    const [libraryActive, setLibraryActive] = useState(false);
    const [homeworkMasteryActive, setHomeworkMasteryActive] = useState(false);
    const [examsMasterActive, setExamsMasterActive] = useState(false);
    const [certificatesActive, setCertificatesActive] = useState(false);
    const [humanResourceActive, setHumanResourceActive] = useState(false);
    const [studentAccountingActive, setStudentAccountingActive] = useState(false);
    const [officeAccountingActive, setOfficeAccountingActive] = useState(false);
    const [reportsActive, setReportsActive] = useState(false);
    const [eventsActive, setEventsActive] = useState(false);
    const [transportActive, setTransportActive] = useState(false);
    const [hostelActive, setHostelActive] = useState(false);
    const [bulkSMSActive, setBulkSMSActive] = useState(false);
    const [messageActive, setMessageActive] = useState(false);
    const [frontentCMSActive, setFrontendCMSActive] = useState(false);
    const [customizeActive, setCustomizeActive] = useState(false);
    const [settingsActive, setSettingsActive] = useState(false);

    return (
        <div id="sidebar" className="tab-sm:block -mt-16 lg:mt-0 tab-sm:relative h-full bg-white overflow-scroll transition duration-700 ease-in-out tab-sm:w-96 absolute z-50 w-full hidden">

            {/* Sidebar Logo */}
            {/* <div className="p-5">
                <div className="inline-flex tab-sm:block w-full">
                    <svg className="w-2/3 tab-sm:w-full h-auto" id="Component_1_1" data-name="Component 1 – 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 269 34.048">
                        <defs>
                            <linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
                                <stop offset="0" stop-color="#6c63fc" />
                                <stop offset="1" stop-color="#36327e" />
                            </linearGradient>
                        </defs>
                        <text id="Cambrian_School_College" data-name="Cambrian School &amp; College" transform="translate(67 27.024)" fill="#3f3d56" font-size="24" font-family="DINCondensed-Bold, DIN Condensed" font-weight="700"><tspan x="0" y="0">Cambrian School &amp; College</tspan></text>
                        <path id="Icon_awesome-graduation-cap" data-name="Icon awesome-graduation-cap" d="M55.18,20.409l-24.732-7.6a7.083,7.083,0,0,0-4.149,0l-24.733,7.6a2.087,2.087,0,0,0,0,4.042l4.312,1.325a6.987,6.987,0,0,0-1.585,4.158,2.736,2.736,0,0,0-.226,4.7L1.8,44.821a1.418,1.418,0,0,0,1.384,1.726H8.162a1.419,1.419,0,0,0,1.385-1.726L7.283,34.635a2.729,2.729,0,0,0-.16-4.657,4.183,4.183,0,0,1,1.834-3.256L26.3,32.05a7.091,7.091,0,0,0,4.149,0l24.733-7.6A2.088,2.088,0,0,0,55.18,20.409Zm-23.9,14.354a9.926,9.926,0,0,1-5.816,0l-12.858-3.95L11.35,40.872c0,3.134,7.622,5.675,17.024,5.675S45.4,44.007,45.4,40.872L44.14,30.812Z" transform="translate(-0.001 -12.5)" fill="url(#linear-gradient)" />
                    </svg>
                    
                </div>
            </div> */}

            {/* Sidebar Links */}
            <div className="p-5">

                <p className="text-sm pl-4 text-gray-400">
                    Main Menu
                </p>
                
                <br />

                {/* Dashboard */}
                <SidebarTitle
                    id="dashboard"
                    title="Dashboard"
                    icon={<HiViewGrid />}
                    active={dashboardActive}
                    onClick={() => {
                        const dropdown = document.querySelector('#dashboard');

                        if (dashboardActive) {
                            dropdown.classList.add('hidden');
                            setDashboardActive(false);
                        } else {
                            dropdown.classList.remove('hidden');
                            setDashboardActive(true);
                        }

                    }}
                />
                <div id="dashboard" className="w-full rounded-lg p-2 px-8 transition duration-1000 ease-in-out hidden">
                    <p className="py-1 text-gray-400 text-sm font-bold">All Branches</p>
                    <SidebarSubtitle title="Icon School & College" />
                    <SidebarSubtitle title="Oxford International" />
                </div>
                <div className="py-2"></div>

                 {/* Branch*/}
                 <SidebarTitle
                    id="branch"
                    title="Branch"
                    icon={<FaMapSigns />}
                    active={branchActive}
                    onClick={() => {
                        const dropdown = document.querySelector('#branch');

                        if (branchActive) {
                            dropdown.classList.add('hidden');
                            setBranchActive(false);
                        } else {
                            dropdown.classList.remove('hidden');
                            setBranchActive(true);
                        }

                    }}
                />
                <div id="branch" className="w-full rounded-lg p-2 px-8 transition duration-1000 ease-in-out hidden">
                    
                    <SidebarSubtitle title="Create Branch" link="/branch/create" />
                    <SidebarSubtitle title="Branch List"  link="/branch/list" />
                </div>
                <div className="py-2"></div>


                {/* Admission */}
                <SidebarTitle
                    id="admission"
                    title="Admission"
                    icon={<FaFileAlt />}
                    active={admissionActive}
                    onClick={() => {
                        const dropdown = document.querySelector('#admission');

                        if (admissionActive) {
                            dropdown.classList.add('hidden');
                            setAdmissionActive(false);
                        } else {
                            dropdown.classList.remove('hidden');
                            setAdmissionActive(true);
                        }
                    }}
                />
                <div id="admission" className="w-full rounded-lg p-2 px-8 transition duration-200 hidden">
                    <SidebarSubtitle title="Create Admission" link="/admission/create" />
                    <SidebarSubtitle title="Online Admission" />
                    <SidebarSubtitle title="Multiple Import" />
                    <SidebarSubtitle title="Department" />
                </div>
                <div className="py-2"></div>


                {/* Student Details */}
                <SidebarTitle
                    id="studentDetails"
                    title="Student Details"
                    icon={<FaUserGraduate />}
                    active={studentDetailsActive}
                    onClick={() => {
                        const dropdown = document.querySelector('#studentDetails');

                        if (studentDetailsActive) {
                            dropdown.classList.add('hidden');
                            setStudentDetailsActive(false);
                        } else {
                            dropdown.classList.remove('hidden');
                            setStudentDetailsActive(true);
                        }
                    }}
                />
                <div id="studentDetails" className="w-full rounded-lg p-2 px-8 transition duration-200 hidden">
                    <SidebarSubtitle title="Student List" />
                    <SidebarSubtitle title="Activate/Deactivate List" />
                </div>
                <div className="py-2"></div>


                {/* Parents */}
                <SidebarTitle
                    id="parents"
                    title="Parents"
                    icon={<RiParentFill />}
                    active={parentsActive}
                    onClick={() => {
                        const dropdown = document.querySelector('#parents');

                        if (parentsActive) {
                            dropdown.classList.add('hidden');
                            setParentsActive(false);
                        } else {
                            dropdown.classList.remove('hidden');
                            setParentsActive(true);
                        }
                    }}
                />
                <div id="parents" className="w-full rounded-lg p-2 px-8 transition duration-200 hidden">
                    <SidebarSubtitle title="Parents List" link="/parent/list" />
                    <SidebarSubtitle title="Add Parent" link="/parent/add" />
                    <SidebarSubtitle title="Activate/Deactivate List" />
                </div>
                <div className="py-2"></div>


                {/* Employee */}
                <SidebarTitle
                    id="employee"
                    title="Employee"
                    icon={<FaUser />}
                    active={employeeActive}
                    onClick={() => {
                        const dropdown = document.querySelector('#employee');

                        if (employeeActive) {
                            dropdown.classList.add('hidden');
                            setEmployeeActive(false);
                        } else {
                            dropdown.classList.remove('hidden');
                            setEmployeeActive(true);
                        }
                    }}
                />
                <div id="employee" className="w-full rounded-lg p-2 px-8 transition duration-200 hidden">
                    <SidebarSubtitle title="Employee List" link="/employee/list" />
                    <SidebarSubtitle title="Create Department" />
                    <SidebarSubtitle title="Create Designation" link="/employee/createDesignation" />
                    <SidebarSubtitle title="Create Employee" link="/employee/create" />
                    <SidebarSubtitle title="Activate/Deactivate List" />
                </div>
                <div className="py-2"></div>


                {/* Card Management */}
                <SidebarTitle
                    id="cardManagement"
                    title="Card Management"
                    icon={<FaIdCard />}
                    active={cardManagementActive}
                    onClick={() => {
                        const dropdown = document.querySelector('#cardManagement');

                        if (cardManagementActive) {
                            dropdown.classList.add('hidden');
                            setCardManagementActive(false);
                        } else {
                            dropdown.classList.remove('hidden');
                            setCardManagementActive(true);
                        }
                    }}
                />
                <div id="cardManagement" className="w-full rounded-lg p-2 px-8 transition duration-200 hidden">
                    <SidebarSubtitle title="Student Id Card" />
                    <SidebarSubtitle title="Employee Id Card" />
                    <SidebarSubtitle title="Generate Admit Card" />
                    <p className="py-1 text-gray-400 text-sm font-bold">Id Card Template</p>
                    <SidebarSubtitle title="Create Id Card Template" link="/cardManagement/idCard/create" />
                    <SidebarSubtitle title="Id Card Template List" />
                    <p className="py-1 text-gray-400 text-sm font-bold">Admit Card Template</p>
                    <SidebarSubtitle title="Create Admit Card Template" link="/cardManagement/admitCard/create" />
                    <SidebarSubtitle title="Admit Card Template List" />

                </div>
                <div className="py-2"></div>


                {/* Attendance */}
                <SidebarTitle
                    id="attendance"
                    title="Attendance"
                    icon={<FaFileAlt />}
                    active={attendanceActive}
                    onClick={() => {
                        const dropdown = document.querySelector('#attendance');

                        if (attendanceActive) {
                            dropdown.classList.add('hidden');
                            setAttendanceActive(false);
                        } else {
                            dropdown.classList.remove('hidden');
                            setAttendanceActive(true);
                        }
                    }}
                />
                <div id="attendance" className="w-full rounded-lg p-2 px-8 transition duration-200 hidden">
                    <SidebarSubtitle title="Student" />
                    <SidebarSubtitle title="Employee" />
                    <SidebarSubtitle title="Exam" />
                </div>
                <div className="py-2"></div>


                {/* Academic */}
                <SidebarTitle
                    id="academic"
                    title="Academic"
                    icon={<FaGraduationCap />}
                    active={academicActive}
                    onClick={() => {
                        const dropdown = document.querySelector('#academic');

                        if (academicActive) {
                            dropdown.classList.add('hidden');
                            setAcademicActive(false);
                        } else {
                            dropdown.classList.remove('hidden');
                            setAcademicActive(true);
                        }
                    }}
                />
                <div id="academic" className="w-full rounded-lg p-2 px-8 transition duration-200 hidden">
                    <SidebarSubtitle title="Teacher Schedule" />
                    <SidebarSubtitle title="Promotion" />

                    <p className="py-1 text-gray-400 text-sm font-bold">Class and Section</p>

                    <SidebarSubtitle title="Control Classes" />
                    <SidebarSubtitle title="Control Section" />
                    <SidebarSubtitle title="Assign Class Teacher" link="/academic/classSection/assignTeacher"/>

                    <p className="py-1 text-gray-400 text-sm font-bold">Subject</p>

                    <SidebarSubtitle title="Create Subject" />
                    <SidebarSubtitle title="Subject List" />

                    <p className="py-1 text-gray-400 text-sm font-bold">Class Assign</p>

                    <SidebarSubtitle title="Assign" />
                    <SidebarSubtitle title="Assign List" />

                    <p className="py-1 text-gray-400 text-sm font-bold">Add Schedule</p>

                    <SidebarSubtitle title="Add Schedule" />
                    <SidebarSubtitle title="Schedule List" />
                </div>
                <div className="py-2"></div>


                {/* Live Classrooms */}
                <SidebarTitle
                    id="liveClassrooms"
                    title="Live Classrooms"
                    icon={<RiLiveFill />}
                    active={liveClassroomsActive}
                    onClick={() => {
                        const dropdown = document.querySelector('#liveClassrooms');

                        if (liveClassroomsActive) {
                            dropdown.classList.add('hidden');
                            setLiveClassroomsActive(false);
                        } else {
                            dropdown.classList.remove('hidden');
                            setLiveClassroomsActive(true);
                        }
                    }}
                />
                <div id="liveClassrooms" className="w-full rounded-lg p-2 px-8 transition duration-200 hidden">
                    <SidebarSubtitle title="Live Class List" />
                    <SidebarSubtitle title="Create Live Class" />
                    <SidebarSubtitle title="Live Class Reports" />
                </div>
                <div className="py-2"></div>


                {/* Attachement Book */}
                <SidebarTitle
                    id="attachmentBook"
                    title="Attachment Book"
                    icon={<FaCloudDownloadAlt />}
                    active={attachmentBookActive}
                    onClick={() => {
                        const dropdown = document.querySelector('#attachmentBook');

                        if (attachmentBookActive) {
                            dropdown.classList.add('hidden');
                            setAttachmentBookActive(false);
                        } else {
                            dropdown.classList.remove('hidden');
                            setAttachmentBookActive(true);
                        }
                    }}
                />
                <div id="attachmentBook" className="w-full rounded-lg p-2 px-8 transition duration-200 hidden">
                    <SidebarSubtitle title="Attachment Type" />
                    <p className="py-1 text-gray-400 text-sm font-bold">Upload Content</p>
                    <SidebarSubtitle title="Create Attachment" />
                    <SidebarSubtitle title="Attachment List" />
                </div>
                <div className="py-2"></div>


                {/* Library */}
                <SidebarTitle
                    id="library"
                    title="Library"
                    icon={<FaBookReader />}
                    active={libraryActive}
                    onClick={() => {
                        const dropdown = document.querySelector('#library');

                        if (libraryActive) {
                            dropdown.classList.add('hidden');
                            setLibraryActive(false);
                        } else {
                            dropdown.classList.remove('hidden');
                            setLibraryActive(true);
                        }
                    }}
                />
                <div id="library" className="w-full rounded-lg p-2 px-8 transition duration-200 hidden">
                    <SidebarSubtitle title="Create Book" />
                    <SidebarSubtitle title="Books List" />
                    <SidebarSubtitle title="Books Category" />
                    <hr />
                    <SidebarSubtitle title="My Issued Books Request" />
                    <SidebarSubtitle title="Books Issued" />
                    <hr />
                    <SidebarSubtitle title="Issue Book" />
                    <SidebarSubtitle title="Issued Book List" />
                </div>
                <div className="py-2"></div>


                {/* Homework Mastery */}
                <SidebarTitle
                    id="homeworkMastery"
                    title="Homework Mastery"
                    icon={<FaPencilAlt />}
                    active={homeworkMasteryActive}
                    onClick={() => {
                        const dropdown = document.querySelector('#homeworkMastery');

                        if (homeworkMasteryActive) {
                            dropdown.classList.add('hidden');
                            setHomeworkMasteryActive(false);
                        } else {
                            dropdown.classList.remove('hidden');
                            setHomeworkMasteryActive(true);
                        }
                    }}
                />
                <div id="homeworkMastery" className="w-full rounded-lg p-2 px-8 transition duration-200 hidden">
                    <SidebarSubtitle title="Add Homework" />
                    <SidebarSubtitle title="Homework List" />
                    <SidebarSubtitle title="Evaluation Report" />
                </div>
                <div className="py-2"></div>


                {/* Exam Master */}
                <SidebarTitle
                    id="examMaster"
                    title="Exam Master"
                    icon={<FaNewspaper />}
                    active={examsMasterActive}
                    onClick={() => {
                        const dropdown = document.querySelector('#examMaster');

                        if (examsMasterActive) {
                            dropdown.classList.add('hidden');
                            setExamsMasterActive(false);
                        } else {
                            dropdown.classList.remove('hidden');
                            setExamsMasterActive(true);
                        }
                    }}
                />
                <div id="examMaster" className="w-full rounded-lg p-2 px-8 transition duration-200 hidden">
                    <SidebarSubtitle title="Exam Term" />
                    <SidebarSubtitle title="Exam Hall" />
                    <SidebarSubtitle title="Exam Distribution" />
                    <hr />
                    <SidebarSubtitle title="Create Exam Setup" />
                    <SidebarSubtitle title="Exam Setup List" />
                    <hr />
                    <SidebarSubtitle title="Add Exam Schedule" />
                    <SidebarSubtitle title="Exam Schedule List" />
                    <hr />
                    <SidebarSubtitle title="Add Marks Entry" />
                    <hr />
                    <SidebarSubtitle title="Create Grade Range" />
                    <SidebarSubtitle title="Grade Range List" />
                </div>
                <div className="py-2"></div>


                {/* Certificates */}
                <SidebarTitle
                    id="certificates"
                    title="Certificates"
                    icon={<FaCertificate />}
                    active={certificatesActive}
                    onClick={() => {
                        const dropdown = document.querySelector('#certificates');

                        if (certificatesActive) {
                            dropdown.classList.add('hidden');
                            setCertificatesActive(false);
                        } else {
                            dropdown.classList.remove('hidden');
                            setCertificatesActive(true);
                        }
                    }}
                />
                <div id="certificates" className="w-full rounded-lg p-2 px-8 transition duration-200 hidden">
                    <SidebarSubtitle title="Add Certificate Template" />
                    <SidebarSubtitle title="Certificate Template List" />
                    <SidebarSubtitle title="Generate Student Certificate" />
                    <SidebarSubtitle title="Generate Employee Certificate" />
                </div>
                <div className="py-2"></div>


                {/* Human Resource */}
                <SidebarTitle
                    id="humanResource"
                    title="Human Resource"
                    icon={<GiHumanPyramid />}
                    active={humanResourceActive}
                    onClick={() => {
                        const dropdown = document.querySelector('#humanResource');

                        if (humanResourceActive) {
                            dropdown.classList.add('hidden');
                            setHumanResourceActive(false);
                        } else {
                            dropdown.classList.remove('hidden');
                            setHumanResourceActive(true);
                        }
                    }}
                />
                <div id="humanResource" className="w-full rounded-lg p-2 px-8 transition duration-200 hidden">
                    <SidebarSubtitle title="Create Salary Template" />
                    <SidebarSubtitle title="Salary Template List" />
                    <SidebarSubtitle title="Salary Assign" />
                    <SidebarSubtitle title="Salary Payment" />
                    <hr />
                    <SidebarSubtitle title="Advance Salary Request" />
                    <SidebarSubtitle title="Advance Salary Request List" />
                    <hr />

                    <SidebarSubtitle title="Add Advanced Salary" />
                    <SidebarSubtitle title="Advanced Salary List" />
                    <hr />
                    <SidebarSubtitle title="Add Leave Category" />
                    <SidebarSubtitle title="Leave Category List" />
                    <hr />
                    <SidebarSubtitle title="Leave Request" />
                    <SidebarSubtitle title="Leave List" />
                    <hr />
                    <SidebarSubtitle title="Add Leave" />
                    <SidebarSubtitle title="Leave List" />
                    <hr />
                    <SidebarSubtitle title="Give Award" />
                    <SidebarSubtitle title="Award List" />
                </div>
                <div className="py-2"></div>


                {/* Student Accounting */}
                <SidebarTitle
                    id="studentAccounting"
                    title="Student Accounting"
                    icon={<FaCalculator />}
                    active={studentAccountingActive}
                    onClick={() => {
                        const dropdown = document.querySelector('#studentAccounting');

                        if (studentAccountingActive) {
                            dropdown.classList.add('hidden');
                            setStudentAccountingActive(false);
                        } else {
                            dropdown.classList.remove('hidden');
                            setStudentAccountingActive(true);
                        }
                    }}
                />
                <div id="studentAccounting" className="w-full rounded-lg p-2 px-8 transition duration-200 hidden">
                    <SidebarSubtitle title="Add Fees Type" />
                    <SidebarSubtitle title="Fees Type List" />
                    <hr />
                    <SidebarSubtitle title="Add Fees Group" />
                    <SidebarSubtitle title="Fees Group List" />
                    <hr />
                    <SidebarSubtitle title="Add Fine" />
                    <SidebarSubtitle title="Fine List" />

                    <SidebarSubtitle title="Fees Allocation" />
                    <SidebarSubtitle title="Fees Pay/invoice" />
                    <SidebarSubtitle title="Due Fees Invoice" />
                    <hr />
                    <SidebarSubtitle title="Add Reminder" />
                    <SidebarSubtitle title="Reminder List" />
                </div>
                <div className="py-2"></div>


                {/* Office Accounting */}
                <SidebarTitle
                    id="officeAccounting"
                    title="Office Accounting"
                    icon={<FaBriefcase />}
                    active={officeAccountingActive}
                    onClick={() => {
                        const dropdown = document.querySelector('#officeAccounting');

                        if (officeAccountingActive) {
                            dropdown.classList.add('hidden');
                            setOfficeAccountingActive(false);
                        } else {
                            dropdown.classList.remove('hidden');
                            setOfficeAccountingActive(true);
                        }
                    }}
                />
                <div id="officeAccounting" className="w-full rounded-lg p-2 px-8 transition duration-200 hidden">
                    <SidebarSubtitle title="All Branch" />
                    <SidebarSubtitle title="Icon School & College" />
                    <SidebarSubtitle title="Oxford International" />
                </div>
                <div className="py-2"></div>


                {/* Reports */}
                <SidebarTitle
                    id="reports"
                    title="Reports"
                    icon={<HiDocumentReport />}
                    active={reportsActive}
                    onClick={() => {
                        const dropdown = document.querySelector('#reports');

                        if (reportsActive) {
                            dropdown.classList.add('hidden');
                            setReportsActive(false);
                        } else {
                            dropdown.classList.remove('hidden');
                            setReportsActive(true);
                        }
                    }}
                />
                <div id="reports" className="w-full rounded-lg p-2 px-8 transition duration-200 hidden">
                    <SidebarSubtitle title="All Branch" />
                    <SidebarSubtitle title="Icon School & College" />
                    <SidebarSubtitle title="Oxford International" />
                </div>
                <div className="py-2"></div>


                {/* Events */}
                <SidebarTitle
                    id="events"
                    title="Events"
                    icon={<FaCalendarAlt />}
                    active={eventsActive}
                    onClick={() => {
                        const dropdown = document.querySelector('#events');

                        if (eventsActive) {
                            dropdown.classList.add('hidden');
                            setEventsActive(false);
                        } else {
                            dropdown.classList.remove('hidden');
                            setEventsActive(true);
                        }
                    }}
                />
                <div id="events" className="w-full rounded-lg p-2 px-8 transition duration-200 hidden">
                    <SidebarSubtitle title="All Branch" />
                    <SidebarSubtitle title="Icon School & College" />
                    <SidebarSubtitle title="Oxford International" />
                </div>
                <div className="py-2"></div>


                {/* Transport */}
                <SidebarTitle
                    id="transport"
                    title="Transport"
                    icon={<FaBusAlt />}
                    active={transportActive}
                    onClick={() => {
                        const dropdown = document.querySelector('#transport');

                        if (transportActive) {
                            dropdown.classList.add('hidden');
                            setTransportActive(false);
                        } else {
                            dropdown.classList.remove('hidden');
                            setTransportActive(true);
                        }
                    }}
                />
                <div id="transport" className="w-full rounded-lg p-2 px-8 transition duration-200 hidden">
                    <SidebarSubtitle title="All Branch" />
                    <SidebarSubtitle title="Icon School & College" />
                    <SidebarSubtitle title="Oxford International" />
                </div>
                <div className="py-2"></div>


                {/* Hostel */}
                <SidebarTitle
                    id="hostel"
                    title="Hostel"
                    icon={<FaHotel />}
                    active={hostelActive}
                    onClick={() => {
                        const dropdown = document.querySelector('#hostel');

                        if (hostelActive) {
                            dropdown.classList.add('hidden');
                            setHostelActive(false);
                        } else {
                            dropdown.classList.remove('hidden');
                            setHostelActive(true);
                        }
                    }}
                />
                <div id="hostel" className="w-full rounded-lg p-2 px-8 transition duration-200 hidden">
                    <SidebarSubtitle title="All Branch" />
                    <SidebarSubtitle title="Icon School & College" />
                    <SidebarSubtitle title="Oxford International" />
                </div>
                <div className="py-2"></div>


                {/* Bulk SMS and Email */}
                <SidebarTitle
                    id="bulkSMS"
                    title="Bulk SMS & Email"
                    icon={<FaBell />}
                    active={bulkSMSActive}
                    onClick={() => {
                        const dropdown = document.querySelector('#bulkSMS');

                        if (bulkSMSActive) {
                            dropdown.classList.add('hidden');
                            setBulkSMSActive(false);
                        } else {
                            dropdown.classList.remove('hidden');
                            setBulkSMSActive(true);
                        }
                    }}
                />
                <div id="bulkSMS" className="w-full rounded-lg p-2 px-8 transition duration-200 hidden">
                    <SidebarSubtitle title="All Branch" />
                    <SidebarSubtitle title="Icon School & College" />
                    <SidebarSubtitle title="Oxford International" />
                </div>
                <div className="py-2"></div>


                {/* Message */}
                <SidebarTitle
                    id="message"
                    title="Message"
                    icon={<RiMessage3Fill />}
                    active={messageActive}
                    onClick={() => {
                        const dropdown = document.querySelector('#message');

                        if (messageActive) {
                            dropdown.classList.add('hidden');
                            setMessageActive(false);
                        } else {
                            dropdown.classList.remove('hidden');
                            setMessageActive(true);
                        }
                    }}
                />
                <div id="message" className="w-full rounded-lg p-2 px-8 transition duration-200 hidden">
                    <SidebarSubtitle title="All Branch" />
                    <SidebarSubtitle title="Icon School & College" />
                    <SidebarSubtitle title="Oxford International" />
                </div>
                <div className="py-2"></div>


                {/* Frontend CMS */}
                <SidebarTitle
                    id="frontendCMS"
                    title="Frontend CMS"
                    icon={<FaGlobe />}
                    active={frontentCMSActive}
                    onClick={() => {
                        const dropdown = document.querySelector('#frontendCMS');

                        if (frontentCMSActive) {
                            dropdown.classList.add('hidden');
                            setFrontendCMSActive(false);
                        } else {
                            dropdown.classList.remove('hidden');
                            setFrontendCMSActive(true);
                        }
                    }}
                />
                <div id="frontendCMS" className="w-full rounded-lg p-2 px-8 transition duration-200 hidden">
                    <SidebarSubtitle title="All Branch" />
                    <SidebarSubtitle title="Icon School & College" />
                    <SidebarSubtitle title="Oxford International" />
                </div>
                <div className="py-2"></div>


                {/* Customize */}
                <SidebarTitle
                    id="customize"
                    title="Customize"
                    icon={<FaTools />}
                    active={customizeActive}
                    onClick={() => {
                        const dropdown = document.querySelector('#customize');

                        if (customizeActive) {
                            dropdown.classList.add('hidden');
                            setCustomizeActive(false);
                        } else {
                            dropdown.classList.remove('hidden');
                            setCustomizeActive(true);
                        }
                    }}
                />
                <div id="customize" className="w-full rounded-lg p-2 px-8 transition duration-200 hidden">
                    <SidebarSubtitle title="All Branch" />
                    <SidebarSubtitle title="Icon School & College" />
                    <SidebarSubtitle title="Oxford International" />
                </div>
                <div className="py-2"></div>


                {/* Settings */}
                <SidebarTitle
                    id="settings"
                    title="Settings"
                    icon={<RiSettings5Fill />}
                    active={settingsActive}
                    onClick={() => {
                        const dropdown = document.querySelector('#settings');

                        if (settingsActive) {
                            dropdown.classList.add('hidden');
                            setSettingsActive(false);
                        } else {
                            dropdown.classList.remove('hidden');
                            setSettingsActive(true);
                        }
                    }}
                />
                <div id="settings" className="w-full rounded-lg p-2 px-8 transition duration-200 hidden">
                    <SidebarSubtitle title="All Branch" />
                    <SidebarSubtitle title="Icon School & College" />
                    <SidebarSubtitle title="Oxford International" />
                </div>
                <div className="py-2"></div>


            </div>

        </div>

    );

}

export default Sidebar;