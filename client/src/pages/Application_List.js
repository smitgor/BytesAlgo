import {React, useState, useEffect}  from "react";
import { Redirect, Route } from "react-router-dom";
import Axios from "axios";

const Application_List = () =>{
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        setLoading(true);
        var url = "http://localhost:3001/getApplication/"+window.localStorage.getItem("email");
        Axios.get(url)
        .then(res => {
            setData(res.data);
            console.log(data);            
        })
        .catch(err => {
            console.log(err);
        })
        setLoading(false);
    },[]);

    if(loading)
    {
        return ("Loading");
    }
    return (
        <>
            
<div class="container mx-auto px-4 sm:px-8 max-w-5xl">
    <div class="py-8">
        <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
                <table class="min-w-full leading-normal">
                    <thead>
                        <tr>
                            <th scope="col" class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                Application ID
                            </th>
                            <th scope="col" class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                Job ID
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
                                Status
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
                                            {temp.job_id}
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
                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                {temp.status==="reject" && <span class="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
                                    <span aria-hidden="true" class="absolute inset-0 bg-red-200 opacity-50 rounded-full">
                                    </span>
                                    <span class="relative">
                                        Rejected
                                    </span>
                                </span>}
                                {temp.status==="accept" && <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                    <span aria-hidden="true" class="absolute inset-0 bg-green-200 opacity-50 rounded-full">
                                    </span>
                                    <span class="relative">
                                        Accepted
                                    </span>
                                </span>}
                                {temp.status!=="reject" && temp.status!=="accept" && <span class="relative inline-block px-3 py-1 font-semibold text-yellow-900 leading-tight">
                                    <span aria-hidden="true" class="absolute inset-0 bg-yellow-200 opacity-50 rounded-full">
                                    </span>
                                    <span class="relative">
                                        Pending
                                    </span>
                                </span>}
                            </td>
                            {/* <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <a href="#" class="text-indigo-600 hover:text-indigo-900">
                                    Veiw
                                </a>
                            </td> */}
                        </tr>
                        </>
                        )
                        })
                    }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>

        </>
    );
}

export default Application_List;