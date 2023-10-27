import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { FaEdit, FaTrashAlt, FaUser, FaUserShield } from 'react-icons/fa';
import { FaShield } from 'react-icons/fa6';
import Swal from 'sweetalert2';

const UserTable = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(result => setUsers(result))
    }, [])

    // const { data: users = [], refetch } = useQuery('users', async () => {
    //     const res = await fetch('http://localhost:5000/users');
    //     return res.json();
    //   });

    // make user admin
    const handleMakeAdmin = user => {
        const updatedUsers = users.map((u) => {
            if (u._id === user._id) {
                u.role = 'admin';
            }
            return u;
        });
        setUsers(updatedUsers);
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: "PATCH"
        })
            .then(res => res.json())
            .then(result => {
                if (result.modifiedCount) {
                    console.log("Admin approve");
                }
                
            })
    }

    const deleteHandler = (user) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You won\'t be able to revert this!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/users/${user?._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(result => {
                        if (result.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your user has been deleted.',
                                'success'
                            );
                            const remaining = users.filter(u => u._id !== user._id); 
                            setUsers(remaining);
                        }
                    })
                    .catch(error => {
                        Swal.fire(
                            'Error!',
                            'An error occurred while deleting the user.',
                            'error'
                        );
                    });
            }
        });
    };

    return (
        <div>
            <h2 className="text-gray-500 font-semibold mb-4">Dashboard / <span className='primary-text'>Users</span></h2>
            <div className="max-w-6xl mx-auto mt-6 bg-white rounded-lg shadow-md">
                <div className="overflow-x-auto rounded-lg">
                    <table className="min-w-full divide-y divide-gray-300 ">
                        <thead className="primary-bg">
                            <tr>
                                <th className="px-6 py-3 text-left text-md font-semibold text-gray-600"> # </th>
                                <th className="px-6 py-3 text-left text-md font-semibold text-gray-600"> Name </th>
                                <th className="px-6 py-3 text-left text-md font-semibold text-gray-600"> Email </th>
                                <th className="px-6 py-3 text-left text-md font-semibold text-gray-600"> Role </th>
                                <th className="px-6 py-3 text-left text-md font-semibold text-gray-600"> Actions </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white ">
                            {users.map((user, index) => (
                                <tr key={user._id} className='hover:bg-gray-50'>
                                    <td className="px-6 py-4">{index}</td>
                                    <td className="px-6 py-4">{user.name}</td>
                                    <td className="px-6 py-4">{user.email}</td>
                                    <td className="px-6 py-4">
                                        <button onClick={() => handleMakeAdmin(user)} className='text-2xl'>
                                            {
                                                user.role === 'admin' ? 'Admin'
                                                    : <FaUserShield />
                                            }
                                        </button>
                                    </td>
                                    <td className="px-6 py-4">
                                        <button onClick={() => deleteHandler(user)} className=" bg-red-700 hover:bg-red-500 text-white font-semibold py-2 px-4 rounded-lg transition duration-300">
                                            <FaTrashAlt></FaTrashAlt>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default UserTable;
