import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import bgPlacement from "../assets/bgplacement.jpg";
import { FiGrid, FiCircle, FiSearch, FiBriefcase } from "react-icons/fi";

/* =========================
   DATA SECTION
   ========================= */
const placed = [
  { id: 1,  name: "Rajasopi", company: "Yaway Tech", designation: "HR", course: "—", lpa: 1.5, notes: "15K/month approx" },
  { id: 2,  name: "Muthukrishnan Gopal", company: "Cognizant", designation: "ETL Testing", course: "ETL", lpa: 9 },
  { id: 3,  name: "Srinivasan V", company: "Capgemini", designation: "ETL Testing", course: "ETL", lpa: 8 },
  { id: 4,  name: "Manikam Ponnusamy", company: "L&T", designation: "ETL", course: "ETL", lpa: 8.5 },
  { id: 5,  name: "Kanimozhi Saravanan", company: "Citibank", designation: "Java Developer", course: "Java", lpa: 8.5 },
  { id: 6,  name: "Harish Kumar", company: "Expleo", designation: "Manual Tester", course: "Testing", lpa: 3.5 },
  { id: 7,  name: "Balaji V", company: "—", designation: "Desktop Support", course: "—", lpa: 2.0 },
  { id: 8,  name: "Jone Cathy", company: "—", designation: "Java Developer", course: "Java", lpa: 11.5 },
  { id: 9,  name: "Chalapathi", company: "—", designation: "HW/SW Testing", course: "Testing", lpa: 3.5 },
  { id:10,  name: "Yamini", company: "Expleo", designation: "Manual Tester", course: "Testing", lpa: 7 },
  { id:11,  name: "Naveen Kumar", company: "Expleo", designation: "Manual Tester", course: "Testing", lpa: 7 },
  { id:12,  name: "Priya Dharshini", company: "Axis Bank", designation: "—", course: "—", lpa: null },
  { id:13,  name: "Babu Mani", company: "Virtusa", designation: "ETL", course: "ETL", lpa: 7 },
  { id:15,  name: "Jay Bharathi", company: "Expleo", designation: "Manual Tester", course: "Testing", lpa: 3.5 },
  { id:16,  name: "Nithiya Swaminathan", company: "Capgemini", designation: "Selenium Tester", course: "Selenium", lpa: 8 },
  { id:17,  name: "Raghunath Srinivasan", company: "DXC", designation: "Networking", course: "Networking", lpa: 9 },
  { id:18,  name: "Sudha Selvarajan", company: "Expleo", designation: "Data Analyst", course: "Data Science", lpa: 6.5 },
  { id:19,  name: "Shyam Kumar", company: "Infosys", designation: "Networking", course: "Networking", lpa: 4 },
  { id:20,  name: "John Vimal", company: "Virtusa", designation: "PL/SQL Developer", course: "PL/SQL", lpa: 12 },
];

/* CATEGORY DATA */
const categoryData = [
  { id:1, label:"Non-IT to IT (Career Transition)", count:"155+", gradient:"from-[#005BAC] to-[#0078D7]" },
  { id:2, label:"Diploma Candidates", count:"147+", gradient:"from-[#005BAC] to-[#0078D7]" },
  { id:3, label:"Non-Engineering (Arts & Science)", count:"118+", gradient:"from-[#005BAC] to-[#0078D7]" },
  { id:4, label:"Engineering Students", count:"107+", gradient:"from-[#005BAC] to-[#0078D7]" },
  { id:5, label:"CTC Greater than 5 LPA", count:"178+", gradient:"from-[#005BAC] to-[#0078D7]" },
  { id:6, label:"Academic Percentage Less than 60%", count:"136+", gradient:"from-[#005BAC] to-[#0078D7]" },
  { id:7, label:"Career Break / Gap Students", count:"159+", gradient:"from-[#005BAC] to-[#0078D7]" },
  { id:8, label:"Freshers Hired", count:"120+", gradient:"from-[#005BAC] to-[#0078D7]" },
  { id:9, label:"Working Professionals Upskilled", count:"180+", gradient:"from-[#005BAC] to-[#0078D7]" },
];

const roleDataColumns = [
  [
    { role: "Data Analysts", count: "132+" },
    { role: "Fullstack Developers", count: "180+" },
    { role: "Python Developers", count: "140+" },
    { role: "Java Developers", count: "150+" },
    { role: "Software Testers", count: "123+" },
    { role: "Data Scientists", count: "101+" },
    { role: "AWS Engineers", count: "178+" },
  ],
  [
    { role: "Digital Marketing Executives", count: "171+" },
    { role: "Cloud Engineers", count: "112+" },
    { role: "Salesforce Developer", count: "119+" },
    { role: "PowerBI Developer", count: "183+" },
    { role: "Microsoft Azure Developer", count: "171+" },
    { role: "ServiceNow Engineers", count: "142+" },
    { role: "Angular Developers", count: "188+" },
  ],
  [
    { role: "Ethical Hackers", count: "185+" },
    { role: "React Developers", count: "101+" },
    { role: ".NET Developers", count: "119+" },
    { role: "Network Engineers", count: "171+" },
    { role: "Business Analysts", count: "142+" },
    { role: "AI Engineers", count: "183+" },
    { role: "Business Intelligence Developers", count: "188+" },
  ],
];

