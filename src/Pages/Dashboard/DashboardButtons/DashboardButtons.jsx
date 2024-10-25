import React from "react";
import "./Buttons.css";

function DashboardButtons() {
  const buttons = [
    {
      text: "Abu Dhabi",
      link: "/",
    },
    {
      text: "Dubai",
      link: "/journal",
    },
    {
      text: "Sharjah & Ajman",
      link: "/reports",
    },
    {
      text: "Fujairah",
      link: "/calendar",
    },
    {
      text: "Ras Al Khaimah",
      link: "/configuration",
    },
    {
      text: "Umm Al Quwain",
      link: "/account",
    },
  ];
  return (
    <div className="buttons-container">
      {buttons.map((button) => {
        return (
          <>
            <button className="btn-primary">{button.text}</button>
          </>
        );
      })}
    </div>
  );
}

export default DashboardButtons;
