import React from "react";

const GoogleMapKano = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <iframe
        title="Google Map of Kano, Nigeria"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        src="https://www.google.com/maps?q=Kano,Nigeria&output=embed"
      ></iframe>
    </div>
  );
};

export default GoogleMapKano;
