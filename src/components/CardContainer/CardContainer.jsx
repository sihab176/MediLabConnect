import React from "react";
import Cards from "./Cards";

export const fetchData = async () => {
  const res = await fetch(`http://localhost:3000/api/allDoctors`, {
    cache: "no-store", // optional
  });

  if (!res.ok) {
    throw new Error(
      `Failed to fetch doctor details: ${res.status} ${res.statusText}`
    );
  }

  return res.json();
};

const CardContainer = async () => {
  const allData = await fetchData();

  return (
    <div className="my-20 max-w-8xl mx-5 ">
      <h2 className="text-3xl font-bold mb-10 text-center">
        Our Dedicated Doctors
      </h2>
      <section className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8">
        {allData.slice(0, 8).map((data) => (
          <Cards data={data} key={data._id} />
        ))}
      </section>
    </div>
  );
};

export default CardContainer;
