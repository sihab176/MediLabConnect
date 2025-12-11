"use client";
import Image from "next/image";
import React, { useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
import Modal from "../Modal";

const HistoryList = () => {
  const [historyList, setHistoryList] = useState([]);
  const [open, setOpen] = useState(false);
 

  return (
    <section className="max-w-7xl mx-auto my-6">
      <div>
        {historyList.length === 0 ? (
          <div className="bg-blue-100 border-1 shadow-xl border-dashed border-gray-400 rounded text-center py-6 space-y-2">
            <div className="flex justify-center items-center ">
              <Image src="/aiDoctor.png" alt="" width={160} height={160} />
            </div>
            <h1 className="text-3xl font-bold">No Recent Consultations</h1>
            <p>It looks like you haven't consulted with andy doctors yet.</p>

            <button
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
      <Modal open={open} setOpen={setOpen}   />
    </section>
  );
};

export default HistoryList;
