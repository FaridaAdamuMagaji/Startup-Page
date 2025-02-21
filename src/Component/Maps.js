import React from "react";

const GoogleMapKano = () => {
  return (
    <div className="map-container">
      <iframe
        title="Google Map of Kano, Nigeria"
        width="300px"
        height="200px"
        style={{ border: 0 }}
        allowFullScreen
        src="https://www.google.com/maps?q=Kano,Nigeria&output=embed"
      ></iframe>
    </div>
  );
};

export default GoogleMapKano;
