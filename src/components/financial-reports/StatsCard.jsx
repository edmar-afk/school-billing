import React, { useEffect, useState } from "react";
import EmailIcon from "@mui/icons-material/Email";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import SummarizeIcon from "@mui/icons-material/Summarize";
import CountUp from "react-countup";
import api from "../../assets/api";

function StatsCard() {
  const [studentCount, setStudentCount] = useState(0);
  const [totalCollected, setTotalCollected] = useState(0);
  const [emailSent, setEmailSent] = useState(0);
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const fetchActivities = async () => {
      const res = await api.get("/api/billings/paid/");
      setActivities(res.data.slice(0, 5));
    };
    fetchActivities();
  }, []);

  useEffect(() => {
    const fetchStudentCount = async () => {
      const res = await api.get("/api/students/count/");
      setStudentCount(res.data.student_count);
    };
    fetchStudentCount();
  }, []);

  useEffect(() => {
    const fetchTotalCollected = async () => {
      const res = await api.get("/api/billing/total-paid/");
      setTotalCollected(res.data.total_amount);
    };

    fetchTotalCollected();
  }, []);

  useEffect(() => {
    const fetchEmailSent = async () => {
      const res = await api.get("/api/mail/count/");
      setEmailSent(res.data.total_emails_sent);
    };
    fetchEmailSent();
  }, []);

  const handleExportExcel = async () => {
    const response = await api.get("/api/billing/export-excel/", {
      responseType: "blob",
    });

    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "billing_report.xlsx");
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  const timeAgo = (isoDate) => {
    if (!isoDate) return "";

    const past = new Date(isoDate);
    const now = new Date();

    const diff = Math.floor((now - past) / 1000);

    const minute = 60;
    const hour = 3600;
    const day = 86400;
    const month = 2592000;

    if (diff < hour) return `${Math.floor(diff / minute)}m ago`;

    if (diff < day) {
      const h = Math.floor(diff / hour);
      const m = Math.floor((diff % hour) / minute);
      return m ? `${h}h ${m}m ago` : `${h}h ago`;
    }

    if (diff < month) {
      const d = Math.floor(diff / day);
      const h = Math.floor((diff % day) / hour);
      return h ? `${d}d ${h}h ago` : `${d}d ago`;
    }

    return `${Math.floor(diff / month)}mo ago`;
  };

  return (
    <div className="h-screen flex overflow-hidden">
      <div className="flex-1 flex flex-col">
        <main className="flex-1 overflow-y-auto">
          <div className="w-full">
            <div className="flex flex-row items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-800 mb-2">
                  Payment/Financial Records
                </h1>
                <p className="text-gray-600 mb-8">
                  Review and manage records of student tuition fees and payment
                  status.
                </p>
              </div>
              <button
                onClick={handleExportExcel}
                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300"
              >
                Export Data to Excel
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-gray-700">
                    Total Collected
                  </h3>
                  <div className="w-10 h-10 flex items-center justify-center bg-blue-100 rounded-lg">
                    <p className="font-bold text-blue-700 text-xl">₱</p>
                  </div>
                </div>
                <p className="text-2xl font-bold text-gray-800">
                  ₱
                  <CountUp end={totalCollected} duration={1.5} separator="," />
                </p>
                <p className="text-sm text-green-600 mt-2">as of 2026</p>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-gray-700">
                    Total Students
                  </h3>
                  <div className="w-10 h-10 flex items-center justify-center bg-green-100 rounded-lg">
                    <PeopleAltIcon
                      className="text-green-700"
                      fontSize="small"
                    />
                  </div>
                </div>
                <p className="text-2xl font-bold text-gray-800">
                  <CountUp end={studentCount} duration={1.5} separator="," />
                </p>
                <p className="text-sm text-green-600 mt-2">as of 2026</p>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-gray-700">Email Sent</h3>
                  <div className="w-10 h-10 flex items-center justify-center bg-purple-100 rounded-lg">
                    <EmailIcon className="text-purple-700" fontSize="small" />
                  </div>
                </div>
                <p className="text-2xl font-bold text-gray-800">
                  <CountUp end={emailSent} duration={1.5} />
                </p>
                <p className="text-sm text-green-600 mt-2">as of 2026</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Recent Activity
              </h2>
              <div className="space-y-4">
                {activities.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-3 hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
                      <SummarizeIcon className="text-gray-500" />
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-800 font-medium">
                        Grade {item.grade} Student {item.student_name} has paid
                        a tuition fee of ₱{item.total_amount} on{" "}
                        {item.date_billed}.
                      </p>
                      <p className="text-sm text-gray-500">
                        {timeAgo(item.date_paid)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default StatsCard;
