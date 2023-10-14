// ChatProvider.js

import React, { useState, useContext, createContext } from 'react';

const ChatContext = createContext()

const ChatProvider = ({ children }) => {
    const [selectedChat, setSelectedChat] = useState();

    return <ChatContext.Provider value={{ selectedChat, setSelectedChat }}>
        {children}
    </ChatContext.Provider>;
};

export const ChatState = () => useContext(ChatContext);

export default ChatProvider;
