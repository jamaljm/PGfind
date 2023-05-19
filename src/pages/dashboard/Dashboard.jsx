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
          <div class="right-bar">
            <div class="addpg">
              <h2>Add Your PG</h2>
              <div>
                <label>Name:</label> <br/>
                <input type="text" id="name" name="name" />
                <br/>
                <label> Image:</label> <br/>
                <input type="file" accept="image/*" />
                <br/>
                <label>Address:</label> <br/>
                <input id="address" name="address"></input>
                <br/>
                <label>Facilities:</label> <br/>
                <input type="text" id="facilities" name="facilities" />
                <br/>
                <label>Rent:</label> <br/>
                <input type="number" id="rent" name="rent" />
                <br/>
                <label>Phone Number:</label> <br/>
                <input type="tel" id="phone" name="phone" />
                <br/>
                <button>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
