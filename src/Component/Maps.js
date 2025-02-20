import React from 'react';

const KanoMap = () => {
  const apiKey = 'AIzaSyDTjbV_oFYxx_ITGqUuW9p1ry-ThdelTGg'; // Replace with your API key
  const location = 'Kano,Nigeria';
  const zoom = 10; // Adjust the zoom level as needed
  const size = '600x400'; // Size of the map image

  // Constructing the URL for the static map image
  const mapUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${location}&zoom=${zoom}&size=${size}&markers=color:red%7Clabel:C%7C${location}&key=${apiKey}`;

  return (
    <div>
      <h2>Map of Kano, Nigeria</h2>
      <img src={mapUrl} alt="Map of Kano" />
    </div>
  );
};

export default KanoMap;
