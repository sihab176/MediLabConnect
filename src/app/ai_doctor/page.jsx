import AiDoctorAgents from '@/components/AiDoctorAgents/AiDoctorAgents';
import HistoryList from '@/components/historyList/HistoryList';
import Navbar from '@/components/Navbar/Navbar';
import React from 'react';

const AIdoctor = () => {
    return (
        <section>
            <div className='sticky top-0 left-0 w-full z-[50]'>
                <Navbar/>
            </div>
            <HistoryList/>
            <AiDoctorAgents/>
        </section>
    );
};

export default AIdoctor;



