import React, { createContext, useCallback, useContext } from 'react';
import ToastContainer from '../components/ToastContainer';

interface ToastContextState {
  addToast(): void;
  removeToast(): void;
}

const ToastContext = createContext<ToastContextState>({} as ToastContextState);

const ToastProvider: React.FC = ({ children }) => {
  const addToast = useCallback(() => {
    console.log('addToast');
  }, []);

  const removeToast = useCallback(() => {
    console.log('removeToast');
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer />
    </ToastContext.Provider>
  );
};

function useToast(): ToastContextState {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }

  return context;
}

export { ToastProvider, useToast };
