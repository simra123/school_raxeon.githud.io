import React, { useState } from 'react';

import Cap from '../images/cap.png';
import {Link } from 'react-router-dom';
import { FaFingerprint } from 'react-icons/fa'

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
                             <p htmlFor="newpass" className="text-md font-light py-2 ">Enter new <span className="font-medium">password</span></p>
                             <input type="password" id="newpass" className="w-full p-2   rounded border shadow focus:outline-none focus:border-purple-500" placeholder="*****" />
                             <p htmlFor="retypepass" className="text-md font-light py-2 ">Confirm <span className="font-medium">password</span></p>

                             <input type="password" id="retypepass" className="w-full p-2   rounded border shadow focus:outline-none focus:border-purple-500" placeholder="*****" />

                                
                                <Link to="/create-Branch">
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