'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const ChatDialog = ({ onClose, postOffice }) => {
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hello! is there any issue with our office?', sender: 'postOffice' },
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { id: messages.length + 1, text: newMessage, sender: 'user' }]);
      setNewMessage('');
    }
  };

  return (
    <div className="fixed inset-0 bg-white flex flex-col">
      <div className="flex justify-between items-center p-4 border-b bg-blue-600 text-white">
        <h3 className="text-xl font-bold">Chat with {postOffice.name}</h3>
        <button onClick={onClose} className="text-white hover:text-gray-200">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((msg) => (
          <div key={msg.id} className={`mb-2 ${msg.sender === 'user' ? 'text-right' : ''}`}>
            <div className={`inline-block px-4 py-2 rounded-lg ${msg.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
              {msg.text}
            </div>
          </div>
        ))}
      </div>
      <div className="flex p-4 border-t bg-gray-100">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 border rounded-l-lg px-4 py-2"
        />
        <button onClick={handleSendMessage} className="bg-blue-500 text-white px-4 py-2 rounded-r-lg">
          Send
        </button>
      </div>
    </div>
  );
};

export default function ChatPage({ params }) {
  const router = useRouter();
  const { id } = params;
  const [postOffice, setPostOffice] = useState(null);
  const [isChatOpen, setIsChatOpen] = useState(true);

  useEffect(() => {
    const fetchPostOffice = async () => {
      const fetchedPostOffice = {
        id,
        name: `Post Office ${id}`,
        reports: 5 * id,
      };
      setPostOffice(fetchedPostOffice);
    };

    if (id) {
      fetchPostOffice();
    }
  }, [id]);

  const handleCloseChat = () => {
    setIsChatOpen(false);
    router.push('/communication'); 
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl font-bold">Chat with Post Office</h1>
      </header>
      <main className="h-screen">
        {isChatOpen && postOffice && <ChatDialog onClose={handleCloseChat} postOffice={postOffice} />}
      </main>
    </div>
  );
}
