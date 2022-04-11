import {React, useState, useEffect}  from "react";
import { Redirect, Route, useLocation } from "react-router-dom";
import Axios from "axios";

const Candidate_list = () =>{
    const [data, setData] = useState([]);
    var jobid = useLocation().pathname.split("/")[2];
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState("");
    useEffect(() => {
        setLoading(true);
        var url = "http://localhost:3001/getCandidate/"+jobid;
        Axios.get(url)
        .then(res => {
            setData(res.data);            
            console.log(res.data);            
        })
        .catch(err => {
            console.log(err);
        })
        setLoading(false);
    },[]);

    const handleChange = (e) => {
        setStatus(e.target.value);
        console.log(status);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        var app_id = e.target.id;
        Axios.put("http://localhost:3001/updateStatus", {
            appid: app_id,
            status: status
        })
        .then(res => {
            console.log(res);
            alert("Status updated successfully..")
        })
        .catch(err => {
            console.log(err);
        })
    }

    const back = (e) => {
        e.preventDefault();
        window.location.href = "/";
    }



    if(loading)
    {
        return ("Loading");
    }
    return (
        <>
            
<div class="container mx-auto px-4 sm:px-8">
    <div class="py-8">
        <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
                <table class="min-w-full leading-normal">
                    <thead class="font-weight: 700;">
                        <tr>
                            <th scope="col" class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                Application ID
                            </th>
                            <th scope="col" class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                Name
                            </th>
                            <th scope="col" class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                Email ID
                            </th>
                            <th scope="col" class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                Skills
                            </th>
                            <th scope="col" class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                Experience
                            </th>
                            <th scope="col" class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                Mobile Number
                            </th>
                            <th scope="col" class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                Action
                            </th>
                            <th scope="col" class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                
                            </th>
                            <th scope="col" class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        data.map(function(temp,j){
                        return ( 
                        <>                        
                        <tr>
                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <div class="flex items-center">
                                        <p class="text-gray-900 whitespace-no-wrap">
                                            {temp.application_id}
                                        </p>
                                </div>
                            </td>
                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <div class="flex items-center">
                                        <p class="text-gray-900 whitespace-no-wrap">
                                            {temp.candidate_name}
                                        </p>
                                </div>
                            </td>
                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <div class="flex items-center">
                                        <p class="text-gray-900 whitespace-no-wrap">
                                            {temp.candidate_email}
                                        </p>
                                </div>
                            </td>
                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <p class="text-gray-900 whitespace-no-wrap">
                                    {temp.skills}
                                </p>
                            </td>
                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <p class="text-gray-900 whitespace-no-wrap">
                                    {temp.experience}
                                </p>
                            </td>
                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <p class="text-gray-900 whitespace-no-wrap">
                                    {temp.mobile_number}
                                </p>
                            </td>
                            {/* <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                    <span aria-hidden="true" class="absolute inset-0 bg-green-200 opacity-50 rounded-full">
                                    </span>
                                    <span class="relative">
                                        Active
                                    </span>
                                </span>
                            </td> */}
                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <a href="#" class="text-indigo-600 hover:text-indigo-900">
                                    {/* ////////////////////////// */}
                                    
                                    <select onChange={handleChange} 
                                        class="block w-52 text-gray-700 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500" name="status">
                                        <option value="pending">
                                            Select
                                        </option>
                                        <option value="accept">
                                            accept
                                        </option>
                                        <option value="reject">
                                            Reject
                                        </option>
                                    </select>

                                    {/* ////////////////////////// */}
                                </a>
                            </td>
                            <td>
                                <button id={temp.application_id} type="button" onClick={handleSubmit} class="py-2 px-4  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg ">
                                    Update
                                </button>
                            </td>
                        </tr>
                        </>
                        )
                        })
                    }
                    </tbody>
                </table>
            </div>

        </div>
<div class="w-24">

<button type="button" onClick={back} class="py-2 px-4 flex justify-center items-center  bg-green-500 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full">
    
    Back
</button>
    </div>
</div>
</div>

        </>
    );
}

export default Candidate_list;