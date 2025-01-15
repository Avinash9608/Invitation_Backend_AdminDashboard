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
  Alert,
} from "@mui/material";

const Invitations = () => {
  const [invitations, setInvitations] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadInvitations();
  }, []);

  // Fetch invitations from the backend
  const loadInvitations = async () => {
    try {
      const response = await fetch(
        "https://invitationcardbackend.onrender.com/api/birthdayinvitation"
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

  // Delete an invitation
  const handleDeleteInvitation = async (id) => {
    try {
      const response = await fetch(
        `https://invitationcardbackend.onrender.com/api/invitations/${id}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        loadInvitations(); // Reload the invitations after deletion
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
        Invitations
      </Typography>
      {error && <Alert severity="error">{error}</Alert>}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="invitations table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Time</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Place</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Contact</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {invitations.map((invitation) => (
              <TableRow
                key={invitation._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{invitation.name}</TableCell>
                <TableCell>{invitation.time}</TableCell>
                <TableCell>
                  {new Date(invitation.date).toLocaleDateString()}
                </TableCell>
                <TableCell>{invitation.place}</TableCell>
                <TableCell>{invitation.address}</TableCell>
                <TableCell>{invitation.contact}</TableCell>
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
    </Box>
  );
};

export default Invitations;
