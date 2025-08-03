import React, { createContext, useState, useContext, type ReactNode, useMemo } from 'react';
import { ToasterContainer } from '../components/toast/Toaster';
import { Spinner } from '../components/spinner/Spinner';

export type ToastType = 'success' | 'error' | 'info';

export interface ToastProps {
  id: string;
  message: string;
  type: ToastType;
}

interface GlobalContextType {
  addToast: (message: string, type: ToastType) => void;
  showSpinner: () => void;
  hideSpinner: () => void;
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

interface GlobalContextProviderProps {
  children: ReactNode;
}

export const GlobalContextProvider: React.FC<GlobalContextProviderProps> = ({ children }) => {
  const [toasts, setToasts] = useState<ToastProps[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const addToast = (message: string, type: ToastType) => {
    const id = crypto.randomUUID();
    setToasts(currentToasts => [...currentToasts, { id, message, type }]);
  };

  const removeToast = (id: string) => {
    setToasts(currentToasts => currentToasts.filter(toast => toast.id !== id));
  };

  const showSpinner = () => setIsLoading(true);
  const hideSpinner = () => setIsLoading(false);

  const value = useMemo(
    () => ({
      addToast,
      showSpinner,
      hideSpinner,
    }),
    []
  );

  return (
    <GlobalContext.Provider value={value}>
      {children}
      <ToasterContainer toasts={toasts} removeToast={removeToast} />
      {isLoading && <Spinner />}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = (): GlobalContextType => {
  const context = useContext(GlobalContext);
  if (context === undefined) {
    throw new Error('useGlobalContext must be used within a GlobalContextProvider');
  }
  return context;
};