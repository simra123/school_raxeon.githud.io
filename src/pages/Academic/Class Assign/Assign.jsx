import React , {useState} from 'react';
import PrimarySelect from '../../../components/select/PrimarySelect';
import Sidebar from '../../../components/sidebar/SideBar';
import {
    HiPencilAlt
    ,HiMenu,
} from 'react-icons/hi';
import PrimaryTextFields from '../../../components/textFields/PrimaryTextFields';
import SidebarMobile from '../../../components/SidebarMobile';
import Navbar from '../../../components/Navbar';

const Assign = () => {
const [sidebarActive, setSidebarActive] = useState(false);
const [branch, setBranch] = useState('Select');
const [Class, setClass] = useState('Select');
const [section, setSection] = useState('Select');




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
                        Assign Class
                    </p>
                   
                </div>
                <br />

                <div className="grid  grid-cols-1">
                 {/* half width input fields  */}
                <div className="section1">
                    <div className="w-full rounded shadow mb-3  bg-white">
                        <div className="inline-flex align-middle text-secondary text-lg px-5 py-2 font-semibold font-sans">
                            <span className="px-2 text-2xl">
                                <HiPencilAlt />

                            </span>
                            Assign Class
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

                        {/* Class*/}
                        <div className="w-full pb-4">
                            <label htmlFor="">Class <span className="text-red-600">*</span></label>
                            <PrimarySelect id="Class" value={Class} options={['six', 'seven']} onClick={(e) => {
                                setClass(e.target.innerText);
                            }} />
                        </div>

                        {/*Section*/}
                        <div className="w-full pb-4">
                           <label htmlFor="">Section  <span className="text-red-600">*</span></label>
                           <PrimarySelect id="section" value={section} options={['A', 'B']} onClick={(e) => {
                              setSection(e.target.innerText);
                            }} />
                        </div>

                        {/*Teacher*/}
                        <div className="w-full pb-4">
                           <label htmlFor=""> Subject  <span className="text-red-600">*</span></label>
                           <PrimaryTextFields/>
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
        </div>
    </div>       

    </>
 )

}
export default Assign;
