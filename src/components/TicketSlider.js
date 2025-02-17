import React, { useState } from "react";
import "./TicketSlider.css";

const TicketSlider = ({ totalTickets }) => {
  const maxTickets = Math.floor(totalTickets * 0.1); // 10% of total tickets
  const [tickets, setTickets] = useState(1);

  const handleChange = (event) => {
    const value = parseInt(event.target.value, 10);
    setTickets(value);
  };

  return (
    <div className="space-y-4 p-4 border border-gray-200 rounded-lg">
      {/* Slider Label */}
      <div className="flex justify-between items-center">
        <label className="text-sm font-semibold text-gray-700">
          Select the number of tickets:
        </label>
        <span className="text-lg font-semibold text-palette-primary">
          {tickets}
        </span>
      </div>

      {/* Range Slider */}
      <input
        type="range"
        min="1"
        max={maxTickets}
        value={tickets}
        onChange={handleChange}
        className="range-slider"
        style={{
          background: `linear-gradient(to right, #5B21B6 ${
            ((tickets - 1) / (maxTickets - 1)) * 100
          }%, #e5e7eb ${((tickets - 1) / (maxTickets - 1)) * 100}%)`,
        }}
      />

      {/* Min and Max Labels */}
      <div className="flex justify-between text-sm text-gray-600">
        <span>1</span>
        <span>{maxTickets}</span>
      </div>
    </div>
  );
};

export default TicketSlider;
