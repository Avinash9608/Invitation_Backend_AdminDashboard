import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  useTheme,
  Button,
  TextField,
  Modal,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Alert,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [users, setUsers] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    subscriptionType: "",
    role: "",
    isActive: true,
  });
  const [error, setError] = useState(null); // State for error handling

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch(
        "https://invitationcardbackend.onrender.com/api/users"
      );
      const data = await response.json();

      const usersWithSerial = data.map((user, index) => ({
        ...user,
        id: index + 1,
      }));

      setUsers(usersWithSerial);
    } catch (error) {
      console.error("Failed to fetch users:", error);
    }
  };

  const handleAddUser = async () => {
    if (
      !newUser.name ||
      !newUser.email ||
      !newUser.subscriptionType ||
      !newUser.role
    ) {
      setError("All fields are required!"); // Show error if validation fails
      return;
    }

    try {
      const response = await fetch(
        "https://invitationcardbackend.onrender.com/api/users",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newUser),
        }
      );

      if (response.ok) {
        fetchUsers();
        setOpenModal(false);
        setNewUser({
          name: "",
          email: "",
          subscriptionType: "",
          role: "",
          isActive: true,
        });
        setError(null); // Clear error message on success
      } else {
        const errorMessage = await response.text();
        setError(`Failed to add user: ${errorMessage}`);
      }
    } catch (error) {
      console.error("Error adding user:", error);
      setError("An error occurred while adding the user.");
    }
  };

  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "name", headerName: "Name", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "subscriptionType", headerName: "Subscription", flex: 1 },
    { field: "role", headerName: "Role", flex: 1 },
    { field: "isActive", headerName: "Active", type: "boolean", flex: 1 },
    { field: "createdAt", headerName: "Created At", flex: 1 },
  ];

  return (
    <Box m="20px">
      <Header title="TEAM" subtitle="Managing the Team Members" />
      <Button
        variant="contained"
        color="primary"
        onClick={() => setOpenModal(true)}
        style={{ marginBottom: "20px" }}
      >
        Add User
      </Button>
      {error && <Alert severity="error">{error}</Alert>}{" "}
      {/* Display error message */}
      <Box
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
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
        }}
      >
        <DataGrid rows={users} columns={columns} checkboxSelection />
      </Box>
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
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
            Add New User
          </Typography>
          <TextField
            label="Name"
            fullWidth
            margin="normal"
            value={newUser.name}
            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
          />
          <TextField
            label="Email"
            fullWidth
            margin="normal"
            value={newUser.email}
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
          />
          <TextField
            label="Subscription Type"
            fullWidth
            margin="normal"
            value={newUser.subscriptionType}
            onChange={(e) =>
              setNewUser({ ...newUser, subscriptionType: e.target.value })
            }
          />
          <FormControl fullWidth margin="normal">
            <InputLabel>Role</InputLabel>
            <Select
              value={newUser.role}
              onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
            >
              <MenuItem value="Admin">Admin</MenuItem>
              <MenuItem value="User">User</MenuItem>
              <MenuItem value="Manager">Manager</MenuItem>
            </Select>
          </FormControl>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleAddUser}
            sx={{ mt: 2 }}
          >
            Add User
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default Team;
