// components/MedicalTeam.jsx
"use client";
import Image from "next/image";

const MedicalTeam = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Iron Ndonald",
      role: "Founder, Design Director",
      qualification: "MRS. CENA 6/7",
      image: "/team/iron-ndonald.jpg", // Replace with your actual image path
    },
    {
      id: 2,
      name: "Kelly Smith",
      role: "Prof. OPC, Insider",
      qualification: "Prof. LOF",
      image: "/team/kelly-smith.jpg",
    },
    {
      id: 3,
      name: "Daan Reynolds",
      role: "MS. AFC 4/5/8",
      qualification: "MRS. CENA 6/7",
      image: "/team/daan-reynolds.jpg",
    },
    {
      id: 4,
      name: "Lindsay Kohan",
      role: "Therapy Specialist",
      qualification: "Ph.D. Therapy",
      image: "/team/lindsay-kohan.jpg",
    },
    {
      id: 5,
      name: "Chang Sukumar",
      role: "Medical Researcher",
      qualification: "MD, Research",
      image: "/team/chang-sukumar.jpg",
    },
    {
      id: 6,
      name: "Brad Kai",
      role: "Senior Physician",
      qualification: "MD, Internal Medicine",
      image: "/team/brad-kai.jpg",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Our team of doctors and therapists
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet our dedicated team of healthcare professionals committed to
            providing the best care for our patients.
          </p>
        </div>
        <div className="flex  justify-between md:flex-row flex-col  items-center  lg:mx-20">
            {/* first */}
          <div className="space-y-7">
            <section className="flex items-center gap-2">
              <div className="">
                <Image
                  src="/med-1.png"
                  alt="doctor"
                  width={90}
                  height={90}
                  className="object-cover rounded-full ring-2 ring-sky-600"
                />
              </div>
              <div>
                <h3 className="text-2xl text-bold">Dr.Mickel bars</h3>
                <p className="">Oncology</p>
              </div>
            </section>
            <section className="flex items-center gap-2 ">
              <div className="">
                <Image
                  src="/med-2.png"
                  alt="doctor"
                  width={90}
                  height={90}
                  className="object-cover rounded-full ring-2 ring-sky-600"
                />
              </div>
              <div >
                <h3 className="text-2xl text-bold">Dr.Mickel bars</h3>
                <p className="">Oncology</p>
              </div>
            </section>
            <section className="flex items-center gap-2">
              <div className="">
                <Image
                  src="/med-3.jpeg"
                  alt="doctor"
                  width={90}
                  height={90}
                  className="object-cover rounded-full ring-2 ring-sky-600"
                />
              </div>
              <div>
                <h3 className="text-2xl text-bold">Dr.Mickel bars</h3>
                <p className="">Oncology</p>
              </div>
            </section>
          </div>
          {/* second */}
          <div>
                <Image
                  src="/main-rem.png"
                  alt="doctor"
                  width={400}
                  height={400}
                  className="object-cover rounded-full ring-2 ring-sky-600"
                />
          </div>
          {/* third */}
          <div className="space-y-7">
            <section className="flex items-center gap-2">
              <div className="">
                <Image
                  src="/med-4.png"
                  alt="doctor"
                  width={90}
                  height={90}
                  className="object-cover rounded-full ring-2 ring-sky-600"
                />
              </div>
              <div>
                <h3 className="text-2xl text-bold">Dr.Mickel bars</h3>
                <p className="">Oncology</p>
              </div>
            </section>
            <section className="flex items-center gap-2">
              <div className="">
                <Image
                  src="/med-5.png"
                  alt="doctor"
                  width={90}
                  height={90}
                  className="object-cover rounded-full ring-2 ring-sky-600"
                />
              </div>
              <div>
                <h3 className="text-2xl text-bold">Dr.Mickel bars</h3>
                <p className="">Oncology</p>
              </div>
            </section>
            <section className="flex items-center gap-2">
              <div className="">
                <Image
                  src="/med-6.jpeg"
                  alt="doctor"
                  width={90}
                  height={90}
                  className="object-cover rounded-full ring-2 ring-sky-600"
                />
              </div>
              <div>
                <h3 className="text-2xl text-bold">Dr.Mickel bars</h3>
                <p className="">Oncology</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MedicalTeam;
