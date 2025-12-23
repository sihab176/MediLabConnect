import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <>
     <div className=" flex items-center justify-center mt-20">
      <Image src={'/unauthorized.png'} alt="unauthorized-image" width={600} height={600}/>

      
    </div>
    <div className="flex justify-center items-center">
        <button className="btn bg-teal-600 text-white py-2 px-3 rounded">BACK HOME PAGE </button>
    </div>
    </>
   
  );
};

export default page;
