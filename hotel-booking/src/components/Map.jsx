import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default function Map({ lat, long, markerName }) {
  return (
    <div className="h-80 w-1/3">
      <MapContainer
        center={[lat, lang]}
        zoom={16}
        style={{ height: "100%", width: "100%", borderRadius: "5px" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        <Marker position={[lat, long]}>
          <Popup>{markerName}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
