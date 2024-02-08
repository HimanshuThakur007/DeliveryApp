
/* eslint-disable react/prop-types */
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import Map from "../../assets/images/map.png"


const MapCard = ({latitude,longitude}) => {
  const position = [latitude, longitude]; // Replace with actual latitude and longitude

  const customIcon = new L.Icon({
    iconUrl: Map, // Update this path
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });

  return (
    <div className="map-container">
      <MapContainer center={position} zoom={13} style={{ height: '400px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='© OpenStreetMap contributors'
        />
        <Marker position={position} icon={customIcon}>
          <Popup>
            i-thum tower sector-62 <br /> Excellent Softwares.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapCard;
