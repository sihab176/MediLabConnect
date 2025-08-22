// import React from "react";
// import Cards from "./Cards";
// import { headers } from "next/headers";



// const fetchData = async () => {
//   const fetchData = await fetch(`${process.env.NEXTAUTH_URL}/api/allDoctors`);
//   const res = await fetchData.json();

//   return res;
// };

// const CardContainer = async () => {
//     const allData=await fetchData()
//   return (
//     <div className="my-20">
//      <h2 className="text-3xl font-bold mb-10 text-center">Our Dedicated Doctors</h2>
//       <section className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8">
//         {allData.map((data) => (
//           <Cards data={data}  key={data._id}/>
//         ))}
//       </section>
//     </div>
//   );
// };

// export default CardContainer; 

import React from "react";
import Cards from "./Cards";

const fetchData = async () => {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/allDoctors`, {
    cache: "no-store", // optional
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch doctor details: ${res.status} ${res.statusText}`);
  }

  return res.json(); // এখানে সরাসরি JSON এ কনভার্ট করলাম
};

const CardContainer = async () => {
  const allData = await fetchData();

  return (
    <div className="my-20">
      <h2 className="text-3xl font-bold mb-10 text-center">
        Our Dedicated Doctors
      </h2>
      <section className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8">
        {allData.map((data) => (
          <Cards data={data} key={data._id} />
        ))}
      </section>
    </div>
  );
};

export default CardContainer;

