import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const students = [
  {
    slno: 1,
    name: "Tiger Nixon",
    phone: "123 456 7890",
    email: "info@example.com",
    course: "M.COM, P.H.D.",
    message: "Looking forward to the course!",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    slno: 2,
    name: "Garrett Winters",
    phone: "987 654 3210",
    email: "info@example.com",
    course: "B.TECH, M.TECH",
    message: "Please call me back.",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  // Add more students...
];

export default function StudentTable() {
  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-lg md:text-2xl font-semibold text-[#5d5cfd]">
          All Students List
        </h2>
        <button className="bg-[#5d5cfd] hover:bg-[#4e4bcc] transition text-white font-medium px-4 py-2 rounded shadow">
          + Add new
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-lg bg-white shadow">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="bg-[#f7f8fa] text-[#525252]">
              <th className="py-3 px-4 font-semibold text-left">Sl No.</th>
              <th className="py-3 px-4 font-semibold text-left">Profile</th>
              <th className="py-3 px-4 font-semibold text-left">Name</th>
              <th className="py-3 px-4 font-semibold text-left">Phone</th>
              <th className="py-3 px-4 font-semibold text-left">Email</th>
              <th className="py-3 px-4 font-semibold text-left">Course</th>
              <th className="py-3 px-4 font-semibold text-left">Message</th>
              <th className="py-3 px-4 font-semibold text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {students.map((s) => (
              <tr
                key={s.slno}
                className="border-b last:border-0 hover:bg-gray-50 transition"
              >
                <td className="py-3 px-4 font-bold text-[#5d5cfd]">
                  {s.slno < 10 ? `0${s.slno}` : s.slno}
                </td>
                <td className="py-3 px-4">
                  <img
                    src={s.avatar}
                    alt={s.name}
                    className="h-9 w-9 rounded-full object-cover border"
                  />
                </td>
                <td className="py-3 px-4">{s.name}</td>
                <td className="py-3 px-4 font-semibold text-gray-700">{s.phone}</td>
                <td className="py-3 px-4">{s.email}</td>
                <td className="py-3 px-4">{s.course}</td>
                <td className="py-3 px-4">{s.message}</td>
                <td className="py-3 px-4">
                  <div className="flex gap-2">
                    <button className="text-blue-500 hover:text-blue-700">
                      <FaEdit />
                    </button>
                    <button className="text-red-500 hover:text-red-700">
                      <FaTrash />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-end mt-4 gap-2">
        <button className="bg-gray-100 px-3 py-1 rounded text-gray-600">Previous</button>
        <button className="bg-[#5d5cfd] text-white px-3 py-1 rounded">1</button>
        <button className="bg-gray-100 px-3 py-1 rounded text-gray-600">2</button>
        <button className="bg-gray-100 px-3 py-1 rounded text-gray-600">3</button>
        <button className="bg-gray-100 px-3 py-1 rounded text-gray-600">Next</button>
      </div>
    </div>
  );
}
