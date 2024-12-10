import React, { useState } from "react";

const FloatingChatButton = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div className="fixed bottom-0 right-0 ">
      {isChatOpen && (
        <div className="w-80 bg-white rounded-lg shadow-lg">
          <div className="bg-blue-500 text-white p-4 flex justify-between items-center rounded-t-lg">
            <span>Chat</span>
            <button onClick={toggleChat} className="text-xl font-bold">&times;</button>
          </div>
          <div className="p-4 max-h-64 overflow-y-auto">
            <p>Hello! How can I assist you?</p>
            {/* Add more chat content or a form here */}
          </div>
          <div className="flex items-center p-4 border-t border-gray-300">
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 border border-gray-300 rounded-lg p-2 mr-2"
            />
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Send</button>
          </div>
        </div>
      )}

      <button
        className="bg-blue-500 text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center text-2xl"
        onClick={toggleChat}
      >
        {isChatOpen ? "-" : "+"}
      </button>
    </div>
  );
};

export default FloatingChatButton;