import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import { createInvitation } from "../services/api";

const InvitationForm = ({ onClose, onCreated }) => {
  const [form, setForm] = useState({
    userId: "",
    templateId: "",
    format: "",
    status: "draft",
  });

  const handleSubmit = async () => {
    await createInvitation(form);
    onCreated();
    onClose();
  };

  return (
    <Box
      sx={{
        padding: "20px",
        backgroundColor: "#fff",
        borderRadius: "8px",
        boxShadow: 3,
      }}
    >
      <Typography variant="h6">Create Invitation</Typography>
      <TextField
        label="User ID"
        fullWidth
        margin="normal"
        value={form.userId}
        onChange={(e) => setForm({ ...form, userId: e.target.value })}
      />
      <TextField
        label="Template ID"
        fullWidth
        margin="normal"
        value={form.templateId}
        onChange={(e) => setForm({ ...form, templateId: e.target.value })}
      />
      <TextField
        label="Format"
        fullWidth
        margin="normal"
        value={form.format}
        onChange={(e) => setForm({ ...form, format: e.target.value })}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        sx={{ mt: 2 }}
      >
        Submit
      </Button>
      <Button variant="text" color="secondary" onClick={onClose} sx={{ mt: 2 }}>
        Cancel
      </Button>
    </Box>
  );
};

export default InvitationForm;
