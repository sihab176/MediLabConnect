import { AIDoctorAgents } from '@/shared/list';
import React from 'react';
import DoctorAgentCard from './DoctorAgentCard';

const AiDoctorAgents = () => {
    return (
        <section className='max-w-7xl mx-auto mb-10'>
            <h2 className='text-4xl text-center font-bold my-10'>AI specialist Doctors</h2>
            <div className='grid lg:grid-cols-5  md:grid-cols-3 grid-cols-1 gap-5'>
                {
                    AIDoctorAgents.map((doctor,index)=>(
                        <div key={index}>
                         <DoctorAgentCard doctor={doctor}/>
                        </div>
                    ))
                }

            </div>
        </section>
    );
};

export default AiDoctorAgents;