import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";

export default function Calendar() {
  const [date, setDate] = useState(null);
  return (
    <div className="w-64 h-7 my-5">
      <button
        popoverTarget="rdp-popover"
        className="input input-border"
        style={{ anchorName: "--rdp" }}
      >
        {date ? date.toLocaleDateString() : "Pick a date"}
      </button>
      <div
        popover="auto"
        id="rdp-popover"
        className="dropdown"
        style={{ positionAnchor: "--rdp" }}
      >
        <DayPicker
          className="react-day-picker"
          mode="single"
          selected={date}
          onSelect={setDate}
        />
      </div>
    </div>
  );
}
