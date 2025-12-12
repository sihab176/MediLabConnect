import Image from "next/image";
import Link from "next/link";
import React from "react";
import { LuExternalLink } from "react-icons/lu";
const Cards = ({ data }) => {
  // console.log( "this is  card data",data);
  return (
    <div key={data?._id}>
      <div className="block rounded-lg p-4 shadow-xs hover:shadow-2xl shadow-indigo-100">
        <Image
          alt="doctor image"
          src={data?.location?.image_link}
          width={200}
          height={180}
          className="h-56 w-full rounded-md object-cover"
        />

        <div className="mt-2">
          <dl>
            <div>
              <h2 className="text-sm text-sky-500">
                {data?.details?.specialization}
              </h2>
            </div>

            <div>
              <dt className="sr-only">Address</dt>

              <dd className="font-medium">{data?.details?.doctor_name}</dd>
            </div>
          </dl>

          <div className="mt-6 flex  items-center gap-2 justify-between text-xs">
            <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
              <svg
                className="size-4 text-indigo-700"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                />
              </svg>

              <div className="mt-1.5 sm:mt-0">
                <p className="text-gray-500">Center name</p>

                <p className="font-medium">{data?.location?.center_name}</p>
              </div>
            </div>
            <Link href={`/doctorDetailsPage/${data?._id}`}>
              <div>
                <LuExternalLink size={24} />
              </div>
            </Link>
            {/* <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
             

              <div className="mt-1.5 sm:mt-0">
                <p className="text-gray-500">Appointment time</p>

                <p className="font-medium">{data?.details?.appointment_time}</p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
