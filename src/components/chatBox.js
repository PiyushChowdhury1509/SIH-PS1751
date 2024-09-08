// components/chatBox.js
import React from 'react';

function ChatDialog({ onClose, selectedPostOffice }) {
  if (!selectedPostOffice) return null;

  return (
    <div className="fixed bottom-0 right-0 bg-white border rounded shadow-lg p-4 m-4">
      <h3 className="text-xl font-bold mb-2">Chat with {selectedPostOffice.name}</h3>
      <div className="mb-4">
        {/* Replace with actual chat interface */}
        <p>Chat interface for {selectedPostOffice.name} will go here.</p>
      </div>
      <button onClick={onClose} className="bg-blue-500 text-white px-4 py-2 rounded">
        Close Chat
      </button>
    </div>
  );
}

export default ChatDialog;
