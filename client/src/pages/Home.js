import { React, useEffect, useState } from "react";
import Axios from "axios";
import AddJob from "./AddJob";
import List from "./List";

const Home = () => {
    const [add, setAdd] = useState(true);
    const [list, setList] = useState(false);
    const [user, setUser] = useState(window.localStorage.getItem("name"));

    const handleChange = e => {
        setAdd(!add);
        setList(!list);
    }
    const handleLogout = e => {
        e.preventDefault();
        console.log("logout");
        window.localStorage.clear();
        window.location.href = "/login";
    }

    return (
    <>  
        
<       div>
            <nav class="bg-white dark:bg-gray-800  shadow py-4 ">
                <div class="max-w-7xl mx-auto px-8">
                    <div class="flex items-center justify-between h-16">
                        <div class=" flex items-center">
                        <a class="flex-shrink-0 mr-10 pr-5">
                            Hi, {user}
                        </a>
                        <div class="hidden md:block">
                        <div class="ml-10 flex items-baseline space-x-4">
                            <a class="dark:hover:text-white px-3 py-2 rounded-md text-md font-medium" onClick={handleChange}>
                                <span class={add ? "hover:text-gray-800 ":"text-gray-400 "}>Home</span>
                            </a>
                            <a class=" hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-md font-medium" onClick={handleChange}>
                                <span class={list ? "hover:text-gray-800":"text-gray-400"}>Job List</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="block">
                    <div class="md:block -mr-2 flex">
                        <div class="flex flex-col md:flex-row w-3/4 md:w-full max-w-sm md:space-x-3 space-y-3 md:space-y-0 justify-center">
                                <button 
                                    onClick={handleLogout}
                                    class="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200" 
                                    >
                                    Log Out
                                </button>
                            </div>
                        </div>
                        <div class="ml-4 flex items-center md:ml-6">
                        </div>
                    </div>
                    <div class="-mr-2 flex md:hidden">
                        <button class="text-gray-800 dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
                            <svg width="20" height="20" fill="currentColor" class="h-8 w-8" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z">
                                </path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            </nav>
        </div>

        {add ? <AddJob /> : null}
        {list ? <List /> : null}
    </>
    );
}

export default Home;