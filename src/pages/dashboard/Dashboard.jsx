import React from "react";
import "./Dashboard.css";
import logo from '../../images/logo.png'

export default function Dashboard() {
  return (
    <div className="dashboard">
      <div className="nav">
        <div className="nav-left">
          <img src={logo} alt=""></img>
        </div>
        <div className="nav-right">
          <p>name</p>
          <img src="" alt=""></img>
        </div>
      </div>
      <div className="dashboard-cont">
        <div className="side-bar"></div>
        <div className="main-cont"></div>
        <div className="right-bar"></div>
      </div>
    </div>
  );
}
