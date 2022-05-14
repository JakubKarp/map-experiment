import { usePanelContext } from '../../context';

export const PanelComponent = () => {
  const { setIsEditingMode, isEditingMode } = usePanelContext();
  const panelStatus = isEditingMode
    ? { transform: 'translate3d(0vw, 0, 0)' }
    : { transform: 'translate3d(30vw, 0, 0)' };

  const closePanel = () => {
    setIsEditingMode(false);
  };
  return (
    <div className="panel" style={panelStatus}>
      <div>panel</div>
      <button onClick={closePanel}>Close</button>
    </div>
  );
};
