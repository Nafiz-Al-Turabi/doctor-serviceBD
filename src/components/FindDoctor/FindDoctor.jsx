import React, { useEffect, useState } from 'react';
import './FindDoctor.css'

const FindDoctor = () => {
    const truncateDescription = (description, words) => {
        const descriptionWords = description.split(' ');
        return descriptionWords.slice(0, words).join(' ');
    };
    const [doctors, setDoctors] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [filteredDoctors, setFilteredDoctors] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/doctors')
            .then(res => res.json())
            .then(result => {
                setDoctors(result);
                setFilteredDoctors(result);
            })
    }, [])

    const filterDoctors = () => {
        const lowerCaseSearchText = searchText.toLowerCase();
        const filtered = doctors.filter(doctor => {
            return (
                doctor.doctor_name.toLowerCase().includes(lowerCaseSearchText) ||
                doctor.specialist.toLowerCase().includes(lowerCaseSearchText)
            );
        });
        setFilteredDoctors(filtered);
    };

    // Handle search input change
    const handleSearchChange = (e) => {
        setSearchText(e.target.value);
        filterDoctors();
    };
    return (
        <div className=' bg-gray-50 pt-20'>

            <div
                className="find-doctor bg-cover pt-10">
                <div>
                    <div className='space-y-2 mb-4'>
                        <h1 className='text-center text-white text-4xl md:text-6xl font-extrabold '>FIND A DOCTOR!</h1>
                        <p className='lg:w-[60%] mx-auto text-center md:text-lg font-bold text-gray-300 px-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam architecto exercitationem optio nobis magni debitis quasi corporis voluptatibus cum voluptates omnis, sint voluptas ipsum suscipit. Eius modi temporibus reprehenderit corrupti?</p>
                    </div>
                    <form action="" className='flex justify-center '>
                        <input
                            className='md:w-[40%] secondary-text text-lg py-3 md:pl-5 focus:outline-none shadow-2xl shadow-cyan-50 rounded-l-full'
                            type="text"
                            placeholder='Search... '
                            value={searchText} onChange={handleSearchChange} />
                        <button type='submit' className='text-white font-bold text-lg py-3 px-6 primary-bg hover:bg-[#e74e84] duration-300 shadow-2xl shadow-cyan-500 hover:shadow-pink-500 rounded-r-full'>Search</button>
                    </form>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5 py-20 px-5'>
                {
                    filteredDoctors.map(doctor =>
                        <div className='find-card shadow-lg py-2 rounded-lg bg-white hover:-translate-y-2 '>
                            <div className='card-overlay rounded-tl-full'></div>
                            <div className=' md:flex lg:flex items-center space-x-4 '>
                                <div className='flex justify-center '>
                                    <img className='md:w-32 md:h-32 md:rounded-full' src={doctor.image} alt="" />
                                </div>
                                <div className='mt-5'>
                                    <p className='text-gray-400 text-sm uppercase font-bold'>{doctor.specialist}</p>
                                    <h1 className='text-2xl font-semibold primary-text'>{doctor.doctor_name}</h1>
                                    <p className='text-gray-400 text-sm uppercase font-bold'>{doctor.degree}</p>
                                    <p className='text-gray-500'>{truncateDescription(doctor.doctor_description, 16)}</p>

                                </div>
                            </div>
                            <hr className='my-2' />
                            <div className='flex justify-between px-2'>
                                <button className='font-semibold text-gray-500 hover:text-[#e74e84] duration-300'>More info</button>
                                <button className='text-[#74d1c6] font-bold text-xs py-1 px-4 border-2 border-[#74d1c6] rounded-full hover:bg-[#74d1c6] duration-300 ease-in hover:text-white'>Appointment</button>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default FindDoctor;