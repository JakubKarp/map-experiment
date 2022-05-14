import { useState } from 'react';
import { usePanelContext } from '../../../../context';
import { sendData } from '../../../../services/sendData';

export const PanelHeader = () => {
  const { setIsEditingMode, editedPoint } = usePanelContext();
  const placeholder = 'dodaj opis';
  const [description, setDescription] = useState(placeholder);

  const closePanel = () => {
    setIsEditingMode(false);
    setDescription(placeholder);
  };

  const hanldeChange = e => setDescription(e.target.value);

  const sendPoint = () => {
    editedPoint.properties.description = description;
    setDescription(placeholder);
    sendData(editedPoint);
  };

  return (
    <>
      {editedPoint && (
        <>
          <div>{editedPoint.properties.nazwa_obiektu}</div>
          <div>{editedPoint.properties.gmina}</div>
          <textarea value={description} onChange={hanldeChange} />
          <button onClick={closePanel}>Close</button>
          <button onClick={sendPoint}>Send</button>
          <div>{description}</div>
        </>
      )}
    </>
  );
};
