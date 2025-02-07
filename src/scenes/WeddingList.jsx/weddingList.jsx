// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const WeddingList = () => {
//   const [weddings, setWeddings] = useState([]);
//   const [editableWedding, setEditableWedding] = useState(null);

//   // Fetch the wedding records from the backend
//   useEffect(() => {
//     const fetchWeddings = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/api/wedding");
//         setWeddings(response.data);
//       } catch (error) {
//         console.error("Error fetching weddings:", error);
//       }
//     };

//     fetchWeddings();
//   }, []);

//   // Handle the change in editable wedding data
//   const handleChange = (e, field, id) => {
//     const updatedWeddings = weddings.map((wedding) => {
//       if (wedding._id === id) {
//         return { ...wedding, [field]: e.target.value };
//       }
//       return wedding;
//     });
//     setWeddings(updatedWeddings);
//   };

//   // Toggle the editable wedding state
//   const toggleEdit = (id) => {
//     setEditableWedding((prevId) => (prevId === id ? null : id));
//   };

//   // Handle save for editing wedding data
//   const handleSave = async (id) => {
//     try {
//       const wedding = weddings.find((wedding) => wedding._id === id);
//       await axios.put(`http://localhost:5000/api/wedding/${id}`, wedding);
//       setEditableWedding(null); // Close edit mode
//     } catch (error) {
//       console.error("Error updating wedding:", error);
//     }
//   };

//   // Handle delete wedding record
//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`http://localhost:5000/api/wedding/${id}`);
//       setWeddings(weddings.filter((wedding) => wedding._id !== id));
//     } catch (error) {
//       console.error("Error deleting wedding:", error);
//     }
//   };

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-4">Wedding Records</h2>
//       <table className="min-w-full table-auto border-collapse border border-gray-300">
//         <thead>
//           <tr className="bg-gray-900">
//             <th className="px-4 py-2 border-b">Bride's Name</th>
//             <th className="px-4 py-2 border-b">Groom's Name</th>
//             <th className="px-4 py-2 border-b">Wedding Date</th>
//             <th className="px-4 py-2 border-b">Wedding Location</th>
//             <th className="px-4 py-2 border-b">Bride Description</th>
//             <th className="px-4 py-2 border-b">Groom Description</th>
//             <th className="px-4 py-2 border-b">Event Details</th>
//             <th className="px-4 py-2 border-b">Story Details</th>
//             <th className="px-4 py-2 border-b">Gallery</th>
//             <th className="px-4 py-2 border-b">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {weddings.map((wedding) => (
//             <tr key={wedding._id} className="border-b">
//               {/* Editable Bride's Name */}
//               <td className="px-4 py-2">
//                 {editableWedding === wedding._id ? (
//                   <input
//                     type="text"
//                     value={wedding.brideName}
//                     onChange={(e) => handleChange(e, "brideName", wedding._id)}
//                     className="border px-2 py-1 rounded"
//                   />
//                 ) : (
//                   wedding.brideName
//                 )}
//               </td>

//               {/* Editable Groom's Name */}
//               <td className="px-4 py-2">
//                 {editableWedding === wedding._id ? (
//                   <input
//                     type="text"
//                     value={wedding.groomName}
//                     onChange={(e) => handleChange(e, "groomName", wedding._id)}
//                     className="border px-2 py-1 rounded"
//                   />
//                 ) : (
//                   wedding.groomName
//                 )}
//               </td>

//               {/* Editable Wedding Date */}
//               <td className="px-4 py-2">
//                 {editableWedding === wedding._id ? (
//                   <input
//                     type="date"
//                     value={new Date(wedding.weddingDate).toLocaleDateString(
//                       "en-CA"
//                     )}
//                     onChange={(e) =>
//                       handleChange(e, "weddingDate", wedding._id)
//                     }
//                     className="border px-2 py-1 rounded"
//                   />
//                 ) : (
//                   new Date(wedding.weddingDate).toLocaleDateString()
//                 )}
//               </td>

//               {/* Editable Wedding Location */}
//               <td className="px-4 py-2">
//                 {editableWedding === wedding._id ? (
//                   <input
//                     type="text"
//                     value={wedding.weddingLocation}
//                     onChange={(e) =>
//                       handleChange(e, "weddingLocation", wedding._id)
//                     }
//                     className="border px-2 py-1 rounded"
//                   />
//                 ) : (
//                   wedding.weddingLocation
//                 )}
//               </td>

