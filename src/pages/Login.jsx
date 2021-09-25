import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import LoginBg from '../images/loginBg.svg';
import Cap from '../images/cap.png'

const Login = () => {

    const [remember, setRemember] = useState(false);

    return (
        <>
            <div className=" bg-gray-50 h-screen">
                <div className="lg:text-left text-center pt-5 lg:ml-32 p-5 hidden lg:block">
                    <h1 className="text-2xl lg:text-4xl font-bold uppercase">Cambrian School & College</h1>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-12 px-5 ">

                    <div className="hidden lg:block"></div>


                    <div className="col-span-4 px-2 place-items-center">



                        <div className=" bg-white  mx-3 lg:mx-10 rounded-lg shadow  mt-40 lg:mt-10" >
                            <div className="text-center mx-auto px-5">
                                <img src={Cap} alt="logo" height="auto" className="mx-auto" width="130" />

                                <h1 className="text-xl text-gray-600 font-bold text-center">Cambrian School & College</h1>
                            </div>
                            <div className="p-5 ">
                                <p className="pl-2 pb-2">Username</p>
                                <input type="text" className="w-full p-2 rounded border shadow focus:outline-none focus:border-purple-500" />
                                <br />
                                <br />
                                <p className="pl-2 pb-2">Password</p>
                                <input type="text" className="w-full p-2 rounded border shadow focus:outline-none focus:border-purple-500" />
                                <br />
                                <br />
                                <div className="inline-flex w-full">
                                    <p className="inline-flex w-1/2">
                                        <div id="rememberOutline" className="w-6 h-6 mr-2 border bg-white transition duration-200 rounded" style={{ padding: '0.32rem' }} onClick={() => {
                                            if (remember) {
                                                document.querySelector('#rememberOutline').classList.remove('border-purple-500');
                                                document.querySelector('#remember').classList.remove('bg-purple-700');
                                                setRemember(false);
                                            } else {
                                                document.querySelector('#rememberOutline').classList.add('border-purple-500');
                                                document.querySelector('#remember').classList.add('bg-purple-700');
                                                setRemember(true);
                                            }
                                        }}>
                                            <div id="remember" className="w-3 h-3 transition duration-200 "></div>
                                        </div>
                                        <span className="px-1">Remember</span>
                                    </p>
                                    <p className="w-1/2 text-right">
                                        <Link to="/forgetPassword">  Forgot Password?</Link>
                                    </p>
                                </div>
                                <Link to="/dashboard">
                                    <button className="w-full p-2 mt-5 rounded shadow bg-purple-600 text-white">
                                        Login
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>



                    <div className="col-span-6 hidden lg:block">
                        <img src={LoginBg} alt="illustration" width="100%" height="auto" className="" />
                    </div>
                </div>

            </div>
        </>
    );

}

export default Login;