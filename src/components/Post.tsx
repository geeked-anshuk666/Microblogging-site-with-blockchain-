import React from 'react';
import { ArrowUp, ArrowDown, MessageSquare, Share2, UserPlus, UserMinus } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

interface PostProps {
  username: string;
  content: string;
  upvotes: number;
  comments: number;
}

const Post: React.FC<PostProps> = ({ username, content, upvotes, comments }) => {
  const { user, shadow, unshadow } = useAuth();
  const isShadowed = user?.shadows.includes(username);

  const handleShadowToggle = () => {
    if (isShadowed) {
      unshadow(username);
    } else {
      shadow(username);
    }
  };

  return (
    <div className="card flex mb-4">
      <div className="flex flex-col items-center p-2 bg-secondary border-r border-primary">
        <button className="text-primary hover:text-accent">
          <ArrowUp size={20} />
        </button>
        <span className="my-1 font-bold">{upvotes}</span>
        <button className="text-primary hover:text-accent">
          <ArrowDown size={20} />
        </button>
      </div>
      <div className="p-4 flex-grow">
        <div className="flex justify-between items-center mb-2">
          <p className="text-accent text-sm">Posted by u/{username}</p>
          {user && user.username !== username && (
            <button
              onClick={handleShadowToggle}
              className={`btn ${isShadowed ? 'btn-outline' : 'btn-primary'} flex items-center text-xs`}
            >
              {isShadowed ? (
                <>
                  <UserMinus size={16} className="mr-1" />
                  Unshadow
                </>
              ) : (
                <>
                  <UserPlus size={16} className="mr-1" />
                  Shadow
                </>
              )}
            </button>
          )}
        </div>
        <p className="text-primary mb-4">{content}</p>
        <div className="flex space-x-4 text-sm">
          <button className="flex items-center text-primary hover:text-accent">
            <MessageSquare size={16} className="mr-1" />
            {comments} Comments
          </button>
          <button className="flex items-center text-primary hover:text-accent">
            <Share2 size={16} className="mr-1" />
            Share
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;