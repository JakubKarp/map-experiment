import { useState } from 'react';
import { Button } from '../../../button';
import { usePanelContext } from '../../../../context';
import { sendData } from '../../../../services/sendData';
import { TextLengthRegex } from '../../../../utils';

export const PanelHeader = () => {
  const { setIsEditingMode, editedPoint } = usePanelContext();
  const placeholder = 'dodaj opis';
  const [description, setDescription] = useState('');
  const [validationError, setValidationError] = useState(false);

  const closePanel = () => {
    setIsEditingMode(false);
    setDescription('');
    setValidationError(false);
  };

  const hanldeChange = e => setDescription(e.target.value);

  const sendPoint = () => {
    setDescription('');
    setValidationError(false);
    editedPoint.properties.description = description;
    sendData(editedPoint);
  };

  const handleValidation = () => {
    setValidationError(!TextLengthRegex.test(description));
  };

  return (
    <>
      {editedPoint && (
        <div className="panel-container">
          <div className="panel-content">
            Nazwa obiektu: {editedPoint.properties.nazwa_obiektu}
          </div>
          <div className="panel-content">
            Ulica: {editedPoint.properties.ulica}
          </div>
          <div className="panel-content">
            Numer budynku: {editedPoint.properties.numer_budynku}
          </div>
          <div className="panel-content">
            Kod pocztowy: {editedPoint.properties.kod_pocztowy}
          </div>
          <div className="panel-content">
            Gmina: {editedPoint.properties.gmina}
          </div>
          <form>
            <label className="panel-label">
              Opis musi zawierać przynajmniej 30 znaków
            </label>
            <textarea
              className="panel-form"
              value={description}
              onChange={hanldeChange}
              onBlur={handleValidation}
              placeholder={placeholder}
            />
            {validationError && (
              <div className="panel-validation">
                Opis musi zawierać przynajmniej 30 znaków
              </div>
            )}
          </form>
          <div className="panel-buttons">
            <Button buttonCallback={closePanel} buttonText="Close Panel" />
            <Button
              buttonCallback={sendPoint}
              buttonText="Send"
              disabled={validationError}
            />
          </div>
        </div>
      )}
    </>
  );
};
