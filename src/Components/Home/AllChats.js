import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import SearchBox from "./SearchBox";
import SingleChat from "./tabs/SingleChat";
import { useQuery } from "@tanstack/react-query";
import axios from "../../axios";
import { UserState } from "../../context/UserProvider";
import SearchResults from "./SearchResults";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import AllChatsHeader from "./AllChatsHeader";
import ChatTab from "./tabs/ChatTab";
import SearchTab from "./tabs/SearchTab";

function AllChats() {
  const { user, tab, setTab } = UserState();
  const headers = {
    Authorization: `Bearer ${user?.token}`,
  };

  //Fetching Chats
  const fetchChats = () => axios.get("/chat/chats", { headers });

  const { isPending, isError, data, error } = useQuery({
    queryKey: ["chats"],
    queryFn: fetchChats,
    // enabled: headers,
  });

  return (
    <>
      <div className="flex-1 bg-gray h-screen overflow-y-hidden max-h-screen min-w-[300px] ">
        <AllChatsHeader />
        {tab === "chat" ? <ChatTab chats={data?.data?.chats} /> : <SearchTab />}
      </div>
    </>
  );
}

export default AllChats;
