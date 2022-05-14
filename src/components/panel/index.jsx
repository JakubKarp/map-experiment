import { usePanelContext } from '../../context';
import { PanelHeader } from './components/panel_header';

export const PanelComponent = () => {
  const { isEditingMode } = usePanelContext();
  const panelStatus = isEditingMode
    ? { transform: 'translate3d(0vw, 0, 0)' }
    : { transform: 'translate3d(30vw, 0, 0)' };

  return (
    <div className="panel" style={panelStatus}>
      <PanelHeader />
    </div>
  );
};
