import Image from "next/image";
import Link from "next/link";
import React from "react";

const SuggestDoctorCard = ({
  doctor,
  index,
  setSelectedDoctor,
  selectedDoctor,
}) => {
  console.log("doctor single", doctor);
  return (
    <div
      onClick={() => setSelectedDoctor(doctor)}
      key={index}
      className={`p-3 shadow-xl  rounded w-[190px] bg-gray-200 hover:border hover:border-blue-600 cursor-pointer ${
        selectedDoctor?.id == doctor.id ? "border border-gray-100" : ""
      }`}
    >
      <div className="flex justify-center">
        <Image
          src={doctor.location.image_link}
          alt={doctor._id}
          width={150}
          height={150}
          className="w-[70px] h-[70px] rounded border border-sky-200 object-center object-cover"
        />
      </div>
      <div className="text-center">
        <h1 className="font-semibold">{doctor.details.specialization}</h1>
        <h1 className="font-semibold text-sm text-gray-500">
          {doctor.details.doctor_name}
        </h1>
        <Link href={`/doctorDetailsPage/${doctor?._id}`} className="btn bg-black px-4 btn-sm text-white">APPOINTMENT</Link>
      </div>
    </div>
  );
};

export default SuggestDoctorCard;
