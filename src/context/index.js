import React, { createContext, useContext, useState } from 'react';

const PanelContext = createContext();

export const PanelContextProvider = props => {
  const [isEditingMode, setIsEditingMode] = useState(false);
  const [editedPoint, setEeditedPoint] = useState();

  return (
    <PanelContext.Provider
      value={{ isEditingMode, setIsEditingMode, editedPoint, setEeditedPoint }}
      {...props}
    />
  );
};

export const usePanelContext = () => {
  const { isEditingMode, setIsEditingMode, editedPoint, setEeditedPoint } =
    useContext(PanelContext);

  return { isEditingMode, setIsEditingMode, editedPoint, setEeditedPoint };
};
