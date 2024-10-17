import React, { useState } from 'react';
import { Mail, Wallet, LogIn } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Auth: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [authMethod, setAuthMethod] = useState<'email' | 'wallet' | 'gmail' | null>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [wallet, setWallet] = useState('');
  const { login } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    switch (authMethod) {
      case 'email':
        login('email', { email, password });
        break;
      case 'wallet':
        login('wallet', { wallet });
        break;
      case 'gmail':
        login('gmail', { email });
        break;
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-secondary p-6 rounded-lg w-96">
        <h2 className="text-2xl font-bold mb-4 text-primary">Login / Sign Up</h2>
        {!authMethod ? (
          <div className="space-y-4">
            <button onClick={() => setAuthMethod('email')} className="btn btn-primary w-full flex items-center justify-center">
              <Mail size={20} className="mr-2" />
              Email
            </button>
            <button onClick={() => setAuthMethod('wallet')} className="btn btn-primary w-full flex items-center justify-center">
              <Wallet size={20} className="mr-2" />
              Crypto Wallet
            </button>
            <button onClick={() => setAuthMethod('gmail')} className="btn btn-primary w-full flex items-center justify-center">
              <LogIn size={20} className="mr-2" />
              Gmail
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {authMethod === 'email' && (
              <>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input w-full"
                  required
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input w-full"
                  required
                />
              </>
            )}
            {authMethod === 'wallet' && (
              <input
                type="text"
                placeholder="Wallet Address"
                value={wallet}
                onChange={(e) => setWallet(e.target.value)}
                className="input w-full"
                required
              />
            )}
            {authMethod === 'gmail' && (
              <input
                type="email"
                placeholder="Gmail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input w-full"
                required
              />
            )}
            <button type="submit" className="btn btn-primary w-full">
              {authMethod === 'gmail' ? 'Continue with Gmail' : 'Login / Sign Up'}
            </button>
          </form>
        )}
        <button onClick={onClose} className="mt-4 text-primary hover:text-accent">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Auth;