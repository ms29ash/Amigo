import React from "react";
import { UserState } from "../../context/UserProvider";
import { useMutation } from "@tanstack/react-query";
import axios from "../../axios";
import { ChatState } from "../../context/ChatProvider";
import { checkStatus } from "../../Logics/ReqLogics";
import tw from "tailwind-styled-components";
import { useEffect } from "react";
import { useState } from "react";

function SearchUser({ data, setKeyword, setActive }) {
  const [status, setStatus] = useState("none");
  const { user } = UserState();
  const { socket, state } = ChatState();
  const headers = {
    Authorization: `Bearer ${user.token}`,
  };

  //mutation
  const { mutate } = useMutation({
    mutationFn: (chat) => {
      return axios.post("/chat", chat, { headers });
    },
  });

  const onChatHandler = (e) => {
    e.stopPropagation();
    if (data) {
      const chat = {
        token: user?.token,
        id: data._id,
        chatName: data.name,
      };
      socket.emit("newChat", chat);
    }
  };

  const acceptHanlder = () => {
    let req = state.requests.find((r) => r.requester._id === data?._id);

    let reqReply = {
      token: user?.token,
      id: req?.requester._id,
      chatName: req?.requester.name,
      reqId: req._id,
      username: req?.recipient.name,
    };
    if (socket) {
      socket.emit("acceptReq", reqReply);
    }
  };

  useEffect(() => {
    setStatus(checkStatus(state.chats, state.requests, data));
  }, []);
  return (
    <>
      {
        <div className="flex px-4 py-3 hover:bg-black  items-center group w-full relative  max-w-full ">
          <img
            className=" mr-3 w-[60px] h-[60px] rounded-full "
            src="https://med.gov.bz/wp-content/uploads/2020/08/dummy-profile-pic.jpg"
            alt=""
          />

          <div className=" relative w-[70%] flex flex-row items-center ">
            <div className="  flex  w-[70%]    flex-col  justify-between overflow-x-hidden ">
              <h2 className="font-bold text-xl whitespace-nowrap capitalize ">
                {data?.name}
              </h2>
            </div>
          </div>
          {status === "pending" ? (
            <Pending className="">pending</Pending>
          ) : status === "request" ? (
            <button
              onClick={acceptHanlder}
              className="bg-green hover:bg-sgreen text-black text-xs font-bold rounded-md px-2 py-1"
            >
              Accept
            </button>
          ) : (
            <button
              onClick={onChatHandler}
              className="bg-lightGray hover:bg-gray text-white text-xs font-bold rounded-md px-2 py-1"
            >
              connect
            </button>
          )}
          {/* <button
        onClick={onChatHandler}
        className="bg-green hover:bg-sgreen text-black text-xs font-bold rounded-md px-2 py-1"
      >
        {checkStatus(state.chats, state.requests, data)}
      </button> */}
          {/* <p className="">{checkStatus(state.chats, state.requests, data)}</p> */}
        </div>
      }
    </>
  );
}

export default SearchUser;

const Wrapper = tw.p`grid place-items-center text-xs`;
const Pending = tw(Wrapper)` text-green  border-green px-1 rounded-md`;
const Connected = tw(
  Wrapper
)` text-green border-2 border-green px-1 rounded-md`;
