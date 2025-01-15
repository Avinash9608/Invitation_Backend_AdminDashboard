// import { Box, Button, TextField, MenuItem } from "@mui/material";
// import { Formik } from "formik";
// import * as yup from "yup";
// import axios from "axios";
// import useMediaQuery from "@mui/material/useMediaQuery";
// import Header from "../../components/Header";
// import { useState, useEffect } from "react"; // Import useState and useEffect

// const Template = () => {
//   const isNonMobile = useMediaQuery("(min-width:600px)");

//   // State to hold the list of templates
//   const [templates, setTemplates] = useState([]);
//   const [setCreatedTemplate] = useState(null);

//   // Fetch the templates from the backend when the component mounts
//   useEffect(() => {
//     const fetchTemplates = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/api/templates");
//         setTemplates(response.data); // Update the state with the fetched templates
//       } catch (error) {
//         console.error("Error fetching templates:", error);
//       }
//     };

//     fetchTemplates();
//   }, []); // Empty array means this effect runs only once when the component mounts

//   // Handle form submission to create a new template
//   const handleFormSubmit = async (values) => {
//     try {
//       const response = await axios.post(
//         "http://localhost:5000/api/templates",
//         values
//       );

//       // Add the newly created template to the state
//       setCreatedTemplate(response.data);
//       setTemplates((prevTemplates) => [...prevTemplates, response.data]); // Update the list of templates with the new one

//       alert("Template created successfully!");
//     } catch (error) {
//       console.error("Error creating template:", error);
//       alert("Failed to create template.");
//     }
//   };

//   return (
//     <Box m="20px">
//       <Header title="CREATE TEMPLATE" subtitle="Create a New Template" />

//       {/* Formik form to create a new template */}
//       <Formik
//         onSubmit={handleFormSubmit}
//         initialValues={initialValues}
//         validationSchema={templateSchema}
//       >
//         {({
//           values,
//           errors,
//           touched,
//           handleBlur,
//           handleChange,
//           handleSubmit,
//         }) => (
//           <form onSubmit={handleSubmit}>
//             <Box
//               display="grid"
//               gap="30px"
//               gridTemplateColumns="repeat(4, minmax(0, 1fr))"
//               sx={{
//                 "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
//               }}
//             >
//               <TextField
//                 fullWidth
//                 variant="filled"
//                 label="Template Name"
//                 onBlur={handleBlur}
//                 onChange={handleChange}
//                 value={values.name}
//                 name="name"
//                 error={!!touched.name && !!errors.name}
//                 helperText={touched.name && errors.name}
//                 sx={{ gridColumn: "span 4" }}
//               />
//               <TextField
//                 fullWidth
//                 variant="filled"
//                 label="Category"
//                 onBlur={handleBlur}
//                 onChange={handleChange}
//                 value={values.category}
//                 name="category"
//                 error={!!touched.category && !!errors.category}
//                 helperText={touched.category && errors.category}
//                 sx={{ gridColumn: "span 4" }}
//               />
//               <TextField
//                 fullWidth
//                 variant="filled"
//                 label="Type"
//                 onBlur={handleBlur}
//                 onChange={handleChange}
//                 value={values.type}
//                 name="type"
//                 error={!!touched.type && !!errors.type}
//                 helperText={touched.type && errors.type}
//                 sx={{ gridColumn: "span 4" }}
//               />

//               {/* New Select Dropdown for File URL Type */}
//               <Box sx={{ gridColumn: "span 4" }}>
//                 <TextField
//                   fullWidth
//                   select
//                   label="Select File Source"
//                   value={values.fileSource}
//                   onChange={handleChange}
//                   name="fileSource"
//                   variant="filled"
//                   error={!!touched.fileSource && !!errors.fileSource}
//                   helperText={touched.fileSource && errors.fileSource}
//                 >
//                   <MenuItem value="url">File URL</MenuItem>
//                   <MenuItem value="localStorage">Local Storage</MenuItem>
//                 </TextField>
//               </Box>

//               {/* Conditional Rendering Based on File Source Selection */}
//               {values.fileSource === "url" ? (
//                 <TextField
//                   fullWidth
//                   variant="filled"
//                   label="File URL"
//                   onBlur={handleBlur}
//                   onChange={handleChange}
//                   value={values.fileURL}
//                   name="fileURL"
//                   error={!!touched.fileURL && !!errors.fileURL}
//                   helperText={touched.fileURL && errors.fileURL}
//                   sx={{ gridColumn: "span 4" }}
//                 />
//               ) : (
//                 <Button
//                   variant="contained"
//                   component="label"
//                   sx={{ gridColumn: "span 4" }}
//                 >
//                   Upload File
//                   <input
//                     type="file"
//                     hidden
//                     onChange={(e) =>
//                       handleChange({
//                         target: { name: "file", value: e.target.files[0] },
//                       })
//                     }
//                   />
//                 </Button>
//               )}

