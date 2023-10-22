import React from 'react';
import { FaEdit } from 'react-icons/fa';

const UserTable = () => {
    const users = [
        { id: 1, name: 'John Doe', email: 'john@example.com' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
        // Add more user data as needed
    ];

    const handleEditUser = (userId) => {
        // Handle the edit action here
    };

    return (
        <div>
            <h2 className="text-gray-500 font-semibold mb-4">Dashboard / <span className='primary-text'>Users</span></h2>
            <div className="w-full overflow-x-auto">
                <table className="min-w-full bg-white shadow-lg rounded-lg overflow-hidden">
                    <thead>
                        <tr>
                            <th className="px-6 py-3 bg-[#74d1c6] text-left text-xs leading-4 font-semibold text-white uppercase">Name</th>
                            <th className="px-6 py-3 bg-[#74d1c6] text-left text-xs leading-4 font-semibold text-white uppercase">Email</th>
                            <th className="px-6 py-3 bg-[#74d1c6]"></th>
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        {users.map((user) => (
                            <tr key={user.id}>
                                <td className="px-6 py-4 border-b border-gray-300">
                                    <div className="flex items-center space-x-4">
                                        <div className="flex-shrink-0 h-10 w-10">
                                            <img className="h-10 w-10 rounded-full" src={user.avatarUrl} alt="" />
                                        </div>
                                        <div className="text-sm font-medium text-gray-900">{user.name}</div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 border-b border-gray-300">
                                    <div className="text-sm text-gray-900">{user.email}</div>
                                </td>
                                <td className="px-6 py-4 border-b border-gray-300 text-right">
                                    <button
                                        className="text-[#74d1c6] hover:text-cyan-950 duration-300"
                                        onClick={() => handleEditUser(user.id)}
                                    >
                                        <FaEdit />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserTable;
