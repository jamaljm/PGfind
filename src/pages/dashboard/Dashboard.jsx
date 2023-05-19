import React, { useContext, useState } from "react";
import "./Dashboard.css";
import logo from "../../images/logo.png";
import { AuthContext } from "../../context";

export default function Dashboard() {
  const { user } = useContext(AuthContext);

  const initialvalue = {
    pg_name: "",
    owner_name: "",
    address: "",
    facilities: "",
    rent: "",
    phone: "",
    photo_url: ""
  };

  const [pg, setPg] = useState(initialvalue);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPg({ ...pg, [name]: value });
    console.log(pg);
  };

  

  if (user) {
    return (
      <div className="dashboard">
        <div className="nav">
          <div className="nav-left">
            <img src={logo} alt="" />
          </div>
          <div className="nav-right">
            <p>{user.displayName}</p>
            <img src={user.photoURL} alt="" />
          </div>
        </div>
        <div className="dashboard-cont">
          <div className="side-bar"></div>
          <div className="main-cont"></div>
          <div className="right-bar">
            <div className="addpg">
              <h2>Add Your PG</h2>
                <div>
                  <label>PG Name:</label> <br />
                  <input
                    type="text"
                    value={pg.pg_name}
                    name="pg_name"
                    onChange={handleChange}
                    id="name"
                  />
                  <br />

                  <label> Image:</label> <br />
                  <input type="file" accept="image/*" />
                  <br />
                  <label>Address:</label> <br />
                  <input
                    id="address"
                    name="address"
                    value={pg.address}
                    onChange={handleChange}
                  />
                  <br />
                  <label>Facilities:</label> <br />
                  <input
                    type="text"
                    id="facilities"
                    name="facilities"
                    value={pg.facilities}
                    onChange={handleChange}
                  />
                  <br />
                  <label>Rent:</label> <br />
                  <input
                    type="number"
                    id="rent"
                    name="rent"
                    value={pg.rent}
                    onChange={handleChange}
                  />
                  <br />
                  <label>Phone Number:</label> <br />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={pg.phone}
                    onChange={handleChange}
                  />
                  <br />
                  <button type="submit">Submit</button>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
