import { Marker, Popup } from 'react-leaflet';
import { PopupComponent } from '../popup';

export const MarkerComponent = ({ coordinates, name }) => {
  return (
    <Marker position={coordinates}>
      <Popup>
        <PopupComponent name={name} />
      </Popup>
    </Marker>
  );
};
