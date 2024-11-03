import React from "react";
import "./Dashboard.css";
import DashboardButtons from "../DashboardButtons/DashboardButtons";
// import { Link } from "react-router-dom";
import vector from "../../assets/Vector.png";

function DashboardMain() {
  return (
    <div className="dash-container">
      <div className="dash-left" style={{ color: "black" }}>
        <h1>
          Ready to dive into <font style={{ color: "#272555" }}>HABOT?</font>
        </h1>
        <p>
          Signing up with HABOT opens the door to a world of new opportunities
          and potential for business growth. Gain access to a vibrant community
          of like-minded individuals, unlock valuable resources, and take the
          first step towards realizing your entrepreneurial dreams.
        </p>
        <button
          className="dash-button"
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <a href="/signup" style={{ position: "relative", zIndex: 1,marginRight:"30px",font:"Poppins" }}>
            Sign up Today !
          </a>
          <img
            src={vector}
            style={{
              position: "absolute",
              left: "calc(50% + 60px)",
              top: "50%",
              width:"32px",
              height:"16.8px",
              transform: "translateY(-50%)",
              marginLeft: "30px",
            }}
            alt="Icon"
          />
        </button>
      </div>
      <div className="dash-right">
        <DashboardButtons />
      </div>
    </div>
  );
}

export default DashboardMain;
