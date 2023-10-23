import React from "react";
import { LogoVP_BIG } from "../../assets";
import toast from 'react-hot-toast';

const AdminLogin = () => {

    const [formValue, setFormValue] = React.useState({
        email: "",
        password: ""
    })

    const loginFormSubmit = (e) => {
        e.preventDefault();
        console.log(formValue)
    }
    
    return (
        <div className="flex items-center min-h-screen p-6">
            <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
                <div className="flex flex-col overflow-y-auto md:flex-row">
                    <div className="h-32 md:h-auto md:w-1/2">
                        <img
                            src={LogoVP_BIG}
                            alt=""
                            className="object-fill w-full h-full dark:block"
                        />
                    </div>
                    <div className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
                        <div className="w-full">
                            <h1 className="mb-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
                                Admin Login
                            </h1>
                            <form onSubmit={loginFormSubmit}>
                                <label className="block text-sm text-gray-700 dark:text-gray-400 col-span-4 sm:col-span-2 font-medium text-sm">
                                    Email
                                </label>
                                <input
                                    className="block w-full px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md focus:border-gray-200 border-gray-200 dark:border-gray-600 focus:ring focus:ring-green-300 dark:focus:border-gray-500 dark:focus:ring-gray-300 dark:bg-gray-700 border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"
                                    type="email"
                                    name="email"
                                    placeholder="john@doe.com"
                                    autoComplete="username"
                                    onChange={(e) => { setFormValue((prev) => { return { ...prev, email: e.target.value } }) }}
                                />
                                <div className="mt-6"></div>
                                <label className="block text-sm text-gray-700 dark:text-gray-400 col-span-4 sm:col-span-2 font-medium text-sm">
                                    Password
                                </label>
                                <input
                                    className="block w-full px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md focus:border-gray-200 border-gray-200 dark:border-gray-600 focus:ring focus:ring-green-300 dark:focus:border-gray-500 dark:focus:ring-gray-300 dark:bg-gray-700 border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"
                                    type="password"
                                    name="password"
                                    placeholder="***************"
                                    onChange={(e) => { setFormValue((prev) => { return { ...prev, password: e.target.value } }) }}
                                />
                                <button
                                    className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-white bg-green-500 border border-transparent active:bg-green-600 hover:bg-green-600 focus:ring focus:ring-purple-300 mt-4 h-12 w-full"
                                    type="submit"
                                >
                                    Login
                                </button>
                                <hr className="my-5" />
                            </form>
                            <p className="mt-4 my-4">
                                <span
                                    className="text-sm font-medium text-green-500 dark:text-green-400 hover:underline"
                                    onClick={() => { toast.error('Under Construction') }}
                                >
                                    Forgot your password
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminLogin;
