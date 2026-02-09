import React, { useEffect, useState } from "react";
import { Modal, Box, Button, Typography } from "@mui/material";
import api from "../../assets/api";

function AddBillingModal({ onSuccess }) {
  const [open, setOpen] = useState(false);
  const [students, setStudents] = useState([]);
  const [form, setForm] = useState({
    student: "",
    tuition: "",
    misc: "",
    penalties: "",
    discount: "",
  });

  useEffect(() => {
    api.get("/api/students/").then((res) => setStudents(res.data));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const total =
    Number(form.tuition || 0) +
    Number(form.misc || 0) +
    Number(form.penalties || 0) -
    Number(form.discount || 0);

  const isDisabled =
    !form.student ||
    !form.tuition ||
    !form.misc ||
    !form.penalties ||
    !form.discount;

  const handleSubmit = () => {
    api
      .post("/api/billing/create/", {
        student: form.student,
        payment_status: "Pending",
        tuition_fee: form.tuition,
        miscellaneous_fee: form.misc,
        penalties: form.penalties,
        discounts: form.discount,
        total_amount: total,
      })
      .then(() => {
        setOpen(false);
        setForm({
          student: "",
          tuition: "",
          misc: "",
          penalties: "",
          discount: "",
        });

        onSuccess();
      });
  };

  return (
    <>
      <Button variant="contained" onClick={() => setOpen(true)}>
        Add Billing
      </Button>

      <Modal open={open} onClose={() => setOpen(false)}>
        <Box className="absolute top-1/2 left-1/2 w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-6 shadow-xl">
          <Typography variant="h6" className="mb-4">
            Add Billing
          </Typography>

          <div className="mb-4 mt-4">
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Student Name
            </label>
            <select
              name="student"
              value={form.student}
              onChange={handleChange}
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
            >
              <option value="">Select student</option>
              {students.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.full_name} - Grade {s.grade}
                </option>
              ))}
            </select>
          </div>

          <div className="flex gap-2">
            <div className="mb-4 w-full">
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Tuition Fee
              </label>
              <input
                type="number"
                name="tuition"
                value={form.tuition}
                onChange={handleChange}
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
              />
            </div>

            <div className="mb-4 w-full">
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Miscellaneous
              </label>
              <input
                type="number"
                name="misc"
                value={form.misc}
                onChange={handleChange}
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
              />
            </div>
          </div>

          <div className="flex gap-2">
            <div className="mb-4 w-full">
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Penalties
              </label>
              <input
                type="number"
                name="penalties"
                value={form.penalties}
                onChange={handleChange}
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
              />
            </div>

            <div className="mb-4 w-full">
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Discount
              </label>
              <input
                type="number"
                name="discount"
                value={form.discount}
                onChange={handleChange}
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
              />
            </div>
          </div>

          <p className="text-sm font-medium text-gray-700">
            Total Amount: ₱{total.toLocaleString()}
          </p>

          <div className="mt-6 flex justify-end gap-2">
            <button
              onClick={() => setOpen(false)}
              className="rounded-md border border-red-500 px-4 py-2 text-sm font-medium text-red-500"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              disabled={isDisabled}
              className={`rounded-md px-4 py-2 text-sm font-medium text-white ${
                isDisabled
                  ? "cursor-not-allowed bg-gray-400"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              Save
            </button>
          </div>
        </Box>
      </Modal>
    </>
  );
}

export default AddBillingModal;
