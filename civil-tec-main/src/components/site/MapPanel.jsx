import { MapContainer, TileLayer, CircleMarker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { EVENT } from "@/lib/event-data";

export default function MapPanel() {
  const center = [EVENT.map.lat, EVENT.map.lng];

  return (
    <MapContainer
      center={center}
      zoom={15}
      scrollWheelZoom={false}
      className="h-[360px] w-full md:h-[460px]"
      attributionControl
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap"
      />
      <CircleMarker
        center={center}
        radius={13}
        pathOptions={{ color: "#171715", weight: 4, fillColor: "#E9B927", fillOpacity: 1 }}
      >
        <Popup>
          <strong>{EVENT.venue}</strong>
          <br />
          {EVENT.address}
        </Popup>
      </CircleMarker>
    </MapContainer>
  );
}