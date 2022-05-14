import { usePanelContext } from '../../../../context';

export const PopupComponent = ({ name }) => {
  const { setIsEditingMode } = usePanelContext();

  const editPoint = () => {
    setIsEditingMode(true);
  };

  return (
    <>
      <h4>{name}</h4>
      <button onClick={editPoint}>Edit</button>
    </>
  );
};
