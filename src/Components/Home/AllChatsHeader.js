import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { IoMdArrowBack, IoMdNotificationsOutline } from "react-icons/io";
import { UserState } from "../../context/UserProvider";
import tw from "tailwind-styled-components";

function AllChatsHeader() {
  const { logout, tab, setTab } = UserState();
  return (
    <div className="py-4">
      <div className="flex justify-between items-center p-4 ">
        <div className="flex items-center space-x-2">
          {tab !== "chat" && (
            <IoMdArrowBack
              className="text-3xl cursor-pointer hover:bg-green/40 rounded-full p-1 "
              onClick={() => setTab("chat")}
            />
          )}
          <h1 className="text-2xl font-bold capitalize  ">{tab}</h1>
        </div>
        <div className="flex items-center space-x-2">
          <AiOutlineSearch
            className=" hover:bg-green  hover:text-black cursor-pointer rounded-full p-1 text-3xl"
            onClick={() => setTab("search")}
          />
          <IoMdNotificationsOutline
            className=" hover:bg-green  hover:text-black cursor-pointer rounded-full p-1 text-3xl"
            onClick={() => setTab("notification")}
          />
          <div className="relative group">
            <BsThreeDots className="rotate-90 hover:bg-green  hover:text-black cursor-pointer rounded-full p-1 text-3xl " />
            <div className="absolute bg-lightGray whitespace-nowrap right-0 shadow-opt z-40 hidden group-hover:block  ">
              <Opt>Profile</Opt>
              <Opt onClick={logout}>Log Out</Opt>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllChatsHeader;

const Opt = tw.p`px-12  hover:bg-black cursor-pointer py-5`;
