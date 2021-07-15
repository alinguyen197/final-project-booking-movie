import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function Progressbar() {
  const percentage = 5.5;

  return (
    <div
      style={{
        width: 150,
        height: 150,
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        borderRadius: "50%",
      }}
    >
      <CircularProgressbar
        value={55}
        text={`${percentage}`}
        styles={buildStyles({
          pathColor: `rgb(126, 211, 32)`,
          textColor: "white",
          textSize: "30px",
          trailColor: "#3a3a3a",
        })}
      />
      <p style={{ color: "white", textAlign: "center", marginTop: 10 }}>
        Điểm đánh giá
      </p>
    </div>
  );
}
