import React from 'react';
import { Phone, Settings, Send } from 'lucide-react';

const Message = ({ sender, content, time, isOwn }: { sender: string; content: string; time: string; isOwn?: boolean }) => (
  <div className={`flex items-start gap-4 ${isOwn ? 'flex-row-reverse' : ''}`}>
    <div className="w-10 h-10 rounded-full bg-gray-600 flex-shrink-0" />
    <div className={`flex flex-col ${isOwn ? 'items-end' : ''}`}>
      <span className="text-sm font-semibold text-gray-300">{sender}</span>
      <p className={`mt-1 p-3 rounded-lg ${isOwn ? 'bg-blue-600' : 'bg-gray-700'}`}>
        {content}
      </p>
      <span className="text-xs text-gray-500 mt-1">{time}</span>
    </div>
  </div>
);

export default function ChatSection({ chatName }: { chatName: string }) {
  return (
    <div className="flex flex-col flex-1 bg-gray-900">
      <div className="flex items-center justify-between p-4 border-b border-gray-800">
        <div>
          <h1 className="text-xl font-semibold text-gray-100">{chatName}</h1>
          <p className="text-sm text-gray-400">45 members, 24 online</p>
        </div>
        <div className="flex gap-4">
          <button className="p-2 hover:bg-gray-800 rounded-lg">
            <Phone className="w-5 h-5 text-gray-400" />
          </button>
          <button className="p-2 hover:bg-gray-800 rounded-lg">
            <Settings className="w-5 h-5 text-gray-400" />
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        <Message
          sender="Harry Fettel"
          content="Our company needs to prepare for the upcoming changes."
          time="9:31 am"
        />
        <Message
          sender="You"
          content="I agree. Let's schedule a meeting to discuss this."
          time="9:33 am"
          isOwn
        />
      </div>

      <div className="p-4 border-t border-gray-800">
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Type your message..."
            className="flex-1 bg-gray-800 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="p-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}