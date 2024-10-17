import React, { useState } from 'react';
import { Send } from 'lucide-react';

const CreatePost: React.FC = () => {
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('New post:', content);
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} className="card p-4 mb-6">
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Create a post"
        className="input w-full h-24 resize-none mb-2"
      />
      <button type="submit" className="btn btn-primary flex items-center justify-center">
        <Send size={20} className="mr-2" />
        Post
      </button>
    </form>
  );
};

export default CreatePost;