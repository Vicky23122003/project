import React from 'react';
import { chats } from '../data/chats';
import { ChatListItem } from './chat/ChatListItem';
import { SearchBar } from './chat/SearchBar';

interface AllChatsProps {
  onChatSelect: (id: string) => void;
}

export default function AllChats({ onChatSelect }: AllChatsProps) {
  return (
    <div className="flex-1 bg-gray-900 flex flex-col h-screen">
      <div className="p-6 bg-gray-900 border-b border-gray-800">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold mb-2">All Chats</h1>
          <SearchBar placeholder="Search in chats..." />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="max-w-4xl mx-auto p-6">
          <div className="grid gap-4">
            {chats.map((chat) => (
              <ChatListItem
                key={chat.id}
                chat={chat}
                onClick={onChatSelect}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}