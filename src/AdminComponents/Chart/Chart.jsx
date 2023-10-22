import React from 'react';
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';
const data = [
    {
        "name": "Month A",
        "doctor": 0,
        "patient": 0,
        "amt": 10
    },
    {
        "name": "Month B",
        "doctor": 10,
        "patient": 20,
        "amt": 50
    },
    {
        "name": "Month C",
        "doctor": 30,
        "patient": 32,
        "amt": 60
    },
    {
        "name": "Month D",
        "doctor": 22,
        "patient": 50,
        "amt": 70
    },
    {
        "name": "Month E",
        "doctor": 30,
        "patient": 20,
        "amt": 80
    },
    {
        "name": "Month F",
        "doctor": 90,
        "patient": 38,
        "amt": 90
    },
    {
        "name": "Month G",
        "doctor": 3,
        "patient": 7,
        "amt": 100
    }
]

const Chart = () => {
    return (
        <div className='mt-20 bg-gray-50 w-[510px] rounded-lg shadow-lg hidden md:block lg:block' >
            <div className='flex justify-center gap-6'>
                <p className='font-bold pt-2 primary-text'>Doctor</p>
                <p className='font-bold pt-2 text-[#f43f5e]'>Patient</p>
            </div>
            <AreaChart width={500} height={250} data={data}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>

                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="doctor" stroke="#10b981" fillOpacity={1} fill="url(#colorUv)" />
                <Area type="monotone" dataKey="patient" stroke="#f43f5e" fillOpacity={1} fill="url(#colorUv)" />
            </AreaChart>
        </div>
    );
};

export default Chart;