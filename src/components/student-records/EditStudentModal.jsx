/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Modal, Box, Button, TextField } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import Swal from "sweetalert2";
import api from "../../assets/api";

function EditStudentModal({ studentId, onUpdated, studName, email, grade }) {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    full_name: studName,
    email: email,
    grade: grade,
  });
  const [loading, setLoading] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      await api.put(`/api/students/${studentId}/update/`, form);
      setLoading(false);
      handleClose();
      Swal.fire("Success", "Student updated successfully", "success");
      if (onUpdated) onUpdated();
    } catch (err) {
      setLoading(false);
      Swal.fire("Error", "Failed to update student", "error");
    }
  };

  return (
    <>
      <button
        onClick={handleOpen}
        className="flex items-center gap-1 text-blue-500"
      >
        <EditIcon fontSize="small" /> Edit
      </button>

      <Modal open={open} onClose={handleClose}>
        <Box className="bg-white p-6 rounded-md w-96 mx-auto mt-20">
          <h2 className="text-lg font-bold mb-1">Edit Student - {studName}</h2>

          <TextField
            label="Full Name"
            name="full_name"
            value={form.full_name}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Email"
            name="email"
            value={form.email}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Grade"
            name="grade"
            value={form.grade}
            onChange={(e) => {
              const value = parseInt(e.target.value, 10);
              if (value >= 1 && value <= 6) {
                handleChange(e);
              } else if (e.target.value === "") {
                handleChange(e); // allow clearing the input
              }
            }}
            fullWidth
            margin="normal"
          />

          <Box className="flex justify-end mt-4 gap-2">
            <Button onClick={handleClose} disabled={loading}>
              Cancel
            </Button>
            <Button
              variant="contained"
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? "Saving..." : "Save"}
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
}

export default EditStudentModal;
