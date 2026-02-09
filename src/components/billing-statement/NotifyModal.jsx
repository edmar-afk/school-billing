import React, { useState } from "react";
import { Modal, Box, Typography } from "@mui/material";
import api from "../../assets/api";
import EmailIcon from "@mui/icons-material/Email";

export default function NotifyModal({ open, onClose, billingId, studName }) {
  const [loading, setLoading] = useState(false);

  const handleSendMail = async () => {
    try {
      setLoading(true);
      await api.post(`/api/send-billing-email/${billingId}/`);
      onClose();
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 370,
          bgcolor: "background.paper",
          borderRadius: 2,
          p: 3,
        }}
      >
        <p className="text-lg font-bold text-center">Send Mail Reminder to the Parents/Guardian of {studName} </p>

        <div className="flex py-4 items-center justify-center">
          <EmailIcon
            sx={{ fontSize: 90 }}
            className="text-[#bb001b] "
          />
        </div>

        <p className="font-light text-center text-xs mb-4">
          Please be informed that sending emails may take some time before
          students receive them. Thank you for your patience.
        </p>

        <div className="flex flex-row items-center gap-2 mt-4">
          <button
            className="py-2 px-4 bg-red-500 text-white cursor-pointer"
            onClick={onClose}
            disabled={loading}
          >
            Close
          </button>

          <button
            className="py-2 px-4 bg-blue-500 text-white cursor-pointer"
            onClick={handleSendMail}
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Mail"}
          </button>
        </div>
      </Box>
    </Modal>
  );
}
