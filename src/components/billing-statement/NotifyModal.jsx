import React from "react";
import { Modal, Box, Typography, Button } from "@mui/material";
import emailImg from "../../assets/images/email.png";
import EmailIcon from "@mui/icons-material/Email";
export default function NotifyModal({ open, onClose }) {
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
        <Typography variant="h6">Send Mail Reminder to Sample Name</Typography>
        <div className="flex py-4 items-center justify-center">
          <EmailIcon sx={{fontSize:64}} className="text-[#bb001b] animate-bounce"/>
        </div>
        <p className="font-light text-center text-xs mb-4">
          Please be informed that sending emails may take some time before
          students receive them. Thank you for your patience.
        </p>
        <div className="flex flex-row items-center gap-2 mt-4">
          {" "}
          <button
            className="py-2 px-4 bg-red-500 text-white"
            sx={{ mt: 2 }}
            variant="contained"
            onClick={onClose}
          >
            Close
          </button>
          <button
            className="py-2 px-4 bg-blue-500 text-white"
            sx={{ mt: 2 }}
            variant="contained"
            onClick={onClose}
          >
            Send Mail
          </button>
        </div>
      </Box>
    </Modal>
  );
}
