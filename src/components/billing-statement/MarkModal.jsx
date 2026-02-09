import React, { useState } from "react";
import { Modal, Box, Typography } from "@mui/material";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import api from "../../assets/api";

function MarkModal({ id, onSuccess, studName }) {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    payment_status: "",
    payment_method: "",
    date_paid: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const isDisabled =
    !form.payment_status || !form.payment_method || !form.date_paid;

  const handleSubmit = () => {
    api.patch(`/api/billing/${id}/pay/`, form).then(() => {
      setOpen(false);
      setForm({
        payment_status: "",
        payment_method: "",
        date_paid: "",
      });
      onSuccess();
    });
  };

  return (
    <>
      <div
        className="flex justify-center gap-6 hover:scale-110 duration-300"
        onClick={() => setOpen(true)}
      >
        <button className="flex flex-col items-center hover:text-blue-500 cursor-pointer">
          <ModeEditIcon sx={{ fontSize: 16 }} />
          <p className="text-xs">Mark As</p>
        </button>
      </div>

      <Modal open={open} onClose={() => setOpen(false)}>
        <Box className="absolute top-1/2 left-1/2 w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-6 shadow-xl">
          <Typography variant="h6" className="mb-4">
            Mark Billing #{id} of {studName}
          </Typography>

          <div className="mb-4 mt-8">
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Payment Status
            </label>
            <select
              name="payment_status"
              value={form.payment_status}
              onChange={handleChange}
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
            >
              <option value="">Select status</option>
              <option value="Paid">Paid</option>
              <option value="Pending">Pending</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Payment Method
            </label>
            <select
              name="payment_method"
              value={form.payment_method}
              onChange={handleChange}
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
            >
              <option value="">Select method</option>
              <option value="CASH">Cash</option>
              <option value="GCASH">GCash</option>
              <option value="BANK">Bank</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Date Paid
            </label>
            <input
              type="datetime-local"
              name="date_paid"
              value={form.date_paid}
              onChange={handleChange}
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
            />
          </div>

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

export default MarkModal;
