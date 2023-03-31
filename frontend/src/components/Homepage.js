import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Home.css";
import { DataGrid } from "@material-ui/data-grid";

const Homepage = () => {
  const [employeeList, setEmployeeList] = useState([]);
  const isAdmin = localStorage.getItem("user");
  let [list, setList] = useState(false);
  useEffect(() => {
    const fetchEmployeeList = async () => {
      const { data } = await axios.get("http://localhost:5000/employeeList");
      setEmployeeList(data.employee);
      console.log(data.employee);
    };
    fetchEmployeeList();
  }, []);
  const columns = [
    { field: "id", headerName: "Employee ID", minWidth: 150, flex: 1 },

    {
      field: "fullName",
      headerName: "Name",
      minWidth: 100,
      flex: 0.5,
    },
    {
      field: "email",
      headerName: "Email",

      minWidth: 100,
      flex: 0.5,
    },

    {
      field: "dateOfBirth",
      headerName: "Date Of Birth",
      type: "number",
      minWidth: 100,
      flex: 0.5,
    },

    {
      field: "dateOfHire",
      headerName: "Date Of Hire",
      type: "number",
      minWidth: 100,
      flex: 0.5,
    },
    {
      field: "position",
      headerName: "Position",

      minWidth: 100,
      flex: 0.5,
    },

    {
      field: "department",
      headerName: "Department",

      minWidth: 100,
      flex: 0.5,
    },

    {
      field: "city",
      headerName: "City",

      minWidth: 100,
      flex: 0.5,
    },
  ];

  const rows = [];

  employeeList &&
    employeeList.forEach((item) => {
      rows.push({
        id: item._id,
        fullName: item.fullName,
        email: item.email,
        dateOfBirth: item.dateOfBirth,
        dateOfHire: item.dateOfHire,
        position: item.position,
        department: item.department,
        city: item.city,
      });
    });

  return (
    <div>
      {!isAdmin.length ? (
        <>
          <div className="banner d-flex align-items-center justify-content-center flex-column text-center text-white">
            <p className="m-5">Welcome to Users page</p>
          </div>
        </>
      ) : (
        <>
          <div className="dashboard">
            <div className="employeeListContainer">
              <h2 id="employeeListHeading">Admin Page</h2>
              <button
                onClick={() => {
                  if (list === true) {
                    setList(false);
                  } else {
                    setList(true);
                  }
                }}
                className="btn btn-outline-primary"
              >
                Employee List
              </button>

              {list ? null : (
                <>
                  <h1 id="employeeListHeading">Employee List</h1>
                  <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={10}
                    disableSelectionOnClick
                    className="employeeListTable"
                    autoHeight
                  />
                </>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Homepage;
