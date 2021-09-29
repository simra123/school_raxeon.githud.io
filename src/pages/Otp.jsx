import React, { useState  , useEffect} from 'react';

import Cap from '../images/cap.png';
import {Link } from 'react-router-dom';
import { FaFingerprint } from 'react-icons/fa'
import {AiTwotoneCode} from 'react-icons/ai'

const Otp = () => {
    // useEffect(
    //     () => {
    //         windows.reload(false);
    //     } , []
    // )
  
    document.addEventListener("DOMContentLoaded", function(event) {

        function OTPInput() {
        const inputs = document.querySelectorAll('#otp > *[id]');
        for (let i = 0; i < inputs.length; i++) { inputs[i].addEventListener('keydown', function(event) { if (event.key==="Backspace" ) { inputs[i].value='' ; if (i !==0) inputs[i - 1].focus(); } else { if (i===inputs.length - 1 && inputs[i].value !=='' ) 
        { return true; } else if (event.keyCode> 47 && event.keyCode < 58) { inputs[i].value=event.key; if (i !==inputs.length - 1) inputs[i + 1].focus(); event.preventDefault(); } else if (event.keyCode> 64 && event.keyCode < 91) { inputs[i].value=String.fromCharCode(event.keyCode); if (i !==inputs.length - 1) inputs[i + 1].focus(); event.preventDefault(); } } }); } } OTPInput(); });

    

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
                                <AiTwotoneCode className="text-5xl mx-auto mt-4 text-gray-700"/>
                                <p className="text-md font-light mt-3">You will get an OTP  via <span className="font-medium">email/sms</span></p>
                            </div>
                            <div className="p-5 ">
                                
                                
                                <div id="otp" className="grid grid-cols-4 gap-2"> 

                                 <input className="m-1  h-12 w-16 text-lg font-medium  rounded text-center border shadow focus:outline-none focus:border-purple-500" type="text" id="first" maxlength="1" />
                                 <input className="m-1  h-12 w-16 text-lg font-medium  rounded text-center border shadow focus:outline-none focus:border-purple-500" type="text" id="second" maxlength="1" /> 
                                 <input className="m-1  h-12 w-16 text-lg font-medium  rounded text-center border shadow focus:outline-none focus:border-purple-500" type="text" id="third" maxlength="1" /> 
                                 <input className="m-1  h-12 w-16 text-lg font-medium  rounded text-center border shadow focus:outline-none focus:border-purple-500" type="text" id="fourth" maxlength="1" />
                                
                                </div>
                                
                                <Link to="/changepassword">
                                    <button className="w-full p-2 mt-5 rounded shadow bg-purple-600 text-white">
                                        VERIFY
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

export default Otp;