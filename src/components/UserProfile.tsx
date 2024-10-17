import React from 'react';
import { User, UserPlus, UserMinus } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

interface UserProfileProps {
  username: string;
  postCount: number;
  shadowCount: number;
  isShadowed: boolean;
}

const UserProfile: React.FC<UserProfileProps> = ({ username, postCount, shadowCount, isShadowed }) => {
  const { user, shadow, unshadow } = useAuth();

  const handleShadowToggle = () => {
    if (isShadowed) {
      unshadow(username);
    } else {
      shadow(username);
    }
  };

  return (
    <div className="card p-4 mb-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <User size={48} className="text-primary mr-4" />
          <div>
            <h2 className="text-xl font-bold text-primary">{username}</h2>
            <p className="text-accent">
              {postCount} posts · {shadowCount} shadows
            </p>
          </div>
        </div>
        {user && user.username !== username && (
          <button
            onClick={handleShadowToggle}
            className={`btn ${isShadowed ? 'btn-outline' : 'btn-primary'} flex items-center`}
          >
            {isShadowed ? (
              <>
                <UserMinus size={20} className="mr-2" />
                Unshadow
              </>
            ) : (
              <>
                <UserPlus size={20} className="mr-2" />
                Shadow
              </>
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default UserProfile;