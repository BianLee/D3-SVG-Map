"use client";
import { useState } from "react";

const CityInput = ({ onCityAdded }) => {
  const [city, setCity] = useState("");

  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" || e.keyCode === 13) {
      handleAddCity();
    }
  };
  const handleAddCity = () => {
    if (city.trim() !== "") {
      onCityAdded(city.trim());
      setCity("");
    }
  };

  return (
    <header aria-label="Site Header" className="shadow-sm bg-gray-100">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4">
        <div className="flex items-center gap-4">
          <div className="relative">
            <input
              className="h-10 rounded-lg border-gray-200 pe-10 text-sm focus:outline-none placeholder-gray-300 px-4"
              placeholder="Add City"
              type="text"
              value={city}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
            />
            <button
              className="absolute inset-y-0 end-0 rounded-r-lg p-2 text-gray-400"
              onClick={handleAddCity}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default CityInput;
