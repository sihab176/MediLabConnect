"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
import Modal from "../Modal";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const HistoryList = () => {
  const [historyList, setHistoryList] = useState([]);
  const [open, setOpen] = useState(false);
  const buttonRef=useRef(null)

  useGSAP(()=>{
    gsap.to(buttonRef.current,{
      y:-7,
      duration:1,
      repeat:-1,
      yoyo:true,
      ease:"power1.inOut"
    })
  },{scope:buttonRef})

  return (
    <section className="max-w-7xl mx-auto my-6">
      <div>
        {historyList.length === 0 ? (
          <div className="bg-blue-100 border-1 shadow-xl border-dashed border-gray-400 rounded text-center py-6 space-y-2">
            <div className="flex justify-center items-center ">
              <Image src="/aiDoctor.png" alt="" width={160} height={160} />
            </div>
            <h1 className="text-3xl font-semibold">Ask AI to Consultations</h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Your personal health assistant. Effortlessly discover top-rated
              doctors nearby and schedule your visit in seconds.
            </p>

            <button
            ref={buttonRef}
              onClick={() => setOpen(true)}
              className="btn bg-black px-3 py-1  text-white"
            >
              <span className="text-2xl">
                <IoIosAddCircle />
              </span>{" "}
              Start a Consultations
            </button>
          </div>
        ) : (
          <div>
            {/* History items will go here */}
            <p>History items will appear here</p>
            {/* Example: map over historyList */}
          </div>
        )}
      </div>
      {/* modal */}
      <Modal open={open} setOpen={setOpen} />
    </section>
  );
};

export default HistoryList;
