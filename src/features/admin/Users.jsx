import { useDispatch } from "react-redux";
import { Button, IconButton } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useGetUsersQuery } from "../../app/api";
import { LoadingSpinner } from "../../components/common";
import { openModal } from "../modal";
import { AddUserModal } from "../modal";
import { useState } from "react";

const Users = () => {
  const dispatch = useDispatch();

  const { data, isLoading } = useGetUsersQuery();

  const handleOpenModal = () => {
    dispatch(openModal({ type: "addUser" }));
  };

  if (isLoading) return <LoadingSpinner />;

  const rows = [...data?.data];
  const columns = [
    { field: "id", headerName: "Id", width: 50 },
    { field: "firstName", headerName: "First Name", width: 150 },
    { field: "lastName", headerName: "Last Name", width: 150 },
    { field: "age", headerName: "Age", width: 70 },
    { field: "cin", headerName: "CIN", width: 100 },
    { field: "city", headerName: "City", width: 100 },
    { field: "bloodType", headerName: "Blood Type", width: 70 },
    { field: "email", headerName: "Email", width: 200 },
    { field: "phone", headerName: "Phone", width: 100 },
    {
      field: "action",
      headerName: "Action",
      renderCell: (params) => (
        <div className="flex flex-row justify-evenly w-full">
          <IconButton aria-label="edit" onClick={() => console.log(params)}>
            <EditIcon />
          </IconButton>
          <IconButton aria-label="delete" onClick={() => console.log(params)}>
            <DeleteIcon />
          </IconButton>
        </div>
      ),
    },
  ];

  return (
    <div>
      <AddUserModal />
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-2xl font-bold">Users</h1>
        <Button variant="contained" onClick={handleOpenModal}>
          Add User
        </Button>
      </div>
      <div className="h-96">
        <DataGrid
          rows={rows}
          columns={columns}
          slots={{
            toolbar: GridToolbar,
          }}
        />
      </div>
    </div>
  );
};

export default Users;
