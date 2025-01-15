import { Box, Button, Grid, Typography } from "@mui/material";
import axios from "axios";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useState, useEffect } from "react";
import Header from "../../components/Header";

const WeddingList = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [weddings, setWeddings] = useState([]);

  useEffect(() => {
    const fetchWeddings = async () => {
      try {
        const response = await axios.get(
          "https://invitationcardbackend.onrender.com/api/wedding"
        );
        setWeddings(response.data);
      } catch (error) {
        console.error("Error fetching weddings:", error);
      }
    };

    fetchWeddings();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://invitationcardbackend.onrender.com/api/wedding/${id}`
      );
      setWeddings((prevWeddings) =>
        prevWeddings.filter((wedding) => wedding._id !== id)
      );
      alert("Wedding deleted successfully!");
    } catch (error) {
      console.error("Error deleting wedding:", error);
      alert("Failed to delete wedding.");
    }
  };

  return (
    <Box m="20px">
      <Header title="WEDDING LIST" subtitle="List of all weddings" />

      <Grid container spacing={2}>
        {weddings.map((wedding) => (
          <Grid item xs={12} md={6} key={wedding._id}>
            <Box border={1} p={2} mb={2}>
              <Typography variant="h6">
                {wedding.brideName} & {wedding.groomName}
              </Typography>
              <Typography variant="body1">
                Ceremony: {wedding.eventDetails.mainCeremony.title}
              </Typography>
              <Typography variant="body1">
                Date: {wedding.eventDetails.mainCeremony.date.split("T")[0]}
              </Typography>
              <Typography variant="body2">
                Stories: {wedding.storyDetails.length} stories
              </Typography>
              <Typography variant="body2">
                Gallery: {wedding.galleryData.length} images
              </Typography>
              <Button
                onClick={() => handleDelete(wedding._id)}
                variant="outlined"
                color="error"
              >
                Delete
              </Button>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default WeddingList;
