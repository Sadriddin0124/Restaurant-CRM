import React from "react";
import "./Notifications.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import BasicTable from "../../components/Table/Table";
const Notifications = () => {
  return (
    <div className="notifications">
      <div className="notifications__sidebar">
        <Sidebar />
      </div>
      <div className="notifications__right">
        <div className="notifications__navbar">
          <Navbar />
        </div>
        <div className="notifications__table">
          <BasicTable />
        </div>
      </div>
    </div>
  );
};

export default Notifications;
