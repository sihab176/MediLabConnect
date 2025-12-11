"use client"
import Image from 'next/image';
import React from 'react';
import { IoIosAddCircle } from 'react-icons/io';

const DoctorAgentCard = ({doctor}) => {

    // console.log(doctor);
    return (
        <section className='hover:shadow hover:shadow-3xl p-3 shadow-xl'>
            <Image src={doctor.image} alt='' width={200} height={230} className='w-full h-[240px] rounded object-cover' />
            <h3 className='text-xl font-semibold text-gray-800'>{doctor.specialist}</h3>
            <p className='line-clamp-2  text-sm text-gray-400'>{doctor.description}</p>
             <button className="btn bg-black/80 px-3 py-1 w-full text-sm btn-sm  text-white"><span className="text-xl"><IoIosAddCircle /></span> Start a Consultations</button>

        </section>
    );
};

export default DoctorAgentCard;