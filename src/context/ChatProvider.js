// ChatProvider.js

import React, { useState, useContext, createContext, useReducer } from "react";
import { useEffect } from "react";
import io from "socket.io-client";
import { UserState } from "./UserProvider";
import { produce } from "immer";
import axios from "../axios";

const ChatContext = createContext();

const initialState = {
  chats: [],
  selectedChat: {},
  messages: [],
  requests: [],
  notifications: [],
  socket: {},
};

const reducer = (draft, action) => {
  switch (action.type) {
    //chat actions
    case "setChats":
      draft.chats = action.payload;
      break;
    case "addChat":
      draft.chats.push(action.payload);
      break;
    case "selectChat":
      console.log(action.payload);
      draft.selectedChat = action.payload;
      break;
    //Msg actions
    case "setMsg":
      draft.messages = action.payload;
      break;
    case "addMsg":
      draft.messages.push(action.payload);
      break;

    //Notification actions
    case "setNotifications":
      draft.notifications = action.payload;
      break;
    case "addNotifications":
      draft.notifications.push(action.payload);
      break;

    //Request actions
    case "setReqs":
      draft.requests = action.payload;
      break;
    case "addReq":
      draft.requests.push(action.payload);
      break;

    default:
      return;
  }
};

const ChatProvider = ({ children }) => {
  const [socket, setSocket] = useState();
  const [state, dispatch] = useReducer(produce(reducer), initialState);

  const { user } = UserState();

  const ENDPOINT = process.env.ENDPOINT || "http://localhost:4000";
  useEffect(() => {
    let newSocket = io(ENDPOINT);
    setSocket(newSocket);
  }, []);

  useEffect(() => {
    if (socket && user) {
      //setup socket
      socket.emit("setup", user._id);

      //message listener
      socket.on("newMsg", (msg) => {
        dispatch({ type: "addMsg", payload: msg });
      });

      //request listener
      socket.on("newReq", (req) => {
        dispatch({ type: "addReq", payload: req });
      });
      socket.on("reqSent", (req) => {
        dispatch({ type: "addReq", payload: req });
        console.log("reqSent");
      });

      //acceptReq listener
      socket.on("accecptReq", (chat) => {
        console.log("req accepted");
        dispatch({ type: "addChat", payload: chat.fullChat });
        dispatch({ type: "addNotifications", payload: chat.newNoti });
      });

      socket.on("onAccecptReq", (chat) => {
        console.log("on accepted");
        dispatch({ type: "addChat", payload: chat });
      });

      //rejectReq listener
      socket.on("rejectReq", (data) => {
        console.log("rejected");
        dispatch({ type: "addNotifications", payload: data });
      });
      socket.on("onReject", (data) => {
        console.log("on rejected");
      });
    }
  }, [socket]);

  const headers = {
    Authorization: `Bearer ${user?.token}`,
  };

  useEffect(() => {
    //Fetching Notifications
    const fetchNotifications = async () => {
      const data = await axios.get("/updates/notifications", { headers });
      dispatch({
        type: "setNotifications",
        payload: data?.data?.notifications,
      });
    };

    //Fetch Req
    const fetchReq = async () => {
      const data = await axios.get("/updates/requests", { headers });
      dispatch({
        type: "setReqs",
        payload: data?.data?.requests,
      });
    };
    fetchNotifications();
    fetchReq();
  }, []);

  return (
    <ChatContext.Provider
      value={{
        socket,
        dispatch,
        state,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const ChatState = () => useContext(ChatContext);

export default ChatProvider;
