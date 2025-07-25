import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
  {
    question: "We Readily Embrace Newness",
    answer: (
      <>
        Technology is not standing anywhere, it’s moving; and it’s moving fast. To match its pace, you need to seek Vel Infotech assistance. We provide latest Classroom & online live instructor led courses like AWS, Python, Data Science, AI, Machine Learning, Hadoop, Devops, Angular, Java, Oracle and SAS. All our course offerings are in sync with industry demands. Hence, by gaining expertise in them, you make yourself industry ready, that too without really attending any brick and mortar technology school.
      </>
    ),
  },
  {
    question: "We cater to your learning needs, irrespective of your location",
    answer: (
      <>
        Vel Infotech offers flexible online learning options for students and working professionals across the globe. No matter where you are, our quality education reaches you.
      </>
    ),
  },
  {
    question: "You receive training from a great faculty",
    answer: (
      <>
        All our trainers are experienced professionals and subject matter experts who are passionate about teaching and mentoring.
      </>
    ),
  },
  {
    question: "By enrolling yourself in one of our courses, you expose yourself to a cross",
    answer: (
      <>
        By joining Vel Infotech, you join a diverse community of learners, collaborate on projects, and build a strong professional network.
      </>
    ),
  },
  {
    question: "Study on your own schedule",
    answer: (
      <>
        Enjoy self-paced learning and attend live classes at your convenience. Access course materials anytime, anywhere.
      </>
    ),
  },
  {
    question: "Who can benefit?",
    answer: (
      <>
        Students, fresh graduates, career changers, and working professionals can all take advantage of our industry-aligned courses.
      </>
    ),
  },
  {
    question: "Why Vel Infotech?",
    answer: (
      <>
        We deliver industry-driven curriculum, experienced faculty, and personalized support to help you succeed in your IT career.
      </>
    ),
  },
];

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(0);

  const toggleIdx = idx => setOpenIdx(openIdx === idx ? null : idx);

  return (
    <section className="py-12 bg-[#f9fafb]">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2 text-gray-800">
          What Makes us Different
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Vel Infotech presents you the most popular courses which are recommended to study by our experts.
        </p>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded shadow">
              <button
                onClick={() => toggleIdx(idx)}
                className={`w-full text-left px-6 py-4 flex items-center justify-between focus:outline-none ${
                  openIdx === idx ? "font-bold" : "font-semibold"
                } text-lg text-gray-800`}
              >
                <span>{faq.question}</span>
                <span>
                  {openIdx === idx ? (
                    <FaMinus className="text-gray-400" />
                  ) : (
                    <FaPlus className="text-gray-400" />
                  )}
                </span>
              </button>
              {openIdx === idx && (
                <div className="px-6 pb-6 text-gray-700 text-base animate-fadeIn">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Optional fadeIn animation
// Add in your global CSS (e.g., index.css):
// @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
// .animate-fadeIn { animation: fadeIn 0.3s; }
