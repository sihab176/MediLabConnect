import Image from "next/image";
import { FaCheck } from "react-icons/fa";

const MedicalTreatment = () => {
  return (
    <section className="py-20 px-6 bg-white ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* LEFT SIDE: DOCTOR IMAGES WITH CLIP-PATH BACKGROUND */}
        <div className="relative flex justify-center items-center">
          {/* Clip-path background */}
          <div
            className="absolute z-0 w-[420px] h-[420px] bg-[#334d82] opacity-90"
            style={{
              clipPath:
                "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
            }}
          />

          {/* Doctors Image */}
          <div className="relative z-4">
            <Image
              src="/tow_doc.png"
              alt="Medical Team"
              width={750}
              height={700}
              className="object-contain w-[490px] h-[490px]"
            />
          </div>
        </div>

        {/* RIGHT SIDE: CONTENT */}
        <div className="flex flex-col space-y-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1a2b4b] leading-tight">
            We always Insure Best Medical Treatment for your health.
          </h2>

          <p className="text-gray-500 leading-relaxed max-w-lg">
            Helping you always is our best health to health to trust. Lorem
            ipsum dolor sit, amet consectetur elit.
          </p>

          <p className="text-gray-500 leading-relaxed max-w-lg">
            Helping you always is our best health to health to trust. Ut sed do
            eiusmod tempor incididunt the atram cosusblua.
          </p>

          {/* Features List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 pt-4">
            {[
              "Small Patient Support",
              "Registered Nurse",
              "Easy Online Booking",
              "Easy Space Nurse",
              "Latest Technology",
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 group">
                <div className="text-blue-600 text-xs">
                  <FaCheck />
                </div>
                <span className="text-[#1a2b4b] font-semibold text-sm group-hover:text-blue-600 transition-colors">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="pt-6">
            <button className="bg-[#4161a3] hover:bg-[#334d82] text-white font-bold py-4 px-8 rounded-md transition-all uppercase text-sm tracking-wider">
              Get a Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MedicalTreatment;
