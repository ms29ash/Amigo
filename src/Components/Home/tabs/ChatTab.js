import React, { useEffect } from "react";
import SingleChat from "./SingleChat";
import { useQuery } from "@tanstack/react-query";
import { UserState } from "../../../context/UserProvider";
import axios from "../../../axios";
import { ChatState } from "../../../context/ChatProvider";

function ChatTab() {
  const { user } = UserState();
  const { setChats, chats, socket } = ChatState();
  const headers = {
    Authorization: `Bearer ${user?.token}`,
  };

  //Fetching Chats
  const fetchChats = async () => {
    const data = await axios.get("/chat/chats", { headers });
    setChats(data?.data?.chats);
    return data;
  };

  const { isPending, isError, data, error } = useQuery({
    queryKey: ["chats"],
    queryFn: fetchChats,
    // enabled: headers,
  });

  useEffect(() => {
    if (socket) {
      console.log(socket);
      socket.on("newChat", (chat) => {
        console.log(chat);
      });
    }
  }, []);

  return (
    <div className="overflow-y-auto overflow-x-hidden h-full w-full pb-48  ">
      {chats &&
        chats.map((chat) => {
          return <SingleChat key={chat._id} chat={chat} />;
        })}
    </div>
  );
}

export default ChatTab;
