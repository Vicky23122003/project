import React from 'react';
import { Chat } from '../../types/chat';

interface ChatListItemProps {
  chat: Chat;
  isSelected: boolean;
  onClick: (id: string) => void;
}

export const ChatListItem: React.FC<ChatListItemProps> = ({ chat, isSelected, onClick }) => (
  <button
    onClick={() => onClick(chat.id)}
    className={`w-full text-left p-3 rounded-lg transition-colors ${
      isSelected ? 'bg-gray-700' : 'hover:bg-gray-700/50'
    }`}
  >
    <div className="flex items-center gap-3">
      <div className="relative">
        <div className="w-12 h-12 rounded-full bg-gray-600" />
        {chat.online && (
          <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-gray-800" />
        )}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-start">
          <span className="font-semibold truncate">{chat.name}</span>
          <span className="text-xs text-gray-400 whitespace-nowrap ml-2">{chat.time}</span>
        </div>
        <div className="flex justify-between items-center mt-1">
          <p className="text-sm text-gray-400 truncate">{chat.lastMessage}</p>
          {chat.unread && (
            <span className="ml-2 bg-blue-600 text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {chat.unread}
            </span>
          )}
        </div>
      </div>
    </div>
  </button>
);