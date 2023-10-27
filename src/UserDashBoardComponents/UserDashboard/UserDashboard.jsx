import React, { useState } from 'react';

const UserDashboard = () => {
    const [activeTab, setActiveTab] = useState('Appointments');

    const changeTab = (tabName) => {
        setActiveTab(tabName);
    };

    const tabClass = (tabName) =>
        activeTab === tabName
            ? 'primary-bg text-white'
            : 'hover:bg-[#74d1c6] hover:text-white';

    const tabContent = {
        Appointments: <>
            <div className="overflow-x-auto shadow-lg rounded-lg">
                <table className="min-w-full overflow-x-auto divide-y divide-gray-200">
                    <thead>
                        <tr>
                            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
                            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Appointment Id</th>
                            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Report Image</th>
                            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Appointment Date</th>
                            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount (৳)</th>
                            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Appointment Status</th>
                            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                            <td className="px-6 py-4">#1</td>
                            <td className="px-6 py-4">A123</td>
                            <td className="px-6 py-4">
                                <img src="report1.png" alt="Report" className="h-10 w-10" />
                            </td>
                            <td className="px-6 py-4">2023-10-28</td>
                            <td className="px-6 py-4">500৳</td>
                            <td className="px-6 py-4">Pending</td>
                            <td className="px-6 py-4">
                                <button className="text-indigo-600 hover:text-indigo-900">View</button>
                            </td>
                        </tr>
                        {/* Add more rows as needed */}
                    </tbody>
                </table>
            </div>
        </>,
        Prescriptions: <>
            <div className="overflow-x-auto shadow-lg rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                        <tr>
                            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
                            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Appointment Id</th>
                            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Appointment Date</th>
                            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created by</th>
                            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                            <td className="px-6 py-4">#1</td>
                            <td className="px-6 py-4">A123</td>
                            <td className="px-6 py-4">2023-10-28</td>
                            <td className="px-6 py-4">John Doe</td>
                            <td className="px-6 py-4">
                                <button className="text-indigo-600 hover:text-indigo-900">View</button>
                            </td>
                        </tr>
                        {/* Add more rows as needed */}
                    </tbody>
                </table>
            </div>
        </>,
        'Purchased Medicine': <>
            <div className="overflow-x-auto shadow-lg rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                        <tr>
                            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
                            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Appointment Id</th>
                            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount (৳)</th>
                            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Attachment</th>
                            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Payment Type</th>
                            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Payment Status</th>
                            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                            <td className="px-6 py-4">#1</td>
                            <td className="px-6 py-4">A123</td>
                            <td className="px-6 py-4">500৳</td>
                            <td className="px-6 py-4">
                                <a href="attachment1.pdf" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-900">
                                    View
                                </a>
                            </td>
                            <td className="px-6 py-4">Credit Card</td>
                            <td className="px-6 py-4">Paid</td>
                            <td className="px-6 py-4">
                                <button className="text-indigo-600 hover:text-indigo-900">View</button>
                            </td>
                        </tr>
                        {/* Add more rows as needed */}
                    </tbody>
                </table>
            </div>
        </>,
    };

    return (
        <div className="lg:min-h-screen ">
            <div className="lg:container lg:mx-auto p-4">
                <h1 className="text-2xl font-bold mb-4">User Dashboard</h1>
                <div className="flex space-x-4">
                    <button
                        className={`px-4 py-2 ${tabClass('Appointments')}`}
                        onClick={() => changeTab('Appointments')}
                    >
                        Appointments
                    </button>
                    <button
                        className={`px-4 py-2 ${tabClass('Prescriptions')}`}
                        onClick={() => changeTab('Prescriptions')}
                    >
                        Prescriptions
                    </button>
                    <button
                        className={`px-4 py-2 ${tabClass('Purchased Medicine')}`}
                        onClick={() => changeTab('Purchased Medicine')}
                    >
                        Purchased Medicine
                    </button>
                </div>
                <div className="mt-4">{tabContent[activeTab]}</div>
            </div>
        </div>
    );
};

export default UserDashboard;
