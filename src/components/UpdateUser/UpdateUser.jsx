import React from 'react';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';

const UpdateUser = () => {
    const user = useLoaderData()
    // console.log(user._id);

    const handleupdateUser = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        const updateUser = { email, password }
        fetch(`http://localhost:5000/users/${user._id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }

    return (
        <div className="min-h-screen bg-gradient-to-r from-gray-200 to-blue-200 flex items-center justify-center p-4">
            <div className="bg-white shadow-xl rounded-lg p-6 max-w-md w-full">

                <div id="signIn">
                    <h1 className="text-2xl font-bold text-center mb-4">Update User</h1>
                    <form onSubmit={handleupdateUser}>
                        <div id="signInMessage" className="hidden"></div>
                        <div className="relative mb-4">
                            <FaEnvelope className="absolute left-2 top-3 text-gray-400" />
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Email"
                                defaultValue={user.email}
                                className="w-full border-b border-gray-400 focus:border-blue-500 focus:outline-none pl-8 py-2"
                                required
                            />

                        </div>
                        <div className="relative mb-4">
                            <FaLock className="absolute left-2 top-3 text-gray-400" />
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Password"
                                defaultValue={user.password}
                                className="w-full border-b border-gray-400 focus:border-blue-500 focus:outline-none pl-8 py-2"
                                required
                            />

                        </div>

                        <button
                            type="submit"
                            className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition duration-300"
                        >
                            Update
                        </button>
                    </form>



                </div>

            </div>
        </div>
    );
};

export default UpdateUser;