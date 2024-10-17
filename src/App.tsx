import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import CreatePost from './components/CreatePost';
import Post from './components/Post';
import ProfilePage from './components/ProfilePage';
import { AuthProvider } from './contexts/AuthContext';

const App: React.FC = () => {
  const posts = [
    { id: 1, username: 'cryptoEnthusiast', content: 'Just mined my first block! #blockchain', upvotes: 42, comments: 7 },
    { id: 2, username: 'webDevPro', content: 'React + TypeScript is the way to go for modern web apps!', upvotes: 28, comments: 5 },
    { id: 3, username: 'designGuru', content: 'Black and gold: a timeless color combination that exudes luxury.', upvotes: 35, comments: 3 },
  ];

  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-secondary">
          <Header />
          <div className="container mx-auto flex">
            <Sidebar />
            <main className="flex-grow p-4">
              <Routes>
                <Route path="/" element={
                  <>
                    <CreatePost />
                    <div className="space-y-4">
                      {posts.map((post) => (
                        <Post key={post.id} {...post} />
                      ))}
                    </div>
                  </>
                } />
                <Route path="/profile" element={<ProfilePage />} />
              </Routes>
            </main>
          </div>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;