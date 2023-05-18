import React,{ useContext } from "react";
import "./Dashboard.css";
import logo from '../../images/logo.png'
import { AuthContext } from "../../context";


export default function Dashboard() {
  const { user } = useContext(AuthContext);
  console.log(user);

  if (user) {
    return (
      <div className="dashboard">
        <div className="nav">
          <div className="nav-left">
            <img src={logo} alt=""></img>
          </div>
          <div className="nav-right">
            <p>{user.displayName}</p>
            <img src={user.photoURL} alt=""></img>
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
}
