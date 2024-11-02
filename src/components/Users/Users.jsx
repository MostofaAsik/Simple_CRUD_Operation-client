import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Users = () => {
    const loadedUser = useLoaderData()
    const [users, setUsers] = useState(loadedUser)
    const handleDelete = (id) => {
        fetch(`http://localhost:5000/users/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    const remaining = users.filter(user => user._id !== id)
                    setUsers(remaining)
                }
            })
    }

    return (
        <div>

            {
                users.map(user => {
                    return <div key={user._id}>
                        <p >
                            {user.email}

                            <Link to={`/userUpdate/${user._id}`}>
                                <button className='btn btn-primary'>Update</button>
                            </Link>
                            <button className='btn btn-square' onClick={() => handleDelete(user._id)}>Delete</button>

                        </p>
                    </div>
                }
                )
            }
        </div>
    );
};

export default Users;