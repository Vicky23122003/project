import React from 'react';
import { MessageSquare, Briefcase, Video, Calendar, Star, Bookmark, Settings } from 'lucide-react';
import { NavItem } from './NavItem';

interface SidebarProps {
  selectedChatId: string | null;
  onChatSelect: (id: string) => void;
  onAllChatsClick: () => void;
  activeView: 'all' | 'chat';
}

export default function Sidebar({ activeView, onAllChatsClick }: SidebarProps) {
  return (
    <div className="flex flex-col bg-gray-800 h-screen w-72 text-gray-100">
      <div className="p-4">
        <div className="text-2xl font-bold mb-6">CH</div>
      </div>

      <nav className="flex-1 px-3 py-2">
        <div className="space-y-1">
          <NavItem 
            icon={MessageSquare} 
            label="All Chats" 
            isActive={activeView === 'all'}
            onClick={onAllChatsClick}
          />
          <NavItem icon={Briefcase} label="Leaves" />
          <NavItem icon={Video} label="Events" />
          <NavItem icon={Calendar} label="Calendar" />
          <NavItem icon={Star} label="Rating" />
          <NavItem icon={Bookmark} label="Saved" />
        </div>
      </nav>

      <div className="p-4 border-t border-gray-700">
        <button className="flex items-center gap-3 p-3 w-full rounded-lg hover:bg-gray-700/50 transition-colors">
          <Settings className="w-5 h-5" />
          <span>Settings</span>
        </button>
      </div>
    </div>
  );
}