import React from 'react';
import { Chat } from '../../types/chat';
import { OnlineIndicator } from '../common/OnlineIndicator';
import { Avatar } from '../common/Avatar';
import { UnreadBadge } from '../common/UnreadBadge';

interface ChatListItemProps {
  chat: Chat;
  onClick: (id: string) => void;
}

export function ChatListItem({ chat, onClick }: ChatListItemProps) {
  return (
    <button
      onClick={() => onClick(chat.id)}
      className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors w-full"
    >
      <div className="relative">
        <Avatar />
        {chat.online && <OnlineIndicator />}
      </div>
      <div className="flex-1 text-left">
        <div className="flex justify-between items-center mb-1">
          <span className="font-semibold">{chat.name}</span>
          <span className="text-sm text-gray-400">{chat.time}</span>
        </div>
        <p className="text-sm text-gray-400 truncate">{chat.lastMessage}</p>
      </div>
      {chat.unread && <UnreadBadge count={chat.unread} />}
    </button>
  );
}