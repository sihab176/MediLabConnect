// import Image from "next/image";

// const CareProcess = () => {
//   return (
//     <section className="bg-[#4bb6c6] pt-10 px-6">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">

//         {/* LEFT CONTENT */}
//         <div className="text-white">
//           <p className="uppercase text-sm tracking-wide mb-2">
//             How it works
//           </p>

//           <h2 className="text-3xl md:text-4xl font-bold mb-10">
//             Our Simple & Effective <br /> Care Process
//           </h2>

//           {/* STEP 1 */}
//           <div className="flex gap-4 mb-4  p-3 border-b-2 border-gray-300">
//             <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#4bb6c6] font-bold">
//               01
//             </div>
//             <div>
//               <h4 className="font-semibold text-lg">
//                 Initial Consultation
//               </h4>
//               <p className="text-sm opacity-90 ">
//                 Present legibus tempus quam. Posset vider 
//                 catus in <br /> quorum gravid semper.
//               </p>
//             </div>
//           </div>

//           {/* STEP 2 */}
//           <div className="flex gap-4 mb-6 border-b-2 border-gray-300 p-3">
//             <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#4bb6c6] font-bold">
//               02
//             </div>
//             <div>
//               <h4 className="font-semibold text-lg">
//                 Personalized Care Plan
//               </h4>
//               <p className="text-sm opacity-90">
//                 Present legibus tempus quam. Posset vider
//                 catus in <br /> quorum gravid semper.
//               </p>
//             </div>
//           </div>

//           {/* STEP 3 */}
//           <div className="flex gap-4  border-b-2 border-gray-300 p-3">
//             <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#4bb6c6] font-bold">
//               03
//             </div>
//             <div>
//               <h4 className="font-semibold text-lg">
//                 Ongoing Care & Support
//               </h4>
//               <p className="text-sm opacity-90">
//                 Present legibus tempus quam. Posset vider
//                 catus in <br /> quorum gravid semper.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* RIGHT IMAGE */}
//         {/* <div className="flex justify-center md:justify-end ">
//           <Image
//             src="/nurse.png"
//             alt="Doctor"
//             width={420}
//             height={520}
//             className="object-contain"
//             priority
//           />
//         </div> */}
//         {/* RIGHT IMAGE SECTION */}
// <div className="relative flex justify-center md:justify-end h-full min-h-[500px]">
  
//   {/* Clip-path Background Shape */}
//   <div 
//     className="absolute inset-y-0 right-0 w-full md:w-[120%] bg-[#87d677cc] -z-10"
//     style={{ clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0% 100%)" }}
//   ></div>

//   {/* The Nurse Image */}
//   <div className="relative z-10 self-end">
//     <Image
//       src="/nurse.png"
//       alt="Doctor"
//       width={420}
//       height={520}
//       className="object-contain"
//       priority
//     />
//   </div>
// </div>

//       </div>
//     </section>
//   );
// };

// export default CareProcess;

import Image from "next/image";

const CareProcess = () => {
  return (
    
    <section className="bg-[#4bb6c6]  px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">

        {/* LEFT CONTENT */}
        <div className="text-white py-10">
          <p className="uppercase text-sm tracking-wide mb-2 opacity-80">
            How it works
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mb-10 leading-tight">
            Our Simple & Effective <br /> Care Process
          </h2>

          <div className="space-y-6">
            {/* STEP 1 */}
            <div className="flex gap-4 p-3 border-b border-white/30 hover:shadow-xl hover:shadow-white/35 hover:border hover:border-gray-300 rounded cursor-pointer">
              <div className="min-w-[40px] h-10 flex items-center justify-center rounded-full bg-white text-[#4bb6c6] font-bold">
                01
              </div>
              <div>
                <h4 className="font-semibold text-xl">Initial Consultation</h4>
                <p className="text-sm opacity-90 mt-1 text-gray-600">
                  Present legibus tempus quam. Posset vider <br /> catus in quorum gravid semper.
                </p>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="flex gap-4 p-3 border-b border-white/30 hover:shadow-xl hover:shadow-white/35 hover:border hover:border-gray-300 rounded cursor-pointer hover:border-t-0">
              <div className="min-w-[40px] h-10 flex items-center justify-center rounded-full bg-white text-[#4bb6c6] font-bold">
                02
              </div>
              <div>
                <h4 className="font-semibold text-xl">Personalized Care Plan</h4>
                <p className="text-sm opacity-90 mt-1 text-gray-600 ">
                  Present legibus tempus quam. Posset vider <br /> catus in quorum gravid semper.
                </p>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="flex gap-4 p-3 border-b border-white/30 hover:shadow-xl hover:shadow-white/35 hover:border hover:border-gray-300 rounded cursor-pointer hover:border-t-0">
              <div className="min-w-[40px] h-10 flex items-center justify-center rounded-full bg-white text-[#4bb6c6] font-bold">
                03
              </div>
              <div>
                <h4 className="font-semibold text-xl">Ongoing Care & Support</h4>
                <p className="text-sm opacity-90 mt-1 text-gray-600">
                  Present legibus tempus quam. Posset vider <br /> catus in quorum gravid semper.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE SECTION */}
        <div className="relative flex justify-center md:justify-end h-full w-full">
          
          {/* Clip-path Background Shape */}
          {/* w-[200%] ব্যবহার করা হয়েছে যাতে ডানে কোনো গ্যাপ না থাকে */}
          <div 
            className="absolute inset-y-0 left-0 md:left-[-10%] w-[200%] bg-[#5fc5d5] z-0"
            style={{ 
              clipPath: "polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%)" 
            }}
          ></div>

          {/* The Nurse Image */}
          <div className="relative z-5 pt-10">
            <Image
              src="/nurse.png" 
              alt="Doctor"
              width={450}
              height={550}
              className="object-contain"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default CareProcess;