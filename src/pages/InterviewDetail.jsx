import React, { useState } from "react";
import { useParams } from "react-router-dom";

const InterviewDetail = () => {
  const { id } = useParams();
  const [level, setLevel] = useState("fresher");

  const data = {
    telephone: {
      title: "Telephone Interview Questions and Answers",
      fresher: [
        {
          question: "How do you greet someone in a telephone interview?",
          answer:
            "Start with a polite greeting like 'Good morning, this is [Your Name]. Thank you for calling.'",
        },
        {
          question: "What’s the best way to introduce yourself over a call?",
          answer:
            "Briefly mention your name, education or experience, and express enthusiasm for the role.",
        },
        {
          question: "Are you comfortable speaking in English over the phone?",
          answer:
            "Yes, I’ve practiced conversational English and am confident in handling calls professionally.",
        },
        {
          question: "How do you handle silence during phone interviews?",
          answer:
            "Stay calm, give the interviewer time, or ask clarifying questions politely if needed.",
        },
        {
          question: "Why are you interested in this job?",
          answer:
            "I see this role as a great opportunity to develop my communication and customer-handling skills.",
        },
      ],
      experience: [
        {
          question: "How do you handle difficult clients on the phone?",
          answer:
            "I remain calm, listen actively, and try to resolve their concerns with empathy and clear communication.",
        },
        {
          question:
            "Describe a situation where you resolved an issue via phone.",
          answer:
            "Once a customer had billing issues; I verified records and explained charges clearly, which resolved the case.",
        },
        {
          question: "What KPIs do you track for telephone-based performance?",
          answer:
            "Call quality, first-call resolution, average handle time, and customer satisfaction score (CSAT).",
        },
        {
          question: "How do you multitask while on client calls?",
          answer:
            "I use system tools efficiently and maintain notes while listening attentively.",
        },
        {
          question: "How do you train juniors on call etiquette?",
          answer:
            "By demonstrating proper techniques and reviewing sample calls together.",
        },
      ],
      batches: [
        {
          name: "Telephone",
          date: "28 - July - 2025",
          mode: "(Weekdays) Weekdays Regular",
        },
        {
          name: "Telephone",
          date: "30 - July - 2025",
          mode: "(Weekdays) Weekdays Regular",
        },
        {
          name: "Telephone",
          date: "02 - Aug - 2025",
          mode: "(Weekends) Weekend Regular",
        },
        {
          name: "Telephone",
          date: "03 - Aug - 2025",
          mode: "(Weekends) Weekend Fasttrack",
        },
      ],
    
    },
    genpact: {
      title: "Genpact Interview Questions and Answers",
      fresher: [
        {
          question: "What do you know about Genpact?",
          answer:
            "Genpact is a global professional services firm delivering digital transformation using data and technology.",
        },
        {
          question: "Tell me about yourself.",
          answer:
            "I'm a recent graduate with strong communication skills, eager to start my career at a reputed firm like Genpact.",
        },
        {
          question: "Why should we hire you?",
          answer:
            "I'm a fast learner with great interpersonal skills and can adapt quickly to BPO environments.",
        },
        {
          question: "Are you comfortable working in night shifts?",
          answer:
            "Yes, I’m flexible with shifts and understand the business needs.",
        },
        {
          question: "Explain a situation where you worked in a team.",
          answer:
            "During college, I led a group project where we collaborated efficiently to meet a tight deadline.",
        },
      ],
      experience: [
        {
          question: "Describe your role in the last project.",
          answer:
            "I was responsible for handling escalations, maintaining SLA compliance, and mentoring new team members.",
        },
        {
          question: "How do you handle deadlines under pressure?",
          answer:
            "I prioritize tasks, stay organized, and remain focused under stress to meet all deadlines.",
        },
        {
          question: "How do you manage client communication?",
          answer:
            "I maintain regular updates, clear documentation, and always ensure alignment with client expectations.",
        },
        {
          question: "What are the KPIs you’ve worked with in BPO?",
          answer: "AHT, FCR, CSAT, QA score, and NPS.",
        },
        {
          question: "Have you mentored junior team members?",
          answer:
            "Yes, I’ve guided trainees during onboarding and helped them improve performance through feedback.",
        },
      ],
       batches: [
        {
          name: "Telephone",
          date: "28 - July - 2025",
          mode: "(Weekdays) Weekdays Regular",
        },
        {
          name: "Telephone",
          date: "30 - July - 2025",
          mode: "(Weekdays) Weekdays Regular",
        },
        {
          name: "Telephone",
          date: "02 - Aug - 2025",
          mode: "(Weekends) Weekend Regular",
        },
        {
          name: "Telephone",
          date: "03 - Aug - 2025",
          mode: "(Weekends) Weekend Fasttrack",
        },
      ],
    },

    behavioural: {
      title: "Behavioural Interview Questions and Answers",
      fresher: [
        {
          question:
            "Tell me about a time you faced a challenge and how you overcame it.",
          answer:
            "During a college group project, we had tight deadlines. I coordinated with my team, delegated tasks, and ensured we completed the project on time.",
        },
        {
          question: "Describe a situation where you worked as part of a team.",
          answer:
            "In my final year project, I collaborated with three classmates to build a web app. We divided responsibilities and supported each other throughout.",
        },
        {
          question: "How do you handle feedback or criticism?",
          answer:
            "I take it as an opportunity to grow. I listen actively, reflect on it, and apply it to improve my performance.",
        },
        {
          question: "Give an example of when you showed initiative.",
          answer:
            "In my internship, I proposed an idea to improve data entry efficiency, which was later implemented by the team.",
        },
        {
          question: "Describe a goal you set and how you achieved it.",
          answer:
            "I aimed to improve my public speaking, so I joined a Toastmasters club and practiced regularly, which boosted my confidence.",
        },
      ],
      experience: [
        {
          question:
            "Describe a time you had to manage multiple responsibilities.",
          answer:
            "As a team lead, I managed client deliverables while mentoring juniors and conducting quality checks, using time management tools effectively.",
        },
        {
          question: "How do you resolve conflicts in a team?",
          answer:
            "I ensure open communication, listen to both sides, and find a compromise that aligns with team goals.",
        },
        {
          question:
            "Share an example of when you had to make a difficult decision.",
          answer:
            "Once, I had to reassign a critical task last-minute due to a team member's absence. I balanced priorities and ensured timely delivery.",
        },
        {
          question: "Tell me about a time you failed and what you learned.",
          answer:
            "I once underestimated a project's scope, which caused delays. I learned to allocate buffer time and communicate better with stakeholders.",
        },
        {
          question: "How do you motivate others?",
          answer:
            "I recognize team members' strengths, appreciate their efforts, and encourage open communication to boost morale.",
        },
      ],
       batches: [
        {
          name: "Telephone",
          date: "28 - July - 2025",
          mode: "(Weekdays) Weekdays Regular",
        },
        {
          name: "Telephone",
          date: "30 - July - 2025",
          mode: "(Weekdays) Weekdays Regular",
        },
        {
          name: "Telephone",
          date: "02 - Aug - 2025",
          mode: "(Weekends) Weekend Regular",
        },
        {
          name: "Telephone",
          date: "03 - Aug - 2025",
          mode: "(Weekends) Weekend Fasttrack",
        },
      ],
    },

    personal: {
      title: "Personal Interview Questions and Answers",
      fresher: [
        {
          question: "Tell me about yourself.",
          answer:
            "I’m a recent graduate in Computer Science, passionate about technology and eager to start my career in a dynamic company.",
        },
        {
          question: "What are your strengths and weaknesses?",
          answer:
            "My strengths are quick learning and communication. My weakness is overthinking, which I’m improving through time management techniques.",
        },
        {
          question: "Where do you see yourself in 5 years?",
          answer:
            "I see myself as a skilled professional, contributing to my company’s success and continuously learning to grow into a leadership role.",
        },
        {
          question: "Why should we hire you?",
          answer:
            "I bring energy, adaptability, and a willingness to learn. I’m committed to adding value from day one.",
        },
        {
          question: "What motivates you?",
          answer:
            "Solving problems, learning new skills, and achieving team goals motivate me.",
        },
      ],
      experience: [
        {
          question: "How do you manage work-life balance?",
          answer:
            "I prioritize tasks, set boundaries, and make time for personal wellness and professional development.",
        },
        {
          question: "What is your leadership style?",
          answer:
            "I lead by example, communicate clearly, and ensure every team member feels valued and supported.",
        },
        {
          question: "What are your long-term career goals?",
          answer:
            "I aim to take on challenging roles, deepen my expertise, and eventually contribute at a strategic level in the organization.",
        },
        {
          question: "How do you handle criticism from superiors?",
          answer:
            "I welcome it constructively, evaluate the feedback, and implement changes to improve performance.",
        },
        {
          question: "What does success mean to you?",
          answer:
            "Success is achieving personal and professional goals while maintaining integrity, balance, and growth.",
        },
      ],
       batches: [
        {
          name: "Telephone",
          date: "28 - July - 2025",
          mode: "(Weekdays) Weekdays Regular",
        },
        {
          name: "Telephone",
          date: "30 - July - 2025",
          mode: "(Weekdays) Weekdays Regular",
        },
        {
          name: "Telephone",
          date: "02 - Aug - 2025",
          mode: "(Weekends) Weekend Regular",
        },
        {
          name: "Telephone",
          date: "03 - Aug - 2025",
          mode: "(Weekends) Weekend Fasttrack",
        },
      ],
    },
  };

  const selected = data[id];

  const handleLevelClick = (type) => {
    setLevel(type);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-[#f0f4ff] to-white pt-[140px] px-4 p-12 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-800 mb-8">
          {selected?.title || "Not Found"}
        </h1>

        {selected?.fresher && selected?.experience && (
          <div className="flex justify-center gap-6 mb-10">
            <button
              onClick={() => handleLevelClick("fresher")}
              className={`px-6 py-3 rounded-full text-lg font-medium shadow-md transition ${
                level === "fresher"
                  ? "bg-blue-700 text-white"
                  : "bg-white text-blue-700 border border-blue-700 hover:bg-blue-50"
              }`}
            >
              Fresher
            </button>
            <button
              onClick={() => handleLevelClick("experience")}
              className={`px-6 py-3 rounded-full text-lg font-medium shadow-md transition ${
                level === "experience"
                  ? "bg-blue-700 text-white"
                  : "bg-white text-blue-700 border border-blue-700 hover:bg-blue-50"
              }`}
            >
              Experience
            </button>
          </div>
        )}

        {selected?.[level] && (
          <div className="bg-white border rounded-xl shadow-lg p-6 text-left space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 capitalize border-b pb-2">
              {level} Interview Questions & Answers
            </h2>
            {selected[level].map((item, index) => (
              <div key={index} className="bg-gray-50 border rounded p-4">
                <p className="font-semibold text-gray-900 mb-1">
                  Q{index + 1}. {item.question}
                </p>
                <p className="text-gray-700">Ans: {item.answer}</p>
              </div>
            ))}
          </div>
        )}

        {/* ✅ Upcoming Batches Section */}
        {selected?.batches && (
          <div className="mt-12 text-left">
            <h2 className="text-2xl font-bold text-blue-800 mb-4 border-b pb-2">
              Upcoming Batches
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300">
                <thead>
                  <tr className="bg-blue-900 text-white text-left">
                    <th className="py-3 px-4 border-r">Name</th>
                    <th className="py-3 px-4 border-r">Date</th>
                    <th className="py-3 px-4">Details</th>
                  </tr>
                </thead>
                <tbody>
                  {selected.batches.map((batch, index) => (
                    <tr key={index} className="border-t hover:bg-blue-50">
                      <td className="py-3 px-4 text-blue-700 font-medium">
                        {batch.name}
                      </td>
                      <td className="py-3 px-4">
                        <div className="font-semibold text-gray-800">{batch.date}</div>
                        <div className="text-gray-600 text-sm">{batch.mode}</div>
                      </td>
                      <td className="py-3 px-4">
                        <a
                          href="#"
                          className="text-blue-600 hover:text-blue-800 font-medium"
                        >
                          View Details
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InterviewDetail;