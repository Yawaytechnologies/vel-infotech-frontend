import { FaClock, FaChalkboardTeacher, FaUserGraduate, FaMoneyBillWave, FaUserTie, FaClipboardCheck, FaCertificate, FaBook } from "react-icons/fa";

const features = [
  {
    icon: <FaClock className="text-white text-2xl md:text-3xl" />,
    title: "Flexible Timings",
    desc: "Our real-time professionals helps you to learn any...",
    bg: "bg-[#005877]",
  },
  {
    icon: <FaChalkboardTeacher className="text-white text-2xl md:text-3xl" />,
    title: "Fully Hands-On-Training",
    desc: "earn anytime from anywhere. Utilize your...",
    bg: "bg-[#15c864]",
  },
  {
    icon: <FaUserGraduate className="text-white text-2xl md:text-3xl" />,
    title: "17000+ Student Last Year",
    desc: "95% positive feedback. Have a look of...",
    bg: "bg-[#b94d6d]",
  },
  {
    icon: <FaMoneyBillWave className="text-white text-2xl md:text-3xl" />,
    title: "Affordable Fees",
    desc: "No matter what your current issue is...",
    bg: "bg-[#ffa425]",
  },
  {
    icon: <FaUserTie className="text-white text-2xl md:text-3xl" />,
    title: "Corporate Expert Trainer",
    desc: "best certified trainer & real time projects...",
    bg: "bg-[#c21a28]",
  },
  {
    icon: <FaClipboardCheck className="text-white text-2xl md:text-3xl" />,
    title: "Updated Syllabus",
    desc: "best curriculum designed by industrial expert....",
    bg: "bg-[#005877]",
  },
  {
    icon: <FaCertificate className="text-white text-2xl md:text-3xl" />,
    title: "Earn A Global Certificate",
    desc: "accredited by all major global companies around the world...",
    bg: "bg-[#83706d]",
  },
  {
    icon: <FaBook className="text-white text-2xl md:text-3xl" />,
    title: "Lifetime Study Material",
    desc: "Access Study Materials, Videos & Top MNC Interview Question...",
    bg: "bg-[#0883e9]",
  },
];

export default function WhyChooseUs() {
  return (
       <section className="py-6 md:py-10 px-2 md:px-4 max-w-7xl mx-auto">
      <h2 className="text-xl md:text-2xl font-bold text-center mb-1">
        Why to Choose Us
      </h2>
      <p className="text-base md:text-lg text-center mb-7 text-gray-700">
        Our courses catalogue enable individuals and teams to perform.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-0 border border-gray-200 rounded-xl overflow-hidden">
        {features.map((item, i) => {
          // Figure out if it's in the last column (no border-r)
          // or in the last row (no border-b)
          // For 4 columns:
          const isLastCol = (i + 1) % 4 === 0;
          const isLastRow = i >= features.length - 4;
          return (
            <div
              key={i}
              className={`
                flex flex-col items-center text-center
                p-5 md:p-6 transition-all duration-200 cursor-pointer group
                bg-white
                hover:bg-[#005BAC]/10
                ${!isLastCol ? "border-r border-gray-200" : ""}
                ${!isLastRow ? "border-b border-gray-200" : ""}
              `}
            >
              <span className={`w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-3 shadow ${item.bg} transition-all duration-200 group-hover:bg-[#005BAC]`}>
                {item.icon}
              </span>
              <h3 className="text-lg  font-semibold mb-1 text-gray-800">{item.title}</h3>
              <p className="text-gray-700 text-sm md:text-base">{item.desc}</p>
            </div>
          );
        })}
      </div>
    </section>  
  );
}
