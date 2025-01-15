import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";

const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [contacts, setContacts] = useState([]); // State to store contacts data

  // Fetch contacts data from the backend
  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await axios.get(
          "https://invitationcardbackend.onrender.com/api/contact"
        ); // Fetch data from backend
        setContacts(response.data); // Set fetched contacts data to state
      } catch (error) {
        console.error("Error fetching contacts:", error);
      }
    };

    fetchContacts(); // Fetch contacts data when component mounts
  }, []);

  // Delete contact by ID
  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `https://invitationcardbackend.onrender.com/api/contact/${id}`
      );
      alert(response.data.success);
      // Refresh the contact list after deletion
      setContacts(contacts.filter((contact) => contact._id !== id));
    } catch (error) {
      alert(error.response?.data?.error || "Error deleting contact");
    }
  };

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "name", headerName: "Name", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "message", headerName: "Message", flex: 2 },
    { field: "date", headerName: "Date", flex: 1 },
    {
      field: "delete",
      headerName: "Delete",
      renderCell: (params) => (
        <button
          onClick={() => handleDelete(params.row.id)}
          style={{
            backgroundColor: "red",
            color: "white",
            border: "none",
            padding: "5px 10px",
            cursor: "pointer",
            borderRadius: "5px",
          }}
        >
          Delete
        </button>
      ),
      flex: 0.5,
    },
  ];

  // Transform fetched data to rows for DataGrid
  const rows = contacts.map((contact, index) => ({
    id: contact._id, // Use _id from MongoDB as the row id
    name: contact.name,
    email: contact.email,
    message: contact.message,
    date: new Date(contact.date).toLocaleString(), // Formatting the date to a readable format
  }));

  return (
    <Box m="20px">
      <Header
        title="CONTACTS"
        subtitle="List of Contacts for Future Reference"
      />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
        }}
      >
        <DataGrid
          rows={rows} // Pass the rows containing the fetched contact data
          columns={columns}
          components={{ Toolbar: GridToolbar }} // Optional: Toolbar for filtering, etc.
        />
      </Box>
    </Box>
  );
};

export default Contacts;
