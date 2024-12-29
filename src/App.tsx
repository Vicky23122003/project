import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import ChatSection from './components/ChatSection';
import ChatDetails from './components/ChatDetails';
import AllChats from './components/AllChats';
import { chats } from './data/chats';

function App() {
  const [selectedChatId, setSelectedChatId] = useState<string | null>(null);
  const [activeView, setActiveView] = useState<'all' | 'chat'>('all');
  
  const handleChatSelect = (id: string) => {
    setSelectedChatId(id);
    setActiveView('chat');
  };

  const handleAllChatsClick = () => {
    setSelectedChatId(null);
    setActiveView('all');
  };

  const selectedChat = selectedChatId ? chats.find(chat => chat.id === selectedChatId) : null;

  return (
    <div className="flex h-screen bg-gray-900 text-gray-100">
      <Sidebar 
        selectedChatId={selectedChatId} 
        onChatSelect={handleChatSelect}
        onAllChatsClick={handleAllChatsClick}
        activeView={activeView}
      />
      <div className="flex-1 flex">
        {activeView === 'all' ? (
          <AllChats onChatSelect={handleChatSelect} />
        ) : (
          <>
            <ChatSection chatName={selectedChat?.name || ''} />
            <ChatDetails />
          </>
        )}
      </div>
    </div>
  );
}

export default App;