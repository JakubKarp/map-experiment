import React, { createContext, useContext, useState } from 'react';

const PanelContext = createContext();

export const PanelContextProvider = props => {
  const [isEditingMode, setIsEditingMode] = useState(false);

  return (
    <PanelContext.Provider
      value={{ isEditingMode, setIsEditingMode }}
      {...props}
    />
  );
};

export const usePanelContext = () => {
  const { isEditingMode, setIsEditingMode } = useContext(PanelContext);

  return { isEditingMode, setIsEditingMode };
};