//               {/* Editable Bride Description */}
//               <td className="px-4 py-2">
//                 {editableWedding === wedding._id ? (
//                   <textarea
//                     value={wedding.brideDescription}
//                     onChange={(e) =>
//                       handleChange(e, "brideDescription", wedding._id)
//                     }
//                     className="border px-2 py-1 rounded"
//                   />
//                 ) : (
//                   wedding.brideDescription
//                 )}
//               </td>

//               {/* Editable Groom Description */}
//               <td className="px-4 py-2">
//                 {editableWedding === wedding._id ? (
//                   <textarea
//                     value={wedding.groomDescription}
//                     onChange={(e) =>
//                       handleChange(e, "groomDescription", wedding._id)
//                     }
//                     className="border px-2 py-1 rounded"
//                   />
//                 ) : (
//                   wedding.groomDescription
//                 )}
//               </td>

//               {/* Editable Event Details */}
//               <td className="px-4 py-2">
//                 <div>
//                   <strong>Main Ceremony:</strong>
//                   <div>{wedding.eventDetails.mainCeremony.title}</div>
//                   <div>
//                     {wedding.eventDetails.mainCeremony.timeStart} -{" "}
//                     {wedding.eventDetails.mainCeremony.timeEnd}
//                   </div>
//                   <div>{wedding.eventDetails.mainCeremony.date}</div>
//                   <div>{wedding.eventDetails.mainCeremony.description}</div>
//                 </div>
//                 <div>
//                   <strong>Wedding Party:</strong>
//                   <div>{wedding.eventDetails.weddingParty.title}</div>
//                   <div>
//                     {wedding.eventDetails.weddingParty.timeStart} -{" "}
//                     {wedding.eventDetails.weddingParty.timeEnd}
//                   </div>
//                   <div>{wedding.eventDetails.weddingParty.date}</div>
//                   <div>{wedding.eventDetails.weddingParty.description}</div>
//                 </div>
//               </td>

//               {/* Editable Story Details */}
//               <td className="px-4 py-2">
//                 {wedding.storyDetails.map((story, index) => (
//                   <div key={index}>
//                     <div>{story.title}</div>
//                     <div>{new Date(story.date).toLocaleDateString()}</div>
//                     <div>{story.description}</div>
//                     <div>
//                       <img
//                         src={story.image}
//                         alt={story.title}
//                         className="w-16 h-16 object-cover"
//                       />
//                     </div>
//                   </div>
//                 ))}
//               </td>

//               {/* Editable Gallery */}
//               <td className="px-4 py-2">
//                 {wedding.galleryData.map((gallery, index) => (
//                   <div key={index}>
//                     <div>{gallery.title}</div>
//                     <div>{gallery.photosCount} photos</div>
//                     <div>
//                       <img
//                         src={gallery.image}
//                         alt={gallery.title}
//                         className="w-16 h-16 object-cover"
//                       />
//                     </div>
//                   </div>
//                 ))}
//               </td>

//               {/* Action Buttons */}
//               <td className="px-4 py-2">
//                 {editableWedding === wedding._id ? (
//                   <button
//                     onClick={() => handleSave(wedding._id)}
//                     className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
//                   >
//                     Save
//                   </button>
//                 ) : (
//                   <button
//                     onClick={() => toggleEdit(wedding._id)}
//                     className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//                   >
//                     Edit
//                   </button>
//                 )}
//                 <button
//                   onClick={() => handleDelete(wedding._id)}
//                   className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 ml-2"
//                 >
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default WeddingList;
import { Box, Button, TextField, Grid, Typography } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import axios from "axios";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useState, useEffect } from "react";
import Header from "../../components/Header";

