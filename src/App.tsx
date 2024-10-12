import React, { useState, useEffect } from 'react';
import { Users } from 'lucide-react';
import FriendCard from './components/FriendCard';
import { Friend } from './types';
import friendsData from './config/friends.json';

const App: React.FC = () => {
  const [friends, setFriends] = useState<Friend[]>([]);

  useEffect(() => {
    // Load friends from the configuration file
    setFriends(friendsData);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-2 flex items-center">
          Friends <Users className="ml-2 text-purple-600" />
        </h1>
        <p className="text-gray-600 mb-8">我的朋友很少......(。ì _ í。)</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {friends.map((friend) => (
            <FriendCard key={friend.id} friend={friend} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;