/* ========= HELPERS ========= */
const GRADS = [
  "from-[#005BAC] to-[#003c6a]",
  "from-indigo-600 to-blue-600",
  "from-cyan-600 to-teal-600",
  "from-rose-600 to-pink-600",
  "from-amber-600 to-orange-600",
];
const initials = (name="") => name.split(" ").filter(Boolean).slice(0,2).map(s=>s[0]?.toUpperCase()).join("");
const gradFor = (key) => { let h=0; for (let i=0;i<key.length;i++) h=key.charCodeAt(i)+((h<<5)-h); return GRADS[Math.abs(h)%GRADS.length]; };
const band = (lpa) => {
  if (lpa == null) return { label: "—", cls: "bg-gray-200 text-gray-700" };
  if (lpa < 4) return { label: `${lpa} LPA`, cls: "bg-orange-100 text-orange-800" };
  if (lpa < 7) return { label: `${lpa} LPA`, cls: "bg-amber-100 text-amber-800" };
  if (lpa < 10) return { label: `${lpa} LPA`, cls: "bg-emerald-100 text-emerald-800" };
  if (lpa < 13) return { label: `${lpa} LPA`, cls: "bg-sky-100 text-sky-800" };
  return { label: `${lpa} LPA`, cls: "bg-violet-100 text-violet-800" };
};

/* =============================
   COMPONENT
   ============================= */
