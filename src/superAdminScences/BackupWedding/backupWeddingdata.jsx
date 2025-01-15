import { Box, Grid, Typography, CircularProgress } from "@mui/material";
import axios from "axios";
import { useState, useEffect } from "react";
import Header from "../../components/Header"; // Assuming you have a Header component

const WeddingBackupDataSuperAdmin = () => {
  const [backups, setBackups] = useState([]); // Store backup data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  // Fetch backup data on component mount
  useEffect(() => {
    const fetchBackups = async () => {
      setLoading(true); // Set loading to true when fetching
      setError(null); // Reset any previous errors

      try {
        // Fetch backup data from the backend API
        const response = await axios.get(
          "https://invitationcardbackend.onrender.com/api/backups"
        );
        setBackups(response.data); // Store the fetched backups
      } catch (error) {
        console.error("Error fetching backups:", error);
        setError(error.response?.data?.message || error.message); // Handle errors
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchBackups(); // Call the fetch function when the component mounts
  }, []); // Empty dependency array means this runs only once after initial render

  // If loading, show a spinner
  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  // If there is an error, show the error message
  if (error) {
    return (
      <Box m="20px">
        <Typography variant="h6" color="error">
          Error: {error}
        </Typography>
      </Box>
    );
  }

  // If no backups, show a message
  if (backups.length === 0) {
    return (
      <Box m="20px">
        <Typography variant="body1" color="textSecondary">
          No backup weddings found.
        </Typography>
      </Box>
    );
  }

  // Render the backup weddings
  return (
    <Box m="20px">
      <Header
        title="Backup Wedding List"
        subtitle="List of all backup weddings"
      />
      <Grid container spacing={2}>
        {backups.map((backup) => (
          <Grid item xs={12} md={6} key={backup._id}>
            <Box border={1} p={2} mb={2}>
              <Typography variant="h6">
                {backup.brideName} & {backup.groomName}
              </Typography>
              <Typography variant="body1">
                Ceremony: {backup.eventDetails?.mainCeremony?.title || "N/A"}
              </Typography>
              <Typography variant="body1">
                Date:{" "}
                {backup.eventDetails?.mainCeremony?.date
                  ? backup.eventDetails.mainCeremony.date.split("T")[0]
                  : "N/A"}
              </Typography>
              <Typography variant="body2">
                Stories: {backup.storyDetails?.length || 0} stories
              </Typography>
              <Typography variant="body2">
                Gallery: {backup.galleryData?.length || 0} images
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default WeddingBackupDataSuperAdmin;
