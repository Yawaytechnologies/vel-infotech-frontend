import React, { useEffect } from "react";
import { FaEdit, FaTrash, FaSync } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchRegistrations } from "../../redux/actions/enquiryAction";
import {
  selectRegistrations,
  selectRegStatus,
  selectRegError,
} from "../../redux/reducer/enquirySlice";

function ModeBadge({ mode }) {
  const m = String(mode || "").toUpperCase(); // ONLINE | OFFLINE | CLASSROOM
  const styles = {
    ONLINE: "bg-green-100 text-green-700 border-green-200",
   
    CLASSROOM: "bg-blue-100 text-blue-700 border-blue-200",
  };
  const cls = styles[m] || "bg-gray-100 text-gray-700 border-gray-200";
  return (
    <span className={`px-2 py-0.5 text-xs font-semibold rounded-full border ${cls}`}>
      {m || "NA"}
    </span>
  );
}

export default function StudentTable() {
  const dispatch = useDispatch();

  // ⬇️ read from Redux
  const rows = useSelector(selectRegistrations);
  const status = useSelector(selectRegStatus); // idle | loading | succeeded | failed
  const err = useSelector(selectRegError);

  useEffect(() => {
    if (status === "idle") dispatch(fetchRegistrations());
  }, [status, dispatch]);

  const loading = status === "loading";

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-lg md:text-2xl font-semibold text-[#5d5cfd]">
          All Registrations
        </h2>
        <div className="flex items-center gap-2">
          <button
            onClick={() => dispatch(fetchRegistrations())}
            className="bg-gray-100 hover:bg-gray-200 transition text-gray-700 font-medium px-3 py-2 rounded shadow flex items-center gap-2"
            title="Refresh"
          >
            <FaSync className={loading ? "animate-spin" : ""} /> Refresh
          </button>
          <Link to="/admin/add-student">
          <button className="bg-[#5d5cfd] hover:bg-[#4e4bcc] transition text-white font-medium px-4 py-2 rounded shadow">
            + Add new
          </button>
          </Link>
        </div>
      </div>

      {/* States */}
      {err && (
        <div className="mb-4 px-4 py-3 rounded border border-red-200 bg-red-50 text-red-700">
          {String(err)}
        </div>
      )}
      {loading && (
        <div className="mb-4 px-4 py-3 rounded border border-blue-200 bg-blue-50 text-blue-700">
          Loading registrations…
        </div>
      )}

      {/* Table */}
      <div className="overflow-x-auto rounded-lg bg-white shadow">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="bg-[#f7f8fa] text-[#525252]">
              <th className="py-3 px-4 font-semibold text-left">Sl No.</th>
              <th className="py-3 px-4 font-semibold text-left">Mode</th>
              <th className="py-3 px-4 font-semibold text-left">Name</th>
              <th className="py-3 px-4 font-semibold text-left">Mobile</th>
              <th className="py-3 px-4 font-semibold text-left">Email</th>
              <th className="py-3 px-4 font-semibold text-left">Course</th>
              <th className="py-3 px-4 font-semibold text-left">Message</th>
              <th className="py-3 px-4 font-semibold text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {status !== "loading" && rows.length === 0 && (
              <tr>
                <td colSpan={8} className="py-6 px-4 text-center text-gray-500">
                  No registrations found.
                </td>
              </tr>
            )}

            {rows.map((r, idx) => (
              <tr key={`${r.id || r._id || idx}`} className="border-b last:border-0 hover:bg-gray-50 transition">
                <td className="py-3 px-4 font-bold text-[#5d5cfd]">
                  {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                </td>
                <td className="py-3 px-4">
                  <ModeBadge mode={r.mode} />
                </td>
                <td className="py-3 px-4">{r.name || "-"}</td>
                <td className="py-3 px-4 font-semibold text-gray-700">{r.mobile || "-"}</td>
                <td className="py-3 px-4">{r.email || "-"}</td>
                <td className="py-3 px-4">{r.course || "-"}</td>
                <td className="py-3 px-4">
                  <span title={r.message || ""}>
                    {(r.message || "").length > 50 ? `${r.message.slice(0, 50)}…` : r.message || "-"}
                  </span>
                </td>
                <td className="py-3 px-4">
                  <div className="flex gap-2">
                    <button className="text-blue-500 hover:text-blue-700" title="Edit">
                      <FaEdit />
                    </button>
                    <button className="text-red-500 hover:text-red-700" title="Delete">
                      <FaTrash />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination (static placeholders – wire to backend when available) */}
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
