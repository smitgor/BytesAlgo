import { React, useEffect, useState } from "react";
import { Redirect, Route } from "react-router-dom";
import Axios from "axios";

const AddJob = () =>{
    const [email, setEmail] = useState(window.localStorage.getItem("email"));
    const [title, setTitle] = useState("");
    const [post, setPost] = useState(0);
    const [salary, setSalary] = useState(0);
    const [desc, setDesc] = useState("");

    const handleEmail = (e) => {
        setEmail(e.target.value);
        console.log(email);
    }  
    const handleTitle = (e) => {
        setTitle(e.target.value);
        console.log(title);
    }  
    const handlePost = (e) => {
        setPost(e.target.value);
        console.log(post);
    }  
    const handleSalary = (e) => {
        setSalary(e.target.value);
        console.log(salary);
    }  
    const handleDesc = (e) => {
        setDesc(e.target.value);
        console.log(desc);
    }  
    const handleSubmit = (e) => {
        e.preventDefault();
        Axios.post("http://localhost:3001/addjob", {
            title: title,
            desc: desc,
            salary: salary,
            post: post,
            email: email
        })
        .then(res => {
            if(res.data==="done")
            {
                alert("Job added successfully..")
            }
            window.location.href = '/';            
        })
        .catch(err => {
            console.log(err);
        })
        //setEmailId(e.target.value);
        //console.log(emilId);
    }  
    return (
        <div class="w-1/2 m-auto mt-10">
        

        <div class="relative w-2/3 m-5">
            <label for="required-email" class="text-gray-700">
                Job Title
                <span class="text-red-500 required-dot">
                    *
                </span>
            </label>
            <input type="text" id="title" onChange={handleTitle} class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="title" placeholder="Title"/>
        </div>
        

        <div class="relative w-2/3 m-5">
            <label class="text-gray-700" for="name">
                Job Description
                <span class="text-red-500 required-dot">
                    *
                </span>
                <textarea onChange={handleDesc} class="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" id="description" placeholder="Enter your description" name="description" rows="5" cols="40">
                </textarea>
            </label>
        </div>
        
        <div class="flex">
            <div class="relative w-1/3 m-5">
                <label for="salary" class="block text-sm font-medium text-gray-700">
                    Salary
                </label>
                <div class="mt-1 relative rounded-md shadow-sm">
                    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span class="text-gray-500 sm:text-sm">
                            ₹
                        </span>
                    </div>
                    <input type="text" name="salary" id="salary" 
                        onChange={handleSalary}
                        class="border border-gray-300 py-2 px-4 focus:ring-purple-600 block w-full pl-7 pr-12 sm:text-sm rounded-md" placeholder="0.00"/>
                    </div>
                </div>
                <div class="relative w-1/3 m-5">
                    <label for="salary" class="block text-sm font-medium text-gray-700">
                        Number of Posts
                    </label>
                    <div class="mt-1 relative rounded-md shadow-sm">
                        
                        <input type="text" name="posts" id="posts" 
                        onChange={handlePost}
                        class="border border-gray-300 py-2 px-4 focus:ring-purple-600 block w-full pl-7 pr-12 sm:text-sm rounded-md" placeholder="0"/>
                    </div>
                </div>
            
        </div>

        

        <div class="relative w-2/3 m-5 opacity-70 pointer-events-none">
            <label for="required-email" class="text-gray-700">
                Contact Email
                <span class="text-red-500 required-dot">
                    *
                </span>
            </label>
            <input type="text" onChange={handleEmail} value={window.localStorage.getItem("email")} id="required-email" disabled="" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Your email"/>
        </div>
        
        <div class="w-1/4 m-5">
        <button type="button" onClick={handleSubmit} class="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
            Submit
        </button>
        </div>



        </div>
    );
}

export default AddJob;