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

const AnniversaryInvitationTable = () => {
  const [invitations, setInvitations] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadInvitations();
  }, []);

  // Fetch invitations from the backend
  const loadInvitations = async () => {
    try {
      const response = await fetch(
        "https://invitationcardbackend.onrender.com/api/anniversaryinvitations"
      );
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      const data = await response.json();

      // Ensure data is an array
      if (Array.isArray(data.data)) {
        setInvitations(data.data);
      } else {
        throw new Error("Data format is not correct");
      }
    } catch (error) {
      console.error("Failed to fetch invitations:", error);
      setError("An error occurred while fetching invitations.");
    }
  };

  // Handle deleting an invitation
  const handleDeleteInvitation = async (id) => {
    try {
      const response = await fetch(
        `https://invitationcardbackend.onrender.com/api/anniversaryinvitations/${id}`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        // Update the state to remove the deleted invitation
        setInvitations((prevInvitations) =>
          prevInvitations.filter((invitation) => invitation._id !== id)
        );
        setError(null); // Clear any previous error
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
        Anniversary Invitations
      </Typography>
      {error && <Alert severity="error">{error}</Alert>}

      <TableContainer component={Paper}>
        <Table
          sx={{ minWidth: 650 }}
          aria-label="anniversary invitations table"
        >
          <TableHead>
            <TableRow>
              <TableCell>Celeb Names</TableCell>
              <TableCell>Anniversary Type</TableCell>
              <TableCell>Venue</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Time</TableCell>
              <TableCell>Additional Details</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Array.isArray(invitations) && invitations.length > 0 ? (
              invitations.map((invitation) => (
                <TableRow key={invitation._id}>
                  <TableCell>{invitation.celebrantNames}</TableCell>
                  <TableCell>{invitation.anniversaryType}</TableCell>
                  <TableCell>{invitation.venue}</TableCell>
                  <TableCell>
                    {new Date(invitation.date).toLocaleDateString()}
                  </TableCell>
                  <TableCell>{invitation.time}</TableCell>
                  <TableCell>{invitation.additionalDetails}</TableCell>
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
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={7} align="center">
                  No invitations available
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default AnniversaryInvitationTable;
