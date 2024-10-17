import React from 'react';
import { Link } from 'react-router-dom';
import { Home, TrendingUp, Star, PlusCircle, User } from 'lucide-react';

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 p-4 space-y-4">
      <button className="btn btn-primary w-full flex items-center justify-center">
        <PlusCircle size={20} className="mr-2" />
        Create Post
      </button>
      <nav className="space-y-2">
        <Link to="/" className="flex items-center text-primary hover:bg-primary hover:text-secondary p-2 rounded-md">
          <Home size={20} className="mr-2" />
          Home
        </Link>
        <Link to="/profile" className="flex items-center text-primary hover:bg-primary hover:text-secondary p-2 rounded-md">
          <User size={20} className="mr-2" />
          Profile
        </Link>
        <a href="#" className="flex items-center text-primary hover:bg-primary hover:text-secondary p-2 rounded-md">
          <TrendingUp size={20} className="mr-2" />
          Popular
        </a>
        <a href="#" className="flex items-center text-primary hover:bg-primary hover:text-secondary p-2 rounded-md">
          <Star size={20} className="mr-2" />
          All
        </a>
      </nav>
    </aside>
  );
};

export default Sidebar;