const PlacedStudents = () => {
  const [mode, setMode] = useState("classroom");
  const [view, setView] = useState("cards");
  const [q, setQ] = useState("");
  const [company, setCompany] = useState("All");
  const [role, setRole] = useState("All");
  const [sort, setSort] = useState("recent");

  const companies = useMemo(() => ["All", ...Array.from(new Set(placed.map(p => p.company).filter(Boolean)))], []);
  const roles = useMemo(() => ["All", ...Array.from(new Set(placed.map(p => p.designation).filter(Boolean)))], []);

  const filtered = useMemo(() => {
    let data = placed;
    const term = q.trim().toLowerCase();
    if (term) data = data.filter(s => [s.name, s.company, s.designation, s.course, String(s.lpa ?? "")]
      .join(" ").toLowerCase().includes(term));
    if (company !== "All") data = data.filter(s => s.company === company);
    if (role !== "All") data = data.filter(s => s.designation === role);
    if (sort === "lpaHigh") data = [...data].sort((a,b)=>(b.lpa??-1)-(a.lpa??-1));
    else if (sort === "lpaLow") data = [...data].sort((a,b)=>(a.lpa??999)-(b.lpa??999));
    return data;
  }, [q, company, role, sort]);

  return (
    <div className="bg-background pb-10">

      {/* HERO SECTION */}
      <div
        className="relative w-full mt-[54px] sm:mt-[100px] h-[250px] sm:h-[320px] md:h-[390px] flex items-center justify-start px-3 sm:px-8 md:px-10"
        style={{ backgroundImage:`url(${bgPlacement})`, backgroundRepeat:"no-repeat", backgroundPosition:"center", backgroundSize:"100% 100%" }}
      >
        {/* ✅ PAGE-LEVEL H1 */}
        <h1 className="relative z-10 text-3xl md:text-4xl text-white font-bold leading-snug">
          Placed Students List
        </h1>
      </div>

      {/* INTRO SECTION */}
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white shadow-md rounded-lg p-6 border border-blue-400">
            {/* ✅ H2 for first sub-section */}
            <h2 className="text-2xl font-bold text-gray-800 mb-2 border-b-2 border-gray-400 inline-block">
              List of Students Placed from Vel InfoTech
            </h2>
            <p className="text-gray-600 mt-5 leading-relaxed">
              Our learners are successfully placed in leading IT and non-IT companies across various domains such as Development, Testing, Cloud, and Analytics.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-lg px-4 py-3 border border-blue-400">
            <h2 className="text-2xl font-bold text-gray-800 mb-2 border-b-2 border-gray-400 inline-block">
              Training and Placement Support
            </h2>
            <p className="text-gray-700 mt-4 leading-relaxed">
              Each learner undergoes hands-on training, mock interviews, and career mentorship — ensuring strong placement outcomes.
            </p>
          </div>
        </div>
      </div>

      {/* CATEGORY SECTION */}
      <div className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-3xl font-semibold text-center text-gray-900 mb-5">
          Placement Categories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {categoryData.map((item, i) => (
            <motion.div key={item.id} initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}} viewport={{once:true}}
              transition={{duration:0.5,delay:i*0.1,ease:"easeOut"}}
              className={`bg-gradient-to-br ${item.gradient} p-6 rounded-xl shadow-md text-center`}>
              {/* ✅ H3 for nested cards */}
              <h3 className="text-lg font-semibold text-white mb-2">{item.label}</h3>
              <span className="inline-block px-3 py-1 rounded-full bg-white text-sm font-bold text-gray-800">{item.count}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ROLE-BASED SECTION */}
      <div className="max-w-8xl mx-auto px-4 pb-10">
        <h2 className="text-3xl font-semibold text-center text-gray-900 mb-6">
          Role-Based Placements
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {roleDataColumns.map((col, i) => (
            <div key={i} className="rounded-lg shadow-md bg-blue-700 p-4">
              <h3 className="text-xl font-bold text-center text-white mb-4">Placement Roles</h3>
              {col.map((r, idx) => (
                <div key={idx} className="flex justify-between items-center py-2 px-4 my-2 rounded-lg bg-white">
                  <span className="text-sm sm:text-base text-gray-800 font-medium">{r.role}</span>
                  <span className="px-3 py-1 text-xs sm:text-sm font-bold rounded-full bg-yellow-300 text-gray-800">{r.count}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* DETAILED PLACEMENTS */}
      <div className="max-w-7xl mx-auto px-4 pb-10">
        <h2 className="text-3xl font-semibold text-center text-gray-900 mb-4">
          Placed Students (Detailed)
        </h2>

        {/* Search & Filters */}
        <div className="flex flex-wrap gap-3 items-center justify-between mb-6">
          <div className="relative">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              value={q}
              onChange={(e)=>setQ(e.target.value)}
              placeholder="Search name, company, role…"
              className="pl-9 pr-3 py-2 rounded-xl bg-white border border-gray-300 focus:ring-2 focus:ring-[#003c6a] w-72"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            <select value={company} onChange={(e)=>setCompany(e.target.value)} className="px-3 py-2 rounded-xl border bg-white">
              {companies.map(c => <option key={c}>{c}</option>)}
            </select>
            <select value={role} onChange={(e)=>setRole(e.target.value)} className="px-3 py-2 rounded-xl border bg-white">
              {roles.map(r => <option key={r}>{r}</option>)}
            </select>
            <select value={sort} onChange={(e)=>setSort(e.target.value)} className="px-3 py-2 rounded-xl border bg-white">
              <option value="recent">Sort: Recent</option>
              <option value="lpaHigh">Sort: LPA High → Low</option>
              <option value="lpaLow">Sort: LPA Low → High</option>
            </select>

            <div className="inline-flex rounded-xl overflow-hidden border">
              <button onClick={()=>setView("cards")} className={`px-3 py-2 ${view==="cards"?"bg-[#003c6a] text-white":"bg-white"}`}><FiGrid/></button>
              <button onClick={()=>setView("circles")} className={`px-3 py-2 ${view==="circles"?"bg-[#003c6a] text-white":"bg-white"}`}><FiCircle/></button>
            </div>
          </div>
        </div>

        {/* Card or Circle view */}
        {view === "cards" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((s, i) => {
              const grad = gradFor(s.company + s.name);
              const b = band(s.lpa);
              return (
                <motion.div key={s.id} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}}
                  transition={{duration:0.35, delay:i*0.03}} whileHover={{y:-4}}
                  className="group bg-white border border-gray-200 rounded-2xl shadow hover:shadow-lg transition">
                  <div className={`h-20 w-full rounded-t-2xl bg-gradient-to-r ${grad}`} />
                  <div className="-mt-8 px-5 pb-5">
                    <div className="w-16 h-16 rounded-2xl bg-white shadow ring-2 ring-white flex items-center justify-center -mt-8 mb-3">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${grad} text-white font-bold flex items-center justify-center`}>
                        {initials(s.name)}
                      </div>
                    </div>
                    {/* ✅ H3 for each student's name */}
                    <h3 className="text-lg font-bold text-[#0f172a] leading-tight">{s.name}</h3>
                    <p className="text-sm text-gray-500 flex items-center gap-2 mt-1">
                      <FiBriefcase className="opacity-70" /><span className="font-medium">{s.company}</span>
                    </p>
                    <div className="mt-3 text-sm flex items-center justify-between">
                      <p className="font-medium text-gray-800">{s.designation}</p>
                      <span className={`px-2.5 py-1 text-xs font-semibold rounded-full ${b.cls}`}>{b.label}</span>
                    </div>
                    {s.course && <div className="mt-2 text-xs font-semibold inline-block bg-[#e0f2fe] text-[#003c6a] px-2 py-1 rounded-full">{s.course}</div>}
                    {s.notes && <p className="mt-2 text-xs text-gray-500">{s.notes}</p>}
                  </div>
                </motion.div>
              );
            })}
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-6">
            {filtered.map((s, i) => {
              const grad = gradFor(s.name + s.company);
              const b = band(s.lpa);
              return (
                <motion.div key={s.id} initial={{opacity:0,scale:0.9}} whileInView={{opacity:1,scale:1}} viewport={{once:true}}
                  transition={{duration:0.35, delay:i*0.02}}
                  className="bg-white border border-gray-200 rounded-3xl p-4 text-center shadow hover:shadow-md">
                  <div className={`mx-auto w-24 h-24 rounded-full bg-gradient-to-br ${grad} text-white font-extrabold text-xl flex items-center justify-center`}>
                    {initials(s.name)}
                  </div>
                  <h3 className="mt-3 font-bold text-[#0f172a]">{s.name}</h3>
                  <p className="text-sm text-gray-500">{s.company}</p>
                  <p className="text-xs mt-1 text-gray-700">{s.designation}</p>
                  <div className="mt-2">
                    <span className={`inline-block px-2 py-0.5 text-[11px] rounded-full ${b.cls}`}>{b.label}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}

        {filtered.length === 0 && (
          <div className="text-center text-gray-500 mt-10">
            No students match your search.
          </div>
        )}
      </div>

      {/* PLACEMENT HIGHLIGHTS */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-7 items-center px-4 pb-10">
        <div className="bg-white shadow-2xl rounded-3xl p-8 border border-gray-200">
          <h2 className="text-2xl font-extrabold text-gray-800 mb-5">
            Placement Highlights
          </h2>
          <ul className="list-disc list-inside text-gray-800 space-y-2">
            <li><strong>Industry Trends:</strong> Real-time skills required by top companies</li>
            <li><strong>Top Domains:</strong> Fullstack, Cloud, Testing, Data Science</li>
            <li><strong>Placement Support:</strong> For both freshers and experienced professionals</li>
          </ul>
        </div>

        {/* ENQUIRY FORM */}
        <div className="w-full max-w-md mx-auto bg-white shadow-2xl rounded-3xl p-8 border border-gray-200">
          <h2 className="text-2xl font-bold mb-4 text-center bg-gradient-to-r from-[#005BAC] to-[#003c6a] bg-clip-text text-transparent">
            Get a Free Training Quote
          </h2>
          <div className="flex justify-center mb-5 gap-2">
            <button onClick={()=>setMode("classroom")} className={`flex-1 py-2 rounded-full ${mode==="classroom"?"bg-gradient-to-r from-[#005BAC] to-[#003c6a] text-white":"bg-gray-100 border"}`}>Classroom</button>
            <button onClick={()=>setMode("online")} className={`flex-1 py-2 rounded-full ${mode==="online"?"bg-gradient-to-r from-[#005BAC] to-[#003c6a] text-white":"bg-gray-100 border"}`}>Online</button>
          </div>
          <form className="flex flex-col gap-4">
            <input type="text" placeholder="Your Name" className="rounded-xl bg-background px-3 py-2 border focus:ring-2 focus:ring-[#003c6a]" />
            <input type="email" placeholder="Your Email" className="rounded-xl bg-background px-3 py-2 border focus:ring-2 focus:ring-[#003c6a]" />
            <div className="flex gap-3">
              <input type="tel" placeholder="Mobile Number" className="rounded-xl bg-background px-3 py-2 border w-1/2 focus:ring-2 focus:ring-[#003c6a]" />
              <select defaultValue="" className="rounded-xl bg-background px-3 py-2 border w-1/2 focus:ring-2 focus:ring-[#003c6a]">
                <option value="" disabled>How & Where</option>
                <option>Morning Batch</option>
                <option>Evening Batch</option>
                <option>Weekend</option>
              </select>
            </div>
            <input type="text" placeholder="Type Course" className="rounded-xl bg-background px-3 py-2 border focus:ring-2 focus:ring-[#003c6a]" />
            <textarea placeholder="Your Message" rows={1} className="rounded-xl bg-background px-3 py-2 border focus:ring-2 focus:ring-[#003c6a]" />
            <button className="bg-gradient-to-r from-[#005BAC] to-[#003c6a] text-white font-bold px-3 py-2 rounded-xl shadow-lg">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PlacedStudents;
