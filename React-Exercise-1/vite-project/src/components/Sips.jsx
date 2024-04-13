
import React, { useState, useEffect } from "react";

const Sips = () => {
  const [datetime, setDatetime] = useState("");
  const [day, setDay] = useState("");
  const [time, setTime] = useState("");
  const [ampmtime, setAmpmime] = useState("");
  const [sectime, setSectime] = useState("");
  const [dateString, setDateString] = useState("");

  useEffect(() => {
    const updateDateTime = () => {
      const date = new Date();
      const dayOfWeek = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ][date.getDay()];
      const month = date.toLocaleString("default", { month: "long" });
      const dayOfMonth = date.getDate();
      const year = date.getFullYear();
      const hours = date.getHours() % 12 || 12; // Convert 24-hour time to 12-hour time
      const minutes = date.getMinutes().toString().padStart(2, "0");
      const seconds = date.getSeconds().toString().padStart(2, "0");
      const ampm = date.getHours() >= 12 ? "PM" : "AM";
      const currentTime = `${hours}:${minutes}`; //:${seconds} ${ampm}
      const currentDate = `${month} ${dayOfMonth}, ${year}`;

      setDatetime(date.toString());
      setDay(dayOfWeek);
      setTime(currentTime);
      setAmpmime(ampm);
      setSectime(seconds);
      setDateString(currentDate);
    };

    // Update time every second
    const interval = setInterval(updateDateTime, 1000);

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      Exercise-1:
      <div style={{ backgroundColor: "black", color: "#00ff00", width:"150px" }}>
        <div style={{fontSize:"14px"}}>{day}</div>
        <div style={{display: "flex", flexDirection:"row", marginTop:"-15px", marginBottom:"-10px" ,alignItems:"center",justifyContent:"center"}}>
            <div style={{
            fontWeight: "bold",
            fontSize: "50px",
            color: "#00ff00",
            textShadow: " 0 0 5px #00ff00,0 0 10px #00ff00",
          }}>{time}</div>
          
          <div style={{display: "flex", alignItems:"center",justifyContent:"center", flexDirection:"column", fontSize:"14px"}}>
            <div>{ampmtime}</div>
            <div>{sectime}</div>
          </div>
        </div>

        <div style={{ fontSize:"14px"}}>{dateString}</div>
      </div>
    </div>
  );
};

export default Sips;
