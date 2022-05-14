import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { getData } from '../../services/getData';
import { MAP_CONSTS } from '../../data/consts';
import { PopupComponent } from './components/popup';

export const MapComponent = () => {
  const { data, load, error } = getData();
  const { attribution, url, center, zoom, scrollWheelZoom } = MAP_CONSTS;

  if (load) return <div>Load...</div>;
  if (error) return <div>Error...</div>;

  return (
    <MapContainer center={center} zoom={zoom} scrollWheelZoom={scrollWheelZoom}>
      <TileLayer attribution={attribution} url={url} />
      {data.map(point => (
        <Marker position={point.geometry.coordinates.reverse()}>
          <Popup>
            <PopupComponent point={point} />
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};
