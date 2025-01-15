import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Grid, Typography } from "@mui/material";

const Footer = () => {
  const [attendees, setAttendees] = useState([]);

  useEffect(() => {
    // Fetch attendance data when the component mounts
    axios
      .get("https://invitationcardbackend.onrender.com/api/attendance")
      .then((response) => {
        setAttendees(response.data);
      })
      .catch((error) => {
        console.error(
          "There was an error fetching the attendance data:",
          error
        );
      });
  }, []); // Empty dependency array to ensure data is fetched only once

  return (
    <Box m="20px">
      {/* Header Section */}
      <Typography variant="h4" textAlign="center" gutterBottom>
        Attendees List
      </Typography>
      <Typography
        variant="body1"
        textAlign="center"
        color="textSecondary"
        mb={4}
      >
        Below is the list of confirmed attendees.
      </Typography>

      {/* Table Section */}
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box
            overflow="auto"
            border={1}
            borderColor="grey.300"
            borderRadius={2}
          >
            <table className="min-w-full">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-3 px-5 text-left text-sm font-medium text-gray-900">
                    Name
                  </th>
                  <th className="py-3 px-5 text-left text-sm font-medium text-gray-900">
                    Email
                  </th>
                  <th className="py-3 px-5 text-left text-sm font-medium text-gray-900">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody>
                {attendees.length > 0 ? (
                  attendees.map((attendee) => (
                    <tr
                      key={attendee._id}
                      className="border-b hover:bg-gray-50"
                    >
                      <td className="py-3 px-5 text-sm text-gray-100">
                        {attendee.name}
                      </td>
                      <td className="py-3 px-5 text-sm text-gray-100">
                        {attendee.email}
                      </td>
                      <td className="py-3 px-5 text-sm text-gray-100">
                        {new Date(attendee.date).toLocaleString()}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="3"
                      className="text-center py-3 px-5 text-gray-600"
                    >
                      No attendees found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
