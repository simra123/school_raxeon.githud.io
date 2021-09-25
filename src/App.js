import React from 'react';

import { HashRouter, Route , Switch } from 'react-router-dom';
import Dashboard from './pages/DashboardPage';
import Login from './pages/Login';
import CreateAdmission from './pages/Admission/CreateAdmission';
import CreateBranch from './pages/Branch/CreateBranch';
import ForgetPassword from './pages/ForgetPassword';
import IdcardTemp from './pages/Card Management/IdcardTemp';
import AdmitcardTemp from './pages/Card Management/AdmitcardTemp';
import CreateEmployee from './pages/Employee/CreateEmployee';
import CreateDesignation from './pages/Employee/CreateDesignation';
import AddParent from './pages/parent/AddParent';
import ParentsList from './pages/parent/ParentsList';
import MultipleImport from './pages/Admission/MultipleImport'; 
import AddCertificate from './pages/Certificate/AddCertificate';
import AsssignTeacher from './pages/Academic/Class and Section/AssignTeacher';
import CreateSubject from './pages/Academic/Subject/CreateSubject';
import Assign from './pages/Academic/Class Assign/Assign';
import ControlClass from './pages/Academic/Class and Section/ControlClass';
import CreateLiveClass from './pages/Live Classes/CreateLiveClass';
import EmployeeList from './pages/Employee/EmployeeList';
import CreateAttachments from './pages/Attachment Books/CreateAttachments';
import CreateBook from './pages/Libraray/CreateBook';
import CreateBookIssue from './pages/Libraray/CreateBookIssue';
import CreateBookRequest from './pages/Libraray/CreateBookRequest';
import AddHomework from './pages/Homework/AddHomework';
import BranchList from './pages/Branch/BranchList';
import AssignList from './pages/Academic/Class Assign/AssignList';
import Otp from './pages/Otp';
import ChangePassword from './pages/ChangePassword';
import Navbar from './components/Navbar';
import SidebarMobile from './components/SidebarMobile'

const App = () => {
  return (
    <>
     
      <HashRouter basename="/">
        
        {/* Login Routes */}
        <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/navbar" component={Navbar} />
        <Route exact path="/mobile" component={SidebarMobile} />
        <Route path="/forgetPassword" component={ForgetPassword} />
        <Route path="/otp" component={Otp} />
        <Route path="/changepassword" component={ChangePassword} />
        
        
        
         
        <Route path="/dashboard" component={Dashboard} />


        {/* Admission Routes */}
        <Route path="/admission/create" component={CreateAdmission} />
        <Route path="/admission/online" />
        <Route path="/admission/import" />
        {/* Route for multiple import Admission */}
        <Route path="/admission/multipleImport" component={MultipleImport} />
        <Route path="/admission/department" />

        {/* Student Information Routes */}
        <Route path="/student/list" />
        <Route path="/student/disable" />


        {/* Parent Routes */}
        
        <Route exact path="/parent/add" component={AddParent} />
        <Route path="/parent/list" component={ParentsList} />
        <Route path="/parent/disable" />


        {/* Employee Routes */}
        <Route exact path="/employee/create" component={CreateEmployee} />
        <Route exact path="/employee/createDesignation" component={CreateDesignation} />
        <Route path="/employee/list" component={EmployeeList} />
        <Route path="/employee/createDepartment" />
        <Route path="/employee/disable" />


        {/* Branch Routes */}
        <Route exact path="/branch/create" component={CreateBranch} />
        <Route exact path="/branch/list" component={BranchList} />


        {/* Card Management Routes */}
        
        <Route exact path="/cardManagement/idcard/create" component={IdcardTemp} />
        <Route path="/cardManagement/idCard/list" />

        <Route  exact path="/cardManagement/idCard/student" />
        <Route path="/cardManagement/idCard/employee" />

        <Route exact path="/cardManagement/admitCard/create" component={AdmitcardTemp} />
        <Route path="/cardManagement/admitCard/list" />

        <Route path="/cardManagement/admitCard/generate" />


        {/* Attendance Routes */}
        <Route exact path="/attendance/student" />
        <Route path="/attendance/employee" />
        <Route path="/attendance/exam" />


        {/* Academic Routes */}
        {/* Route for Control Classes */}
        <Route exact path="/academic/classSection/control/class"  component={ControlClass}/>

        {/* Route for Assign Class Teacher */}
        <Route path="/academic/classSection/assignTeacher" component={AsssignTeacher} />

        {/* Route for Create Subject */}
        <Route exact path="/academic/subject/create" component={CreateSubject} />
        <Route path="/academic/subject/list" />

        {/* Route for Class Assign */}
        <Route exact path="/academic/classAssign/assign" component={Assign} />
        <Route path="/academic/classAssign/list"  component={AssignList} />

        <Route exact path="/academic/classSchedule/add" />
        <Route exact path="/academic/classSchedule/list" />

        <Route exact path="/academic/teacherSchedule" />
        <Route exact path="/academic/promotion" />

        {/* Live Class Rooms Routes */}
        {/* Route for add live classroom */}
        <Route exact path="/liveClass/rooms/create" component={CreateLiveClass}/>
        <Route exact path="/liveClass/rooms/list" />

        <Route exact path="/liveClass/reports" />

        {/* Certificate Routes */}
        <Route exact path="/certificate/template/add" component={AddCertificate} />
        <Route exact path="/certificate/template/list" />

        <Route exact path="/certicate/generate/student" />
        <Route exact path="/certicate/generate/employee" />


        {/* Attachment Book Routes */}
        <Route exact path="/attachmentBooks/attachment/create"  component={CreateAttachments} />
        <Route exact path="/attachmentBooks/attachment/list" />
        <Route exact path="/attachmentBooks/attachment/type" />


        {/* Library Routes */}
        <Route exact path="/library/books/create"component={CreateBook} />
        <Route exact path="/library/books/list" />
        <Route exact path="/library/books/create/issue" component={CreateBookIssue} />
        <Route exact path="/library/books/create/request" component={CreateBookRequest} />
        <Route exact path="/library/books/category" />
        

         {/*Homework */}
         <Route path="/homework/add"component={AddHomework} />
         </Switch>
         



      </HashRouter>
    </>
  );
}

export default App;