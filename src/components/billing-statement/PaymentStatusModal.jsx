import React, { useState } from "react";
import { Modal, Box, Button, Typography } from "@mui/material";
import HelpIcon from "@mui/icons-material/Help";

function PaymentStatusModal({ status, datePaid, dateBilled }) {
  const [open, setOpen] = useState(false);

  const isPaid = status === "Paid";

  const formatDateBilled = (date) => {
    if (!date) return "—";
    return new Date(date)
      .toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
      .replace(",", ".");
  };

  const formatDatePaid = (date) => {
    if (!date) return "—";

    const d = new Date(date);

    const datePart = d
      .toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
      .replace(",", ".");

    const timePart = d
      .toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      })
      .toLowerCase();

    return `${datePart} - ${timePart}`;
  };

  return (
    <>
      <span
        onClick={() => setOpen(true)}
        className="text-blue-600 hover:text-blue-800 cursor-pointer animate-pulse"
      >
        <HelpIcon fontSize="small" />
      </span>

      <Modal open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            borderRadius: 3,
            width: 420,
          }}
          className="p-6 shadow-xl"
        >
          <Typography variant="h6" className="font-semibold mb-4">
            Payment Information
          </Typography>

          <div className="space-y-3 text-sm text-gray-700 mt-8">
            <div className="flex justify-between">
              <span className="font-medium text-gray-500">Status</span>
              <span
                className={`font-semibold ${
                  isPaid ? "text-green-600" : "text-yellow-600"
                }`}
              >
                {status}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="font-medium text-gray-500">Date Billed</span>
              <span>{formatDateBilled(dateBilled)}</span>
            </div>

            {isPaid && (
              <div className="flex justify-between">
                <span className="font-medium text-gray-500">Date Paid</span>
                <span>{formatDatePaid(datePaid)}</span>
              </div>
            )}
          </div>

          <div className="mt-6">
            <Button
              variant="contained"
              fullWidth
              onClick={() => setOpen(false)}
            >
              Close
            </Button>
          </div>
        </Box>
      </Modal>
    </>
  );
}

export default PaymentStatusModal;
