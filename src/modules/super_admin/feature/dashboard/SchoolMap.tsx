// SchoolMap.tsx
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";


const schools = [
    { id: 1, name: "School A", location: "New York", lat: 40.7128, lon: -74.0060 },
    { id: 2, name: "School B", location: "Los Angeles", lat: 34.0522, lon: -118.2437 },
    { id: 3, name: "School C", location: "Chicago", lat: 41.8781, lon: -87.6298 },
    { id: 4, name: "School D", location: "Houston", lat: 29.7604, lon: -95.3698 },
    { id: 5, name: "School E", location: "Phoenix", lat: 33.4484, lon: -112.0740 },
    { id: 6, name: "School F", location: "San Antonio", lat: 29.4241, lon: -98.4936 },
    { id: 7, name: "School G", location: "San Diego", lat: 32.7157, lon: -117.1611 },
    { id: 8, name: "School H", location: "Dallas", lat: 32.7767, lon: -96.7970 },
    { id: 9, name: "School I", location: "Austin", lat: 30.2672, lon: -97.7431 },
    { id: 10, name: "School J", location: "Miami", lat: 25.7617, lon: -80.1918 },
  ];
  

const SchoolMap = () => {
  return (
    <MapContainer center={[40.7128, -74.0060]} zoom={5} style={{ height: "400px", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {schools.map((school) => (
        <Marker key={school.id} position={[school.lat, school.lon]}>
          <Popup>
            <div>
              <h3 className="font-bold">{school.name}</h3>
              <p>{school.location}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default SchoolMap;
