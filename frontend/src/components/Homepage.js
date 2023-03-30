import React from "react";
import "./Home.css";
const Homepage = () => {
  const data = localStorage.getItem("user");
  const employee = ["ram", "raj", "ritesh", "rahim", "deepak"];
  const handleClick = () => {};
  return (
    <div>
      {!data ? (
        <>
          <div className="banner d-flex align-items-center justify-content-center flex-column text-center text-white">
            <p className="m-5">Welcome to Users page</p>

            <a href="#container">
              <button>Scroll</button>
            </a>
          </div>
        </>
      ) : (
        <>
          <div className="banner d-flex align-items-center justify-content-center flex-column text-center text-white">
            <p className="m-5">Welcome to Admin Page</p>

            <button className="homeHeading" onClick={handleClick}>
              Employee List
            </button>
            <ul>
              {employee.map((item) => (
                <li>{item}</li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default Homepage;
