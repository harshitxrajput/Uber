import React from "react";

const LocationSearchPanel = (props) => {
  // If no suggestions, show default locations
  const defaultLocations = [
    "Current Location",
    "Choose on map",
    "Set pickup point"
  ];

  const displayItems = props.suggestions.length > 0 ? props.suggestions : defaultLocations;

  return (
    <div>
      {displayItems.map((item, index) => (
        <div
          key={index}
          onClick={() => {
            if (props.suggestions.length > 0) {
              props.onSuggestionClick(item);
              props.setVehiclePanel(true);
            }
            props.setPanelOpen(false);
          }}
          className="flex gap-4 border-2 border-gray-50 active:border-black rounded-xl p-3 items-center my-2 justify-start cursor-pointer hover:bg-gray-50"
        >
          <h2 className="bg-[#eee] h-10 w-14 flex justify-center items-center rounded-full">
            <i className="ri-map-pin-fill text-xl"></i>
          </h2>
          <h4 className="font-medium">{item.description || item}</h4>
        </div>
      ))}
    </div>
  );
};

export default LocationSearchPanel;
