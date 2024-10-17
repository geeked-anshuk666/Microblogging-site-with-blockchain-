import React, { createContext, useState, useContext, ReactNode } from 'react';

interface User {
  username: string;
  shadows: string[];
  shadowers: string[];
  walletAddress?: string;
  memoir?: string;
}

interface AuthContextType {
  user: User | null;
  login: (method: string, credentials: any) => void;
  logout: () => void;
  shadow: (username: string) => void;
  unshadow: (username: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (method: string, credentials: any) => {
    // In a real app, you'd make an API call here
    console.log(`Logging in with ${method}:`, credentials);
    setUser({
      username: credentials.email || credentials.wallet || 'User',
      shadows: [],
      shadowers: ['cryptoFan', 'blockchainDev'],
      walletAddress: credentials.wallet || '0x1234...5678',
      memoir: 'Blockchain enthusiast and web3 developer',
    });
  };

  const logout = () => {
    setUser(null);
  };

  const shadow = (username: string) => {
    if (user) {
      setUser({
        ...user,
        shadows: [...user.shadows, username]
      });
    }
  };

  const unshadow = (username: string) => {
    if (user) {
      setUser({
        ...user,
        shadows: user.shadows.filter(u => u !== username)
      });
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, shadow, unshadow }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};