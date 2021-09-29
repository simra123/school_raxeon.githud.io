import React, { useState } from 'react';

import Cap from '../images/cap.png';
import {Link } from 'react-router-dom';
import { FaFingerprint ,FaLock} from 'react-icons/fa'

const ChangePassword = () => {

    

    return (
        <>
            <div className=" bg-gray-50 h-screen  ">
              
             <h1 className="text-2xl lg:text-4xl pt-8 text-center hidden md:block font-bold uppercase">Cambrian School & College</h1>
               
                
                    
                        
                <div className="flex justify-center">
                    
                
                    <div className="lg:w-1/3 md:w-1/2 ">
                    
                    
                        
                        <div className=" bg-white  mx-3 lg:mx-10 rounded-lg shadow py-10 mt-10 " >
                            <div className="text-center mx-auto px-5">
                                <img src={Cap} alt="logo" height="auto" className="mx-auto" width="130"/>

                                <h1 className="text-xl text-gray-600 font-bold text-center">Cambrian School & College</h1>
                                <FaFingerprint className="text-5xl mx-auto mt-4 text-gray-700"/>
                            </div>
                            <div className="p-5 ">
                                <div className="inline-flex w-full shadow rounded border focus:ring-1 tracking-wider ring-primary my-3">
                                    <div className="max-w-7 bg-gray-200 p-2 px-3 ">
                                      < FaLock/>
                                    </div>
                                    <div className="w-full">
                                        <input type="password" className="w-full border rounded-r p-1 bg-white text-gray-400 focus:ring-1 tracking-wider ring-primary focus:outline-none px-4 border-gray-300 shadow-sm"
                                         placeholder="Enter new password" />
                                    </div>
                                </div>
                                <div className="inline-flex w-full shadow rounded border focus:ring-1 tracking-wider ring-primary my-3">
                                    <div className="max-w-7 bg-gray-200 p-2 px-3 ">
                                      < FaLock/>
                                    </div>
                                    <div className="w-full">
                                        <input type="password" className="w-full border rounded-r p-1 bg-white text-gray-400 focus:ring-1 tracking-wider ring-primary focus:outline-none px-4 border-gray-300 shadow-sm"
                                         placeholder="Confirm password" />
                                    </div>
                                </div>

                                
                                <Link to="/dashboard">
                                    <button className="w-full p-2 mt-5 rounded shadow bg-purple-600 text-white">
                                        CHANGE PASSWORD
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div> 
                   
                   
                
               
               

            </div>
        </>
    );

}

export default ChangePassword;