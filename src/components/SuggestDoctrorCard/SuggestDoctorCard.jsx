import Image from "next/image";
import React from "react";

const SuggestDoctorCard = ({ doctor, index ,setSelectedDoctor ,selectedDoctor }) => {
  return (
    <div onClick={setSelectedDoctor(doctor)} key={index} className={`p-3 shadow-xl  rounded w-[190px] bg-gray-200 hover:border hover:border-blue-600 cursor-pointer ${selectedDoctor?.id== doctor.id ? "border border-blue-500":""}`}>
      <div className="flex justify-center">
        <Image
        src={doctor.image}
        alt={doctor.id}
        width={150}
        height={150}
        className="w-[70px] h-[70px] rounded-full border border-purple-600"
      />
      </div>
      <div className="text-center">
        <h1 className="font-semibold">{doctor.specialist}</h1>
        <p className="text-sm text-gray-400 line-clamp-2">
          {doctor.description}
        </p>
      
      </div>
    </div>
  );
};

export default SuggestDoctorCard;