//               <TextField
//                 fullWidth
//                 variant="filled"
//                 label="Price"
//                 onBlur={handleBlur}
//                 onChange={handleChange}
//                 value={values.price}
//                 name="price"
//                 error={!!touched.price && !!errors.price}
//                 helperText={touched.price && errors.price}
//                 sx={{ gridColumn: "span 4" }}
//               />
//             </Box>
//             <Box display="flex" justifyContent="end" mt="20px">
//               <Button type="submit" color="secondary" variant="contained">
//                 Create Template
//               </Button>
//             </Box>
//           </form>
//         )}
//       </Formik>

//       {/* Display the list of templates */}
//       <Box mt="30px">
//         <Header title="Templates List" subtitle="Existing Templates" />
//         <Box mt="20px">
//           <table style={{ width: "100%", borderCollapse: "collapse" }}>
//             <thead>
//               <tr>
//                 <th style={{ border: "1px solid #ddd", padding: "8px" }}>
//                   Name
//                 </th>
//                 <th style={{ border: "1px solid #ddd", padding: "8px" }}>
//                   Category
//                 </th>
//                 <th style={{ border: "1px solid #ddd", padding: "8px" }}>
//                   Type
//                 </th>
//                 <th style={{ border: "1px solid #ddd", padding: "8px" }}>
//                   File URL
//                 </th>
//                 <th style={{ border: "1px solid #ddd", padding: "8px" }}>
//                   Price
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               {templates.map((template, index) => (
//                 <tr key={index}>
//                   <td style={{ border: "1px solid #ddd", padding: "8px" }}>
//                     {template.name}
//                   </td>
//                   <td style={{ border: "1px solid #ddd", padding: "8px" }}>
//                     {template.category}
//                   </td>
//                   <td style={{ border: "1px solid #ddd", padding: "8px" }}>
//                     {template.type}
//                   </td>
//                   <td style={{ border: "1px solid #ddd", padding: "8px" }}>
//                     {template.fileURL ? (
//                       <img
//                         src={template.fileURL}
//                         alt="File"
//                         width="50"
//                         height="50"
//                         style={{ objectFit: "cover" }}
//                       />
//                     ) : (
//                       "Local Storage"
//                     )}
//                   </td>
//                   <td style={{ border: "1px solid #ddd", padding: "8px" }}>
//                     ${template.price}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// const templateSchema = yup.object().shape({
//   name: yup.string().required("Required"),
//   category: yup.string().required("Required"),
//   type: yup.string().required("Required"),
//   fileSource: yup.string().required("Required"),
//   fileURL: yup.string().when("fileSource", {
//     is: "url",
//     then: yup.string().url("Invalid URL").required("Required"),
//   }),
//   file: yup.mixed().when("fileSource", {
//     is: "localStorage",
//     then: yup.mixed().required("File is required"),
//   }),
//   price: yup.number().positive("Must be positive").required("Required"),
// });

// const initialValues = {
//   name: "",
//   category: "",
//   type: "",
//   fileSource: "url",
//   fileURL: "",
//   file: null,
//   price: "",
// };

// export default Template;
import { Box, Button, TextField, MenuItem } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import axios from "axios";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import { useState, useEffect } from "react";

const Template = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [templates, setTemplates] = useState([]);
  const [editingTemplate, setEditingTemplate] = useState(null); // To hold the template being edited

  useEffect(() => {
    const fetchTemplates = async () => {
      try {
        const response = await axios.get(
          "https://invitationcardbackend.onrender.com/api/templates"
        );
        setTemplates(response.data);
      } catch (error) {
        console.error("Error fetching templates:", error);
      }
    };

    fetchTemplates();
  }, []);

  const handleFormSubmit = async (values, { resetForm }) => {
    try {
      if (editingTemplate) {
        // Update the template in the database
        const response = await axios.put(
          `https://invitationcardbackend.onrender.com/api/templates/${editingTemplate._id}`,
          values
        );

        // Update the state
        setTemplates((prevTemplates) =>
          prevTemplates.map((template) =>
            template._id === editingTemplate._id ? response.data : template
          )
        );

        alert("Template updated successfully!");
      } else {
        // Create a new template
        const response = await axios.post(
          "https://invitationcardbackend.onrender.com/api/templates",
          values
        );

        setTemplates((prevTemplates) => [...prevTemplates, response.data]);
        alert("Template created successfully!");
      }

      setEditingTemplate(null); // Reset editing state
      resetForm();
    } catch (error) {
      console.error("Error saving template:", error);
      alert("Failed to save template.");
    }
  };

  const handleEdit = (template) => {
    setEditingTemplate(template);
  };

  const handleDelete = async (id) => {
    try {
      console.log(`Attempting to delete template with id: ${id}`);
      const response = await axios.delete(
        `https://invitationcardbackend.onrender.com/api/templates/${id}`
      );
      console.log("Delete response:", response.data);

      // Update the state
      setTemplates((prevTemplates) =>
        prevTemplates.filter((template) => template._id !== id)
      );

      alert("Template deleted successfully!");
    } catch (error) {
      console.error("Error deleting template:", error);
      alert("Failed to delete template.");
    }
  };

  return (
    <Box m="20px">
      <Header title="CREATE TEMPLATE" subtitle="Create or Edit a Template" />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={editingTemplate || initialValues}
        validationSchema={templateSchema}
        enableReinitialize
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                label="Template Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.name}
                name="name"
                error={!!touched.name && !!errors.name}
                helperText={touched.name && errors.name}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                label="Category"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.category}
                name="category"
                error={!!touched.category && !!errors.category}
                helperText={touched.category && errors.category}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                label="Type"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.type}
                name="type"
                error={!!touched.type && !!errors.type}
                helperText={touched.type && errors.type}
                sx={{ gridColumn: "span 4" }}
              />

              <Box sx={{ gridColumn: "span 4" }}>
                <TextField
                  fullWidth
                  select
                  label="Select File Source"
                  value={values.fileSource}
                  onChange={handleChange}
                  name="fileSource"
                  variant="filled"
                  error={!!touched.fileSource && !!errors.fileSource}
                  helperText={touched.fileSource && errors.fileSource}
                >
                  <MenuItem value="url">File URL</MenuItem>
                  <MenuItem value="localStorage">Local Storage</MenuItem>
                </TextField>
              </Box>

              {values.fileSource === "url" ? (
                <TextField
                  fullWidth
                  variant="filled"
                  label="File URL"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.fileURL}
                  name="fileURL"
                  error={!!touched.fileURL && !!errors.fileURL}
                  helperText={touched.fileURL && errors.fileURL}
                  sx={{ gridColumn: "span 4" }}
                />
              ) : (
                <Button
                  variant="contained"
                  component="label"
                  sx={{ gridColumn: "span 4" }}
                >
                  Upload File
                  <input
                    type="file"
                    hidden
                    onChange={(e) =>
                      handleChange({
                        target: { name: "file", value: e.target.files[0] },
                      })
                    }
                  />
                </Button>
              )}

              <TextField
                fullWidth
                variant="filled"
                label="Price"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.price}
                name="price"
                error={!!touched.price && !!errors.price}
                helperText={touched.price && errors.price}
                sx={{ gridColumn: "span 4" }}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                {editingTemplate ? "Update Template" : "Create Template"}
              </Button>
            </Box>
          </form>
        )}
      </Formik>

      <Box mt="30px">
        <Header title="Templates List" subtitle="Existing Templates" />
        <Box mt="20px">
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                  Name
                </th>
                <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                  Category
                </th>
                <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                  Type
                </th>
                <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                  File URL
                </th>
                <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                  Price
                </th>
                <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {templates.map((template) => (
                <tr key={template._id}>
                  <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                    {template.name}
                  </td>
                  <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                    {template.category}
                  </td>
                  <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                    {template.type}
                  </td>
                  <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                    {template.fileURL ? (
                      <img
                        src={template.fileURL}
                        alt="File"
                        width="50"
                        height="50"
                        style={{ objectFit: "cover" }}
                      />
                    ) : (
                      "Local Storage"
                    )}
                  </td>
                  <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                    ${template.price}
                  </td>
                  <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                    <Button
                      onClick={() => handleEdit(template)}
                      color="primary"
                      variant="contained"
                      size="small"
                      style={{ marginRight: "10px" }}
                    >
                      Edit
                    </Button>
                    <Button
                      onClick={() => handleDelete(template._id)}
                      color="secondary"
                      variant="contained"
                      size="small"
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Box>
      </Box>
    </Box>
  );
};

const templateSchema = yup.object().shape({
  name: yup.string().required("Required"),
  category: yup.string().required("Required"),
  type: yup.string().required("Required"),
  fileSource: yup.string().required("Required"),
  fileURL: yup.string().when("fileSource", {
    is: "url",
    then: yup.string().url("Invalid URL").required("Required"),
  }),
  file: yup.mixed().when("fileSource", {
    is: "localStorage",
    then: yup.mixed().required("File is required"),
  }),
  price: yup.number().positive("Must be positive").required("Required"),
});

const initialValues = {
  name: "",
  category: "",
  type: "",
  fileSource: "url",
  fileURL: "",
  file: null,
  price: "",
};

export default Template;
