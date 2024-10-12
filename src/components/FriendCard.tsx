import React from 'react';
import { Friend } from '../types';

interface FriendCardProps {
  friend: Friend;
}

const FriendCard: React.FC<FriendCardProps> = ({ friend }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-lg">
      <div className="p-4 flex items-center">
        <img src={friend.avatar} alt={friend.name} className="w-12 h-12 rounded-full object-cover mr-4" />
        <div>
          <h3 className="font-semibold text-lg mb-1 truncate">{friend.name}</h3>
          <p className={`text-sm ${friend.online ? 'text-green-500' : 'text-red-500'}`}>
            {friend.online ? 'Online' : 'Offline'}
          </p>
        </div>
      </div>
      <a
        href={friend.url}
        target="_blank"
        rel="noopener noreferrer"
        className={`block text-center py-2 px-4 ${
          friend.online
            ? 'bg-blue-500 text-white hover:bg-blue-600'
            : 'bg-gray-300 text-gray-600 cursor-not-allowed'
        }`}
      >
        Visit
      </a>
    </div>
  );
};

export default FriendCard;