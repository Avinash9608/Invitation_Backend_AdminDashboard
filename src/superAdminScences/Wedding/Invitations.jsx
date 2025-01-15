import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Modal,
  TextField,
  Alert,
} from "@mui/material";

const Invitations = () => {
  const [invitations, setInvitations] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [newInvitation, setNewInvitation] = useState({
    brideName: "",
    groomName: "",
    weddingDate: "",
    venue: "",
    contactNumber: "",
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    loadInvitations();
  }, []);

  const loadInvitations = async () => {
    try {
      const response = await fetch(
        "https://invitationcardbackend.onrender.com/save-invitation/save-invitations",
        { method: "GET" }
      );
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      const data = await response.json();
      setInvitations(data);
    } catch (error) {
      console.error("Failed to fetch invitations:", error);
      setError("An error occurred while fetching invitations.");
    }
  };

  const handleAddInvitation = async () => {
    if (
      !newInvitation.brideName ||
      !newInvitation.groomName ||
      !newInvitation.weddingDate ||
      !newInvitation.venue ||
      !newInvitation.contactNumber
    ) {
      setError("All fields are required!");
      return;
    }

    try {
      const response = await fetch(
        "https://invitationcardbackend.onrender.com/save-invitation/save-invitations",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newInvitation),
        }
      );

      if (response.ok) {
        loadInvitations();
        setIsFormOpen(false);
        setNewInvitation({
          brideName: "",
          groomName: "",
          weddingDate: "",
          venue: "",
          contactNumber: "",
        });
        setError(null);
      } else {
        const errorMessage = await response.text();
        setError(`Failed to add invitation: ${errorMessage}`);
      }
    } catch (error) {
      console.error("Error adding invitation:", error);
      setError("An error occurred while adding the invitation.");
    }
  };

  const handleDeleteInvitation = async (id) => {
    try {
      const response = await fetch(
        `https://invitationcardbackend.onrender.com/save-invitation/delete-invitation/${id}`,
        { method: "DELETE" }
      );

      if (response.ok) {
        loadInvitations();
        setError(null);
      } else {
        const errorMessage = await response.text();
        setError(`Failed to delete invitation: ${errorMessage}`);
      }
    } catch (error) {
      console.error("Error deleting invitation:", error);
      setError("An error occurred while deleting the invitation.");
    }
  };

  return (
    <Box p={4}>
      <Typography variant="h4" gutterBottom>
        Manage Invitations
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setIsFormOpen(true)}
        sx={{ mb: 2 }}
      >
        Create Invitation
      </Button>
      {error && <Alert severity="error">{error}</Alert>}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="invitations table">
          <TableHead>
            <TableRow>
              <TableCell>Bride's Name</TableCell>
              <TableCell>Groom's Name</TableCell>
              <TableCell>Wedding Date</TableCell>
              <TableCell>Venue</TableCell>
              <TableCell>Contact Number</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {invitations.map((invitation) => (
              <TableRow
                key={invitation._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{invitation.brideName}</TableCell>
                <TableCell>{invitation.groomName}</TableCell>
                <TableCell>
                  {new Date(invitation.weddingDate).toLocaleDateString()}
                </TableCell>
                <TableCell>{invitation.venue}</TableCell>
                <TableCell>{invitation.contactNumber}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => handleDeleteInvitation(invitation._id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Modal open={isFormOpen} onClose={() => setIsFormOpen(false)}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            p: 4,
            borderRadius: 2,
            boxShadow: 24,
          }}
        >
          <Typography variant="h6" mb={2}>
            Create New Invitation
          </Typography>
          <TextField
            label="Bride's Name"
            fullWidth
            margin="normal"
            value={newInvitation.brideName}
            onChange={(e) =>
              setNewInvitation({ ...newInvitation, brideName: e.target.value })
            }
          />
          <TextField
            label="Groom's Name"
            fullWidth
            margin="normal"
            value={newInvitation.groomName}
            onChange={(e) =>
              setNewInvitation({ ...newInvitation, groomName: e.target.value })
            }
          />
          <TextField
            label="Wedding Date"
            fullWidth
            margin="normal"
            type="date"
            value={newInvitation.weddingDate}
            onChange={(e) =>
              setNewInvitation({
                ...newInvitation,
                weddingDate: e.target.value,
              })
            }
          />
          <TextField
            label="Venue"
            fullWidth
            margin="normal"
            value={newInvitation.venue}
            onChange={(e) =>
              setNewInvitation({ ...newInvitation, venue: e.target.value })
            }
          />
          <TextField
            label="Contact Number"
            fullWidth
            margin="normal"
            value={newInvitation.contactNumber}
            onChange={(e) =>
              setNewInvitation({
                ...newInvitation,
                contactNumber: e.target.value,
              })
            }
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleAddInvitation}
            sx={{ mt: 2 }}
          >
            Add Invitation
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default Invitations;