const WeddingList = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [weddings, setWeddings] = useState([]);
  const [editingWedding, setEditingWedding] = useState(null);

  // Fetch weddings from the database on component mount
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

  // Handle form submission (create or update wedding)
  const handleFormSubmit = async (values, { resetForm }) => {
    try {
      const formattedValues = { ...values };
      formattedValues.weddingDate = formattedValues.weddingDate.split("T")[0];

      // Format event and story dates
      if (formattedValues.eventDetails) {
        formattedValues.eventDetails = formattedValues.eventDetails.map(
          (event) => ({
            ...event,
            date: event.date.split("T")[0],
          })
        );
      }

      if (formattedValues.storyDetails) {
        formattedValues.storyDetails = formattedValues.storyDetails.map(
          (story) => ({
            ...story,
            date: story.date.split("T")[0],
          })
        );
      }

      if (editingWedding) {
        // Update the wedding in the database
        const response = await axios.put(
          `https://invitationcardbackend.onrender.com/api/wedding/${editingWedding._id}`,
          formattedValues
        );
        // Update the state with the updated wedding
        setWeddings((prevWeddings) =>
          prevWeddings.map((wedding) =>
            wedding._id === editingWedding._id ? response.data : wedding
          )
        );
        alert("Wedding updated successfully!");
      } else {
        // Create a new wedding
        const response = await axios.post(
          "https://invitationcardbackend.onrender.com/api/wedding",
          formattedValues
        );
        setWeddings((prevWeddings) => [...prevWeddings, response.data]);
        alert("Wedding created successfully!");
      }

      // Reset the form and editing state
      setEditingWedding(null);
      resetForm();
    } catch (error) {
      console.error("Error saving wedding:", error);
      alert("Failed to save wedding.");
    }
  };

  // Handle editing a wedding
  const handleEdit = (wedding) => {
    setEditingWedding(wedding);
  };

  // Handle deleting a wedding
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

  // Add a new event to the eventDetails array
  const addEvent = (values, setValues) => {
    setValues({
      ...values,
      eventDetails: [
        ...values.eventDetails,
        { title: "", timeStart: "", timeEnd: "", date: "", description: "" },
      ],
    });
  };

  // Remove an event from the eventDetails array
  const removeEvent = (index, values, setValues) => {
    setValues({
      ...values,
      eventDetails: values.eventDetails.filter((_, i) => i !== index),
    });
  };

  return (
    <Box m="20px">
      <Header title="EDIT WEDDING" subtitle=" Edit a Wedding" />

      {/* Formik Form */}
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={editingWedding || initialValues}
        validationSchema={weddingSchema}
        enableReinitialize
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
          setValues,
        }) => (
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              {/* Bride and Groom Details */}
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  variant="filled"
                  label="Bride's Name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.brideName}
                  name="brideName"
                  error={!!touched.brideName && !!errors.brideName}
                  helperText={touched.brideName && errors.brideName}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  variant="filled"
                  label="Groom's Name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.groomName}
                  name="groomName"
                  error={!!touched.groomName && !!errors.groomName}
                  helperText={touched.groomName && errors.groomName}
                />
              </Grid>

              {/* Bride and Groom Image URLs */}
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  variant="filled"
                  label="Bride's Image URL"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.brideImageUrl}
                  name="brideImageUrl"
                  error={!!touched.brideImageUrl && !!errors.brideImageUrl}
                  helperText={touched.brideImageUrl && errors.brideImageUrl}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  variant="filled"
                  label="Groom's Image URL"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.groomImageUrl}
                  name="groomImageUrl"
                  error={!!touched.groomImageUrl && !!errors.groomImageUrl}
                  helperText={touched.groomImageUrl && errors.groomImageUrl}
                />
              </Grid>

              {/* Wedding Date and Location */}
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  variant="filled"
                  label="Wedding Date"
                  type="date"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.weddingDate.split("T")[0]}
                  name="weddingDate"
                  error={!!touched.weddingDate && !!errors.weddingDate}
                  helperText={touched.weddingDate && errors.weddingDate}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  variant="filled"
                  label="Wedding Location"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.weddingLocation}
                  name="weddingLocation"
                  error={!!touched.weddingLocation && !!errors.weddingLocation}
                  helperText={touched.weddingLocation && errors.weddingLocation}
                />
              </Grid>

              {/* Bride and Groom Descriptions */}
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  variant="filled"
                  label="Bride Description"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.brideDescription}
                  name="brideDescription"
                  error={
                    !!touched.brideDescription && !!errors.brideDescription
                  }
                  helperText={
                    touched.brideDescription && errors.brideDescription
                  }
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  variant="filled"
                  label="Groom Description"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.groomDescription}
                  name="groomDescription"
                  error={
                    !!touched.groomDescription && !!errors.groomDescription
                  }
                  helperText={
                    touched.groomDescription && errors.groomDescription
                  }
                />
              </Grid>

              {/* Event Details */}
              <Grid item xs={12}>
                <Typography variant="h6">Event Details</Typography>

                {values.eventDetails.map((event, index) => (
                  <Box key={index} sx={{ marginBottom: 2 }}>
                    <Typography variant="subtitle1">
                      {event.title || `Event ${index + 1}`}
                    </Typography>

                    <TextField
                      fullWidth
                      variant="filled"
                      label="Event Title"
                      onBlur={handleBlur}
                      onChange={(e) =>
                        handleChange(`eventDetails[${index}].title`)(e)
                      }
                      value={event.title}
                      name={`eventDetails[${index}].title`}
                      error={
                        !!touched.eventDetails?.[index]?.title &&
                        !!errors.eventDetails?.[index]?.title
                      }
                      helperText={
                        touched.eventDetails?.[index]?.title &&
                        errors.eventDetails?.[index]?.title
                      }
                    />

                    <TextField
                      fullWidth
                      variant="filled"
                      label="Start Time"
                      type="time"
                      onBlur={handleBlur}
                      onChange={(e) =>
                        handleChange(`eventDetails[${index}].timeStart`)(e)
                      }
                      value={event.timeStart}
                      name={`eventDetails[${index}].timeStart`}
                      error={
                        !!touched.eventDetails?.[index]?.timeStart &&
                        !!errors.eventDetails?.[index]?.timeStart
                      }
                      helperText={
                        touched.eventDetails?.[index]?.timeStart &&
                        errors.eventDetails?.[index]?.timeStart
                      }
                    />

                    <TextField
                      fullWidth
                      variant="filled"
                      label="End Time"
                      type="time"
                      onBlur={handleBlur}
                      onChange={(e) =>
                        handleChange(`eventDetails[${index}].timeEnd`)(e)
                      }
                      value={event.timeEnd}
                      name={`eventDetails[${index}].timeEnd`}
                      error={
                        !!touched.eventDetails?.[index]?.timeEnd &&
                        !!errors.eventDetails?.[index]?.timeEnd
                      }
                      helperText={
                        touched.eventDetails?.[index]?.timeEnd &&
                        errors.eventDetails?.[index]?.timeEnd
                      }
                    />

                    <TextField
                      fullWidth
                      variant="filled"
                      label="Date"
                      type="date"
                      onBlur={handleBlur}
                      onChange={(e) =>
                        handleChange(`eventDetails[${index}].date`)(e)
                      }
                      value={event.date}
                      name={`eventDetails[${index}].date`}
                      error={
                        !!touched.eventDetails?.[index]?.date &&
                        !!errors.eventDetails?.[index]?.date
                      }
                      helperText={
                        touched.eventDetails?.[index]?.date &&
                        errors.eventDetails?.[index]?.date
                      }
                    />

                    <TextField
                      fullWidth
                      variant="filled"
                      label="Description"
                      onBlur={handleBlur}
                      onChange={(e) =>
                        handleChange(`eventDetails[${index}].description`)(e)
                      }
                      value={event.description}
                      name={`eventDetails[${index}].description`}
                      error={
                        !!touched.eventDetails?.[index]?.description &&
                        !!errors.eventDetails?.[index]?.description
                      }
                      helperText={
                        touched.eventDetails?.[index]?.description &&
                        errors.eventDetails?.[index]?.description
                      }
                    />

                    {/* Remove Event Button */}
                    <Button
                      variant="contained"
                      color="error"
                      onClick={() => removeEvent(index, values, setValues)}
                      sx={{ marginTop: 1 }}
                    >
                      Remove Event
                    </Button>
                  </Box>
                ))}

                {/* Add Event Button */}
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => addEvent(values, setValues)}
                  sx={{ marginTop: 2 }}
                >
                  Add Event
                </Button>
              </Grid>

              {/* Story Details */}
              <Grid item xs={12}>
                <Typography variant="h6">Story Details</Typography>
                {values.storyDetails.map((story, index) => (
                  <Box key={index} mb={2}>
                    <TextField
                      fullWidth
                      variant="filled"
                      label="Story Title"
                      onBlur={handleBlur}
                      onChange={(e) =>
                        handleChange(`storyDetails[${index}].title`)(e)
                      }
                      value={story.title}
                      name={`storyDetails[${index}].title`}
                    />
                    <TextField
                      fullWidth
                      variant="filled"
                      label="Story Date"
                      type="date"
                      onBlur={handleBlur}
                      onChange={(e) =>
                        handleChange(`storyDetails[${index}].date`)(e)
                      }
                      value={story.date.split("T")[0]}
                      name={`storyDetails[${index}].date`}
                    />
                    <TextField
                      fullWidth
                      variant="filled"
                      label="Story Description"
                      onBlur={handleBlur}
                      onChange={(e) =>
                        handleChange(`storyDetails[${index}].description`)(e)
                      }
                      value={story.description}
                      name={`storyDetails[${index}].description`}
                    />
                    <TextField
                      fullWidth
                      variant="filled"
                      label="Story Image URL"
                      onBlur={handleBlur}
                      onChange={(e) =>
                        handleChange(`storyDetails[${index}].image`)(e)
                      }
                      value={story.image}
                      name={`storyDetails[${index}].image`}
                    />
                  </Box>
                ))}
              </Grid>

              {/* Gallery Details */}
              <Grid item xs={12}>
                <Typography variant="h6">Gallery Details</Typography>
                {values.galleryData.map((gallery, index) => (
                  <Box key={index} mb={2}>
                    <TextField
                      fullWidth
                      variant="filled"
                      label="Gallery Title"
                      onBlur={handleBlur}
                      onChange={(e) =>
                        handleChange(`galleryData[${index}].title`)(e)
                      }
                      value={gallery.title}
                      name={`galleryData[${index}].title`}
                    />
                    <TextField
                      fullWidth
                      variant="filled"
                      label="Image URL"
                      onBlur={handleBlur}
                      onChange={(e) =>
                        handleChange(`galleryData[${index}].image`)(e)
                      }
                      value={gallery.image}
                      name={`galleryData[${index}].image`}
                    />
                    <TextField
                      fullWidth
                      variant="filled"
                      label="Photos Count"
                      onBlur={handleBlur}
                      onChange={(e) =>
                        handleChange(`galleryData[${index}].photosCount`)(e)
                      }
                      value={gallery.photosCount}
                      name={`galleryData[${index}].photosCount`}
                    />
                  </Box>
                ))}
              </Grid>

              {/* Submit Button */}
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  {editingWedding ? "Update Wedding" : "Create Wedding"}
                </Button>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>

      {/* Wedding List */}
      <Box mt={5}>
        <Typography variant="h6">Wedding List</Typography>
        <Grid container spacing={2}>
          {weddings.map((wedding) => (
            <Grid item xs={12} md={6} key={wedding._id}>
              <Box border={1} p={2} mb={2}>
                <Typography variant="h6">
                  {wedding.brideName} & {wedding.groomName}
                </Typography>
                <Button
                  onClick={() => handleEdit(wedding)}
                  variant="outlined"
                  color="secondary"
                >
                  Edit
                </Button>
                <Button
                  onClick={() => handleDelete(wedding._id)}
                  variant="outlined"
                  color="error"
                  style={{ marginLeft: "10px" }}
                >
                  Delete
                </Button>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};
const weddingSchema = yup.object({
  brideName: yup.string().required("Bride's Name is required"),
  groomName: yup.string().required("Groom's Name is required"),
  brideImageUrl: yup.string().required("Bride's Image URL is required"),
  groomImageUrl: yup.string().required("Groom's Image URL is required"),
  weddingDate: yup.date().required("Wedding Date is required"),
  weddingLocation: yup.string().required("Wedding Location is required"),
  brideDescription: yup.string().required("Bride's Description is required"),
  groomDescription: yup.string().required("Groom's Description is required"),
  eventDetails: yup.array().of(
    yup.object({
      type: yup.string().required("Main Ceremony Type is required"),
      title: yup.string().required("Main Ceremony Title is required"),
      timeStart: yup.string().required("Start Time is required"),
      timeEnd: yup.string().required("End Time is required"),
      date: yup.string().required("Ceremony Date is required"),
      description: yup
        .string()
        .required("Main Ceremony Description is required"),
    })
  ),
  storyDetails: yup.array().of(
    yup.object({
      title: yup.string().required("Story Title is required"),
      date: yup.date().required("Story Date is required"),
      description: yup.string().required("Story Description is required"),
      image: yup.string().required("Story Image URL is required"),
    })
  ),
  galleryData: yup.array().of(
    yup.object({
      image: yup.string().required("Gallery Image URL is required"),
      photosCount: yup.string().required("Photos Count is required"),
      title: yup.string().required("Gallery Title is required"),
    })
  ),
});

const initialValues = {
  brideName: "",
  groomName: "",
  brideImageUrl: "",
  groomImageUrl: "",
  weddingDate: "",
  weddingLocation: "",
  brideDescription: "",
  groomDescription: "",
  eventDetails: [],
  storyDetails: [],
  galleryData: [],
};

export default WeddingList;
