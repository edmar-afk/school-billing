import React, { useState } from "react";
import { Modal, Box, Button, TextField, Typography } from "@mui/material";
import Swal from "sweetalert2";
import api from "../../assets/api";

function AddStudentModal({ onSuccess }) {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ full_name: "", email: "", grade: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await api.post("/api/students/create/", form);
      setOpen(false);
      Swal.fire({
        icon: "success",
        title: "Student Added",
        text: "The student has been successfully added to the system.",
        confirmButtonColor: "#16a34a",
      });
      setForm({ full_name: "", email: "", grade: "" });

      if (onSuccess) onSuccess(res.data); // notify parent
    } catch (error) {
      setOpen(false);
      Swal.fire({
        icon: "error",
        title: "Submission Failed",
        text:
          error?.response?.data?.message ||
          "Something went wrong while adding the student.",
        confirmButtonColor: "#dc2626",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Button variant="contained" color="success" onClick={() => setOpen(true)}>
        Add Student
      </Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            borderRadius: 2,
            boxShadow: 24,
            p: 4,
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Typography variant="h6" fontWeight="bold">
            Add Student
          </Typography>
          <TextField
            label="Student Full Name"
            name="full_name"
            value={form.full_name}
            onChange={handleChange}
            required
            fullWidth
          />
          <TextField
            label="Parent/Guardian Email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            fullWidth
          />
          <TextField
            label="Student Grade Level (1-6 only)"
            name="grade"
            type="number"
            value={form.grade}
            onChange={(e) => {
              const value = parseInt(e.target.value, 10);
              if (value >= 1 && value <= 6) {
                handleChange(e);
              } else if (e.target.value === "") {
                handleChange(e); // allow clearing the input
              }
            }}
            required
            fullWidth
          />

          <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 1 }}>
            <Button onClick={() => setOpen(false)} variant="outlined">
              Cancel
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="success"
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

export default AddStudentModal;
