import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default function Map({ lat, lang, name }) {
  return (
    <div className="h-80 w-full m-5">
      <MapContainer
        center={[{ lat }, { lang }]}
        zoom={13}
        style={{ height: "100%", width: "100%", borderRadius: "50px" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>{name}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
