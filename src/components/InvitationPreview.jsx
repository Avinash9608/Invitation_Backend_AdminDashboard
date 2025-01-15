import React from "react";
import { Box, Typography, Button } from "@mui/material";

const InvitationPreview = ({ invitation, onClose }) => {
  return (
    <Box
      sx={{
        padding: "20px",
        backgroundColor: "#fff",
        borderRadius: "8px",
        boxShadow: 3,
      }}
    >
      <Typography variant="h6">Invitation Details</Typography>
      <Typography>ID: {invitation.id}</Typography>
      <Typography>User ID: {invitation.userId}</Typography>
      <Typography>Template ID: {invitation.templateId}</Typography>
      <Typography>Format: {invitation.format}</Typography>
      <Typography>Status: {invitation.status}</Typography>
      <Typography>
        Created At: {new Date(invitation.createdAt).toLocaleString()}
      </Typography>
      <Button
        variant="contained"
        color="secondary"
        onClick={onClose}
        sx={{ mt: 2 }}
      >
        Close
      </Button>
    </Box>
  );
};

export default InvitationPreview;
