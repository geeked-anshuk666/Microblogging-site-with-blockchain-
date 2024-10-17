import React, { useState } from 'react';
import { Search, Bell, MessageSquare, User, LogOut } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import Auth from './Auth';

const Header: React.FC = () => {
  const { user, logout } = useAuth();
  const [showAuth, setShowAuth] = useState(false);

  return (
    <header className="bg-secondary border-b border-primary sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-2">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold text-primary">GoldChain</h1>
          <div className="relative">
            <input
              type="text"
              placeholder="Search GoldChain"
              className="input pr-10 w-64"
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-primary" size={20} />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          {user ? (
            <>
              <button className="btn btn-outline">
                <Bell size={20} />
              </button>
              <button className="btn btn-outline">
                <MessageSquare size={20} />
              </button>
              <button className="btn btn-primary flex items-center">
                <User size={20} className="mr-2" />
                {user}
              </button>
              <button onClick={logout} className="btn btn-outline">
                <LogOut size={20} />
              </button>
            </>
          ) : (
            <button onClick={() => setShowAuth(true)} className="btn btn-primary">
              Login / Sign Up
            </button>
          )}
        </div>
      </div>
      {showAuth && <Auth onClose={() => setShowAuth(false)} />}
    </header>
  );
};

export default Header;