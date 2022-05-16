import { usePanelContext } from '../../../../context';
import { Button } from '../../../button';

export const PopupComponent = ({ point }) => {
  const { setIsEditingMode, setEeditedPoint } = usePanelContext();
  const editPoint = () => {
    setIsEditingMode(true);
    setEeditedPoint(point);
  };

  return (
    <>
      <h4>{point.properties.nazwa_obiektu}</h4>
      <Button buttonCallback={editPoint} buttonText={'Edit'} />
    </>
  );
};
