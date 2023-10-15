// ChatProvider.js

import React, { useState, useContext, createContext } from "react";
import { useEffect } from "react";
import io from "socket.io-client";
const ChatContext = createContext();

const ChatProvider = ({ children }) => {
  const [selectedChat, setSelectedChat] = useState();
  const [messages, setMessages] = useState([]);

  const [socket, setSocket] = useState();

  const ENDPOINT = process.env.ENDPOINT || "http://localhost:4000";
  useEffect(() => {
    let newSocket = io(ENDPOINT);
    setSocket(newSocket);
  }, []);

  return (
    <ChatContext.Provider
      value={{ socket, selectedChat, setSelectedChat, messages, setMessages }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const ChatState = () => useContext(ChatContext);

export default ChatProvider;
