import React from 'react';
import doctor from '../../assets/doctors/doctor2.png'
import doctor1 from '../../assets/doctors/doctor1.png'

const OurSpecialist = () => {
    return (
        <div className='py-10 md:py-20 bg-gray-100 lg:py-20 px-4'>
            <div className='text-center mb-4'>
                <h1 className=' text-3xl md:text-5xl font-bold mb-2'>Browse by Specialities</h1>
                <p className='w-[90%] lg:w-[50%] mx-auto'>Lorem ipsum dolor sit amet, elit. Euismod habitasse pulvinar faucibus eget.Lorem ipsum dolor sit amet, elit. Euismod habitasse pulvinar faucibus eget.</p>
            </div>
            <div class=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div>
                    <div class="bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg">
                        <div className='flex justify-center'>
                            <img class="rounded-t-lg" src={doctor} alt="" />
                        </div>
                        <div class="py-6 px-8 rounded-lg bg-white">
                            <h1 class="text-gray-700 font-bold text-xl mb-3 hover:text-gray-900 hover:cursor-pointer">Anesthesiology Specialist.</h1>
                            <p class="text-gray-700 text-justify tracking-wide">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, labore. Ea debitis beatae sequi deleniti.</p>
                            <button class="mt-6 py-2 px-4 primary-bg text-white font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300">More info</button>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg">
                        <div className='flex justify-center'>
                            <img class="rounded-t-lg" src={doctor1} alt="" />
                        </div>
                        <div class="py-6 px-8 rounded-lg bg-white">
                            <h1 class="text-gray-700 font-bold text-xl mb-3 hover:text-gray-900 hover:cursor-pointer">Cardiology Specialist.</h1>
                            <p class="text-gray-700 text-justify tracking-wide">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, labore. Ea debitis beatae sequi deleniti.</p>
                            <button class="mt-6 py-2 px-4 primary-bg text-white font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300">More info</button>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg">
                        <div className='flex justify-center'>
                            <img class="rounded-t-lg" src={doctor} alt="" />
                        </div>
                        <div class="py-6 px-8 rounded-lg bg-white">
                            <h1 class="text-gray-700 font-bold text-xl mb-3 hover:text-gray-900 hover:cursor-pointer">Dermatology Specialist.</h1>
                            <p class="text-gray-700 text-justify tracking-wide">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, labore. Ea debitis beatae sequi deleniti.</p>
                            <button class="mt-6 py-2 px-4 primary-bg text-white font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300">More info</button>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg">
                        <div className='flex justify-center'>
                            <img class="rounded-t-lg" src={doctor1} alt="" />
                        </div>
                        <div class="py-6 px-8 rounded-lg bg-white">
                            <h1 class="text-gray-700 font-bold text-xl mb-3 hover:text-gray-900 hover:cursor-pointer">Cardiothoracic surgery.</h1>
                            <p class="text-gray-700 text-justify tracking-wide">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, labore. Ea debitis beatae sequi deleniti.</p>
                            <button class="mt-6 py-2 px-4 primary-bg text-white font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300">More info</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurSpecialist;