import React from "react";
import dateImg from "../assets/ri_calendar-line.png";
import Container from "./Container";

const TicketCard = ({ issue, onTicketClick }) => {
  const handleClick = () => {
    onTicketClick(issue);
  };

  const getText = (priority) => {
    switch (priority) {
      case "High":
        return "HIGH PRIORITY";
      case "Medium":
        return "MEDIUM PRIORITY";
      case "Low":
        return "LOW PRIORITY";
      default:
        return priority.toUpperCase() + "PRIORITY";
    }
  };
  return (
    <div
      className="bg-white rounded-xl p-4 shadow hover:shadow-lg"
      onClick={handleClick}
    >
      <div className=" justify-between items-center">
        <div className="flex justify-between">
          <h3 className="font-semibold text-black">{issue.title}</h3>
          <p
            className={`flex items-center gap-1 text-xs p-1 lg:p-2 rounded-full self-start ${issue.status === "Open" ? "bg-green-200 lg:bg-green-300 text-green-600" : issue.status === "In-Progress" ? "bg-yellow-200 lg:bg-yellow-300 text-yellow-600" : "bg-gray-200 lg:bg-gray-300 text-gray-600"}`}
          >
            <span
              className={`w-3 h-3 rounded-full ${issue.status === "Open" ? "bg-green-600" : issue.status === "In-Progress" ? "bg-yellow-600" : "bg-gray-400"}`}
            ></span>
            <span className="hidden lg:block">{issue.status}</span>
          </p>
        </div>
        <p className="text-gray-500 text-xs mt-1">{issue.description}</p>
        <div className="lg:flex justify-between text-xs text-gray-400 mt-2">
          <div className="flex justify-between gap-3">
            <span className="font-medium">#{issue.id}</span>
            <span
              className={`font-bold ${issue.priority === "High" ? "text-red-500" : issue.priority === "Medium" ? "text-yellow-500" : "text-green-500"}`}
            >
              {getText(issue.priority)}
            </span>
          </div>
          <div className="flex justify-between gap-3">
            <span>{issue.customer}</span>
            <span className="flex gap-1">
              <img className="h-4" src={dateImg} alt="" />
              {issue.date}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
