import React from 'react';
import { User, Wallet, FileText, Users } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import ShadowList from './ShadowList';

const ProfilePage: React.FC = () => {
  const { user } = useAuth();

  if (!user) {
    return <div className="text-primary">Please log in to view your profile.</div>;
  }

  return (
    <div className="space-y-6">
      <div className="card p-6">
        <h2 className="text-2xl font-bold text-primary mb-4">Profile</h2>
        <div className="space-y-4">
          <div className="flex items-center">
            <User size={24} className="text-primary mr-4" />
            <span className="text-primary">{user.username}</span>
          </div>
          <div className="flex items-center">
            <Wallet size={24} className="text-primary mr-4" />
            <span className="text-primary">{user.walletAddress || 'No wallet connected'}</span>
          </div>
          <div className="flex items-start">
            <FileText size={24} className="text-primary mr-4 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-primary mb-2">Memoir</h3>
              <p className="text-accent">{user.memoir || 'No memoir added yet.'}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="card p-6">
        <h3 className="text-xl font-bold text-primary mb-4">Shadows</h3>
        <ShadowList />
      </div>

      <div className="card p-6">
        <h3 className="text-xl font-bold text-primary mb-4">Shadowers</h3>
        <div className="space-y-2">
          {user.shadowers && user.shadowers.length > 0 ? (
            user.shadowers.map((shadower) => (
              <div key={shadower} className="flex items-center">
                <Users size={24} className="text-primary mr-4" />
                <span className="text-primary">{shadower}</span>
              </div>
            ))
          ) : (
            <p className="text-accent">No one is shadowing you yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;