import React, { useState } from 'react';

import Cap from '../images/cap.png';
import ForgetPass from '../images/undraw_authentication.svg'
import {Link } from 'react-router-dom';
import { FaFingerprint } from 'react-icons/fa'

const ForgetPassword = () => {

    

    return (
        <>
            <div className=" bg-gray-50 h-screen">
                <div className="lg:text-left text-center pt-5 lg:ml-32 p-5 hidden lg:block">
                     <h1 className="text-2xl lg:text-4xl font-bold uppercase">Cambrian School & College</h1>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-12 px-5 ">
                    
                 <div className="hidden lg:block"></div>
                        
                   
                    <div className="col-span-4 px-2">
                   
                    
                        
                        <div className=" bg-white  mx-3 lg:mx-10 rounded-lg shadow  mt-40 lg:mt-16" >
                            <div className="text-center mx-auto px-5">
                             <img src={Cap} alt="logo" height="auto" className="mx-auto" width="130"/>

                              <h1 className="text-xl text-gray-600 font-bold text-center">Cambrian School & College</h1>
                              <FaFingerprint className="text-5xl mx-auto mt-4 text-gray-700"/>
                            </div>
                            <div className="p-5 ">
                               
                                <p className="pl-2 pb-2">Email</p>
                                <input type="email" className="w-full p-2 rounded border shadow focus:outline-none focus:border-purple-500" />
                                
                                <Link to="/create-Branch">
                                    <button className="w-full p-2 mt-5 rounded shadow bg-purple-600 text-white">
                                      Forgot Password?
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                   
                   
                
                <div className="col-span-6 hidden lg:block">
                     <img src={ForgetPass} alt="illustration" width="100%" height="auto" className="" />
                </div>
                </div>

            </div>
        </>
    );

}

export default ForgetPassword;