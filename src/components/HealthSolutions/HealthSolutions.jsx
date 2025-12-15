import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect } from "react";
import { FaBone, FaTooth, FaBrain, FaHeartbeat } from "react-icons/fa";
import { GiPelvisBone } from "react-icons/gi";

const services = [
  {
    id: "01",
    title: "Orthopedic Care Sector",
    desc: "Specialized treatment for bones, joints, and muscles with modern care.",
    icon: <GiPelvisBone />,
  },
  {
    id: "02",
    title: "Dentistry Department",
    desc: "Complete dental solutions with advanced technology and care.",
    icon: <FaTooth />,
  },
  {
    id: "03",
    title: "Neurology Department",
    desc: "Expert care for brain and nervous system disorders.",
    icon: <FaBrain />,
  },
  {
    id: "04",
    title: "Cardiology Sector",
    desc: "Comprehensive heart care with experienced specialists.",
    icon: <FaHeartbeat />,
  },
];
gsap.registerPlugin(ScrollTrigger);
const HealthSolutions = () => {

    useEffect(() => {
    gsap.fromTo(
      ".hs-header",
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".hs-header",
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      ".hs-card",
      { x: -60, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".hs-card",
          start: "top 85%",
        },
      }
    );
  }, []);

  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="hs-header flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-14">
          <div>
            <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-4 py-1 rounded-full mb-4">
              Our Department
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 leading-tight">
              Extra Ordinary <br /> Health Solutions
            </h2>
          </div>

          <p className="max-w-md text-gray-600 text-sm">
            Delivering modern healthcare solutions with expert doctors, advanced
            equipment, and patient-focused services.
          </p>

          <button className="bg-blue-600 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-blue-700 transition">
            More Department
          </button>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((item) => (
            <div
              key={item.id}
              className="hs-card group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition duration-300 hover:-translate-y-2"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-sm font-semibold text-blue-300 rounded-full p-4 bg-gray-200">
                  {item.id}
                </span>
                <h3 className="font-semibold text-lg text-blue-900 mb-3">
                  {item.title}
                </h3>
              </div>

              <div >
                <div className="w-20 h-20 rounded-xl bg-blue-100 text-[#4bb6c6]  flex items-center justify-center text-6xl group-hover:bg-[#4bb6c6]  group-hover:text-white transition">
                  {item.icon}
                </div>
              </div>

              <p className="text-sm text-gray-600 mb-6">{item.desc}</p>

              <button className="text-sm font-semibold text-blue-600 hover:underline">
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HealthSolutions;
