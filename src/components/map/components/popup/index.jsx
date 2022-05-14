import { usePanelContext } from '../../../../context';

export const PopupComponent = ({ point }) => {
  const { setIsEditingMode, setEeditedPoint } = usePanelContext();
  const editPoint = () => {
    setIsEditingMode(true);
    setEeditedPoint(point);
  };

  return (
    <>
      <h4>{point.properties.nazwa_obiektu}</h4>
      <button onClick={editPoint}>Edit</button>
    </>
  );
};
