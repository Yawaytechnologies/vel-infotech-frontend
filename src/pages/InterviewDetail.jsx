import React, { useState } from "react";
import { useParams } from "react-router-dom";

const InterviewDetail = () => {
  const { id } = useParams();
  const [level, setLevel] = useState(null); // null | 'fresher' | 'experience'

  const data = {
    telephone: {
      title: "Telephone Interview Questions and Answers",
      fresher: [
        {
          question: "How do you greet someone in a telephone interview?",
          answer: "Start with a polite greeting like 'Good morning, this is [Your Name]. Thank you for calling.'",
        },
        {
          question: "What’s the best way to introduce yourself over a call?",
          answer: "Briefly mention your name, education or experience, and express enthusiasm for the role.",
        },
        {
          question: "Are you comfortable speaking in English over the phone?",
          answer: "Yes, I’ve practiced conversational English and am confident in handling calls professionally.",
        },
        {
          question: "How do you handle silence during phone interviews?",
          answer: "Stay calm, give the interviewer time, or ask clarifying questions politely if needed.",
        },
        {
          question: "Why are you interested in this job?",
          answer: "I see this role as a great opportunity to develop my communication and customer-handling skills.",
        },
      ],
      experience: [
        {
          question: "How do you handle difficult clients on the phone?",
          answer: "I remain calm, listen actively, and try to resolve their concerns with empathy and clear communication.",
        },
        {
          question: "Describe a situation where you resolved an issue via phone.",
          answer: "Once a customer had billing issues; I verified records and explained charges clearly, which resolved the case.",
        },
        {
          question: "What KPIs do you track for telephone-based performance?",
          answer: "Call quality, first-call resolution, average handle time, and customer satisfaction score (CSAT).",
        },
        {
          question: "How do you multitask while on client calls?",
          answer: "I use system tools efficiently and maintain notes while listening attentively.",
        },
        {
          question: "How do you train juniors on call etiquette?",
          answer: "By demonstrating proper techniques and reviewing sample calls together.",
        },
      ],
    },
    genpact: {
      title: "Genpact Interview Questions and Answers",
      fresher: [
        {
          question: "What do you know about Genpact?",
          answer: "Genpact is a global professional services firm delivering digital transformation using data and technology.",
        },
        {
          question: "Tell me about yourself.",
          answer: "I'm a recent graduate with strong communication skills, eager to start my career at a reputed firm like Genpact.",
        },
        {
          question: "Why should we hire you?",
          answer: "I'm a fast learner with great interpersonal skills and can adapt quickly to BPO environments.",
        },
        {
          question: "Are you comfortable working in night shifts?",
          answer: "Yes, I’m flexible with shifts and understand the business needs.",
        },
        {
          question: "Explain a situation where you worked in a team.",
          answer: "During college, I led a group project where we collaborated efficiently to meet a tight deadline.",
        },
      ],
      experience: [
        {
          question: "Describe your role in the last project.",
          answer: "I was responsible for handling escalations, maintaining SLA compliance, and mentoring new team members.",
        },
        {
          question: "How do you handle deadlines under pressure?",
          answer: "I prioritize tasks, stay organized, and remain focused under stress to meet all deadlines.",
        },
        {
          question: "How do you manage client communication?",
          answer: "I maintain regular updates, clear documentation, and always ensure alignment with client expectations.",
        },
        {
          question: "What are the KPIs you’ve worked with in BPO?",
          answer: "AHT, FCR, CSAT, QA score, and NPS.",
        },
        {
          question: "Have you mentored junior team members?",
          answer: "Yes, I’ve guided trainees during onboarding and helped them improve performance through feedback.",
        },
      ],
    },
  };

  const selected = data[id];

  // Toggle button handler
  const handleLevelClick = (type) => {
    setLevel((prev) => (prev === type ? null : type));
  };

  return (
    <div className="max-full mx-auto px-6 py-10 pt-[160px]">
      <h1 className="text-3xl font-bold text-blue-800 mb-4">
        {selected?.title || "Not Found"}
      </h1>

      {/* Show buttons if fresher and experience are available */}
      {selected?.fresher && selected?.experience && (
        <div className="flex gap-4 mb-6">
          <button
            onClick={() => handleLevelClick("fresher")}
            className={`px-4 py-2 rounded ${
              level === "fresher" ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
          >
            Fresher
          </button>
          <button
            onClick={() => handleLevelClick("experience")}
            className={`px-4 py-2 rounded ${
              level === "experience" ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
          >
            Experience
          </button>
        </div>
      )}

      {/* Show Q&A if active */}
      {selected?.[level] && (
        <div className="bg-gray-50 p-4 rounded border space-y-4">
          <h2 className="text-xl font-semibold text-gray-800 capitalize mb-2">
            {level} Interview Questions & Answers
          </h2>
          {selected[level].map((item, index) => (
            <div key={index} className="border-b pb-3">
              <p className="font-medium text-gray-900">Q{index + 1}. {item.question}</p>
              <p className="text-gray-700 mt-1">Ans: {item.answer}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default InterviewDetail;
