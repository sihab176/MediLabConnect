import Image from "next/image";
import { FiMapPin, FiGlobe } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";

const DoctorAgentCard = ({ data }) => {
  return (
    <div className="w-full mb-3 bg-white shadow-md hover:shadow-lg transition-all rounded-2xl overflow-hidden border border-gray-200">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-4 p-4">

        {/* IMAGE */}
        <div className="w-full md:w-60 h-50 rounded-xl overflow-hidden flex-shrink-0">
          <Image
            src={data?.location.image_link || "/default-doctor.jpg"}
            alt={data?.details.doctor_name}
            width={300}
            height={300}
            className="w-full h-full object-cover"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex-1 lg:ml-8">

          {/* NAME */}
          <h2 className="text-xl font-semibold text-gray-900">
            {data?.details.doctor_name}
          </h2>

          {/* ADDRESS */}
          <p className="text-gray-600 flex items-center gap-2 text-sm mt-1">
            <FiMapPin className="text-gray-500" />
            {data?.location.address}
          </p>

          {/* SPECIALIZATION */}
          <p className="text-gray-700 mt-2 text-sm">
            <span className="font-semibold">Specialties: </span>
            {data?.details.specialization}
          </p>

          {/* LANGUAGES */}
          <p className="text-gray-700 mt-1 text-sm">
            <span className="font-semibold">Languages: </span>
            {data?.details.languages?.join(", ") || "English"}
          </p>

          {/* STAR RATING */}
          <div className="flex mt-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <span key={star} className="text-gray-400 text-xl">★</span>
            ))}
          </div>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-3 mt-4">

            <p className=" flex items-center  gap-2">
             <FaPhoneAlt/>  <span className="text-gray-500">{data?.location?.phone}</span>
            </p>

            {/* <button className="px-4 py-2 rounded-lg border text-sm border-gray-400 hover:bg-gray-100 flex items-center gap-1">
              <MdEmail /> EMAIL
            </button> */}

            <Link href={`/doctorDetailsPage/${data?._id}`} className="px-4 py-2 rounded-lg border text-sm border-gray-400 hover:bg-gray-100">
              APPOINTMENT
            </Link>

          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorAgentCard;
