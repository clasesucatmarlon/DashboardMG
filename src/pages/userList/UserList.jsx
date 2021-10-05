import React from "react";
import { DataGrid } from '@mui/x-data-grid';

import { DeleteOutline } from '@material-ui/icons';

export default function UserList() {
  const columns = [
    { field: "id", headerName: "ID", width: 90 },

    { 
      field: "user", 
      headerName: "User", 
      width: 210,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.avatar} alt="" />
            <span>{params.row.username}</span>
          </div>
        );
      },
    },

    { field: "email", headerName: "Email", width: 210 },
    { field: "status", headerName: "Status", width: 120},
    { field: "transaction", headerName: "Transaction", width: 150},
    { 
      field: "action", 
      headerName: "Action", 
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <button className="userListEdit">Edit</button>
            <DeleteOutline className="userListDelete"/>
          </>
        )
      }
    },
  ];

  const rows = [
    {
      id: 1,
      username: "jhon Snow",
      avatar: "https://uifaces.co/our-content/donated/fyXUlj0e.jpg",
      email: "jhon@gmail.com",
      status: "active",
      transaction: "$100.50"
    },
    {
      id: 2,
      username: "Cersei Lannister",
      avatar: "https://randomuser.me/api/portraits/women/82.jpg",
      email: "cersei.lannister@gmail.com",
      status: "active",
      transaction: "$200.50"
    },
    {
      id: 3,
      username: "Arya Stark",
      avatar: "https://uifaces.co/our-content/donated/3799Ffxy.jpeg",
      email: "arya1213@gmail.com",
      status: "active",
      transaction: "$50.50"
    },
    {
      id: 4,
      username: "Arya Stark",
      avatar: "https://uifaces.co/our-content/donated/3799Ffxy.jpeg",
      email: "arya1213@gmail.com",
      status: "active",
      transaction: "$50.50"
    },
    {
      id: 5,
      username: "Arya Stark",
      avatar: "https://uifaces.co/our-content/donated/3799Ffxy.jpeg",
      email: "arya1213@gmail.com",
      status: "active",
      transaction: "$50.50"
    },
    {
      id: 6,
      username: "Arya Stark",
      avatar: "https://uifaces.co/our-content/donated/3799Ffxy.jpeg",
      email: "arya1213@gmail.com",
      status: "active",
      transaction: "$50.50"
    },
    {
      id: 7,
      username: "Arya Stark",
      avatar: "https://uifaces.co/our-content/donated/3799Ffxy.jpeg",
      email: "arya1213@gmail.com",
      status: "active",
      transaction: "$50.50"
    },
    {
      id: 8,
      username: "Arya Stark",
      avatar: "https://uifaces.co/our-content/donated/3799Ffxy.jpeg",
      email: "arya1213@gmail.com",
      status: "active",
      transaction: "$50.50"
    },
    {
      id: 9,
      username: "Arya Stark",
      avatar: "https://uifaces.co/our-content/donated/3799Ffxy.jpeg",
      email: "arya1213@gmail.com",
      status: "active",
      transaction: "$50.50"
    },
    {
      id: 10,
      username: "Daenerys Targaryen",
      avatar: "https://uifaces.co/our-content/donated/3799Ffxy.jpeg",
      email: "arya1213@gmail.com",
      status: "active",
      transaction: "$50.50"
    },
  ]
/* 

    { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  ];  */
  return (
    <div className="userList">
      <DataGrid
        rows={rows}
        disableSelectionOnClick
        columns={columns}
        pageSize={10}
        checkboxSelection
      />  
    </div>
  )
}
