import React from "react";
import Cards from "./Cards";
import { headers } from "next/headers";



const fetchData = async () => {
  const fetchData = await fetch("http://localhost:3000/api/allDoctors");
  const res = await fetchData.json();

  return res;
};

const CardContainer = async () => {
    const allData=await fetchData()
  return (
    <div className="my-20">
      this is ths card container
      <section className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8">
        {allData.map((data, index) => (
          <Cards data={data} index={index} />
        ))}
      </section>
    </div>
  );
};

export default CardContainer;
