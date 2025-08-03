import React, { createContext, useState, useMemo, type ReactNode, useContext } from 'react';

// As of now going with default user details
interface User {
  id: string;
  name: string;
  email: string;
}

export interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (userData: User) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  // ---- Need to include an effect to check localStorage/cookies for an existing session token and auto-login the user ---

  // Function to update the user state
  const login = (userData: User) => {
    setUser(userData);

    // --- Set token in localstorage here ----
  };

  // Function to clear the user state
  const logout = () => {
    setUser(null);
    
    // --- Clear token from localstorage here ----
  };
  
  const isAuthenticated = !!user;

  const value = useMemo(
    () => ({
      user,
      isAuthenticated,
      login,
      logout,
    }),
    [user]
  );

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook for consuming the context
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};