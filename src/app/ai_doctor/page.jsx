import AiDoctorAgents from '@/components/AiDoctorAgents/AiDoctorAgents';
import HistoryList from '@/components/historyList/HistoryList';
import Navbar from '@/components/Navbar/Navbar';
import React from 'react';

const AIdoctor = () => {
    return (
        <section>
            <Navbar/>
            <HistoryList/>
            <AiDoctorAgents/>
        </section>
    );
};

export default AIdoctor;