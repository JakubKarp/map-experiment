import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import Points from "./data/wwa_points.json";

export const MapComponent = () => {
  const { features } = Points;
  return (
    <MapContainer center={[52.2, 21.2]} zoom={11} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {features.map((point) => (
        <Marker position={point.geometry.coordinates.reverse()}>
          <Popup>{point.properties.nazwa_obiektu}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};
