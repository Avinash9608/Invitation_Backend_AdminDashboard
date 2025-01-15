import React from "react";
import { DataGrid } from "@mui/x-data-grid";

const InvitationTable = ({ invitations, onRowClick }) => {
  const columns = [
    { field: "id", headerName: "ID", width: 150 },
    { field: "userId", headerName: "User ID", width: 150 },
    { field: "templateId", headerName: "Template ID", width: 150 },
    { field: "format", headerName: "Format", width: 150 },
    { field: "status", headerName: "Status", width: 150 },
    {
      field: "createdAt",
      headerName: "Created At",
      width: 200,
      valueFormatter: ({ value }) => new Date(value).toLocaleString(),
    },
  ];

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={invitations}
        columns={columns}
        onRowClick={(params) => onRowClick(params.row)}
        getRowId={(row) => row.id}
      />
    </div>
  );
};

export default InvitationTable;
