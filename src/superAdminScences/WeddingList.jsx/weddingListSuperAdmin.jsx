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
                Wedding Date:{" "}
                {new Date(wedding.weddingDate).toLocaleDateString()}
              </Typography>
              <Typography variant="body1">
                Location: {wedding.weddingLocation}
              </Typography>
              <Typography variant="body2">
                Bride: {wedding.brideDescription}
              </Typography>
              <Typography variant="body2">
                Groom: {wedding.groomDescription}
              </Typography>
              <Typography variant="h6" mt={2}>
                Event Details:
              </Typography>
              {wedding.eventDetails.map((event, index) => (
                <Box key={index} mt={1} mb={1}>
                  <Typography variant="body1">
                    {event.title} ({event.type})
                  </Typography>
                  <Typography variant="body2">Date: {event.date}</Typography>
                  <Typography variant="body2">
                    Time: {event.timeStart} - {event.timeEnd}
                  </Typography>
                  <Typography variant="body2">
                    Description: {event.description}
                  </Typography>
                </Box>
              ))}
              <Typography variant="h6" mt={2}>
                Stories:
              </Typography>
              {wedding.storyDetails.map((story, index) => (
                <Box key={index} mt={1} mb={1}>
                  <Typography variant="body1">{story.title}</Typography>
                  <Typography variant="body2">
                    Date: {new Date(story.date).toLocaleDateString()}
                  </Typography>
                  <Typography variant="body2">
                    Description: {story.description}
                  </Typography>
                </Box>
              ))}
              <Typography variant="h6" mt={2}>
                Gallery:
              </Typography>
              {wedding.galleryData.map((gallery, index) => (
                <Box key={index} mt={1} mb={1}>
                  <Typography variant="body1">{gallery.title}</Typography>
                  <Typography variant="body2">
                    Images: {gallery.photosCount}
                  </Typography>
                </Box>
              ))}
              <Button
                onClick={() => handleDelete(wedding._id)}
                variant="outlined"
                color="error"
                mt={2}
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
