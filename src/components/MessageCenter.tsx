import React, { useState } from 'react';
import { ArrowLeft, Search, Send, Paperclip } from 'lucide-react';
import { User } from '../types';

interface MessageCenterProps {
  user: User;
  onBack: () => void;
}

export function MessageCenter({ user, onBack }: MessageCenterProps) {
  const [selectedConversation, setSelectedConversation] = useState<string | null>(null);
  const [messageInput, setMessageInput] = useState('');

  // Mock conversations data
  const conversations = [
    {
      id: '1',
      participant: { name: 'Happy Paws Shelter', avatar: '🏠' },
      pet: 'Buddy',
      lastMessage: 'Thank you for your interest in Buddy! We\'d love to set up a meet and greet.',
      timestamp: '2h ago',
      unread: 2
    },
    {
      id: '2',
      participant: { name: 'Sarah Johnson', avatar: '👤' },
      pet: 'Luna',
      lastMessage: 'Luna looks perfect for our family. When would be a good time to visit?',
      timestamp: '1d ago',
      unread: 0
    },
    {
      id: '3',
      participant: { name: 'City Animal Rescue', avatar: '🏠' },
      pet: 'Max',
      lastMessage: 'Max\'s background check has been approved. Congratulations!',
      timestamp: '3d ago',
      unread: 1
    }
  ];

  // Mock messages for selected conversation
  const messages = [
    {
      id: '1',
      senderId: 'shelter',
      content: 'Hello! Thank you for your application for Buddy. We\'re excited that you\'re interested in giving him a loving home.',
      timestamp: '10:30 AM'
    },
    {
      id: '2',
      senderId: user.id,
      content: 'Thank you! I\'ve been looking for a companion like Buddy. When would be a good time to meet him?',
      timestamp: '10:45 AM'
    },
    {
      id: '3',
      senderId: 'shelter',
      content: 'We have availability this weekend. Saturday morning works well for meet and greets. Would 10 AM work for you?',
      timestamp: '11:00 AM'
    },
    {
      id: '4',
      senderId: user.id,
      content: 'Saturday at 10 AM sounds perfect! Should I bring anything specific?',
      timestamp: '11:15 AM'
    },
    {
      id: '5',
      senderId: 'shelter',
      content: 'Just bring yourself and any questions you might have. We\'ll have Buddy ready to meet you! Our address is 123 Main St.',
      timestamp: '11:20 AM'
    }
  ];

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (messageInput.trim()) {
      // In real app, send message via API
      console.log('Sending message:', messageInput);
      setMessageInput('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors"
        >
          <ArrowLeft className="h-5 w-5" />
          Back to Home
        </button>

        <div className="bg-white rounded-2xl shadow-sm overflow-hidden" style={{ height: '600px' }}>
          <div className="flex h-full">
            {/* Conversation List */}
            <div className="w-1/3 border-r border-gray-200">
              <div className="p-4 border-b border-gray-200">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Messages</h2>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <input
                    type="text"
                    placeholder="Search conversations..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>
              </div>

              <div className="overflow-y-auto h-full">
                {conversations.map((conversation) => (
                  <div
                    key={conversation.id}
                    onClick={() => setSelectedConversation(conversation.id)}
                    className={`p-4 cursor-pointer hover:bg-gray-50 border-b border-gray-100 transition-colors ${
                      selectedConversation === conversation.id ? 'bg-orange-50 border-orange-200' : ''
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="text-2xl">{conversation.participant.avatar}</div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold text-gray-900 truncate">
                            {conversation.participant.name}
                          </h3>
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-gray-500">{conversation.timestamp}</span>
                            {conversation.unread > 0 && (
                              <span className="bg-orange-500 text-white text-xs rounded-full px-2 py-1 min-w-[20px] text-center">
                                {conversation.unread}
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="text-sm text-orange-600 font-medium mb-1">
                          Re: {conversation.pet}
                        </div>
                        <p className="text-sm text-gray-600 truncate">
                          {conversation.lastMessage}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Message View */}
            <div className="flex-1 flex flex-col">
              {selectedConversation ? (
                <>
                  {/* Chat Header */}
                  <div className="p-4 border-b border-gray-200 bg-gray-50">
                    <div className="flex items-center gap-3">
                      <div className="text-xl">🏠</div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Happy Paws Shelter</h3>
                        <p className="text-sm text-gray-600">Adoption conversation about Buddy</p>
                      </div>
                    </div>
                  </div>

                  {/* Messages */}
                  <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {messages.map((message) => {
                      const isOwn = message.senderId === user.id;
                      return (
                        <div
                          key={message.id}
                          className={`flex ${isOwn ? 'justify-end' : 'justify-start'}`}
                        >
                          <div
                            className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                              isOwn
                                ? 'bg-orange-500 text-white'
                                : 'bg-gray-100 text-gray-900'
                            }`}
                          >
                            <p className="text-sm">{message.content}</p>
                            <p className={`text-xs mt-1 ${
                              isOwn ? 'text-orange-100' : 'text-gray-500'
                            }`}>
                              {message.timestamp}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Message Input */}
                  <div className="p-4 border-t border-gray-200">
                    <form onSubmit={handleSendMessage} className="flex gap-2">
                      <button
                        type="button"
                        className="p-2 text-gray-500 hover:text-gray-700 transition-colors"
                      >
                        <Paperclip className="h-5 w-5" />
                      </button>
                      <input
                        type="text"
                        value={messageInput}
                        onChange={(e) => setMessageInput(e.target.value)}
                        placeholder="Type your message..."
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      />
                      <button
                        type="submit"
                        disabled={!messageInput.trim()}
                        className="bg-orange-500 hover:bg-orange-600 disabled:bg-gray-300 text-white p-2 rounded-lg transition-colors"
                      >
                        <Send className="h-5 w-5" />
                      </button>
                    </form>
                  </div>
                </>
              ) : (
                <div className="flex-1 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <div className="text-6xl mb-4">💬</div>
                    <h3 className="text-xl font-semibold mb-2">Select a conversation</h3>
                    <p>Choose a conversation from the list to start messaging</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}