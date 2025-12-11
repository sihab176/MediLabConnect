import Image from "next/image";
import React from "react";

const SuggestDoctorCard = ({ doctor, index }) => {
  //       {
  //     "id": 1,
  //     "specialist": "General Physician",
  //     "description": "Helps with everyday health concerns and common symptoms.",
  //     "image": "/doctor1.png",
  //     "agentPrompt": "You are a friendly General Physician AI...",
  //     "voiceId": "will",
  //     "subscriptionRequired": false,
  //     "reason": "Pain is a common symptom..."
  //   }
  return (
    <div key={index} className="p-3 shadow-xl  rounded w-[140px] bg-gray-200">
      <div className="flex justify-center">
        <Image
        src={doctor.image}
        alt={doctor.id}
        width={150}
        height={150}
        className="w-[60px] rounded-full border border-purple-600"
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
