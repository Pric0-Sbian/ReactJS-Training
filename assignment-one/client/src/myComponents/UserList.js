import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function UserList() {

    const [users, setUser] = useState([]);
    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:3000/users");
        setUser(result.data);
    };
    const deleteUser = async id => {
        await axios.delete(`http://localhost:3000/users/${id}`);
        loadUsers();
        alert("User Deleted");
    }

    return (
        <div className="container">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                        {
                            users.map((user, index)=>(
                                <tr>
                                    <th scope="row">{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phone}</td>
                                    <td>
                                        <Link className="btn btn-primary ms-1" to={`/user/edit/${user.id}`}>Edit</Link>
                                        <Link className="btn btn-danger ms-1" onClick={() => deleteUser(user.id)}>Delete</Link>
                                    </td>
                                </tr>
                                
                            ))
                                
                    }
                </tbody>
            </table>
        </div>
    )
}
