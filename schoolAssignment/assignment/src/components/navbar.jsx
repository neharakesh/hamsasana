import React, { useEffect, useState } from 'react';
import Login from './login';
import Logo from '../../public/images/logo.jpeg';
import { useAuth } from '../context/authprovider';
import Logout from './logout';

function Navbar() {
    const [authUser, setAuthUser] = useAuth();
    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");
    const element = document.documentElement;
    
    useEffect(() => {
        if (theme === "dark") {
            element.classList.add("dark");
            localStorage.setItem("theme", "dark");
            document.body.classList.add("dark");
        } else {
            element.classList.remove("dark");
            localStorage.setItem("theme", "light");
            document.body.classList.remove("dark");
        }
    }, [theme]);

    const [sticky, setSticky] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navItems = (
        <>
            <li>
                <a href="/" className='hover:bg-slate-300'>Home</a>
            </li>
            
            <li>
                <a href='/academic' className='hover:bg-slate-300'>Academics</a>
            </li>
            <li>
                <a href='/faculty' className='hover:bg-slate-300'>Faculty</a>
            </li>
            <li>
                <a href="/contact" className='hover:bg-slate-300'>Contact</a>
            </li>
            <li>
                <a href="/about" className='hover:bg-slate-300'>Aboutus</a>
            </li>
        </>
    );

    return (
        <>
            <div className={`navbar max-w-screen-2xl container mx-auto md:px-20 px-3 dark:bg-slate-600 dark:text-white right-0 left-0 ${sticky ? "sticky-navbar dark:bg-slate-600 dark:text-white shadow-md base-bg-200 transition-all ease-in-out" : ""}`}>
                <div className="navbar-start dark:bg-slate-600 dark:text-white">
                    <div className="dropdown relative z-50">
                        <button tabIndex={0} className="btn btn-ghost md:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </button>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[60] p-2 shadow rounded-box w-52 bg-white dark:bg-slate-700">
                            {navItems}
                        </ul>
                    </div>
                    <div className='flex space-0'>
                        <img className="w-20" src={Logo} alt="" />
                        <a className="mt-4 text-2xl font-bold cursor-pointer dark:bg-slate-600 dark:text-white">Springdale Public School</a>
                    </div>
                </div>
                <div className="navbar-end dark:bg-slate-600 dark:text-white">
                    <div className="navbar-center hidden lg:flex dark:bg-slate-600 dark:text-white">
                        <ul className="menu menu-horizontal px-1 py-4 text-l dark:bg-slate-600 dark:text-white">
                            {navItems}
                        </ul>
                        <div className='mx-5 py-4 dark:bg-slate-600 dark:text-white'>
                            <label className="input flex items-center gap-2 bg-white border-slate-200 border-2">
                                <input type="text" className="grow cursor-text text-black" placeholder="Search" />
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70 cursor-pointer"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                            </label>
                        </div>
                        <div className='w-auto py-5 dark:bg-slate-600'>
                            <label className="swap swap-rotate">
                                <input type="checkbox" className="theme-controller dark:bg-slate-600 dark:text-white" value="synthwave" />
                                <svg className="swap-off fill-current w-10 h-8 dark:bg-slate-600 dark:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
                                    <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                                </svg>
                                <svg className="swap-on fill-current w-10 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                                    <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                                </svg>
                            </label>
                        </div>
                    </div>
                    
                        <div>
                            <a className="dark:bg-white dark:text-orange-500 bg-orange-500 text-white p-2 rounded-md mx-4 cursor-pointer hover:-translate-y-1 hover:scale-110 duration:300s" onClick={() => document.getElementById("my_modal_3").showModal()}>
                                Login
                            </a>
                            <Login />
                        </div>
                    
                    
                    
                </div>
            </div>
        </>
    );
}

export default Navbar;
