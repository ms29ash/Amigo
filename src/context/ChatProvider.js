// ChatProvider.js

import React, { useState, useContext, createContext } from "react";
import { useEffect } from "react";
import io from "socket.io-client";
import { UserState } from "./UserProvider";

const ChatContext = createContext();

const ChatProvider = ({ children }) => {
  const [selectedChat, setSelectedChat] = useState();
  const [chats, setChats] = useState([]);
  const [messages, setMessages] = useState([]);
  const [requests, setRequests] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [socket, setSocket] = useState();

  const { user } = UserState();

  const ENDPOINT = process.env.ENDPOINT || "http://localhost:4000";
  useEffect(() => {
    let newSocket = io(ENDPOINT);
    setSocket(newSocket);
  }, []);

  useEffect(() => {
    if (socket && user) {
      socket.emit("setup", user._id);

      socket.on("newReq", (req) => {
        setRequests([...requests, req]);
      });
      socket.on("reqSent", (req) => {
        setRequests([...requests, req]);
        console.log("reqSent");
      });

      socket.on("accecptReq", (chat) => {
        console.log("req accepted");
        setChats([...chats, chat.fullChat]);
        setNotifications([...notifications, chat.newNoti]);
      });

      socket.on("onAccecptReq", (chat) => {
        console.log("on accepted");
        setChats([...chats, chat]);
      });

      socket.on("rejectReq", (data) => {
        console.log("rejected");
        setNotifications([...notifications, data]);
      });
      socket.on("onReject", (data) => {
        console.log("on rejected");
      });
    }
  }, [socket]);

  return (
    <ChatContext.Provider
      value={{
        socket,
        selectedChat,
        setSelectedChat,
        messages,
        setMessages,
        chats,
        setChats,
        requests,
        setRequests,
        notifications,
        setNotifications,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const ChatState = () => useContext(ChatContext);

export default ChatProvider;
