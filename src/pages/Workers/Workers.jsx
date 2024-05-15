import React from "react";
import "./Workers.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import BasicTable from "../../components/Table/Table";
const Workers = () => {
  return (
    <div className="workers">
      <div className="workers__sidebar">
        <Sidebar />
      </div>
      <div className="workers__right">
        <div className="workers__navbar">
          <Navbar />
        </div>
        <div className="workers__table">
          <BasicTable />
        </div>
      </div>
    </div>
  );
};

export default Workers;
