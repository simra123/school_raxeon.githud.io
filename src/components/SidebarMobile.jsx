import React , {useState} from 'react';
import Cap from '../images/cap.png';
import {HiMenu} from 'react-icons/hi';
import Sidebar from '../components/sidebar/SideBar';
import logo from '../images/logo.png'


const SidebarMobile = () => {
const [sidebarActive, setSidebarActive] = useState(false);

    return(
        <>
        <div className="grid grid-cols-3 py-5 bg-gray-200  gap-4 tab-sm:grid-cols-1 lg:hidden  ">
            
                
           <img src={logo} alt="logo"  className="col-span-2 w-full pl-3 mt-2 h-8 md:w-1/2 "/>

            <div className="w-full text-4xl text-secondary tab-sm:hidden float-right pr-5">
                
                <HiMenu className="bg-white rounded-full p-2 shadow ml-auto hover:bg-gray-100" onClick={() => {
                    const sidebar = document.querySelector('#sidebar');

                    if (sidebarActive) {
                        sidebar.classList.remove('animate-grow');
                        sidebar.classList.add('animate-shrink');
                        setTimeout(() => {
                            sidebar.classList.add('hidden');
                        }, 500);
                        setSidebarActive(false);
                    } else {
                        sidebar.classList.add('animate-grow');
                        sidebar.classList.remove('hidden');
                        setSidebarActive(true);
                    }
                }} />
            </div>
        </div>
        </>
    )
}
export default SidebarMobile;