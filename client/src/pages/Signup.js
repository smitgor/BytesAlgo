import { React, useEffect, useState } from "react";
import Axios from "axios";

const Signup = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");

    const handleUsername = e => {
        setUsername(e.target.value);
        // console.log(username);
    };
    const handleEmail = e => {
        setEmail(e.target.value);
        // console.log(email);
    };
    const handlePassword = e => {
        setPassword(e.target.value);
        // console.log(password);
    };
    const handleRole = e => {
        setRole(e.target.value);
        // console.log(role);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        Axios.post("http://localhost:3001/register", {
            username: username,
            email: email,
            password: password,
            role: role
        })
            .then(res => {
                console.log(res);
                if(res.data=== "user_exists")
                {
                    alert("User already exists");
                    window.location.href = "/login";
                }
                else if(res.data === "success")
                {
                    alert("User registered successfully");
                    window.location.href = "/login";
                }
            })
            .catch(err => {
                console.log(err);
            });
    }

  return (
    <div class="grid place-items-center h-screen">
    <div class="bg-white rounded-lg shadow sm:max-w-md sm:w-full sm:mx-auto sm:overflow-hidden">
        <div class="px-4 py-8 sm:px-10">
            <div class="relative mt-6">
                <div class="absolute inset-0 flex items-center">
                    <div class="w-full border-t border-gray-300"></div>
                </div>
                <div class="relative flex justify-center text-sm leading-5">
                    <span class="px-2 text-gray-500 bg-white">Enter Your Details</span>
                </div>
            </div>
            <form onSubmit={handleSubmit} autoComplete="off">
                <div class="mt-6">
                    <div class="w-full space-y-6">
                        <div class="w-full">
                            <div class=" relative ">
                                <input
                                type="text"
                                id="F_Name"
                                onChange={handleUsername}
                                class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:border-transparent"
                                placeholder="First Name"
                                />
                            </div>
                        </div>
                        <div class="w-full">
                            <div class=" relative ">
                                <input
                                type="text"
                                id="Email"
                                onChange={handleEmail}
                                class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:border-transparent"
                                placeholder="Email ID"
                                />
                            </div>
                        </div>
                        <div class="w-full">
                            <div class=" relative ">
                                <input
                                type="text"
                                id="Password"
                                onChange={handlePassword}
                                class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:border-transparent"
                                placeholder="Password"
                                />
                            </div>
                        </div>
                        <div class="w-full">
                            <div class="ml-0 mt-0 m-4">
                                Choose Your Role
                            </div>
                            <ul class="grid grid-cols-2 gap-x-5 max-w-md mx-auto">
                                <li class="relative">
                                    <input class="sr-only peer" type="radio" onChange={handleRole} value="recruiter" name="role" id="answer_recruiter"/>
                                    <label class="flex p-5 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-green-400 peer-checked:ring-2 peer-checked:border-transparent" for="answer_recruiter">Recruiter</label>

                                    <div class="absolute hidden w-5 h-5 peer-checked:block top-5 right-3">
                                    ✔
                                    </div>
                                </li>
                                <li class="relative">
                                    <input class="sr-only peer" type="radio" onChange={handleRole} value="candidate" name="role" id="answer_candidate"/>
                                    <label class="flex p-5 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-green-400 peer-checked:ring-2 peer-checked:border-transparent" for="answer_candidate">Candidate</label>

                                    <div class="absolute hidden w-5 h-5 peer-checked:block top-5 right-3">
                                    ✔
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <span class="block w-full rounded-md shadow-sm">
                                <button
                                type="submit"
                                class="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                                >
                                Register
                                </button>
                            </span>
                        </div>
                    </div>
                </div>
            </form>
        </div>
        <div class="flex items-center justify-center mt-0 mb-8">
            <a href="/login" class="inline-flex items-center text-xs font-thin text-center text-gray-500 hover:text-gray-700 dark:text-gray-100 dark:hover:text-white">
                <span class="ml-2">
                    Already have an account?
                </span>
            </a>
        </div>
    </div>
    </div>
  );
};

export default Signup;
