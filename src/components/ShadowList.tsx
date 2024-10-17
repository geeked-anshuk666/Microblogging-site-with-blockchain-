import React from 'react';
import { User, UserMinus } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const ShadowList: React.FC = () => {
  const { user, unshadow } = useAuth();

  if (!user) return null;

  return (
    <div className="card p-4 mb-4">
      <h2 className="text-xl font-bold text-primary mb-4">Shadows</h2>
      {user.shadows.length === 0 ? (
        <p className="text-accent">You're not shadowing anyone yet.</p>
      ) : (
        <ul className="space-y-2">
          {user.shadows.map((shadowedUser) => (
            <li key={shadowedUser} className="flex items-center justify-between">
              <div className="flex items-center">
                <User size={24} className="text-primary mr-2" />
                <span className="text-primary">{shadowedUser}</span>
              </div>
              <button
                onClick={() => unshadow(shadowedUser)}
                className="btn btn-outline flex items-center text-xs"
              >
                <UserMinus size={16} className="mr-1" />
                Unshadow
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ShadowList;