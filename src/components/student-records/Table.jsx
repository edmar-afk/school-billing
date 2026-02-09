/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import AddStudentModal from "./AddStudentModal";
import EditStudentModal from "./EditStudentModal";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import api from "../../assets/api";
import Swal from "sweetalert2";

function Table() {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");

  const fetchStudents = () => {
    api
      .get("/api/students/")
      .then((res) => setStudents(res.data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const filteredStudents = students.filter(
    (student) =>
      student.full_name.toLowerCase().includes(search.toLowerCase()) ||
      student.email.toLowerCase().includes(search.toLowerCase()),
  );

  const handleDelete = async (studentId) => {
    const result = await Swal.fire({
      title: "Delete student?",
      text: "This action cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      confirmButtonText: "Delete",
    });

    if (!result.isConfirmed) return;

    try {
      await api.delete(`/api/students/delete/${studentId}/`);
      setStudents((prev) => prev.filter((s) => s.id !== studentId));

      Swal.fire({
        icon: "success",
        title: "Deleted",
        text: "Student has been deleted",
        timer: 1500,
        showConfirmButton: false,
      });
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to delete student",
      });
    }
  };

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <input
              type="text"
              placeholder="Search students..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-4 py-2 rounded-md border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <AddStudentModal onSuccess={fetchStudents} />
          </div>
        </div>

        <div className="overflow-x-auto bg-white rounded-lg shadow">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-center">ID</th>
                <th className="py-3 px-6 text-center">Student Name</th>
                <th className="py-3 px-6 text-center">Parent/Guardian Email</th>
                <th className="py-3 px-6 text-center">Grade Level</th>
                <th className="py-3 px-6 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm">
              {filteredStudents.map((student) => (
                <tr
                  key={student.id}
                  className="border-b border-gray-200 hover:bg-gray-100"
                >
                  <td className="py-3 px-6 text-center">{student.id}</td>
                  <td className="py-3 px-6 text-center">{student.full_name}</td>
                  <td className="py-3 px-6 text-center">{student.email}</td>
                  <td className="py-3 px-6 text-center">{student.grade}</td>
                  <td className="py-3 px-6 text-center">
                    <div className="flex items-center justify-center gap-4">
                      <div className="transform hover:scale-110 duration-300 cursor-pointer text-blue-500">
                        <EditStudentModal
                          studentId={student.id}
                          studName={student.full_name}
                          email={student.email}
                          grade={student.grade}
                          onUpdated={fetchStudents}
                        />
                      </div>

                      <button
                        className="transform hover:scale-110 duration-300 cursor-pointer text-red-500"
                        onClick={() => handleDelete(student.id)}
                      >
                        <DeleteIcon fontSize="small" /> Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}

              {filteredStudents.length === 0 && (
                <tr>
                  <td colSpan="5" className="py-6 text-center text-gray-400">
                    No students found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="flex justify-between items-center mt-6">
          <span className="text-sm text-gray-700">
            Total of {filteredStudents.length} data
          </span>
        </div>
      </div>
    </>
  );
}

export default Table;
