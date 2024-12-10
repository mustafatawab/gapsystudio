import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMinus } from "react-icons/ai";

const FloatingChatButton = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isChatOpen && (
        <div className="w-80 bg-white rounded-lg shadow-lg">
          <div className="bg-blue-500 text-white p-4 flex justify-between items-center rounded-t-lg">
            <span className="font-semibold">Chat</span>
            <button onClick={toggleChat} className="text-xl">
              <AiOutlineClose />
            </button>
          </div>
          <div className="p-4 max-h-64 overflow-y-auto">
            <p className="text-gray-700">Hello! How can I assist you?</p>
            {/* Add more chat content or a form here */}
          </div>
          <div className="flex items-center p-4 border-t border-gray-300">
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 border border-gray-300 rounded-lg p-2 mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">Send</button>
          </div>
        </div>
      )}

      <button
        className="bg-blue-500 text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center text-2xl hover:bg-blue-600 transition"
        onClick={toggleChat}
      >
        {isChatOpen ? <AiOutlineMinus /> : <span className="text-3xl">+</span>}
      </button>
    </div>
  );
};

export default FloatingChatButton;
