import {React, useState, useEffect}  from "react";
import { Redirect, Route } from "react-router-dom";
import Axios from "axios";

const Job_list = () =>{
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    
    
        useEffect(() => {
        setLoading(true);
        var url = "http://localhost:3001/getjobs";
        Axios.get(url)
        .then(res => {
            setData(res.data);          
        })
        .catch(err => {
            console.log(err);
        })
        setLoading(false);
    },[]);
    console.log(data);
    if(loading)
    {
        return ("Loading");
    }

    return (
        <>
        
<div class="w-full bg-white p-12">
    <div class="header flex items-end justify-between mb-12">
        <div class="title">
            <p class="text-4xl font-bold text-gray-800 mb-4">
                Apply for Job
            </p>
            <p class="text-2xl font-light text-gray-400">
                Get Job at Your Dream Company    
            </p>
        </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {
            data.map(function(temp,i){
                var url = "/jobs/"+temp.job_id;
                return (
            <div class="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
                <a href={url} class="w-full block h-full">
                    <div class="bg-white dark:bg-gray-800 w-full p-4">
                        <p class="text-gray-800 dark:text-white text-xl font-medium mb-2">
                            {temp.job_title}
                        </p>
                        <p class="text-gray-400 dark:text-gray-300 font-light text-base">
                        <span class="text-sm">
                            Description 
                        </span><br/>
                            {temp.description}
                        </p>
                        <p class="text-md font-medium mt-5">
                            Contact Email : {temp.recruiter_email}
                        </p>
                        <div class="flex items-center mt-4">
                            <div class="flex flex-row justify-between m-auto">
                            <span class="px-4 py-2 flex items-center text-base rounded-full text-indigo-500 border border-indigo-500">
                                ₹ : {temp.salary}
                            </span>
                            </div>
                            <div class="flex flex-row justify-between m-auto">
                            <span class="px-4 py-2 flex items-center text-base rounded-full text-indigo-500 border border-indigo-500 undefined ">
                            Opnings : {temp.numberOfPost}
                        </span>
                            </div>
                        </div>
                        
                    </div>
                </a>
            </div>
                )
            })}
        </div>
    </div>

        </>
    );
}

export default Job_list;