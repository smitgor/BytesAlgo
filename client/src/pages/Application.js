import { React, useEffect, useState } from "react";
import Axios from "axios";
import { useLocation } from "react-router-dom";

const Application = () => {
    var jobid = useLocation().pathname.split("/")[2];
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    
    const [email, setEmail] = useState(window.localStorage.getItem("email"));
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [skills, setSkills] = useState("");
    const [exp, setExp] = useState("");
    
    const handleEmail = (e) => {
        setEmail(e.target.value);
        console.log(email);
    }
    const handleName = (e) => {
        setName(e.target.value);
        console.log(name);
    }
    const handleNumber = (e) => {
        setNumber(e.target.value);
        console.log(number);
    }
    const handleSkills = (e) => {
        setSkills(e.target.value);
        console.log(skills);
    }
    const handleExp = (e) => {
        setExp(e.target.value);
        console.log(exp);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        Axios.post("http://localhost:3001/addApplication", {
            email: email,
            name: name,
            number: number,
            skills: skills,
            exp: exp,
            jobid: jobid
        })
        .then(res => {
            console.log(res);
            alert("Application added successfully..")
            window.location.href = "/";
        })
        .catch(err => {
            console.log(err);
        })
    }

    useEffect(() => {
        async function fetchData() {
        setLoading(true);
        var url = "http://localhost:3001/job/"+jobid;;
        Axios.get(url)
        .then(res => {
            setData(res.data); 
            console.log(data);         
            console.log("asnbvasn");         
        })
        .catch(err => {
            console.log(err);
        })
    setLoading(false);
    }
    fetchData();
    },[]);
    
    console.log(data);
    if(data.length === 0)
    {
        return ("Loading");
    }
    return (
        <>
            <section class="h-screen bg-gray-100 bg-opacity-50">
                <form class="container max-w-2xl mx-auto shadow-md md:w-3/4" autoComplete="off">
                    <div class="p-4 bg-gray-100 border-t-2 border-indigo-400 rounded-lg bg-opacity-5">
                        <div class="max-w-sm mx-auto  md:mx-0">
                            <p class="text-gray-800 dark:text-white text-lg mt-4 mb-2">
                                {data[0].job_title}
                            </p>
                            <p class="text-gray-400 font-normal text-sm">
                                {data[0].description}
                            </p>
                            <div class="flex items-center mt-4">
                            <div class="flex flex-row justify-between m-2">
                            <span class="px-4 py-2 flex items-center text-base rounded-full text-blue-500 border border-blue-500">
                                ₹ : {data[0].salary} /Month
                            </span>
                            </div>
                            <div class="flex flex-row justify-between m-2">
                            <span class="px-4 py-2 flex items-center text-base rounded-full text-blue-500 border border-blue-500 undefined ">
                            Opnings : {data[0].numberOfPost}
                        </span>
                            </div>
                        </div>
                        </div>
                </div>
                <div class="space-y-6 bg-white">
                    <div class="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                        <h2 class="max-w-sm mx-auto md:w-1/3">
                            Account
                        </h2>
                        <div class="max-w-sm mx-auto md:w-2/3  opacity-70 pointer-events-none">
                            <div class=" relative ">
                                <input type="text" value={window.localStorage.email} id="user-info-email" disabled="" class="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Email"/>
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div class="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                            <h2 class="max-w-sm mx-auto md:w-1/3">
                                Personal info
                            </h2>
                            <div class="max-w-sm mx-auto space-y-5 md:w-2/3">
                        <div>
                            <div class=" relative ">
                                <input type="text" onChange={handleName} id="candidate_name" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Name"/>
                                </div>
                            </div>
                            <div>
                                <div class=" relative ">
                                    <input type="text" onChange={handleNumber} id="candidate_phone" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Phone number"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div class="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                            <h2 class="max-w-sm mx-auto md:w-1/3">
                                Personal info
                            </h2>
                            <div class="max-w-sm mx-auto space-y-5 md:w-2/3">
                        <div>
                            <div class=" relative ">
                                <textarea id="skills" onChange={handleSkills} class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Your Skills"/>
                                </div>
                            </div>
                            <div>
                                <div class=" relative ">
                                    <textarea id="experience" onChange={handleExp} class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Your Experience"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                            <hr/>
                            <div class="w-full px-4 pb-4 ml-auto text-gray-500 md:w-1/3">
                                <button type="submit" onClick={handleSubmit} class="py-2 px-4  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                    Apply
                                </button>
                        </div>
                    </div>
                </form>
            </section>

        </>
    )
};

export default Application;
